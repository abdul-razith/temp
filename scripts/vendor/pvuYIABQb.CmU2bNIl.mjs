import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  m as o,
  s,
  u as c,
  w as l,
  x as u,
} from "./react.BDb-TZZO.mjs";
import { E as d, a as f, r as p, t as m } from "./motion.DUnltMVz.mjs";
import {
  B as h,
  Ct as g,
  D as _,
  Et as v,
  J as y,
  M as b,
  O as x,
  T as ee,
  V as S,
  _t as C,
  ct as w,
  g as te,
  i as T,
  k as E,
  lt as D,
  o as O,
  wt as k,
} from "./framer.Bi3K3xOo.mjs";
import { a as A, c as j, o as M, s as N } from "./shared-lib.DAxb9xg1.mjs";
import { n as P, t as F } from "./SVGComponent.CcbG4JSa.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (i(),
      y(),
      m(),
      r(),
      P(),
      j(),
      (L = h(F)),
      (R = v(_)),
      (z = [`dFJMO5bE5`, `sur9yM11j`]),
      (B = `framer-JoWOw`),
      (V = { dFJMO5bE5: `framer-v-1drrvrm`, sur9yM11j: `framer-v-1bc61rp` }),
      (H = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (U = (e, t) => `translate(-50%, -50%) ${t}`),
      (W = { duration: 0, type: `tween` }),
      (G = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (K = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 16,
        y: 0,
      }),
      (q = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (J = { Default: `dFJMO5bE5`, Variant: `sur9yM11j` }),
      (Y = d.create(t)),
      (X = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        oCFUoSGo0: n ?? i.oCFUoSGo0,
        variant: J[i.variant] ?? i.variant ?? `dFJMO5bE5`,
      })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = k(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: f } = C();
          D();
          let { style: m, className: h, layoutId: v, variant: y, oCFUoSGo0: x, ...S } = X(e),
            {
              baseVariant: E,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: L,
              variants: J,
            } = g({
              cycleOrder: z,
              defaultVariant: `dFJMO5bE5`,
              ref: i,
              variant: y,
              variantClassNames: V,
            }),
            Q = Z(e, J),
            { activeVariantCallback: $, delay: ne } = w(E),
            re = $(async (...e) => {
              (P({ isHovered: !0 }), L(`sur9yM11j`));
            }),
            ie = $(async (...e) => {
              (P({ isHovered: !1 }), L(`dFJMO5bE5`));
            }),
            ae = b(B, A);
          return s(p, {
            id: v ?? a,
            children: s(Y, {
              animate: J,
              initial: !1,
              children: s(q, {
                value: H,
                children: s(te, {
                  href: x,
                  motionChild: !0,
                  nodeId: `dFJMO5bE5`,
                  openInNewTab: !1,
                  scopeId: `pvuYIABQb`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...S,
                    ...j,
                    className: `${b(ae, `framer-1drrvrm`, h, O)} framer-nypwqp`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: Q,
                    layoutId: `dFJMO5bE5`,
                    onMouseEnter: re,
                    ref: i,
                    style: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      ...m,
                    },
                    variants: {
                      sur9yM11j: {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      },
                    },
                    ...I(
                      {
                        sur9yM11j: {
                          "data-framer-name": void 0,
                          onMouseEnter: void 0,
                          onMouseLeave: ie,
                        },
                      },
                      E,
                      M
                    ),
                    children: [
                      c(d.div, {
                        className: `framer-1orb80w`,
                        "data-framer-name": `Border`,
                        layoutDependency: Q,
                        layoutId: `DiX1c2O9i`,
                        children: [
                          s(d.div, {
                            className: `framer-1430xyk`,
                            "data-border": !0,
                            "data-framer-name": `Fill Color`,
                            layoutDependency: Q,
                            layoutId: `IclT7jM5R`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            },
                            variants: {
                              sur9yM11j: {
                                backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              },
                            },
                          }),
                          s(d.div, {
                            className: `framer-12gtyfi`,
                            "data-border": !0,
                            "data-framer-name": `Dot`,
                            layoutDependency: Q,
                            layoutId: `HaRBtVCHn`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(34, 34, 34)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              opacity: 0,
                            },
                            variants: { sur9yM11j: { opacity: 1 } },
                          }),
                          s(d.div, {
                            className: `framer-jamzew`,
                            "data-border": !0,
                            "data-framer-name": `Dot`,
                            layoutDependency: Q,
                            layoutId: `L4V992UmR`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(34, 34, 34)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              opacity: 0,
                            },
                            variants: { sur9yM11j: { opacity: 1 } },
                          }),
                          s(d.div, {
                            className: `framer-hd5jfx`,
                            "data-border": !0,
                            "data-framer-name": `Dot`,
                            layoutDependency: Q,
                            layoutId: `vVRfNuzfe`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(34, 34, 34)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              opacity: 0,
                            },
                            variants: { sur9yM11j: { opacity: 1 } },
                          }),
                          s(d.div, {
                            className: `framer-q2mch0`,
                            "data-border": !0,
                            "data-framer-name": `Dot`,
                            layoutDependency: Q,
                            layoutId: `GuQVun0HU`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(34, 34, 34)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              opacity: 0,
                            },
                            variants: { sur9yM11j: { opacity: 1 } },
                          }),
                        ],
                      }),
                      c(d.div, {
                        className: `framer-12c9etj`,
                        "data-framer-name": `Icon`,
                        layoutDependency: Q,
                        layoutId: `GDLAOX0cz`,
                        style: {
                          backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(194, 217, 231))`,
                        },
                        children: [
                          s(q, {
                            value: W,
                            ...I({ sur9yM11j: { value: H } }, E, M),
                            children: c(d.div, {
                              className: `framer-co8rw2`,
                              "data-framer-name": `Icon`,
                              layoutDependency: Q,
                              layoutId: `gotKc3Vy3`,
                              transformTemplate: U,
                              children: [
                                s(T, {
                                  children: s(R, {
                                    className: `framer-6c5w67-container`,
                                    "data-code-component-plugin-id": `84d4c1`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: Q,
                                    layoutId: `fOk2_HFHO-container`,
                                    nodeId: `fOk2_HFHO`,
                                    rendersWithMotion: !0,
                                    scopeId: `pvuYIABQb`,
                                    ...I(
                                      {
                                        sur9yM11j: {
                                          __framer__loop: K,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: G,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                        },
                                      },
                                      E,
                                      M
                                    ),
                                    children: s(F, {
                                      color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                      height: `100%`,
                                      id: `fOk2_HFHO`,
                                      layoutId: `fOk2_HFHO`,
                                      stroke: !1,
                                      strokeColor: `rgb(0, 0, 0)`,
                                      style: { height: `100%`, width: `100%` },
                                      svgCode: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150V200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50V100V150L200 100L100 50Z" fill="black"/>
</svg>
`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                s(T, {
                                  children: s(R, {
                                    className: `framer-1xztso2-container`,
                                    "data-code-component-plugin-id": `84d4c1`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: Q,
                                    layoutId: `MUlGC0uWJ-container`,
                                    nodeId: `MUlGC0uWJ`,
                                    rendersWithMotion: !0,
                                    scopeId: `pvuYIABQb`,
                                    ...I(
                                      {
                                        sur9yM11j: {
                                          __framer__loop: K,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: G,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                        },
                                      },
                                      E,
                                      M
                                    ),
                                    children: s(F, {
                                      color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                      height: `100%`,
                                      id: `MUlGC0uWJ`,
                                      layoutId: `MUlGC0uWJ`,
                                      stroke: !1,
                                      strokeColor: `rgb(0, 0, 0)`,
                                      style: { height: `100%`, width: `100%` },
                                      svgCode: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150V200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50V100V150L200 100L100 50Z" fill="black"/>
</svg>
`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s(T, {
                            children: s(_, {
                              className: `framer-bn8oa5-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              layoutDependency: Q,
                              layoutId: `xy0YhOTfX-container`,
                              nodeId: `xy0YhOTfX`,
                              rendersWithMotion: !0,
                              scopeId: `pvuYIABQb`,
                              children: s(F, {
                                color: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                height: `100%`,
                                id: `xy0YhOTfX`,
                                layoutId: `xy0YhOTfX`,
                                stroke: !1,
                                strokeColor: `rgb(0, 0, 0)`,
                                style: { height: `100%`, width: `100%` },
                                svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6354 178.175C114.686 178.175 178.769 98.4032 178.769 0C178.769 98.4032 242.852 178.175 321.903 178.175C242.852 178.175 178.769 257.946 178.769 356.35C178.769 257.946 114.686 178.175 35.6354 178.175Z" fill="#E55733"/>
</svg>
`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          s(T, {
                            children: s(_, {
                              className: `framer-1tsm9c-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              layoutDependency: Q,
                              layoutId: `UMtt7vYRk-container`,
                              nodeId: `UMtt7vYRk`,
                              rendersWithMotion: !0,
                              scopeId: `pvuYIABQb`,
                              children: s(F, {
                                color: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                height: `100%`,
                                id: `UMtt7vYRk`,
                                layoutId: `UMtt7vYRk`,
                                stroke: !1,
                                strokeColor: `rgb(0, 0, 0)`,
                                style: { height: `100%`, width: `100%` },
                                svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6354 178.175C114.686 178.175 178.769 98.4032 178.769 0C178.769 98.4032 242.852 178.175 321.903 178.175C242.852 178.175 178.769 257.946 178.769 356.35C178.769 257.946 114.686 178.175 35.6354 178.175Z" fill="#E55733"/>
</svg>
`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          s(T, {
                            children: s(_, {
                              className: `framer-1s7u0py-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              layoutDependency: Q,
                              layoutId: `ohX3hHO0v-container`,
                              nodeId: `ohX3hHO0v`,
                              rendersWithMotion: !0,
                              scopeId: `pvuYIABQb`,
                              children: s(F, {
                                color: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                height: `100%`,
                                id: `ohX3hHO0v`,
                                layoutId: `ohX3hHO0v`,
                                stroke: !1,
                                strokeColor: `rgb(0, 0, 0)`,
                                style: { height: `100%`, width: `100%` },
                                svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6354 178.175C114.686 178.175 178.769 98.4032 178.769 0C178.769 98.4032 242.852 178.175 321.903 178.175C242.852 178.175 178.769 257.946 178.769 356.35C178.769 257.946 114.686 178.175 35.6354 178.175Z" fill="#E55733"/>
</svg>
`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          s(T, {
                            children: s(_, {
                              className: `framer-b3vcy1-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              layoutDependency: Q,
                              layoutId: `EJJf8HX_H-container`,
                              nodeId: `EJJf8HX_H`,
                              rendersWithMotion: !0,
                              scopeId: `pvuYIABQb`,
                              children: s(F, {
                                color: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                height: `100%`,
                                id: `EJJf8HX_H`,
                                layoutId: `EJJf8HX_H`,
                                stroke: !1,
                                strokeColor: `rgb(0, 0, 0)`,
                                style: { height: `100%`, width: `100%` },
                                svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6354 178.175C114.686 178.175 178.769 98.4032 178.769 0C178.769 98.4032 242.852 178.175 321.903 178.175C242.852 178.175 178.769 257.946 178.769 356.35C178.769 257.946 114.686 178.175 35.6354 178.175Z" fill="#E55733"/>
</svg>
`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      s(ee, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-1833qg6`,
                            "data-styles-preset": `jB2nPzqr7`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                            },
                            children: `COntact me`,
                          }),
                        }),
                        className: `framer-p0e2c4`,
                        fonts: [`Inter`],
                        layoutDependency: Q,
                        layoutId: `VFWmETnG_`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          sur9yM11j: {
                            "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...I(
                          {
                            sur9yM11j: {
                              children: s(t, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-1833qg6`,
                                  "data-styles-preset": `jB2nPzqr7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                  },
                                  children: `COntact me`,
                                }),
                              }),
                            },
                          },
                          E,
                          M
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-JoWOw.framer-nypwqp, .framer-JoWOw .framer-nypwqp { display: block; }`,
          `.framer-JoWOw.framer-1drrvrm { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-JoWOw .framer-1orb80w, .framer-JoWOw .framer-1430xyk { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-JoWOw .framer-12gtyfi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-JoWOw .framer-jamzew { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; width: 8px; z-index: 1; }`,
          `.framer-JoWOw .framer-hd5jfx { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; width: 8px; z-index: 1; }`,
          `.framer-JoWOw .framer-q2mch0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-JoWOw .framer-12c9etj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 40px; }`,
          `.framer-JoWOw .framer-co8rw2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 16px; }`,
          `.framer-JoWOw .framer-6c5w67-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-JoWOw .framer-1xztso2-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: -16px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-JoWOw .framer-bn8oa5-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: -20px; position: absolute; top: -20px; width: 40px; z-index: 1; }`,
          `.framer-JoWOw .framer-1tsm9c-container { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: -20px; position: absolute; width: 40px; z-index: 1; }`,
          `.framer-JoWOw .framer-1s7u0py-container { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: absolute; right: -20px; width: 40px; z-index: 1; }`,
          `.framer-JoWOw .framer-b3vcy1-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: absolute; right: -20px; top: -20px; width: 40px; z-index: 1; }`,
          `.framer-JoWOw .framer-p0e2c4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-JoWOw.framer-v-1bc61rp .framer-1430xyk { bottom: -2px; left: -2px; right: -2px; top: -2px; }`,
          `.framer-JoWOw.framer-v-1bc61rp .framer-12gtyfi { left: -6px; top: -6px; }`,
          `.framer-JoWOw.framer-v-1bc61rp .framer-jamzew { bottom: -6px; left: -6px; }`,
          `.framer-JoWOw.framer-v-1bc61rp .framer-hd5jfx { bottom: -6px; right: -6px; }`,
          `.framer-JoWOw.framer-v-1bc61rp .framer-q2mch0 { right: -6px; top: -6px; }`,
          ...M,
          `.framer-JoWOw[data-border="true"]::after, .framer-JoWOw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-JoWOw`
      )),
      (Q.displayName = `Hero Button`),
      (Q.defaultProps = { height: 56, width: 155 }),
      E(Q, {
        variant: {
          options: [`dFJMO5bE5`, `sur9yM11j`],
          optionTitles: [`Default`, `Variant`],
          title: `Variant`,
          type: O.Enum,
        },
        oCFUoSGo0: { title: `Link`, type: O.Link },
      }),
      x(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...L,
          ...S(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { $ as n, Q as t };
//# sourceMappingURL=pvuYIABQb.CmU2bNIl.mjs.map
