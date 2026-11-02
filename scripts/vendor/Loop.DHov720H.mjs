import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  M as r,
  R as i,
  T as a,
  b as o,
  c as s,
  j as c,
  s as l,
  u,
  x as d,
} from "./react.BDb-TZZO.mjs";
import { K as f, R as p, V as m, g as h, t as g } from "./motion.DUnltMVz.mjs";
import { J as _, k as v, o as y, s as b } from "./framer.Bi3K3xOo.mjs";
import { l as x, u as S } from "./shared-lib.DAxb9xg1.mjs";
import { n as C, t as w } from "./ScrollTrigger.BhtCyBpC.mjs";
function T(e) {
  let {
      paperType: t = `lined`,
      lineColor: n = `#d0d0d0`,
      lineSpacing: i = 24,
      lineWidth: a = 1,
      opacity: o = 0.3,
      paperTexture: s = !0,
      textureStyle: c = `vintage`,
      textureIntensity: d = 30,
      background: f = `#ffffff`,
      shadow: p = !1,
      noise: m = !1,
      noiseIntensity: h = 25,
      border: g,
    } = e,
    _ = `paper-pattern-${t}-${Math.random().toString(36).substr(2, 9)}`;
  `${Math.random().toString(36).substr(2, 9)}`;
  let v = () => {
      switch (t) {
        case `lined`:
          return l(`defs`, {
            children: l(`pattern`, {
              id: _,
              x: `0`,
              y: `0`,
              width: `100%`,
              height: i,
              patternUnits: `userSpaceOnUse`,
              children: l(`line`, {
                x1: `0`,
                y1: i,
                x2: `100%`,
                y2: i,
                stroke: n,
                strokeWidth: a,
                opacity: o,
              }),
            }),
          });
        case `grid`:
          return l(`defs`, {
            children: u(`pattern`, {
              id: _,
              x: `0`,
              y: `0`,
              width: i,
              height: i,
              patternUnits: `userSpaceOnUse`,
              children: [
                l(`line`, { x1: `0`, y1: i, x2: i, y2: i, stroke: n, strokeWidth: a, opacity: o }),
                l(`line`, { x1: i, y1: `0`, x2: i, y2: i, stroke: n, strokeWidth: a, opacity: o }),
              ],
            }),
          });
        case `dotted`:
          return l(`defs`, {
            children: l(`pattern`, {
              id: _,
              x: `0`,
              y: `0`,
              width: i,
              height: i,
              patternUnits: `userSpaceOnUse`,
              children: l(`circle`, { cx: i / 2, cy: i / 2, r: a, fill: n, opacity: o }),
            }),
          });
        case `wavy`:
          return l(`defs`, {
            children: l(`pattern`, {
              id: _,
              x: `0`,
              y: `0`,
              width: `100`,
              height: i,
              patternUnits: `userSpaceOnUse`,
              children: l(`path`, {
                d: `M 0,${i / 2} Q 25,${i / 2 - 8} 50,${i / 2} T 100,${i / 2}`,
                fill: `none`,
                stroke: n,
                strokeWidth: a,
                opacity: o,
              }),
            }),
          });
        default:
          return null;
      }
    },
    y = r(() => {
      if (!s) return {};
      let e = d / 100;
      switch (c) {
        case `vintage`:
          return {
            filter: `
                        contrast(${1 + e * 0.4}) 
                        brightness(${1 - e * 0.2}) 
                        saturate(${1 - e * 0.25})
                        sepia(${e * 0.35})
                        hue-rotate(${e * 15}deg)
                    `,
            backgroundImage: `
                        radial-gradient(ellipse at 20% 30%, rgba(139, 69, 19, ${e * 0.25}) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 70%, rgba(160, 82, 45, ${e * 0.22}) 0%, transparent 55%),
                        radial-gradient(ellipse at 40% 80%, rgba(210, 180, 140, ${e * 0.18}) 0%, transparent 45%),
                        radial-gradient(ellipse at 70% 20%, rgba(222, 184, 135, ${e * 0.2}) 0%, transparent 50%),
                        radial-gradient(ellipse at 10% 60%, rgba(205, 133, 63, ${e * 0.15}) 0%, transparent 40%),
                        linear-gradient(45deg, rgba(139, 69, 19, ${e * 0.08}) 0%, transparent 30%, rgba(160, 82, 45, ${e * 0.06}) 70%),
                        linear-gradient(-30deg, rgba(222, 184, 135, ${e * 0.1}) 0%, transparent 40%)
                    `,
          };
        case `modern`:
          return {
            filter: `
                        contrast(${1 + e * 0.15}) 
                        brightness(${1 - e * 0.08})
                        saturate(${1 + e * 0.1})
                    `,
            backgroundImage: `
                        linear-gradient(45deg, rgba(0, 0, 0, ${e * 0.04}) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(0, 0, 0, ${e * 0.04}) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, ${e * 0.04}) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, ${e * 0.04}) 75%),
                        radial-gradient(circle at 25% 25%, rgba(100, 100, 100, ${e * 0.06}) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(120, 120, 120, ${e * 0.05}) 0%, transparent 45%)
                    `,
            backgroundSize: `3px 3px, 3px 3px, 3px 3px, 3px 3px, 20px 20px, 25px 25px`,
            backgroundPosition: `0 0, 0 1.5px, 1.5px -1.5px, -1.5px 0px, 0 0, 10px 10px`,
          };
        case `rough`:
          return {
            filter: `
                        contrast(${1 + e * 0.6}) 
                        brightness(${1 - e * 0.3})
                        blur(${e * 0.4}px)
                        saturate(${1 - e * 0.2})
                    `,
            backgroundImage: `
                        radial-gradient(ellipse at 15% 85%, rgba(101, 67, 33, ${e * 0.3}) 0%, transparent 60%),
                        radial-gradient(ellipse at 85% 15%, rgba(139, 69, 19, ${e * 0.28}) 0%, transparent 65%),
                        radial-gradient(ellipse at 35% 45%, rgba(160, 82, 45, ${e * 0.25}) 0%, transparent 55%),
                        radial-gradient(ellipse at 65% 75%, rgba(205, 133, 63, ${e * 0.22}) 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 20%, rgba(139, 69, 19, ${e * 0.2}) 0%, transparent 45%),
                        linear-gradient(30deg, rgba(101, 67, 33, ${e * 0.15}) 0%, transparent 40%, rgba(139, 69, 19, ${e * 0.12}) 80%),
                        linear-gradient(-60deg, rgba(160, 82, 45, ${e * 0.18}) 0%, transparent 35%)
                    `,
          };
        case `smooth`:
          return {
            filter: `
                        contrast(${1 + e * 0.08}) 
                        brightness(${1 - e * 0.04})
                        saturate(${1 + e * 0.05})
                    `,
            backgroundImage: `
                        linear-gradient(0deg, rgba(0, 0, 0, ${e * 0.02}) 50%, transparent 50%),
                        linear-gradient(90deg, rgba(0, 0, 0, ${e * 0.02}) 50%, transparent 50%),
                        radial-gradient(circle at 30% 30%, rgba(200, 200, 200, ${e * 0.04}) 0%, transparent 40%),
                        radial-gradient(circle at 70% 70%, rgba(220, 220, 220, ${e * 0.03}) 0%, transparent 35%)
                    `,
            backgroundSize: `1.5px 1.5px, 1.5px 1.5px, 15px 15px, 18px 18px`,
          };
        default:
          return {};
      }
    }, [s, c, d]);
  return u(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      position: `relative`,
      boxSizing: `border-box`,
      backgroundColor: f,
      boxShadow: p ? `0 4px 12px rgba(0, 0, 0, 0.15)` : `none`,
      ...y,
      ...g,
      ...e.style,
    },
    children: [
      m &&
        l(`div`, {
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            opacity: h / 100,
            pointerEvents: `none`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            mixBlendMode: `multiply`,
          },
        }),
      s &&
        l(`div`, {
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            opacity: (d / 100) * 0.8,
            backgroundImage:
              c === `vintage`
                ? `
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.8px,
                                rgba(139, 69, 19, 0.12) 0.8px,
                                rgba(139, 69, 19, 0.12) 1.6px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.8px,
                                rgba(160, 82, 45, 0.1) 0.8px,
                                rgba(160, 82, 45, 0.1) 1.6px
                            ),
                            repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 3px,
                                rgba(222, 184, 135, 0.08) 3px,
                                rgba(222, 184, 135, 0.08) 4px
                            )
                        `
                : c === `rough`
                  ? `
                            repeating-linear-gradient(
                                35deg,
                                transparent,
                                transparent 1.5px,
                                rgba(101, 67, 33, 0.15) 1.5px,
                                rgba(101, 67, 33, 0.15) 2.5px
                            ),
                            repeating-linear-gradient(
                                -55deg,
                                transparent,
                                transparent 2px,
                                rgba(139, 69, 19, 0.12) 2px,
                                rgba(139, 69, 19, 0.12) 3px
                            ),
                            repeating-linear-gradient(
                                80deg,
                                transparent,
                                transparent 4px,
                                rgba(160, 82, 45, 0.1) 4px,
                                rgba(160, 82, 45, 0.1) 5px
                            )
                        `
                  : c === `modern`
                    ? `
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.5px,
                                rgba(0, 0, 0, 0.08) 0.5px,
                                rgba(0, 0, 0, 0.08) 1px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.5px,
                                rgba(0, 0, 0, 0.06) 0.5px,
                                rgba(0, 0, 0, 0.06) 1px
                            )
                        `
                    : `
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.7px,
                                rgba(0, 0, 0, 0.06) 0.7px,
                                rgba(0, 0, 0, 0.06) 1.4px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.7px,
                                rgba(0, 0, 0, 0.04) 0.7px,
                                rgba(0, 0, 0, 0.04) 1.4px
                            )
                        `,
            pointerEvents: `none`,
            mixBlendMode: c === `vintage` ? `multiply` : `normal`,
          },
        }),
      s &&
        d > 40 &&
        l(`div`, {
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            opacity: ((d - 40) / 100) * 0.6,
            backgroundImage:
              c === `vintage`
                ? `
                            radial-gradient(circle at 10% 10%, rgba(139, 69, 19, 0.15) 0%, transparent 30%),
                            radial-gradient(circle at 90% 90%, rgba(160, 82, 45, 0.12) 0%, transparent 25%),
                            radial-gradient(circle at 30% 70%, rgba(205, 133, 63, 0.1) 0%, transparent 35%),
                            radial-gradient(circle at 70% 30%, rgba(222, 184, 135, 0.08) 0%, transparent 40%)
                        `
                : c === `rough`
                  ? `
                            radial-gradient(circle at 20% 20%, rgba(101, 67, 33, 0.2) 0%, transparent 40%),
                            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.18) 0%, transparent 35%),
                            radial-gradient(circle at 50% 10%, rgba(160, 82, 45, 0.15) 0%, transparent 30%)
                        `
                  : `
                            radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.03) 0%, transparent 45%)
                        `,
            pointerEvents: `none`,
            mixBlendMode: `overlay`,
          },
        }),
      u(`svg`, {
        width: `100%`,
        height: `100%`,
        style: { position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%` },
        children: [
          v(),
          t !== `blank` && l(`rect`, { width: `100%`, height: `100%`, fill: `url(#${_})` }),
        ],
      }),
    ],
  });
}
var E = e(() => {
  (s(),
    _(),
    a(),
    v(T, {
      background: { type: y.Color, title: `Background`, defaultValue: `#ffffff` },
      border: { type: y.Border, title: `Border` },
      shadow: {
        type: y.Boolean,
        title: `Shadow`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      noise: {
        type: y.Boolean,
        title: `Noise`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      noiseIntensity: {
        type: y.Number,
        title: `Noise Intensity`,
        defaultValue: 25,
        min: 5,
        max: 60,
        step: 5,
        unit: `%`,
        hidden: ({ noise: e }) => !e,
      },
      paperType: {
        type: y.Enum,
        title: `Paper Type`,
        options: [`lined`, `grid`, `dotted`, `blank`, `wavy`],
        optionTitles: [`Lined`, `Grid`, `Dotted`, `Blank`, `Wavy`],
        defaultValue: `lined`,
        displaySegmentedControl: !0,
      },
      lineColor: {
        type: y.Color,
        title: `Line Color`,
        defaultValue: `#d0d0d0`,
        hidden: ({ paperType: e }) => e === `blank`,
      },
      lineSpacing: {
        type: y.Number,
        title: `Line Spacing`,
        defaultValue: 24,
        min: 8,
        max: 120,
        step: 2,
        unit: `px`,
        hidden: ({ paperType: e }) => e === `blank`,
      },
      lineWidth: {
        type: y.Number,
        title: `Line Width`,
        defaultValue: 1,
        min: 0.5,
        max: 4,
        step: 0.5,
        unit: `px`,
        hidden: ({ paperType: e }) => e === `blank`,
      },
      opacity: {
        type: y.Number,
        title: `Line Opacity`,
        defaultValue: 0.3,
        min: 0.1,
        max: 1,
        step: 0.1,
        hidden: ({ paperType: e }) => e === `blank`,
      },
      paperTexture: {
        type: y.Boolean,
        title: `Paper Texture`,
        defaultValue: !0,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      textureStyle: {
        type: y.Enum,
        title: `Texture Style`,
        options: [`vintage`, `modern`, `rough`, `smooth`],
        optionTitles: [`Vintage`, `Modern`, `Rough`, `Smooth`],
        defaultValue: `vintage`,
        displaySegmentedControl: !0,
        hidden: ({ paperTexture: e }) => !e,
      },
      textureIntensity: {
        type: y.Number,
        title: `Texture Intensity`,
        defaultValue: 30,
        min: 10,
        max: 80,
        step: 5,
        unit: `%`,
        hidden: ({ paperTexture: e }) => !e,
      },
    }));
});
function D() {
  let e = d(null),
    t = d(null);
  return (
    n(() => {
      if (!e.current) return;
      let n = x.context(() => {
        ((t.current = x.to(e.current, {
          rotation: 360,
          duration: 3,
          ease: `none`,
          repeat: -1,
          delay: 0.5,
          paused: !0,
        })),
          w.create({
            trigger: e.current,
            start: `top bottom`,
            onEnter: () => t.current?.resume(),
            onLeave: () => t.current?.pause(),
            onEnterBack: () => t.current?.resume(),
            onLeaveBack: () => t.current?.pause(),
          }));
      }, e);
      return () => n.revert();
    }, []),
    { ref: e }
  );
}
function O() {
  let e = d(null),
    t = d(null);
  return (
    n(() => {
      if (!e.current) return;
      let n = x.context(() => {
        ((t.current = x.to(e.current, {
          rotation: -360,
          duration: 3,
          ease: `none`,
          repeat: -1,
          delay: 0.5,
          paused: !0,
        })),
          w.create({
            trigger: e.current,
            start: `top bottom`,
            onEnter: () => t.current?.resume(),
            onLeave: () => t.current?.pause(),
            onEnterBack: () => t.current?.resume(),
            onLeaveBack: () => t.current?.pause(),
          }));
      }, e);
      return () => n.revert();
    }, []),
    { ref: e }
  );
}
function k(e = 0) {
  let t = d(null),
    r = d(null);
  return (
    n(() => {
      if (!t.current) return;
      let n = x.context(() => {
        (x.set(t.current, { scale: 0 }),
          (r.current = x.to(t.current, {
            scale: 1,
            duration: 1,
            delay: e,
            ease: `power2.inOut`,
            repeat: -1,
            yoyo: !0,
            paused: !0,
          })),
          w.create({
            trigger: t.current,
            start: `top bottom`,
            onEnter: () => r.current?.resume(),
            onLeave: () => r.current?.pause(),
            onEnterBack: () => r.current?.resume(),
            onLeaveBack: () => r.current?.pause(),
          }));
      }, t);
      return () => n.revert();
    }, [e]),
    { ref: t }
  );
}
function A() {
  return k(0);
}
function j() {
  return k(0.1);
}
function M() {
  return k(0.2);
}
function N() {
  return k(0.3);
}
function P() {
  let e = d(null),
    t = d(null);
  return (
    n(() => {
      if (!e.current) return;
      let n = x.context(() => {
        let n = x.timeline({ repeat: -1, paused: !0 });
        (n
          .to(e.current, { rotation: -15, duration: 0.2, ease: `power2.out` })
          .to(e.current, { rotation: 360, duration: 0.7, ease: `power2.in` })
          .to(e.current, { rotation: 367, duration: 0.2, ease: `power2.out` })
          .to(e.current, { rotation: 360, duration: 0.2, ease: `power2.out` })
          .set(e.current, { rotation: 0 })
          .to({}, { duration: 4 }),
          (t.current = n),
          w.create({
            trigger: e.current,
            start: `top bottom`,
            onEnter: () => t.current?.resume(),
            onLeave: () => t.current?.pause(),
            onEnterBack: () => t.current?.resume(),
            onLeaveBack: () => t.current?.pause(),
          }));
      }, e);
      return () => n.revert();
    }, []),
    { ref: e }
  );
}
function F(e) {
  return (n) => {
    let r = d(null),
      i = p(r),
      a = m(0),
      s = m(0),
      c = m(1),
      u = f(a, { damping: 40, stiffness: 300 }),
      g = f(s, { damping: 40, stiffness: 300 }),
      _ = f(c, { damping: 20, stiffness: 300 }),
      v = t !== void 0 && t.matchMedia(`(pointer: coarse)`).matches;
    return (
      o(() => {
        if (v) return;
        let e = (e) => {
          if (!r.current || !i) return;
          let t = r.current.getBoundingClientRect();
          (a.set((e.clientX - (t.left + t.width / 2)) * 0.04),
            s.set((e.clientY - (t.top + t.height / 2)) * 0.04));
        };
        return (
          document.addEventListener(`mousemove`, e),
          () => document.removeEventListener(`mousemove`, e)
        );
      }, [i, v]),
      o(() => {
        let e = h(c, [1, 0.15, 1], {
          duration: 0.3,
          repeat: 1 / 0,
          repeatDelay: 2 + Math.random() * 2,
          ease: `easeInOut`,
        });
        return () => e.stop();
      }, []),
      l(e, {
        ...n,
        ref: r,
        style: { x: v ? 0 : u, y: v ? 0 : g, scaleY: _, transformOrigin: `center` },
      })
    );
  };
}
function I(e) {
  return (t) => (c(b), l(e, { ...t, ...D(t) }));
}
function L(e) {
  return (t) => (c(b), l(e, { ...t, ...O(t) }));
}
function R(e) {
  return (t) => (c(b), l(e, { ...t, ...k(t) }));
}
function z(e) {
  return (t) => (c(b), l(e, { ...t, ...A(t) }));
}
function B(e) {
  return (t) => (c(b), l(e, { ...t, ...j(t) }));
}
function V(e) {
  return (t) => (c(b), l(e, { ...t, ...M(t) }));
}
function H(e) {
  return (t) => (c(b), l(e, { ...t, ...N(t) }));
}
function U(e) {
  return (t) => (c(b), l(e, { ...t, ...P(t) }));
}
var W = e(() => {
  (i(),
    s(),
    a(),
    S(),
    C(),
    g(),
    _(),
    x.registerPlugin(w),
    (I.displayName = `RotateLoop`),
    (L.displayName = `RotateReverseLoop`),
    (R.displayName = `createScaleLoop`),
    (z.displayName = `ScaleLoop0`),
    (B.displayName = `ScaleLoop1`),
    (V.displayName = `ScaleLoop2`),
    (H.displayName = `ScaleLoop3`),
    (U.displayName = `IllusCTA`));
});
export { L as a, V as c, E as d, I as i, H as l, U as n, z as o, F as r, B as s, W as t, T as u };
//# sourceMappingURL=Loop.DHov720H.mjs.map
