## What we were building
Portfolio section me **stacking cards scroll effect** — jab user scroll kare toh:
1. Pehla work/project full screen dikhega, top pe jake **pin** ho jayega
2. Scroll karte hue **dusra project niche se upar aake** pehle ke upar cover kar le, wo bhi top pe pin ho jaye
3. Teesra project bhi aise hi aake dusre ke upar aa jaye
4. Har card ka background thoda alag dark shade ho (e.g. #0a0a0a, #0e0e0e, #131313)
5. Mobile me ye effect nahi — normal scroll cards

## Problem
`position: sticky` was not working for portfolio stacking cards effect.

## Root Causes (3 issues found)

### 1. `overflow-x: hidden` breaks sticky
When `overflow-x: hidden` is set on `html`, `body`, or `#root`, browser internally sets `overflow-y: auto` which creates a **new scroll container**. `position: sticky` only works within its nearest scroll container, so it breaks.

**Fix:** Replace `overflow-x: hidden` with `overflow: clip` — it hides horizontal overflow **without creating a new scroll container**.

```css
/* BAD - breaks sticky */
html { overflow-x: hidden; }
body { overflow-x: hidden; }
#root { overflow-x: hidden; }

/* GOOD - sticky works */
html { overflow: clip; }
body { overflow-x: clip; }
#root { /* no overflow at all */ }
```

### 2. Framer Motion `motion.div` wrapper breaks sticky
When a parent `motion.div` has animation (like `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`), framer-motion adds `transform` styles internally. Any ancestor with `transform` creates a new containing block which breaks `position: sticky`.

**Fix:** Replace `motion.div` wrapper with regular `div` + CSS animation.

```jsx
/* BAD */
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Portfolio /> {/* sticky inside won't work */}
</motion.div>

/* GOOD */
<div className="app-content-fade">
  <Portfolio /> {/* sticky works */}
</div>
```

```css
.app-content-fade {
  animation: fadeInApp 0.6s ease 0.2s both;
}
@keyframes fadeInApp {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 3. Lenis smooth scroll (less common)
Lenis v1.3+ uses native scroll so sticky should work. But older versions or certain configs may wrap content in a transform-based container. Adding these CSS rules helps:

```css
html.lenis, html.lenis body {
  height: auto;
}
```

## Working Stacking Cards CSS

```css
.portfolio-section {
  background: var(--bg-dark);
}

.pf-stack-card {
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 5%;
  overflow: hidden;
}
```

Each card gets a different `background` color and increasing `zIndex` so new cards stack on top.

## Key Rule
**Never use `overflow-x: hidden` on any ancestor of a sticky element. Use `overflow: clip` instead.**

**Why:** `overflow-x: hidden` implicitly creates a scroll container. `overflow: clip` does not.

**How to apply:** Whenever implementing sticky scroll effects, check all ancestors for overflow properties first.
