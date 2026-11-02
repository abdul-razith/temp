import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  F as n,
  M as r,
  R as i,
  T as a,
  c as o,
  j as s,
  l as c,
  m as l,
  s as u,
  u as d,
  w as ee,
  x as f,
} from "./react.BDb-TZZO.mjs";
import { E as p, a as m, n as h, r as te, t as g } from "./motion.DUnltMVz.mjs";
import {
  B as _,
  Ct as ne,
  D as v,
  Et as y,
  J as b,
  M as x,
  O as S,
  P as C,
  St as re,
  T as w,
  U as T,
  V as E,
  _t as ie,
  ct as ae,
  g as D,
  i as O,
  k,
  l as oe,
  lt as se,
  nt as A,
  o as j,
  w as M,
  wt as N,
  yt as ce,
} from "./framer.Bi3K3xOo.mjs";
import { a as le, c as ue, o as P, s as de } from "./shared-lib.DAxb9xg1.mjs";
import { n as fe, t as F } from "./SVGComponent.CcbG4JSa.mjs";
import { i as pe, n as me, r as I, t as L } from "./to1tng0Qo.DXKLFRTZ.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./aJRokyP_h.TRnP7oxH.mjs";
import { i as R, n as ye, r as z, t as be } from "./MffBJovlA.DNehB8j9.mjs";
import { n as xe, t as Se } from "./yRyDmqcvG.M-nrb9u_.mjs";
import { n as Ce, t as we } from "./Zq7grirf4.Dv1KG7Ap.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Te,
  Ee,
  V,
  De,
  Oe,
  ke,
  Ae,
  je,
  H,
  Me,
  Ne,
  Pe,
  U,
  W,
  G,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  K,
  Be = e(() => {
    (o(),
      b(),
      g(),
      a(),
      fe(),
      pe(),
      (Te = y(p.div)),
      (Ee = _(F)),
      (V = y(v)),
      (De = { PXjFj_3GC: { hover: !0 } }),
      (Oe = [`PXjFj_3GC`, `PiwKqOEJV`, `Oyrq_rMAB`]),
      (ke = `framer-X0qTJ`),
      (Ae = {
        Oyrq_rMAB: `framer-v-9pudpy`,
        PiwKqOEJV: `framer-v-16au33k`,
        PXjFj_3GC: `framer-v-k30lmw`,
      }),
      (je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e, t) => `translate(-50%, -50%) ${t}`),
      (Me = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` }),
      (Ne = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Pe = { duration: 0, type: `tween` }),
      (U = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: `tween` }),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 32,
        y: 0,
      }),
      (G = ({ value: e, children: t }) => {
        let n = s(m),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: t });
      }),
      (Fe = {
        opacity: 1,
        rotate: -360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ie = { Desktop: `PXjFj_3GC`, Mobile: `Oyrq_rMAB`, Tablet: `PiwKqOEJV` }),
      (Le = p.create(n)),
      (Re = ({ height: e, hover: t, id: n, link: r, showIcon: i, title: a, width: o, ...s }) => ({
        ...s,
        aW6QrgJSD: a ?? s.aW6QrgJSD ?? `Contact`,
        bLKfuwBQu: t ?? s.bLKfuwBQu,
        kkVzAa99b: i ?? s.kkVzAa99b ?? !0,
        variant: Ie[s.variant] ?? s.variant ?? `PXjFj_3GC`,
        Vie4DI4gZ: r ?? s.Vie4DI4gZ,
      })),
      (ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = N(
        l(function (e, t) {
          let r = f(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ie();
          se();
          let {
              style: c,
              className: l,
              layoutId: m,
              variant: h,
              bLKfuwBQu: g,
              aW6QrgJSD: _,
              kkVzAa99b: v,
              Vie4DI4gZ: y,
              ...b
            } = Re(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: re,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: k,
              setGestureState: oe,
              setVariant: A,
              variants: j,
            } = ne({
              cycleOrder: Oe,
              defaultVariant: `PXjFj_3GC`,
              enabledGestures: De,
              ref: i,
              variant: h,
              variantClassNames: Ae,
            }),
            M = ze(e, j),
            { activeVariantCallback: N, delay: ce } = ae(S),
            le = N(async (...e) => {
              if ((oe({ isHovered: !0 }), g && (await g(...e)) === !1)) return !1;
            }),
            ue = x(ke, L),
            P = (e) => S !== `Oyrq_rMAB` && e;
          return u(te, {
            id: m ?? a,
            children: u(Le, {
              animate: j,
              initial: !1,
              children: u(G, {
                value: je,
                children: u(D, {
                  href: y,
                  motionChild: !0,
                  nodeId: `PXjFj_3GC`,
                  openInNewTab: !1,
                  scopeId: `pdWVmQ6Am`,
                  smoothScroll: !0,
                  children: d(p.a, {
                    ...b,
                    ...T,
                    className: `${x(ue, `framer-k30lmw`, l, C)} framer-6j6mvk`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: M,
                    layoutId: `PXjFj_3GC`,
                    onMouseEnter: le,
                    ref: i,
                    style: { ...c },
                    ...B(
                      {
                        "PXjFj_3GC-hover": { "data-framer-name": void 0 },
                        Oyrq_rMAB: { "data-framer-name": `Mobile` },
                        PiwKqOEJV: { "data-framer-name": `Tablet` },
                      },
                      S,
                      E
                    ),
                    children: [
                      u(p.div, {
                        className: `framer-wt6zbe`,
                        "data-border": !0,
                        "data-framer-name": `Fill Color`,
                        layoutDependency: M,
                        layoutId: `R4RZz1val`,
                        style: {
                          "--border-bottom-width": `3px`,
                          "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          "--border-left-width": `3px`,
                          "--border-right-width": `3px`,
                          "--border-style": `solid`,
                          "--border-top-width": `3px`,
                          backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                        },
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          },
                        },
                      }),
                      u(p.div, {
                        className: `framer-f8h0d1`,
                        "data-border": !0,
                        "data-framer-name": `Dot`,
                        layoutDependency: M,
                        layoutId: `jXuDxxmpX`,
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
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--border-bottom-width": `3px`,
                            "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            "--border-left-width": `3px`,
                            "--border-right-width": `3px`,
                            "--border-top-width": `3px`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            opacity: 1,
                          },
                        },
                      }),
                      u(p.div, {
                        className: `framer-n2dh3i`,
                        "data-border": !0,
                        "data-framer-name": `Dot`,
                        layoutDependency: M,
                        layoutId: `FIHf6ayeL`,
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
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--border-bottom-width": `3px`,
                            "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            "--border-left-width": `3px`,
                            "--border-right-width": `3px`,
                            "--border-top-width": `3px`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            opacity: 1,
                          },
                        },
                      }),
                      u(p.div, {
                        className: `framer-ucocdx`,
                        "data-border": !0,
                        "data-framer-name": `Dot`,
                        layoutDependency: M,
                        layoutId: `hAFXIvIil`,
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
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--border-bottom-width": `3px`,
                            "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            "--border-left-width": `3px`,
                            "--border-right-width": `3px`,
                            "--border-top-width": `3px`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            opacity: 1,
                          },
                        },
                      }),
                      u(p.div, {
                        className: `framer-18r1m1s`,
                        "data-border": !0,
                        "data-framer-name": `Dot`,
                        layoutDependency: M,
                        layoutId: `g2R8mW_ug`,
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
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--border-bottom-width": `3px`,
                            "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            "--border-left-width": `3px`,
                            "--border-right-width": `3px`,
                            "--border-top-width": `3px`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            opacity: 1,
                          },
                        },
                      }),
                      P(v !== !1) &&
                        u(p.div, {
                          className: `framer-w1nxt7`,
                          "data-framer-name": `ICON`,
                          layoutDependency: M,
                          layoutId: `ICoXeidHg`,
                          children: d(p.div, {
                            className: `framer-jn4guk`,
                            "data-border": !0,
                            "data-framer-name": `Icon`,
                            layoutDependency: M,
                            layoutId: `mKPhhZW_i`,
                            style: {
                              "--border-bottom-width": `2px`,
                              "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              "--border-left-width": `2px`,
                              "--border-right-width": `2px`,
                              "--border-style": `solid`,
                              "--border-top-width": `2px`,
                              backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            },
                            children: [
                              d(Te, {
                                className: `framer-10vk680`,
                                "data-framer-name": `Pattern`,
                                layoutDependency: M,
                                layoutId: `VQeF80ovI`,
                                transformTemplate: H,
                                ...B(
                                  {
                                    "PXjFj_3GC-hover": {
                                      __framer__loop: Ne,
                                      __framer__loopEffectEnabled: !0,
                                      __framer__loopPauseOffscreen: !0,
                                      __framer__loopRepeatDelay: 0,
                                      __framer__loopRepeatType: `loop`,
                                      __framer__loopTransition: Me,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                    },
                                  },
                                  S,
                                  E
                                ),
                                children: [
                                  u(p.div, {
                                    className: `framer-15e3fym`,
                                    layoutDependency: M,
                                    layoutId: `d5gASw1jG`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-qcrqyc`,
                                    layoutDependency: M,
                                    layoutId: `Cf_bbXqK5`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-r77rjk`,
                                    layoutDependency: M,
                                    layoutId: `EgLDhnGgy`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-1ml90n7`,
                                    layoutDependency: M,
                                    layoutId: `HyJ44c9GR`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                ],
                              }),
                              u(G, {
                                value: Pe,
                                children: d(p.div, {
                                  className: `framer-1ux9orq`,
                                  "data-framer-name": `Icon`,
                                  layoutDependency: M,
                                  layoutId: `x_W9tvjvp`,
                                  transformTemplate: H,
                                  children: [
                                    u(O, {
                                      children: u(V, {
                                        __framer__loop: W,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: U,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-33uss9-container`,
                                        "data-code-component-plugin-id": `84d4c1`,
                                        isAuthoredByUser: !0,
                                        layoutDependency: M,
                                        layoutId: `Ig8aCLLI9-container`,
                                        nodeId: `Ig8aCLLI9`,
                                        rendersWithMotion: !0,
                                        scopeId: `pdWVmQ6Am`,
                                        children: u(F, {
                                          color: `var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(236, 178, 46))`,
                                          height: `100%`,
                                          id: `Ig8aCLLI9`,
                                          layoutId: `Ig8aCLLI9`,
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
                                    u(O, {
                                      children: u(V, {
                                        __framer__loop: W,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: U,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-3s775y-container`,
                                        "data-code-component-plugin-id": `84d4c1`,
                                        isAuthoredByUser: !0,
                                        layoutDependency: M,
                                        layoutId: `vAT2AeeS5-container`,
                                        nodeId: `vAT2AeeS5`,
                                        rendersWithMotion: !0,
                                        scopeId: `pdWVmQ6Am`,
                                        children: u(F, {
                                          color: `var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(236, 178, 46))`,
                                          height: `100%`,
                                          id: `vAT2AeeS5`,
                                          layoutId: `vAT2AeeS5`,
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
                            ],
                          }),
                        }),
                      u(w, {
                        __fromCanvasComponent: !0,
                        children: u(n, {
                          children: u(p.h2, {
                            className: `framer-styles-preset-k31no2`,
                            "data-styles-preset": `to1tng0Qo`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                            },
                            children: `Contact`,
                          }),
                        }),
                        className: `framer-1aqdnhb`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `HIMbDU9ed`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: _,
                        variants: {
                          "PXjFj_3GC-hover": {
                            "--extracted-1of0zx5": `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(54, 197, 240))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...B(
                          {
                            "PXjFj_3GC-hover": {
                              children: u(n, {
                                children: u(p.h2, {
                                  className: `framer-styles-preset-k31no2`,
                                  "data-styles-preset": `to1tng0Qo`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(54, 197, 240)))`,
                                  },
                                  children: `Contact`,
                                }),
                              }),
                            },
                          },
                          S,
                          E
                        ),
                      }),
                      P(v !== !1) &&
                        u(p.div, {
                          className: `framer-193okg8`,
                          "data-framer-name": `ICON`,
                          layoutDependency: M,
                          layoutId: `LMSo5vT77`,
                          children: d(p.div, {
                            className: `framer-103ms2q`,
                            "data-border": !0,
                            "data-framer-name": `Icon`,
                            layoutDependency: M,
                            layoutId: `whx_lkEN1`,
                            style: {
                              "--border-bottom-width": `2px`,
                              "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              "--border-left-width": `2px`,
                              "--border-right-width": `2px`,
                              "--border-style": `solid`,
                              "--border-top-width": `2px`,
                              backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            },
                            children: [
                              d(Te, {
                                className: `framer-by61wx`,
                                "data-framer-name": `Pattern`,
                                layoutDependency: M,
                                layoutId: `nUxRlEgDV`,
                                transformTemplate: H,
                                ...B(
                                  {
                                    "PXjFj_3GC-hover": {
                                      __framer__loop: Fe,
                                      __framer__loopEffectEnabled: !0,
                                      __framer__loopPauseOffscreen: !0,
                                      __framer__loopRepeatDelay: 0,
                                      __framer__loopRepeatType: `loop`,
                                      __framer__loopTransition: Me,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                    },
                                  },
                                  S,
                                  E
                                ),
                                children: [
                                  u(p.div, {
                                    className: `framer-1j9zgno`,
                                    layoutDependency: M,
                                    layoutId: `AAnfdiwzd`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-14figy6`,
                                    layoutDependency: M,
                                    layoutId: `dMwLrLcLz`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-1mpqecq`,
                                    layoutDependency: M,
                                    layoutId: `qRkrRPqgm`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                  u(p.div, {
                                    className: `framer-1tct7va`,
                                    layoutDependency: M,
                                    layoutId: `up3zvfNDm`,
                                    style: {
                                      backgroundColor: `var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90))`,
                                      rotate: 45,
                                    },
                                    transformTemplate: H,
                                  }),
                                ],
                              }),
                              u(G, {
                                value: Pe,
                                children: d(p.div, {
                                  className: `framer-1tsymnu`,
                                  "data-framer-name": `Icon`,
                                  layoutDependency: M,
                                  layoutId: `P7o7nKaKA`,
                                  transformTemplate: H,
                                  children: [
                                    u(O, {
                                      children: u(V, {
                                        __framer__loop: W,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: U,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-x88sjj-container`,
                                        "data-code-component-plugin-id": `84d4c1`,
                                        isAuthoredByUser: !0,
                                        layoutDependency: M,
                                        layoutId: `tSWqfVKgf-container`,
                                        nodeId: `tSWqfVKgf`,
                                        rendersWithMotion: !0,
                                        scopeId: `pdWVmQ6Am`,
                                        children: u(F, {
                                          color: `var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(236, 178, 46))`,
                                          height: `100%`,
                                          id: `tSWqfVKgf`,
                                          layoutId: `tSWqfVKgf`,
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
                                    u(O, {
                                      children: u(V, {
                                        __framer__loop: W,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `loop`,
                                        __framer__loopTransition: U,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-i24ld9-container`,
                                        "data-code-component-plugin-id": `84d4c1`,
                                        isAuthoredByUser: !0,
                                        layoutDependency: M,
                                        layoutId: `wChfvmtGM-container`,
                                        nodeId: `wChfvmtGM`,
                                        rendersWithMotion: !0,
                                        scopeId: `pdWVmQ6Am`,
                                        children: u(F, {
                                          color: `var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(236, 178, 46))`,
                                          height: `100%`,
                                          id: `wChfvmtGM`,
                                          layoutId: `wChfvmtGM`,
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
                            ],
                          }),
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
          `.framer-X0qTJ.framer-6j6mvk, .framer-X0qTJ .framer-6j6mvk { display: block; }`,
          `.framer-X0qTJ.framer-k30lmw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 24px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-X0qTJ .framer-wt6zbe { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-X0qTJ .framer-f8h0d1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-X0qTJ .framer-n2dh3i { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; width: 8px; z-index: 1; }`,
          `.framer-X0qTJ .framer-ucocdx { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; width: 8px; z-index: 1; }`,
          `.framer-X0qTJ .framer-18r1m1s { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-X0qTJ .framer-w1nxt7, .framer-X0qTJ .framer-193okg8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 16px 0px; position: relative; width: min-content; }`,
          `.framer-X0qTJ .framer-jn4guk, .framer-X0qTJ .framer-103ms2q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 80px; }`,
          `.framer-X0qTJ .framer-10vk680, .framer-X0qTJ .framer-by61wx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 160px); left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 200%; }`,
          `.framer-X0qTJ .framer-15e3fym, .framer-X0qTJ .framer-1j9zgno { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); left: 24%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 75%; width: 34%; }`,
          `.framer-X0qTJ .framer-qcrqyc, .framer-X0qTJ .framer-14figy6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); left: 74%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 24%; width: 34%; }`,
          `.framer-X0qTJ .framer-r77rjk, .framer-X0qTJ .framer-1mpqecq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); left: 74%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 75%; width: 34%; }`,
          `.framer-X0qTJ .framer-1ml90n7, .framer-X0qTJ .framer-1tct7va { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); left: 24%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 25%; width: 34%; }`,
          `.framer-X0qTJ .framer-1ux9orq, .framer-X0qTJ .framer-1tsymnu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 32px; }`,
          `.framer-X0qTJ .framer-33uss9-container, .framer-X0qTJ .framer-x88sjj-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-X0qTJ .framer-3s775y-container, .framer-X0qTJ .framer-i24ld9-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: -32px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 32px); }`,
          `.framer-X0qTJ .framer-1aqdnhb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-X0qTJ.framer-v-16au33k.framer-k30lmw { cursor: unset; }`,
          `.framer-X0qTJ.framer-v-9pudpy.framer-k30lmw { cursor: unset; padding: 16px 16px 8px 16px; }`,
          `.framer-X0qTJ.framer-v-k30lmw.hover .framer-wt6zbe { bottom: -4px; left: -4px; right: -4px; top: -4px; }`,
          `.framer-X0qTJ.framer-v-k30lmw.hover .framer-f8h0d1 { height: var(--framer-aspect-ratio-supported, 24px); left: -16px; top: -16px; width: 24px; }`,
          `.framer-X0qTJ.framer-v-k30lmw.hover .framer-n2dh3i { bottom: -16px; height: var(--framer-aspect-ratio-supported, 24px); left: -16px; width: 24px; }`,
          `.framer-X0qTJ.framer-v-k30lmw.hover .framer-ucocdx { bottom: -16px; height: var(--framer-aspect-ratio-supported, 24px); right: -16px; width: 24px; }`,
          `.framer-X0qTJ.framer-v-k30lmw.hover .framer-18r1m1s { height: var(--framer-aspect-ratio-supported, 24px); right: -16px; top: -16px; width: 24px; }`,
          ...me,
          `.framer-X0qTJ[data-border="true"]::after, .framer-X0qTJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-X0qTJ`
      )),
      (K.displayName = `CTA Button`),
      (K.defaultProps = { height: 128, width: 598 }),
      k(K, {
        variant: {
          options: [`PXjFj_3GC`, `PiwKqOEJV`, `Oyrq_rMAB`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: j.Enum,
        },
        bLKfuwBQu: { title: `Hover`, type: j.EventHandler },
        aW6QrgJSD: { defaultValue: `Contact`, displayTextArea: !1, title: `Title`, type: j.String },
        onaW6QrgJSDChange: { changes: `aW6QrgJSD`, type: j.ChangeHandler },
        kkVzAa99b: { defaultValue: !0, title: `Show Icon`, type: j.Boolean },
        onkkVzAa99bChange: { changes: `kkVzAa99b`, type: j.ChangeHandler },
        Vie4DI4gZ: { title: `Link`, type: j.Link },
      }),
      S(
        K,
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
          ...Ee,
          ...E(I),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ve(e) {
  let { source: n, file: r, url: i, fileName: a, style: o } = e;
  return u(`div`, {
    onClick: async () => {
      let e = n === `file` ? r : i;
      if (e)
        try {
          let t = await (await fetch(e)).blob(),
            n = URL.createObjectURL(t),
            r = document.createElement(`a`);
          ((r.href = n),
            (r.download = a || `download`),
            document.body.appendChild(r),
            r.click(),
            r.remove(),
            URL.revokeObjectURL(n));
        } catch {
          t.open(e, `_blank`);
        }
    },
    style: { cursor: `pointer`, width: `100%`, height: `100%`, ...o },
  });
}
var He = e(() => {
  (i(),
    o(),
    b(),
    k(Ve, {
      source: {
        type: j.Enum,
        title: `Source`,
        options: [`file`, `url`],
        optionTitles: [`File`, `URL`],
        displaySegmentedControl: !0,
        defaultValue: `file`,
      },
      file: {
        type: j.File,
        title: `File`,
        allowedFileTypes: [],
        hidden: (e) => e.source !== `file`,
      },
      url: {
        type: j.String,
        title: `URL`,
        defaultValue: ``,
        placeholder: `https://...`,
        hidden: (e) => e.source !== `url`,
      },
      fileName: {
        type: j.String,
        title: `File name`,
        defaultValue: ``,
        placeholder: `e.g. Benjamin's Resume`,
      },
    }));
});
function Ue(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  q,
  tt = e(() => {
    (o(),
      b(),
      g(),
      a(),
      R(),
      (We = { KN2FOv4Pf: { hover: !0 } }),
      (Ge = [`KN2FOv4Pf`, `kP8iFDhCI`]),
      (Ke = `framer-1W99m`),
      (qe = { KN2FOv4Pf: `framer-v-zqh0pq`, kP8iFDhCI: `framer-v-9m7k8t` }),
      (Je = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
      (Ye = (e, t) => `translate(-50%, -50%) ${t}`),
      (Xe = ({ value: e, children: t }) => {
        let n = s(m),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: t });
      }),
      (Ze = { Active: `kP8iFDhCI`, Intactive: `KN2FOv4Pf` }),
      (Qe = p.create(n)),
      ($e = ({ height: e, hover: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        variant: Ze[a.variant] ?? a.variant ?? `KN2FOv4Pf`,
        wYZBuvekn: t ?? a.wYZBuvekn,
        xnsg8Mutw: r ?? a.xnsg8Mutw ?? `EM`,
      })),
      (et = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = N(
        l(function (e, t) {
          let r = f(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ie();
          se();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: m,
              wYZBuvekn: h,
              xnsg8Mutw: g,
              ..._
            } = $e(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: re,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ne({
              cycleOrder: Ge,
              defaultVariant: `KN2FOv4Pf`,
              enabledGestures: We,
              ref: i,
              variant: m,
              variantClassNames: qe,
            }),
            O = et(e, D),
            { activeVariantCallback: k, delay: oe } = ae(v),
            A = k(async (...e) => {
              if ((T({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            j = x(Ke, be);
          return u(te, {
            id: d ?? a,
            children: u(Qe, {
              animate: D,
              initial: !1,
              children: u(Xe, {
                value: Je,
                children: u(p.div, {
                  ..._,
                  ...S,
                  className: x(j, `framer-zqh0pq`, l, y),
                  "data-framer-name": `Intactive`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `KN2FOv4Pf`,
                  onMouseEnter: A,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(226, 226, 226))`,
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    ...c,
                  },
                  variants: {
                    "KN2FOv4Pf-hover": {
                      backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                    },
                    kP8iFDhCI: {
                      backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                    },
                  },
                  ...Ue(
                    {
                      "KN2FOv4Pf-hover": { "data-framer-name": void 0 },
                      kP8iFDhCI: { "data-framer-name": `Active` },
                    },
                    v,
                    C
                  ),
                  children: u(w, {
                    __fromCanvasComponent: !0,
                    children: u(n, {
                      children: u(p.p, {
                        className: `framer-styles-preset-27ku3y`,
                        "data-styles-preset": `MffBJovlA`,
                        dir: `auto`,
                        children: `EM`,
                      }),
                    }),
                    className: `framer-1njt74i`,
                    fonts: [`Inter`],
                    layoutDependency: O,
                    layoutId: `Azq5vd6cp`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: g,
                    transformTemplate: Ye,
                    variants: {
                      "KN2FOv4Pf-hover": {
                        "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                      },
                      kP8iFDhCI: {
                        "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ue(
                      {
                        "KN2FOv4Pf-hover": {
                          children: u(n, {
                            children: u(p.p, {
                              className: `framer-styles-preset-27ku3y`,
                              "data-styles-preset": `MffBJovlA`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                              },
                              children: `EM`,
                            }),
                          }),
                        },
                        kP8iFDhCI: {
                          children: u(n, {
                            children: u(p.p, {
                              className: `framer-styles-preset-27ku3y`,
                              "data-styles-preset": `MffBJovlA`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                              },
                              children: `EM`,
                            }),
                          }),
                        },
                      },
                      v,
                      C
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1W99m.framer-1iwvsp, .framer-1W99m .framer-1iwvsp { display: block; }`,
          `.framer-1W99m.framer-zqh0pq { cursor: pointer; height: 32px; overflow: visible; position: relative; width: 32px; }`,
          `.framer-1W99m .framer-1njt74i { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
          `.framer-1W99m.framer-v-9m7k8t.framer-zqh0pq { cursor: unset; }`,
          ...ye,
        ],
        `framer-1W99m`
      )),
      (q.displayName = `Dropdown Content`),
      (q.defaultProps = { height: 32, width: 32 }),
      k(q, {
        variant: {
          options: [`KN2FOv4Pf`, `kP8iFDhCI`],
          optionTitles: [`Intactive`, `Active`],
          title: `Variant`,
          type: j.Enum,
        },
        wYZBuvekn: { title: `Hover`, type: j.EventHandler },
        xnsg8Mutw: { defaultValue: `EM`, displayTextArea: !1, title: `Title`, type: j.String },
        onxnsg8MutwChange: { changes: `xnsg8Mutw`, type: j.ChangeHandler },
      }),
      S(
        q,
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
          ...E(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  J,
  mt = e(() => {
    (o(),
      b(),
      g(),
      a(),
      fe(),
      R(),
      (rt = _(F)),
      (it = { Kk1gIUTyx: { hover: !0 } }),
      (at = [`yqU47cpyn`, `Kk1gIUTyx`]),
      (ot = `framer-yadmh`),
      (st = { Kk1gIUTyx: `framer-v-pwe3fj`, yqU47cpyn: `framer-v-1lelg4r` }),
      (ct = { duration: 0, type: `tween` }),
      (lt = ({ value: e, children: t }) => {
        let n = s(m),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: t });
      }),
      (ut = { "desktop--active": `yqU47cpyn`, "desktop--inactive": `Kk1gIUTyx` }),
      (dt = p.create(n)),
      (ft = ({ height: e, id: t, link: n, sVGCode: r, title: i, width: a, ...o }) => ({
        ...o,
        m5wLQuVvP: i ?? o.m5wLQuVvP ?? `Home`,
        variant: ut[o.variant] ?? o.variant ?? `yqU47cpyn`,
        WZ0ygxKhu:
          r ??
          o.WZ0ygxKhu ??
          `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 149.818L178.175 5.93915L356.35 149.818V356.349H271.712V295.155C271.712 243.496 229.834 201.618 178.175 201.618C126.515 201.618 84.6374 243.496 84.6374 295.155V356.349H0V149.818Z" fill="#F4ADB3"/>
</svg>
`,
        zjpTYehEH: n ?? o.zjpTYehEH,
      })),
      (pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = N(
        l(function (e, t) {
          let r = f(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ie();
          se();
          let {
              style: c,
              className: l,
              layoutId: m,
              variant: h,
              m5wLQuVvP: g,
              WZ0ygxKhu: _,
              zjpTYehEH: y,
              ...b
            } = ft(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: re,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: ae,
              setGestureState: k,
              setVariant: oe,
              variants: A,
            } = ne({
              cycleOrder: at,
              defaultVariant: `yqU47cpyn`,
              enabledGestures: it,
              ref: i,
              variant: h,
              variantClassNames: st,
            }),
            j = pt(e, A),
            M = x(ot, be);
          return u(te, {
            id: m ?? a,
            children: u(dt, {
              animate: A,
              initial: !1,
              children: u(lt, {
                value: ct,
                children: u(D, {
                  href: y,
                  motionChild: !0,
                  nodeId: `yqU47cpyn`,
                  openInNewTab: !1,
                  scopeId: `vRahVGG7A`,
                  children: d(p.a, {
                    ...b,
                    ...T,
                    className: `${x(M, `framer-1lelg4r`, l, C)} framer-1szvw3r`,
                    "data-framer-name": `desktop--active`,
                    layoutDependency: j,
                    layoutId: `yqU47cpyn`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                      ...c,
                    },
                    variants: {
                      "Kk1gIUTyx-hover": {
                        backgroundColor: `var(--token-f3fe21e3-0094-4480-b0bd-3d122b4528c2, rgb(241, 241, 241))`,
                      },
                      Kk1gIUTyx: {
                        backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                      },
                    },
                    ...nt(
                      {
                        "Kk1gIUTyx-hover": { "data-framer-name": void 0 },
                        Kk1gIUTyx: { "data-framer-name": `desktop--inactive` },
                      },
                      S,
                      E
                    ),
                    children: [
                      u(O, {
                        children: u(v, {
                          className: `framer-17cxuf3-container`,
                          "data-code-component-plugin-id": `84d4c1`,
                          isAuthoredByUser: !0,
                          layoutDependency: j,
                          layoutId: `ptOFHiwka-container`,
                          nodeId: `ptOFHiwka`,
                          rendersWithMotion: !0,
                          scopeId: `vRahVGG7A`,
                          children: u(F, {
                            color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            height: `100%`,
                            id: `ptOFHiwka`,
                            layoutId: `ptOFHiwka`,
                            stroke: !1,
                            strokeColor: `rgb(0, 0, 0)`,
                            style: { height: `100%`, width: `100%` },
                            svgCode: _,
                            width: `100%`,
                          }),
                        }),
                      }),
                      u(w, {
                        __fromCanvasComponent: !0,
                        children: u(n, {
                          children: u(p.p, {
                            className: `framer-styles-preset-27ku3y`,
                            "data-styles-preset": `MffBJovlA`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                            },
                            children: `Home`,
                          }),
                        }),
                        className: `framer-4g28vk`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `hWVDd21nt`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: g,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-yadmh.framer-1szvw3r, .framer-yadmh .framer-1szvw3r { display: block; }`,
          `.framer-yadmh.framer-1lelg4r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-yadmh .framer-17cxuf3-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; z-index: 1; }`,
          `.framer-yadmh .framer-4g28vk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-yadmh.framer-v-pwe3fj.framer-1lelg4r { cursor: pointer; }`,
          ...ye,
        ],
        `framer-yadmh`
      )),
      (J.displayName = `Navigation`),
      (J.defaultProps = { height: 48, width: 92 }),
      k(J, {
        variant: {
          options: [`yqU47cpyn`, `Kk1gIUTyx`],
          optionTitles: [`desktop--active`, `desktop--inactive`],
          title: `Variant`,
          type: j.Enum,
        },
        m5wLQuVvP: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: j.String },
        onm5wLQuVvPChange: { changes: `m5wLQuVvP`, type: j.ChangeHandler },
        WZ0ygxKhu: {
          defaultValue: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 149.818L178.175 5.93915L356.35 149.818V356.349H271.712V295.155C271.712 243.496 229.834 201.618 178.175 201.618C126.515 201.618 84.6374 243.496 84.6374 295.155V356.349H0V149.818Z" fill="#F4ADB3"/>
</svg>
`,
          displayTextArea: !0,
          title: `SVG Code`,
          type: j.String,
        },
        onWZ0ygxKhuChange: { changes: `WZ0ygxKhu`, type: j.ChangeHandler },
        zjpTYehEH: { title: `Link`, type: j.Link },
      }),
      S(
        J,
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
          ...rt,
          ...E(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  X,
  St,
  Ct,
  wt,
  Tt,
  Z,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Q,
  Lt,
  Rt,
  $,
  zt = e(() => {
    (o(),
      b(),
      g(),
      a(),
      He(),
      fe(),
      he(),
      ue(),
      R(),
      tt(),
      mt(),
      xe(),
      Ce(),
      (ht = _(F)),
      (gt = _(J)),
      (_t = _(q)),
      (vt = y(p.div)),
      (yt = _(Ve)),
      (bt = _(Se)),
      (xt = _(we)),
      (X = T(J)),
      (St = [`NGcJSwgb3`, `YyUvbynv5`, `bU9NaqYdW`]),
      (Ct = `framer-5bgls`),
      (wt = {
        bU9NaqYdW: `framer-v-ys4ijm`,
        NGcJSwgb3: `framer-v-qcrtwu`,
        YyUvbynv5: `framer-v-1h4ng2k`,
      }),
      (Tt = { duration: 0, type: `tween` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Et = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
      (Dt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Et,
        x: 0,
        y: 0,
      }),
      (Ot = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Et,
        x: 0,
        y: 0,
      }),
      (kt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (At = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = ce({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (jt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Mt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: jt,
        x: 0,
        y: 0,
      }),
      (Nt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: jt,
        x: 0,
        y: 0,
      }),
      (Pt = ({ value: e, children: t }) => {
        let n = s(m),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: t });
      }),
      (Ft = { "Phone Opened": `bU9NaqYdW`, "Tablet + Mobile": `YyUvbynv5`, Desktop: `NGcJSwgb3` }),
      (It = p.create(n)),
      (Q = { "desktop--active": `yqU47cpyn`, "desktop--inactive": `Kk1gIUTyx` }),
      (Lt = ({
        about: e,
        caseStudy: t,
        height: n,
        home: r,
        id: i,
        journal: a,
        playAround: o,
        services: s,
        width: c,
        ...l
      }) => ({
        ...l,
        HbYglppp7: Q[r] ?? r ?? l.HbYglppp7 ?? `yqU47cpyn`,
        irwC6AhLd: Q[a] ?? a ?? l.irwC6AhLd ?? `Kk1gIUTyx`,
        nQZdrLnnV: Q[t] ?? t ?? l.nQZdrLnnV ?? `Kk1gIUTyx`,
        NTJvsdeop: Q[s] ?? s ?? l.NTJvsdeop ?? `Kk1gIUTyx`,
        variant: Ft[l.variant] ?? l.variant ?? `NGcJSwgb3`,
        vGbeqFGq8: Q[o] ?? o ?? l.vGbeqFGq8 ?? `Kk1gIUTyx`,
        WY7dqlcv7: Q[e] ?? e ?? l.WY7dqlcv7 ?? `Kk1gIUTyx`,
      })),
      (Rt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = N(
        l(function (e, t) {
          let r = f(null),
            i = t ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = ie(),
            l = se(),
            {
              style: m,
              className: g,
              layoutId: _,
              variant: y,
              HbYglppp7: b,
              WY7dqlcv7: S,
              NTJvsdeop: C,
              irwC6AhLd: T,
              nQZdrLnnV: E,
              vGbeqFGq8: k,
              ...A
            } = Lt(e),
            {
              baseVariant: j,
              classNames: N,
              clearLoadingGesture: ce,
              gestureHandlers: ue,
              gestureVariant: P,
              isLoading: de,
              setGestureState: fe,
              setVariant: pe,
              variants: me,
            } = ne({
              cycleOrder: St,
              defaultVariant: `NGcJSwgb3`,
              ref: i,
              variant: y,
              variantClassNames: wt,
            }),
            I = Rt(e, me),
            { activeVariantCallback: L, delay: he } = ae(j),
            ge = L(async (...e) => {
              pe(`bU9NaqYdW`);
            }),
            _e = L(async (...e) => {
              pe(`YyUvbynv5`);
            }),
            R = ({ overlay: e }) =>
              L(async (...t) => {
                e.show();
              }),
            ye = ({ overlay: e }) =>
              L(async (...t) => {
                e.show();
              }),
            z = x(Ct, le, be, ve),
            xe = () => !![`YyUvbynv5`, `bU9NaqYdW`].includes(j),
            Ce = () => j !== `YyUvbynv5`;
          re();
          let B = f(null),
            Te = f(null),
            Ee = f(null),
            V = f(null),
            De = f(null),
            Oe = f(null);
          return u(te, {
            id: _ ?? a,
            children: u(It, {
              animate: me,
              initial: !1,
              children: u(Pt, {
                value: Tt,
                children: u(p.nav, {
                  ...A,
                  ...ue,
                  className: x(z, `framer-qcrtwu`, g, N),
                  "data-framer-name": `Desktop`,
                  layoutDependency: I,
                  layoutId: `NGcJSwgb3`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                    ...m,
                  },
                  ...Y(
                    {
                      bU9NaqYdW: { "data-framer-name": `Phone Opened` },
                      YyUvbynv5: { "data-framer-name": `Tablet + Mobile` },
                    },
                    j,
                    P
                  ),
                  children: d(p.div, {
                    className: `framer-18dhp48`,
                    "data-framer-name": `Content`,
                    layoutDependency: I,
                    layoutId: `Q4vg7Opz1`,
                    children: [
                      d(p.div, {
                        className: `framer-efmyi8`,
                        "data-framer-name": `Logo + Menu`,
                        layoutDependency: I,
                        layoutId: `OFS_iEbZG`,
                        children: [
                          d(p.div, {
                            className: `framer-1l5h1p8`,
                            "data-framer-name": `Logo`,
                            layoutDependency: I,
                            layoutId: `IypvlAhxc`,
                            children: [
                              u(O, {
                                children: u(v, {
                                  className: `framer-rfbnv9-container`,
                                  "data-code-component-plugin-id": `84d4c1`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: I,
                                  layoutId: `G49FofT8M-container`,
                                  nodeId: `G49FofT8M`,
                                  rendersWithMotion: !0,
                                  scopeId: `Ql1sfNpaE`,
                                  children: u(F, {
                                    color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                    height: `100%`,
                                    id: `G49FofT8M`,
                                    layoutId: `G49FofT8M`,
                                    stroke: !1,
                                    strokeColor: `rgb(0, 0, 0)`,
                                    style: { height: `100%`, width: `100%` },
                                    svgCode: `<svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6953 7.73005C33.3767 7.73005 40.5429 14.2176 41.6103 22.6091C41.762 23.8022 40.7725 24.7822 39.5698 24.7822C38.3671 24.7822 37.4116 23.7995 37.2077 22.6142C36.1789 16.6348 30.9684 12.0854 24.6953 12.0854C18.4222 12.0854 13.2117 16.6348 12.1829 22.6142C11.979 23.7995 11.0235 24.7822 9.82082 24.7822C8.61811 24.7822 7.62854 23.8022 7.78029 22.6091C8.84764 14.2176 16.0138 7.73004 24.6953 7.73005Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6953 0C37.6488 1.13243e-06 48.281 9.9382 49.3832 22.6057C49.4875 23.8039 48.5025 24.7822 47.2998 24.7822C46.0971 24.7822 45.1343 23.804 45.0078 22.6079C43.9223 12.3488 35.2423 4.3554 24.6953 4.3554C14.1483 4.3554 5.46833 12.3488 4.38284 22.6079C4.25629 23.804 3.29349 24.7822 2.09078 24.7822C0.888075 24.7822 -0.0969105 23.8039 0.00734477 22.6057C1.10956 9.9382 11.7418 -1.13243e-06 24.6953 0Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6953 15.1087C29.2952 15.1087 33.1453 18.3194 34.1267 22.622C34.3942 23.7946 33.3938 24.7822 32.1911 24.7822C30.9884 24.7822 30.0544 23.7674 29.575 22.6644C28.7565 20.7811 26.8797 19.4641 24.6953 19.4641C22.5109 19.4641 20.6341 20.7811 19.8156 22.6644C19.3362 23.7674 18.4022 24.7822 17.1995 24.7822C15.9968 24.7822 14.9965 23.7946 15.2639 22.622C16.2453 18.3194 20.0954 15.1087 24.6953 15.1087Z" fill="black"/>
</svg>
`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(p.div, {
                                className: `framer-1cw79zu`,
                                "data-framer-name": `Line`,
                                layoutDependency: I,
                                layoutId: `rsOW6ipy3`,
                                style: {
                                  backgroundColor: `var(--token-0aa568ec-3cf9-436c-a43a-7190c1309ca5, rgb(198, 198, 199))`,
                                },
                              }),
                            ],
                          }),
                          xe() &&
                            d(p.div, {
                              className: `framer-16ahjtk`,
                              "data-border": !0,
                              "data-framer-name": `Menu`,
                              layoutDependency: I,
                              layoutId: `qm1bv9vYL`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                              ...Y(
                                {
                                  bU9NaqYdW: { "data-highlight": !0, onTap: _e },
                                  YyUvbynv5: { "data-highlight": !0, onTap: ge },
                                },
                                j,
                                P
                              ),
                              children: [
                                u(w, {
                                  __fromCanvasComponent: !0,
                                  children: u(n, {
                                    children: u(p.p, {
                                      className: `framer-styles-preset-1833qg6`,
                                      "data-styles-preset": `jB2nPzqr7`,
                                      dir: `auto`,
                                      children: `Menu`,
                                    }),
                                  }),
                                  className: `framer-o0mrql`,
                                  fonts: [`Inter`],
                                  layoutDependency: I,
                                  layoutId: `trtREzmsu`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        children: u(n, {
                                          children: u(p.p, {
                                            className: `framer-styles-preset-1833qg6`,
                                            "data-styles-preset": `jB2nPzqr7`,
                                            dir: `auto`,
                                            children: `Close`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                                d(p.div, {
                                  className: `framer-598z2o`,
                                  "data-framer-name": `Icon`,
                                  layoutDependency: I,
                                  layoutId: `Ej2Ezt4ea`,
                                  children: [
                                    u(p.div, {
                                      className: `framer-8rbzif`,
                                      layoutDependency: I,
                                      layoutId: `GaIYUWsJY`,
                                      style: {
                                        backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        rotate: 0,
                                      },
                                      variants: { bU9NaqYdW: { rotate: 45 } },
                                    }),
                                    u(p.div, {
                                      className: `framer-pugzyz`,
                                      layoutDependency: I,
                                      layoutId: `RqJ_lzHCs`,
                                      style: {
                                        backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        rotate: 0,
                                      },
                                      variants: { bU9NaqYdW: { rotate: -45 } },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      Ce() &&
                        d(p.div, {
                          className: `framer-dga6ak`,
                          "data-framer-name": `Navigation`,
                          layoutDependency: I,
                          layoutId: `mbq2hDAUg`,
                          ...Y({ bU9NaqYdW: { "data-highlight": !0, onTap: _e } }, j, P),
                          children: [
                            u(M, {
                              links: [
                                { href: { webPageId: `IMzwiuEeL` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `IMzwiuEeL` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          0,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-mdiqe4-container`,
                                    layoutDependency: I,
                                    layoutId: `Ehh3VLpqn-container`,
                                    nodeId: `Ehh3VLpqn`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `Ehh3VLpqn`,
                                      layoutId: `Ehh3VLpqn`,
                                      m5wLQuVvP: `Home`,
                                      variant: Z(b),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 149.818L178.175 5.93915L356.35 149.818V356.349H271.712V295.155C271.712 243.496 229.834 201.618 178.175 201.618C126.515 201.618 84.6374 243.496 84.6374 295.155V356.349H0V149.818Z" fill="#F4ADB3"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `NFldwpxHM` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `NFldwpxHM` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          48,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-wre5s5-container`,
                                    layoutDependency: I,
                                    layoutId: `CsYkSsXMc-container`,
                                    nodeId: `CsYkSsXMc`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `CsYkSsXMc`,
                                      layoutId: `CsYkSsXMc`,
                                      m5wLQuVvP: `About`,
                                      variant: Z(S),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.73938e-06 177.581C2.2807e-06 267.114 178.175 177.581 178.175 177.581C178.175 177.581 1.19806e-06 88.0481 1.73938e-06 177.581Z" fill="#E55733"/>
<path d="M356.35 177.581C356.35 267.114 178.175 177.581 178.175 177.581C178.175 177.581 356.35 88.0481 356.35 177.581Z" fill="#E55733"/>
<path d="M89.0877 331.885C166.625 376.651 178.175 177.581 178.175 177.581C178.175 177.581 11.55 287.118 89.0877 331.885Z" fill="#E55733"/>
<path d="M267.262 23.277C344.8 68.0435 178.175 177.581 178.175 177.581C178.175 177.581 189.725 -21.4894 267.262 23.277Z" fill="#E55733"/>
<path d="M267.262 331.885C189.724 376.651 178.175 177.581 178.175 177.581C178.175 177.581 344.8 287.118 267.262 331.885Z" fill="#E55733"/>
<path d="M89.0871 23.277C11.5494 68.0435 178.175 177.581 178.175 177.581C178.175 177.581 166.625 -21.4894 89.0871 23.277Z" fill="#E55733"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `xZeukHXrK` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `xZeukHXrK` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          96,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-12hsxtv-container`,
                                    layoutDependency: I,
                                    layoutId: `ChBUXI40R-container`,
                                    nodeId: `ChBUXI40R`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `ChBUXI40R`,
                                      layoutId: `ChBUXI40R`,
                                      m5wLQuVvP: `Case study`,
                                      variant: Z(E),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.00242398 200C0.000809232 199.834 0 199.667 0 199.5C0 174.111 18.7366 153.097 43.1371 149.533C18.7701 146.188 0 125.286 0 100C0 72.3858 22.3858 50 50 50H50.5C22.7765 50 0.270718 27.6601 0.00242398 0H199.998C199.729 27.6601 177.224 50 149.5 50H150C177.614 50 200 72.3858 200 100C200 125.286 181.23 146.188 156.863 149.533C181.263 153.097 200 174.111 200 199.5C200 199.667 199.999 199.834 199.998 200H0.00242398Z" fill="#3D3D3D"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `lBEorPn2H` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `lBEorPn2H` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          144,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-stecas-container`,
                                    layoutDependency: I,
                                    layoutId: `FZRQyhRgx-container`,
                                    nodeId: `FZRQyhRgx`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `FZRQyhRgx`,
                                      layoutId: `FZRQyhRgx`,
                                      m5wLQuVvP: `Services`,
                                      variant: Z(C),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M290.751 178.175C330.786 159.769 356.35 131.752 356.35 100.372C356.35 44.938 276.578 0 178.175 0C79.7716 0 0 44.938 0 100.372C0 131.752 25.5633 159.769 65.5988 178.175C25.5633 196.58 0 224.597 0 255.978C0 311.412 79.7716 356.35 178.175 356.35C276.578 356.35 356.35 311.412 356.35 255.978C356.35 224.597 330.786 196.58 290.751 178.175Z" fill="#F4ADB3"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `Ngf4PP48U` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Ngf4PP48U` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          192,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-1p2j9w6-container`,
                                    layoutDependency: I,
                                    layoutId: `clgDP1S7J-container`,
                                    nodeId: `clgDP1S7J`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `clgDP1S7J`,
                                      layoutId: `clgDP1S7J`,
                                      m5wLQuVvP: `Journal`,
                                      variant: Z(T),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M211.371 102.167V4H144.629V102.167L53.1934 20.8013L6 62.7969L144.629 186.158V355H211.371V186.158L350 62.7969L302.807 20.8013L211.371 102.167Z" fill="#292524"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `OZ8sqXvDF` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `OZ8sqXvDF` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 48,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 0 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        width: `min(${l?.width || `100vw`}, 1800px)`,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          48 +
                                          0 +
                                          240,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-wjoehf-container`,
                                    layoutDependency: I,
                                    layoutId: `KvRUnF31p-container`,
                                    nodeId: `KvRUnF31p`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(J, {
                                      height: `100%`,
                                      id: `KvRUnF31p`,
                                      layoutId: `KvRUnF31p`,
                                      m5wLQuVvP: `Playground`,
                                      variant: Z(k),
                                      width: `100%`,
                                      WZ0ygxKhu: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M356.35 0H237.566V118.783H118.783V237.566H0V356.35H356.35V0Z" fill="#E55733"/>
</svg>
`,
                                      zjpTYehEH: e[0],
                                      ...Y(
                                        {
                                          bU9NaqYdW: { style: { width: `100%` }, zjpTYehEH: e[1] },
                                        },
                                        j,
                                        P
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      Ce() &&
                        d(p.div, {
                          className: `framer-17yi1t`,
                          "data-framer-name": `Contact`,
                          layoutDependency: I,
                          layoutId: `dpgrU8sRz`,
                          children: [
                            u(At, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !1,
                              children: (e) =>
                                u(c, {
                                  children: u(O, {
                                    height: 32,
                                    width: `32px`,
                                    y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 8 + 0,
                                    ...Y(
                                      {
                                        bU9NaqYdW: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                            0 +
                                            336 +
                                            16,
                                        },
                                      },
                                      j,
                                      P
                                    ),
                                    children: d(v, {
                                      className: `framer-119y192-container`,
                                      id: `${_}-119y192`,
                                      layoutDependency: I,
                                      layoutId: `KReUBtQTU-container`,
                                      nodeId: `KReUBtQTU`,
                                      ref: B,
                                      rendersWithMotion: !0,
                                      scopeId: `Ql1sfNpaE`,
                                      children: [
                                        u(q, {
                                          height: `100%`,
                                          id: `KReUBtQTU`,
                                          layoutId: `KReUBtQTU`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Z(
                                            e.visible && `kP8iFDhCI`,
                                            e.visible ? `kP8iFDhCI` : `KN2FOv4Pf`
                                          ),
                                          width: `100%`,
                                          wYZBuvekn: R({ overlay: e }),
                                          xnsg8Mutw: `EM`,
                                        }),
                                        u(h, {
                                          children:
                                            e.visible &&
                                            u(oe, {
                                              alignment: `center`,
                                              anchorRef: B,
                                              className: x(z, N),
                                              collisionDetection: !0,
                                              collisionDetectionPadding: 20,
                                              "data-framer-portal-id": `${_}-119y192`,
                                              offsetX: 0,
                                              offsetY: 10,
                                              onDismiss: e.hide,
                                              placement: `bottom`,
                                              safeArea: !0,
                                              zIndex: 11,
                                              children: u(vt, {
                                                __perspectiveFX: !1,
                                                __smartComponentFX: !0,
                                                __targetOpacity: 1,
                                                animate: Ot,
                                                className: `framer-s20nry`,
                                                exit: Dt,
                                                initial: kt,
                                                layoutDependency: I,
                                                layoutId: `t7BjCxzqP`,
                                                ref: Te,
                                                role: `dialog`,
                                                style: {
                                                  boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                                },
                                                children: d(p.div, {
                                                  className: `framer-b7k00k`,
                                                  "data-framer-name": `Contain`,
                                                  layoutDependency: I,
                                                  layoutId: `OijIYdAX_`,
                                                  style: {
                                                    backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                    borderBottomLeftRadius: 4,
                                                    borderBottomRightRadius: 4,
                                                    borderTopLeftRadius: 4,
                                                    borderTopRightRadius: 4,
                                                  },
                                                  children: [
                                                    u(p.div, {
                                                      className: `framer-5qbjw8`,
                                                      layoutDependency: I,
                                                      layoutId: `UKPSMz9cV`,
                                                      style: {
                                                        backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                        borderBottomLeftRadius: 2,
                                                        borderBottomRightRadius: 2,
                                                        borderTopLeftRadius: 2,
                                                        borderTopRightRadius: 2,
                                                        rotate: 45,
                                                      },
                                                    }),
                                                    u(w, {
                                                      __fromCanvasComponent: !0,
                                                      children: u(n, {
                                                        children: u(p.p, {
                                                          className: `framer-styles-preset-27ku3y`,
                                                          "data-styles-preset": `MffBJovlA`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                                          },
                                                          children: u(D, {
                                                            href: `mailto:Hello@selenadesigns.com`,
                                                            motionChild: !0,
                                                            nodeId: `abClVGWI0`,
                                                            openInNewTab: !0,
                                                            relValues: [],
                                                            scopeId: `Ql1sfNpaE`,
                                                            smoothScroll: !1,
                                                            children: u(p.a, {
                                                              className: `framer-styles-preset-1gbd6t2`,
                                                              "data-styles-preset": `aJRokyP_h`,
                                                              children: `Hello@BEJAMANdesigns.com`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-131uu5w`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: I,
                                                      layoutId: `abClVGWI0`,
                                                      style: {
                                                        "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            }),
                            u(At, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !1,
                              children: (e) =>
                                u(c, {
                                  children: u(O, {
                                    height: 32,
                                    width: `32px`,
                                    y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 8 + 0,
                                    ...Y(
                                      {
                                        bU9NaqYdW: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                            0 +
                                            336 +
                                            16,
                                        },
                                      },
                                      j,
                                      P
                                    ),
                                    children: d(v, {
                                      className: `framer-1yzdk2p-container`,
                                      id: `${_}-1yzdk2p`,
                                      layoutDependency: I,
                                      layoutId: `EqwtTSVyV-container`,
                                      nodeId: `EqwtTSVyV`,
                                      ref: Ee,
                                      rendersWithMotion: !0,
                                      scopeId: `Ql1sfNpaE`,
                                      children: [
                                        u(q, {
                                          height: `100%`,
                                          id: `EqwtTSVyV`,
                                          layoutId: `EqwtTSVyV`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Z(
                                            e.visible && `kP8iFDhCI`,
                                            e.visible ? `kP8iFDhCI` : `KN2FOv4Pf`
                                          ),
                                          width: `100%`,
                                          wYZBuvekn: R({ overlay: e }),
                                          xnsg8Mutw: `PH`,
                                        }),
                                        u(h, {
                                          children:
                                            e.visible &&
                                            u(oe, {
                                              alignment: `center`,
                                              anchorRef: Ee,
                                              className: x(z, N),
                                              collisionDetection: !0,
                                              collisionDetectionPadding: 20,
                                              "data-framer-portal-id": `${_}-1yzdk2p`,
                                              offsetX: 0,
                                              offsetY: 10,
                                              onDismiss: e.hide,
                                              placement: `bottom`,
                                              safeArea: !0,
                                              zIndex: 11,
                                              children: u(vt, {
                                                __perspectiveFX: !1,
                                                __smartComponentFX: !0,
                                                __targetOpacity: 1,
                                                animate: Ot,
                                                className: `framer-1p4u4vc`,
                                                exit: Dt,
                                                initial: kt,
                                                layoutDependency: I,
                                                layoutId: `iFzVUA4VL`,
                                                ref: V,
                                                role: `dialog`,
                                                style: {
                                                  boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                                },
                                                children: d(p.div, {
                                                  className: `framer-157k4sk`,
                                                  "data-framer-name": `Contain`,
                                                  layoutDependency: I,
                                                  layoutId: `hhIgEHv3Q`,
                                                  style: {
                                                    backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                    borderBottomLeftRadius: 4,
                                                    borderBottomRightRadius: 4,
                                                    borderTopLeftRadius: 4,
                                                    borderTopRightRadius: 4,
                                                  },
                                                  children: [
                                                    u(p.div, {
                                                      className: `framer-15pg6bs`,
                                                      layoutDependency: I,
                                                      layoutId: `p2YLramXg`,
                                                      style: {
                                                        backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                        borderBottomLeftRadius: 2,
                                                        borderBottomRightRadius: 2,
                                                        borderTopLeftRadius: 2,
                                                        borderTopRightRadius: 2,
                                                        rotate: 45,
                                                      },
                                                    }),
                                                    u(w, {
                                                      __fromCanvasComponent: !0,
                                                      children: u(n, {
                                                        children: u(p.p, {
                                                          className: `framer-styles-preset-27ku3y`,
                                                          "data-styles-preset": `MffBJovlA`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                                          },
                                                          children: u(D, {
                                                            href: `tel:+123456789`,
                                                            motionChild: !0,
                                                            nodeId: `guDK8OUaM`,
                                                            openInNewTab: !0,
                                                            relValues: [],
                                                            scopeId: `Ql1sfNpaE`,
                                                            smoothScroll: !1,
                                                            children: u(p.a, {
                                                              className: `framer-styles-preset-1gbd6t2`,
                                                              "data-styles-preset": `aJRokyP_h`,
                                                              children: `+123456789`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-32zr5g`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: I,
                                                      layoutId: `guDK8OUaM`,
                                                      style: {
                                                        "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            }),
                            u(At, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !1,
                              children: (e) =>
                                u(c, {
                                  children: d(p.div, {
                                    className: `framer-ns3vo2`,
                                    "data-border": !0,
                                    "data-framer-name": `Resume`,
                                    "data-highlight": !0,
                                    id: `${_}-ns3vo2`,
                                    layoutDependency: I,
                                    layoutId: `cv8cY2AUe`,
                                    onMouseEnter: ye({ overlay: e }),
                                    ref: De,
                                    style: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(54, 197, 240))`,
                                      "--border-left-width": `1px`,
                                      "--border-right-width": `1px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `1px`,
                                      borderBottomLeftRadius: 32,
                                      borderBottomRightRadius: 32,
                                      borderTopLeftRadius: 32,
                                      borderTopRightRadius: 32,
                                    },
                                    children: [
                                      u(h, {
                                        children:
                                          e.visible &&
                                          u(oe, {
                                            alignment: `center`,
                                            anchorRef: De,
                                            className: x(z, N),
                                            collisionDetection: !0,
                                            collisionDetectionPadding: 20,
                                            "data-framer-portal-id": `${_}-ns3vo2`,
                                            offsetX: 0,
                                            offsetY: 10,
                                            onDismiss: e.hide,
                                            placement: `bottom`,
                                            safeArea: !0,
                                            zIndex: 11,
                                            children: u(vt, {
                                              __perspectiveFX: !1,
                                              __smartComponentFX: !0,
                                              __targetOpacity: 1,
                                              animate: Nt,
                                              className: `framer-ry65pg`,
                                              exit: Mt,
                                              initial: kt,
                                              layoutDependency: I,
                                              layoutId: `hIVan4Y76`,
                                              ref: Oe,
                                              role: `dialog`,
                                              style: {
                                                boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                              },
                                              children: d(p.div, {
                                                className: `framer-1wrwre`,
                                                "data-framer-name": `Contain`,
                                                layoutDependency: I,
                                                layoutId: `mfD3R7xMA`,
                                                style: {
                                                  backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                  borderBottomLeftRadius: 4,
                                                  borderBottomRightRadius: 4,
                                                  borderTopLeftRadius: 4,
                                                  borderTopRightRadius: 4,
                                                },
                                                children: [
                                                  u(O, {
                                                    children: u(v, {
                                                      className: `framer-mrzwkm-container`,
                                                      isAuthoredByUser: !0,
                                                      layoutDependency: I,
                                                      layoutId: `IMzunvXB1-container`,
                                                      nodeId: `IMzunvXB1`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `Ql1sfNpaE`,
                                                      children: u(Ve, {
                                                        file: `https://framerusercontent.com/assets/5D0eDc95VXdjgoSNI5fR7NpyX0k.jpg`,
                                                        fileName: `Bejamin's Resume`,
                                                        height: `100%`,
                                                        id: `IMzunvXB1`,
                                                        layoutId: `IMzunvXB1`,
                                                        source: `file`,
                                                        style: { height: `100%`, width: `100%` },
                                                        url: ``,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                  u(p.div, {
                                                    className: `framer-1yfd1kv`,
                                                    layoutDependency: I,
                                                    layoutId: `gqeXz7HlD`,
                                                    style: {
                                                      backgroundColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                                                      borderBottomLeftRadius: 2,
                                                      borderBottomRightRadius: 2,
                                                      borderTopLeftRadius: 2,
                                                      borderTopRightRadius: 2,
                                                      rotate: 45,
                                                    },
                                                  }),
                                                  u(w, {
                                                    __fromCanvasComponent: !0,
                                                    children: u(n, {
                                                      children: u(p.p, {
                                                        className: `framer-styles-preset-27ku3y`,
                                                        "data-styles-preset": `MffBJovlA`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                                        },
                                                        children: u(D, {
                                                          href: `mailto:Hello@selenadesigns.com`,
                                                          motionChild: !0,
                                                          nodeId: `TZH86zigh`,
                                                          openInNewTab: !0,
                                                          relValues: [],
                                                          scopeId: `Ql1sfNpaE`,
                                                          smoothScroll: !1,
                                                          children: u(p.a, {
                                                            className: `framer-styles-preset-1gbd6t2`,
                                                            "data-styles-preset": `aJRokyP_h`,
                                                            children: `download resume`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    className: `framer-1r2efyl`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: I,
                                                    layoutId: `TZH86zigh`,
                                                    style: {
                                                      "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                    },
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                      }),
                                      u(O, {
                                        height: 12,
                                        width: `32px`,
                                        y:
                                          (l?.y || 0) +
                                          (0 + ((l?.height || 48) - 0 - 48) / 2) +
                                          8 +
                                          10 +
                                          0,
                                        ...Y(
                                          {
                                            bU9NaqYdW: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                                0 +
                                                336 +
                                                26 +
                                                0,
                                            },
                                          },
                                          j,
                                          P
                                        ),
                                        children: u(v, {
                                          className: `framer-1ywmwgb-container`,
                                          layoutDependency: I,
                                          layoutId: `GgkmBikS3-container`,
                                          nodeId: `GgkmBikS3`,
                                          rendersWithMotion: !0,
                                          scopeId: `Ql1sfNpaE`,
                                          children: u(Se, {
                                            height: `100%`,
                                            id: `GgkmBikS3`,
                                            layoutId: `GgkmBikS3`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                            }),
                            u(M, {
                              links: [
                                { href: { webPageId: `rsFYOsZlS` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `rsFYOsZlS` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                u(O, {
                                  height: 32,
                                  y: (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2) + 8 + 0,
                                  ...Y(
                                    {
                                      bU9NaqYdW: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 200) - 0 - 400) / 2 + 0 + 0) +
                                          0 +
                                          336 +
                                          16,
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                  children: u(v, {
                                    className: `framer-1v43z4j-container`,
                                    layoutDependency: I,
                                    layoutId: `j2GHb5HTY-container`,
                                    nodeId: `j2GHb5HTY`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ql1sfNpaE`,
                                    children: u(we, {
                                      errt8torn: `Contact`,
                                      height: `100%`,
                                      id: `j2GHb5HTY`,
                                      layoutId: `j2GHb5HTY`,
                                      OY8OQlhvY: !0,
                                      variant: Z(`ubuftqAhL`),
                                      width: `100%`,
                                      zt8ifGc_Q: e[0],
                                      ...Y({ bU9NaqYdW: { zt8ifGc_Q: e[1] } }, j, P),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-5bgls.framer-10roimp, .framer-5bgls .framer-10roimp { display: block; }`,
          `.framer-5bgls.framer-qcrtwu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 16px 0px 16px; position: relative; width: 1200px; }`,
          `.framer-5bgls .framer-18dhp48 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-5bgls .framer-efmyi8, .framer-5bgls .framer-dga6ak { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5bgls .framer-1l5h1p8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 48px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-5bgls .framer-rfbnv9-container { flex: none; height: 34px; position: relative; width: 34px; z-index: 1; }`,
          `.framer-5bgls .framer-1cw79zu { flex: none; height: 24px; overflow: visible; position: relative; width: 1px; z-index: 1; }`,
          `.framer-5bgls .framer-16ahjtk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 8px 4px 8px; position: relative; width: min-content; }`,
          `.framer-5bgls .framer-o0mrql, .framer-5bgls .framer-131uu5w, .framer-5bgls .framer-32zr5g, .framer-5bgls .framer-1r2efyl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-5bgls .framer-598z2o { flex: none; height: 24px; overflow: visible; position: relative; width: 24px; }`,
          `.framer-5bgls .framer-8rbzif { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: 8px; width: 16px; }`,
          `.framer-5bgls .framer-pugzyz { bottom: 8px; flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; width: 16px; }`,
          `.framer-5bgls .framer-mdiqe4-container, .framer-5bgls .framer-wre5s5-container, .framer-5bgls .framer-12hsxtv-container, .framer-5bgls .framer-stecas-container, .framer-5bgls .framer-1p2j9w6-container, .framer-5bgls .framer-wjoehf-container, .framer-5bgls .framer-1v43z4j-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-5bgls .framer-17yi1t { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-5bgls .framer-119y192-container, .framer-5bgls .framer-1yzdk2p-container { flex: none; height: 32px; position: relative; width: 32px; }`,
          `.framer-5bgls .framer-s20nry, .framer-5bgls .framer-1p4u4vc, .framer-5bgls .framer-ry65pg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5bgls .framer-b7k00k, .framer-5bgls .framer-157k4sk, .framer-5bgls .framer-1wrwre { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: min-content; }`,
          `.framer-5bgls .framer-5qbjw8, .framer-5bgls .framer-15pg6bs, .framer-5bgls .framer-1yfd1kv { flex: none; height: 10px; left: calc(50.00000000000002% - 10px / 2); overflow: visible; position: absolute; top: -5px; width: 10px; z-index: 1; }`,
          `.framer-5bgls .framer-ns3vo2 { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 32px; }`,
          `.framer-5bgls .framer-mrzwkm-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-5bgls .framer-1ywmwgb-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-5bgls.framer-v-1h4ng2k.framer-qcrtwu, .framer-5bgls.framer-v-ys4ijm.framer-qcrtwu { flex-direction: column; padding: 0px; width: 390px; }`,
          `.framer-5bgls.framer-v-1h4ng2k .framer-18dhp48 { flex: none; width: 100%; }`,
          `.framer-5bgls.framer-v-1h4ng2k .framer-efmyi8 { flex: 1 0 0px; gap: unset; justify-content: space-between; padding: 0px 16px 0px 16px; width: 1px; }`,
          `.framer-5bgls.framer-v-1h4ng2k .framer-16ahjtk, .framer-5bgls.framer-v-ys4ijm .framer-16ahjtk { cursor: pointer; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-18dhp48 { flex: none; flex-direction: column; width: 100%; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-efmyi8 { gap: unset; justify-content: space-between; padding: 0px 16px 0px 16px; width: 100%; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-8rbzif { top: 11px; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-pugzyz { bottom: 11px; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-dga6ak { cursor: pointer; flex-direction: column; width: 100%; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-mdiqe4-container, .framer-5bgls.framer-v-ys4ijm .framer-wre5s5-container, .framer-5bgls.framer-v-ys4ijm .framer-12hsxtv-container, .framer-5bgls.framer-v-ys4ijm .framer-stecas-container, .framer-5bgls.framer-v-ys4ijm .framer-1p2j9w6-container, .framer-5bgls.framer-v-ys4ijm .framer-wjoehf-container { width: 100%; }`,
          `.framer-5bgls.framer-v-ys4ijm .framer-17yi1t { flex: none; padding: 16px; width: 100%; }`,
          ...P,
          ...ye,
          ...ge,
          `.framer-5bgls[data-border="true"]::after, .framer-5bgls [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-5bgls`
      )),
      ($.displayName = `Header`),
      ($.defaultProps = { height: 48, width: 1200 }),
      k($, {
        variant: {
          options: [`NGcJSwgb3`, `YyUvbynv5`, `bU9NaqYdW`],
          optionTitles: [`Desktop`, `Tablet + Mobile`, `Phone Opened`],
          title: `Variant`,
          type: j.Enum,
        },
        HbYglppp7: X?.variant && {
          ...X.variant,
          defaultValue: `yqU47cpyn`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Home`,
        },
        onHbYglppp7Change: { changes: `HbYglppp7`, type: j.ChangeHandler },
        WY7dqlcv7: X?.variant && {
          ...X.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `About`,
        },
        onWY7dqlcv7Change: { changes: `WY7dqlcv7`, type: j.ChangeHandler },
        NTJvsdeop: X?.variant && {
          ...X.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Services`,
        },
        onNTJvsdeopChange: { changes: `NTJvsdeop`, type: j.ChangeHandler },
        irwC6AhLd: X?.variant && {
          ...X.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Journal`,
        },
        onirwC6AhLdChange: { changes: `irwC6AhLd`, type: j.ChangeHandler },
        nQZdrLnnV: X?.variant && {
          ...X.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Case Study`,
        },
        onnQZdrLnnVChange: { changes: `nQZdrLnnV`, type: j.ChangeHandler },
        vGbeqFGq8: X?.variant && {
          ...X.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Play Around`,
        },
        onvGbeqFGq8Change: { changes: `vGbeqFGq8`, type: j.ChangeHandler },
      }),
      S(
        $,
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
          ...ht,
          ...gt,
          ..._t,
          ...yt,
          ...bt,
          ...xt,
          ...E(de),
          ...E(z),
          ...E(_e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          A([() => C(J, {}, t), () => C(q, {}, t), () => C(Se, {}, t), () => C(we, {}, t)], t),
      }));
  });
export { q as a, Be as c, mt as i, zt as n, tt as o, J as r, K as s, $ as t };
//# sourceMappingURL=Ql1sfNpaE.BjVtp0Dr.mjs.map
