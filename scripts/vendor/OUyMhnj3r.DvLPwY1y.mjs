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
  v as l,
  w as ee,
  x as u,
} from "./react.BDb-TZZO.mjs";
import { E as d, a as f, r as te, t as ne } from "./motion.DUnltMVz.mjs";
import {
  B as p,
  Ct as re,
  D as m,
  H as h,
  J as g,
  M as _,
  O as v,
  P as y,
  T as b,
  V as x,
  _t as ie,
  g as ae,
  i as S,
  k as C,
  lt as oe,
  m as se,
  nt as w,
  o as T,
  wt as E,
} from "./framer.Bi3K3xOo.mjs";
import { a as ce, c as D, o as O, s as k } from "./shared-lib.DAxb9xg1.mjs";
import { i as A, n as j, r as M, t as le } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { i as N, n as P, r as F, t as ue } from "./TI_CAjGBM.BACS-TeA.mjs";
import { n as I, t as de } from "./t4LSIy2Sl.D5gxG3a5.mjs";
import { n as L, t as R } from "./jUfJHCvjJ.DoUQs7YU.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  fe,
  Y,
  pe,
  X,
  me,
  he,
  Z,
  ge = e(() => {
    (i(),
      g(),
      ne(),
      r(),
      D(),
      A(),
      N(),
      I(),
      L(),
      (B = p(de)),
      (V = p(R)),
      (H = { bnTSrHTjV: { hover: !0 } }),
      (U = [`bnTSrHTjV`, `VwFvX__ug`]),
      (W = `framer-Jy5cO`),
      (G = { bnTSrHTjV: `framer-v-1o3bf4f`, VwFvX__ug: `framer-v-7e5lr4` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (J = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (fe = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (Y = { "Desktop + Tablet": `bnTSrHTjV`, Mobile: `VwFvX__ug` }),
      (pe = d.create(t)),
      (X = (e, t) => {
        let [n, r] = l(e),
          [i, a] = l(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (me = ({
        cover: e,
        cursor: t,
        height: n,
        id: r,
        link: i,
        shortDescription: a,
        tag1: o,
        tag2: s,
        tag3: c,
        title: l,
        width: ee,
        ...u
      }) => ({
        ...u,
        CVPDwhjsv: e ?? u.CVPDwhjsv,
        e4RP7oipI: c ?? u.e4RP7oipI ?? ``,
        fUieGlHaC: l ?? u.fUieGlHaC ?? ``,
        GV6qtoPTo: i ?? u.GV6qtoPTo,
        HHcdgI9hY: o ?? u.HHcdgI9hY ?? ``,
        hsDVGQ1Lm: t ?? u.hsDVGQ1Lm,
        mVwzj0Lnz: s ?? u.mVwzj0Lnz ?? ``,
        variant: Y[u.variant] ?? u.variant ?? `bnTSrHTjV`,
        y1NPIrKnB: a ?? u.y1NPIrKnB ?? ``,
      })),
      (he = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = E(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: l } = ie(),
            f = oe(),
            {
              style: ne,
              className: p,
              layoutId: g,
              variant: v,
              CVPDwhjsv: y,
              fUieGlHaC: x,
              y1NPIrKnB: C,
              HHcdgI9hY: w,
              onHHcdgI9hYChange: T,
              mVwzj0Lnz: E,
              e4RP7oipI: D,
              one4RP7oipIChange: O,
              hsDVGQ1Lm: k,
              GV6qtoPTo: A,
              ...j
            } = me(e),
            [M, N] = X(w, T),
            [P, F] = X(D, O),
            {
              baseVariant: I,
              classNames: L,
              clearLoadingGesture: B,
              gestureHandlers: V,
              gestureVariant: Y,
              isLoading: Z,
              setGestureState: ge,
              setVariant: _e,
              variants: Q,
            } = re({
              cycleOrder: U,
              defaultVariant: `bnTSrHTjV`,
              enabledGestures: H,
              ref: i,
              variant: v,
              variantClassNames: G,
            }),
            $ = he(e, Q),
            ve = _(W, ce, ue, le),
            ye = J(E);
          return s(te, {
            id: g ?? a,
            children: s(pe, {
              animate: Q,
              initial: !1,
              children: s(fe, {
                value: K,
                children: s(ae, {
                  href: A,
                  motionChild: !0,
                  nodeId: `bnTSrHTjV`,
                  openInNewTab: !1,
                  scopeId: `OUyMhnj3r`,
                  children: c(d.a, {
                    ...j,
                    ...V,
                    className: `${_(ve, `framer-1o3bf4f`, p, L)} framer-221pcm`,
                    "data-framer-cursor": k,
                    "data-framer-name": `Desktop + Tablet`,
                    layoutDependency: $,
                    layoutId: `bnTSrHTjV`,
                    ref: i,
                    style: { ...ne },
                    ...z({ VwFvX__ug: { "data-framer-name": `Mobile` } }, I, Y),
                    children: [
                      c(d.div, {
                        className: `framer-1r4ef1k`,
                        "data-framer-name": `Top Folder`,
                        layoutDependency: $,
                        layoutId: `Untd8_4s5`,
                        children: [
                          s(d.div, {
                            className: `framer-a89j1n`,
                            "data-framer-name": `Next Project`,
                            layoutDependency: $,
                            layoutId: `S2hRHmMuw`,
                            style: {
                              backgroundColor: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                            },
                            variants: {
                              "bnTSrHTjV-hover": {
                                backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              },
                            },
                            children: c(d.div, {
                              className: `framer-2mper4`,
                              "data-framer-name": `Date`,
                              layoutDependency: $,
                              layoutId: `zLz5wgI33`,
                              children: [
                                s(d.div, {
                                  className: `framer-1av1igv`,
                                  "data-framer-name": `Circle`,
                                  layoutDependency: $,
                                  layoutId: `K_BgnEgdK`,
                                  style: {
                                    backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                  },
                                  variants: {
                                    "bnTSrHTjV-hover": {
                                      backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                    },
                                  },
                                }),
                                s(b, {
                                  __fromCanvasComponent: !0,
                                  children: s(t, {
                                    children: s(d.p, {
                                      className: `framer-styles-preset-1833qg6`,
                                      "data-styles-preset": `jB2nPzqr7`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                      },
                                      children: `Next project`,
                                    }),
                                  }),
                                  className: `framer-foiz6`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `w1rAFC2X9`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                  },
                                  variants: {
                                    "bnTSrHTjV-hover": {
                                      "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...z(
                                    {
                                      "bnTSrHTjV-hover": {
                                        children: s(t, {
                                          children: s(d.p, {
                                            className: `framer-styles-preset-1833qg6`,
                                            "data-styles-preset": `jB2nPzqr7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                            },
                                            children: `Next project`,
                                          }),
                                        }),
                                      },
                                    },
                                    I,
                                    Y
                                  ),
                                }),
                              ],
                            }),
                          }),
                          s(de, {
                            animated: !0,
                            className: `framer-1t0n5cn`,
                            layoutDependency: $,
                            layoutId: `sIyOwt2NU`,
                            style: {
                              "--omwlqg": `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                            },
                            variants: {
                              "bnTSrHTjV-hover": {
                                "--omwlqg": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              },
                            },
                          }),
                        ],
                      }),
                      c(d.div, {
                        className: `framer-lzsb7o`,
                        "data-framer-name": `Content`,
                        layoutDependency: $,
                        layoutId: `bHVVwaMwV`,
                        style: {
                          backgroundColor: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                        },
                        variants: {
                          "bnTSrHTjV-hover": {
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          },
                        },
                        children: [
                          s(se, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2e3,
                              intrinsicWidth: 1500,
                              loading: h(
                                (f?.y || 0) + 0 + ((f?.height || 200) - 0 - 404 + 72 + 0) + 16
                              ),
                              pixelHeight: 2e3,
                              pixelWidth: 1500,
                              sizes: `max((${f?.width || `100vw`} - 88px) / 2, 1px)`,
                              ...q(y),
                            },
                            className: `framer-8z2y7j`,
                            "data-framer-name": `Image`,
                            layoutDependency: $,
                            layoutId: `Rl8PqOF78`,
                            ...z(
                              {
                                VwFvX__ug: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2e3,
                                    intrinsicWidth: 1500,
                                    loading: h(
                                      (f?.y || 0) +
                                        0 +
                                        ((f?.height || 200) - 0 - 624 + 40 + 0) +
                                        16 +
                                        0
                                    ),
                                    pixelHeight: 2e3,
                                    pixelWidth: 1500,
                                    sizes: `calc(${f?.width || `100vw`} - 32px)`,
                                    ...q(y),
                                  },
                                },
                              },
                              I,
                              Y
                            ),
                          }),
                          c(d.div, {
                            className: `framer-s5oe33`,
                            "data-framer-name": `Content`,
                            layoutDependency: $,
                            layoutId: `rSamAwO2K`,
                            children: [
                              c(d.div, {
                                className: `framer-1kh13l2`,
                                "data-framer-name": `Text`,
                                layoutDependency: $,
                                layoutId: `FHsci78W7`,
                                children: [
                                  s(b, {
                                    __fromCanvasComponent: !0,
                                    children: s(t, {
                                      children: s(d.h4, {
                                        className: `framer-styles-preset-jjv5nu`,
                                        "data-styles-preset": `TI_CAjGBM`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                        },
                                        children: `Content`,
                                      }),
                                    }),
                                    className: `framer-1sifz3j`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `YDL16sxE1`,
                                    style: {
                                      "--extracted-1eung3n": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: x,
                                    variants: {
                                      "bnTSrHTjV-hover": {
                                        "--extracted-1eung3n": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                      },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...z(
                                      {
                                        "bnTSrHTjV-hover": {
                                          children: s(t, {
                                            children: s(d.h4, {
                                              className: `framer-styles-preset-jjv5nu`,
                                              "data-styles-preset": `TI_CAjGBM`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                        },
                                        VwFvX__ug: {
                                          children: s(t, {
                                            children: s(d.h4, {
                                              className: `framer-styles-preset-jjv5nu`,
                                              "data-styles-preset": `TI_CAjGBM`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                        },
                                      },
                                      I,
                                      Y
                                    ),
                                  }),
                                  s(b, {
                                    __fromCanvasComponent: !0,
                                    children: s(t, {
                                      children: s(d.p, {
                                        className: `framer-styles-preset-163ovsm`,
                                        "data-styles-preset": `ptQSvPZIk`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9aa8d99c-a5bb-4541-a292-62e252d963bf, rgb(69, 71, 71)))`,
                                        },
                                        children: `Content`,
                                      }),
                                    }),
                                    className: `framer-qy8jfj`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `EaW2vR0lB`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-9aa8d99c-a5bb-4541-a292-62e252d963bf, rgb(69, 71, 71))`,
                                    },
                                    text: C,
                                    variants: {
                                      "bnTSrHTjV-hover": {
                                        "--extracted-r6o4lv": `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                                      },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...z(
                                      {
                                        "bnTSrHTjV-hover": {
                                          children: s(t, {
                                            children: s(d.p, {
                                              className: `framer-styles-preset-163ovsm`,
                                              "data-styles-preset": `ptQSvPZIk`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237)))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                        },
                                        VwFvX__ug: {
                                          children: s(t, {
                                            children: s(d.p, {
                                              className: `framer-styles-preset-163ovsm`,
                                              "data-styles-preset": `ptQSvPZIk`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9aa8d99c-a5bb-4541-a292-62e252d963bf, rgb(69, 71, 71)))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                        },
                                      },
                                      I,
                                      Y
                                    ),
                                  }),
                                ],
                              }),
                              c(d.div, {
                                className: `framer-1benhot`,
                                "data-framer-name": `Tag`,
                                layoutDependency: $,
                                layoutId: `V8JBlfqlO`,
                                children: [
                                  s(S, {
                                    height: 44,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      ((f?.height || 200) - 0 - 404 + 72 + 0) +
                                      48 +
                                      0 +
                                      192 +
                                      0,
                                    ...z(
                                      {
                                        VwFvX__ug: {
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            ((f?.height || 200) - 0 - 624 + 40 + 0) +
                                            16 +
                                            324 +
                                            0 +
                                            184 +
                                            0,
                                        },
                                      },
                                      I,
                                      Y
                                    ),
                                    children: s(m, {
                                      className: `framer-16m3lfb-container`,
                                      layoutDependency: $,
                                      layoutId: `cRkNCsokd-container`,
                                      nodeId: `cRkNCsokd`,
                                      rendersWithMotion: !0,
                                      scopeId: `OUyMhnj3r`,
                                      children: s(R, {
                                        Ha3WZBmxl: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        height: `100%`,
                                        id: `cRkNCsokd`,
                                        layoutId: `cRkNCsokd`,
                                        onrTmzt9HxoChange: N,
                                        rTmzt9Hxo: M,
                                        width: `100%`,
                                        WtvdAMl0x: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                      }),
                                    }),
                                  }),
                                  ye !== !1 &&
                                    s(S, {
                                      height: 44,
                                      y:
                                        (f?.y || 0) +
                                        0 +
                                        ((f?.height || 200) - 0 - 404 + 72 + 0) +
                                        48 +
                                        0 +
                                        192 +
                                        0,
                                      ...z(
                                        {
                                          VwFvX__ug: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              ((f?.height || 200) - 0 - 624 + 40 + 0) +
                                              16 +
                                              324 +
                                              0 +
                                              184 +
                                              0,
                                          },
                                        },
                                        I,
                                        Y
                                      ),
                                      children: s(m, {
                                        className: `framer-p6talu-container`,
                                        layoutDependency: $,
                                        layoutId: `MJxYMzUsp-container`,
                                        nodeId: `MJxYMzUsp`,
                                        rendersWithMotion: !0,
                                        scopeId: `OUyMhnj3r`,
                                        children: s(R, {
                                          Ha3WZBmxl: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                          height: `100%`,
                                          id: `MJxYMzUsp`,
                                          layoutId: `MJxYMzUsp`,
                                          onrTmzt9HxoChange: F,
                                          rTmzt9Hxo: P,
                                          width: `100%`,
                                          WtvdAMl0x: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            ],
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
          `.framer-Jy5cO.framer-221pcm, .framer-Jy5cO .framer-221pcm { display: block; }`,
          `.framer-Jy5cO.framer-1o3bf4f { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1000px; }`,
          `.framer-Jy5cO .framer-1r4ef1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-Jy5cO .framer-a89j1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 72px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 16px 0px 16px; position: relative; width: 200px; }`,
          `.framer-Jy5cO .framer-2mper4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-Jy5cO .framer-1av1igv { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 12px; }`,
          `.framer-Jy5cO .framer-foiz6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Jy5cO .framer-1t0n5cn { aspect-ratio: 1.1111111111111112 / 1; flex: none; height: auto; position: relative; width: 80px; }`,
          `.framer-Jy5cO .framer-lzsb7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
          `.framer-Jy5cO .framer-8z2y7j { aspect-ratio: 1.3333333333333333 / 1; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Jy5cO .framer-s5oe33 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-Jy5cO .framer-1kh13l2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Jy5cO .framer-1sifz3j { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Jy5cO .framer-qy8jfj { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Jy5cO .framer-1benhot { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Jy5cO .framer-16m3lfb-container, .framer-Jy5cO .framer-p6talu-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Jy5cO.framer-v-7e5lr4.framer-1o3bf4f { cursor: unset; width: 375px; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-a89j1n { height: 40px; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-1t0n5cn { width: 44px; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-lzsb7o { flex-direction: column; gap: 24px; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-8z2y7j { flex: none; width: 100%; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-s5oe33 { flex: none; gap: 16px; width: 100%; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-1kh13l2 { align-content: flex-start; align-items: flex-start; }`,
          `.framer-Jy5cO.framer-v-7e5lr4 .framer-1benhot { justify-content: flex-start; }`,
          ...O,
          ...P,
          ...j,
        ],
        `framer-Jy5cO`
      )),
      (Z.displayName = `Next Project`),
      (Z.defaultProps = { height: 446, width: 1e3 }),
      C(Z, {
        variant: {
          options: [`bnTSrHTjV`, `VwFvX__ug`],
          optionTitles: [`Desktop + Tablet`, `Mobile`],
          title: `Variant`,
          type: T.Enum,
        },
        CVPDwhjsv: { title: `Cover`, type: T.ResponsiveImage },
        fUieGlHaC: { defaultValue: ``, title: `Title`, type: T.String },
        onfUieGlHaCChange: { changes: `fUieGlHaC`, type: T.ChangeHandler },
        y1NPIrKnB: {
          defaultValue: ``,
          displayTextArea: !1,
          title: `Short Description`,
          type: T.String,
        },
        ony1NPIrKnBChange: { changes: `y1NPIrKnB`, type: T.ChangeHandler },
        HHcdgI9hY: { defaultValue: ``, title: `Tag 1`, type: T.String },
        onHHcdgI9hYChange: { changes: `HHcdgI9hY`, type: T.ChangeHandler },
        mVwzj0Lnz: { defaultValue: ``, title: `Tag 2`, type: T.String },
        onmVwzj0LnzChange: { changes: `mVwzj0Lnz`, type: T.ChangeHandler },
        e4RP7oipI: { defaultValue: ``, title: `Tag 3`, type: T.String },
        one4RP7oipIChange: { changes: `e4RP7oipI`, type: T.ChangeHandler },
        hsDVGQ1Lm: { title: `Cursor`, type: T.CustomCursor },
        GV6qtoPTo: { title: `Link`, type: T.Link },
      }),
      v(
        Z,
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
          ...B,
          ...V,
          ...x(k),
          ...x(F),
          ...x(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => w([() => y(R, {}, t)], t) }));
  });
export { ge as n, Z as t };
//# sourceMappingURL=OUyMhnj3r.DvLPwY1y.mjs.map
