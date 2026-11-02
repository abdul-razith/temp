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
  x as ee,
} from "./react.BDb-TZZO.mjs";
import { E as u, a as d, r as f, t as p } from "./motion.DUnltMVz.mjs";
import {
  B as m,
  Ct as te,
  D as h,
  Et as g,
  J as _,
  M as v,
  O as y,
  P as b,
  T as x,
  V as S,
  _t as C,
  i as w,
  k as T,
  lt as E,
  nt as D,
  o as O,
  wt as k,
} from "./framer.Bi3K3xOo.mjs";
import { a as ne, c as A, o as j, s as M } from "./shared-lib.DAxb9xg1.mjs";
import { n as re, t as N } from "./SVGComponent.CcbG4JSa.mjs";
import { n as P, t as F } from "./yRyDmqcvG.M-nrb9u_.mjs";
import {
  a as I,
  c as L,
  i as ie,
  n as ae,
  o as oe,
  r as R,
  s as z,
  t as se,
} from "./ptQSvPZIk.BLtTlgC6.mjs";
var B,
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
  $,
  ce = e(() => {
    (i(),
      _(),
      p(),
      r(),
      re(),
      A(),
      L(),
      ie(),
      P(),
      (B = m(N)),
      (V = m(F)),
      (H = g(u.div)),
      (U = `framer-XpcBM`),
      (W = { GtQ4XYGRF: `framer-v-1veqy74` }),
      (G = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (K = { damping: 30, delay: 0, mass: 3, stiffness: 400, type: `spring` }),
      (q = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (e, t) => `translate(-50%, -50%) ${t}`),
      (Y = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (X = u.create(t)),
      (Z = ({
        answer: e,
        bGIcon: t,
        borderReact: n,
        colorReact: r,
        height: i,
        iconReact: a,
        id: o,
        question: s,
        width: c,
        ...l
      }) => ({
        ...l,
        dgAViie3e:
          a ??
          l.dgAViie3e ??
          `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8422 8.33905C14.1047 7.99217 14.25 7.56717 14.25 7.12499C14.25 6.42342 13.8578 5.75936 13.2266 5.38905C13.0641 5.29373 12.879 5.24356 12.6906 5.24374H8.94375L9.0375 3.32342C9.05938 2.85936 8.89531 2.41874 8.57656 2.0828C8.42013 1.91722 8.23141 1.78548 8.02206 1.69571C7.8127 1.60595 7.58716 1.56008 7.35938 1.56092C6.54688 1.56092 5.82813 2.1078 5.6125 2.89061L4.27031 7.74999H4.26562V14.4375H11.6453C11.7891 14.4375 11.9297 14.4094 12.0594 14.3531C12.8031 14.0359 13.2828 13.3094 13.2828 12.5031C13.2828 12.3062 13.2547 12.1125 13.1984 11.925C13.4609 11.5781 13.6062 11.1531 13.6062 10.7109C13.6062 10.514 13.5781 10.3203 13.5219 10.1328C13.7844 9.78592 13.9297 9.36092 13.9297 8.91874C13.9266 8.72186 13.8984 8.52655 13.8422 8.33905ZM1.75 8.24999V13.9375C1.75 14.214 1.97344 14.4375 2.25 14.4375H3.26562V7.74999H2.25C1.97344 7.74999 1.75 7.97342 1.75 8.24999Z" fill="black"/>
</svg>
`,
        IUeobxgHJ:
          e ??
          l.IUeobxgHJ ??
          `Both. Alongside app/dashboard product design, Bejaman also designs websites and landing pages with a storytelling approach, not just visuals.`,
        p3WWqDzsE:
          r ?? l.p3WWqDzsE ?? `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
        PaKv0z7_4: n ??
          l.PaKv0z7_4 ?? {
            borderColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
        qcAgofAur: s ?? l.qcAgofAur ?? `Does Bejaman design websites, or only digital products?`,
        VytUwWJbU:
          t ??
          l.VytUwWJbU ??
          `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = k(
        o(function (e, n) {
          let r = ee(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: d } = C(),
            p = E(),
            {
              style: m,
              className: g,
              layoutId: _,
              variant: y,
              VytUwWJbU: b,
              qcAgofAur: S,
              dgAViie3e: T,
              p3WWqDzsE: D,
              PaKv0z7_4: O,
              IUeobxgHJ: k,
              ...A
            } = Z(e),
            {
              baseVariant: j,
              classNames: M,
              clearLoadingGesture: re,
              gestureHandlers: P,
              gestureVariant: L,
              isLoading: ie,
              setGestureState: ae,
              setVariant: oe,
              variants: R,
            } = te({ defaultVariant: `GtQ4XYGRF`, ref: i, variant: y, variantClassNames: W }),
            z = Q(e, R),
            B = v(U, se, I, ne);
          return s(f, {
            id: _ ?? a,
            children: s(X, {
              animate: R,
              initial: !1,
              children: s(Y, {
                value: q,
                children: c(H, {
                  ...A,
                  ...P,
                  __framer__animate: { transition: K },
                  __framer__animateOnce: !0,
                  __framer__enter: G,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: v(B, `framer-1veqy74`, g, M),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: z,
                  layoutId: `GtQ4XYGRF`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    boxShadow: `0px -10px 40px 0px rgba(0, 0, 0, 0.05)`,
                    ...m,
                  },
                  children: [
                    s(x, {
                      __fromCanvasComponent: !0,
                      children: s(t, {
                        children: s(u.p, {
                          className: `framer-styles-preset-163ovsm`,
                          "data-styles-preset": `ptQSvPZIk`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-94d217a4-b19e-496f-a9f0-41c83f611b07, rgb(118, 119, 119)))`,
                          },
                          children: `Question`,
                        }),
                      }),
                      className: `framer-1nr62ao`,
                      fonts: [`Inter`],
                      layoutDependency: z,
                      layoutId: `S5mpY1zAh`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-94d217a4-b19e-496f-a9f0-41c83f611b07, rgb(118, 119, 119))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    s(u.div, {
                      className: `framer-zgsgnp`,
                      "data-framer-name": `Line`,
                      layoutDependency: z,
                      layoutId: `fbcqeR8yd`,
                      style: {
                        backgroundColor: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(226, 226, 226))`,
                      },
                    }),
                    c(u.div, {
                      className: `framer-y14uf4`,
                      "data-framer-name": `2 Comments`,
                      layoutDependency: z,
                      layoutId: `jGUydwRuM`,
                      children: [
                        c(u.div, {
                          className: `framer-9horxc`,
                          "data-framer-name": `Content`,
                          layoutDependency: z,
                          layoutId: `wHi3IJlcP`,
                          children: [
                            s(u.div, {
                              className: `framer-a8usfk`,
                              layoutDependency: z,
                              layoutId: `CaB8qJb2Z`,
                              style: {
                                backgroundColor: b,
                                borderBottomLeftRadius: 32,
                                borderBottomRightRadius: 32,
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 32,
                              },
                              children: s(w, {
                                children: s(h, {
                                  className: `framer-uovzwb-container`,
                                  "data-code-component-plugin-id": `84d4c1`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: z,
                                  layoutId: `pDr_hVTF8-container`,
                                  nodeId: `pDr_hVTF8`,
                                  rendersWithMotion: !0,
                                  scopeId: `zgPgqLLcU`,
                                  transformTemplate: J,
                                  children: s(N, {
                                    color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                    height: `100%`,
                                    id: `pDr_hVTF8`,
                                    layoutId: `pDr_hVTF8`,
                                    stroke: !1,
                                    strokeColor: `rgb(0, 0, 0)`,
                                    style: { height: `100%`, width: `100%` },
                                    svgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.845 2 9.73735 2.4795 8.92066 3.33301C8.10397 4.18652 7.64516 5.34413 7.64516 6.55118C7.64516 7.75823 8.10397 8.91584 8.92066 9.76935C9.73735 10.6229 10.845 11.1024 12 11.1024C13.155 11.1024 14.2626 10.6229 15.0793 9.76935C15.896 8.91584 16.3548 7.75823 16.3548 6.55118C16.3548 5.34413 15.896 4.18652 15.0793 3.33301C14.2626 2.4795 13.155 2 12 2ZM7.35484 13.5297C6.19986 13.5297 5.09219 14.0091 4.2755 14.8627C3.45881 15.7162 3 16.8738 3 18.0808V19.5226C3 20.4377 3.63406 21.2169 4.49806 21.3637C9.46606 22.2121 14.5339 22.2121 19.5019 21.3637C19.9198 21.2919 20.2997 21.0674 20.574 20.7303C20.8483 20.3931 20.9993 19.9652 21 19.5226V18.0808C21 16.8738 20.5412 15.7162 19.7245 14.8627C18.9078 14.0091 17.8001 13.5297 16.6452 13.5297H16.2503C16.0335 13.5305 15.823 13.5653 15.6186 13.634L14.6129 13.9775C12.9151 14.5568 11.0849 14.5568 9.3871 13.9775L8.38142 13.634C8.17758 13.5657 7.96491 13.5305 7.75084 13.5297H7.35484Z" fill="black"/>
</svg>
`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            c(u.div, {
                              className: `framer-k3l9rd`,
                              "data-framer-name": `Text + Icon`,
                              layoutDependency: z,
                              layoutId: `VDQ3Q6Eww`,
                              children: [
                                c(u.div, {
                                  className: `framer-davbjb`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: z,
                                  layoutId: `Ysizt81Nb`,
                                  children: [
                                    s(x, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(u.p, {
                                          className: `framer-styles-preset-163ovsm`,
                                          "data-styles-preset": `ptQSvPZIk`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171)))`,
                                          },
                                          children: `User`,
                                        }),
                                      }),
                                      className: `framer-g4iw1u`,
                                      fonts: [`Inter`],
                                      layoutDependency: z,
                                      layoutId: `CJtryCSqZ`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(x, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(u.h5, {
                                          className: `framer-styles-preset-7q6rdi`,
                                          "data-styles-preset": `JCTbwXFKE`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                          },
                                          children: `Does Bejaman design websites, or only digital products?`,
                                        }),
                                      }),
                                      className: `framer-newkbl`,
                                      fonts: [`Inter`],
                                      layoutDependency: z,
                                      layoutId: `JRIUzCgJR`,
                                      style: {
                                        "--extracted-1lwpl3i": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: S,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(u.div, {
                                  className: `framer-xvgca`,
                                  "data-border": !0,
                                  "data-framer-name": `React`,
                                  layoutDependency: z,
                                  layoutId: `QamdRAooH`,
                                  style: {
                                    "--border-bottom-width":
                                      (O?.borderBottomWidth ?? O?.borderWidth) + `px`,
                                    "--border-color": O?.borderColor,
                                    "--border-left-width":
                                      (O?.borderLeftWidth ?? O?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (O?.borderRightWidth ?? O?.borderWidth) + `px`,
                                    "--border-style": O?.borderStyle,
                                    "--border-top-width":
                                      (O?.borderTopWidth ?? O?.borderWidth) + `px`,
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    borderTopLeftRadius: 4,
                                    borderTopRightRadius: 4,
                                  },
                                  children: [
                                    s(u.div, {
                                      className: `framer-1o3exdt`,
                                      "data-framer-name": `BG Color`,
                                      layoutDependency: z,
                                      layoutId: `VYMP083OV`,
                                      style: { backgroundColor: D, opacity: 0.15 },
                                    }),
                                    s(w, {
                                      children: s(h, {
                                        className: `framer-mu9rsq-container`,
                                        "data-code-component-plugin-id": `84d4c1`,
                                        isAuthoredByUser: !0,
                                        layoutDependency: z,
                                        layoutId: `f_EvfG21O-container`,
                                        nodeId: `f_EvfG21O`,
                                        rendersWithMotion: !0,
                                        scopeId: `zgPgqLLcU`,
                                        children: s(N, {
                                          color: D,
                                          height: `100%`,
                                          id: `f_EvfG21O`,
                                          layoutId: `f_EvfG21O`,
                                          stroke: !1,
                                          strokeColor: `rgb(0, 0, 0)`,
                                          style: { height: `100%`, width: `100%` },
                                          svgCode: T,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    s(x, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(u.p, {
                                          className: `framer-styles-preset-1833qg6`,
                                          "data-styles-preset": `jB2nPzqr7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                          },
                                          children: `1`,
                                        }),
                                      }),
                                      className: `framer-1v8v8le`,
                                      fonts: [`Inter`],
                                      layoutDependency: z,
                                      layoutId: `p93lPPYAZ`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c(u.div, {
                          className: `framer-13eoqms`,
                          "data-framer-name": `Content`,
                          layoutDependency: z,
                          layoutId: `WdJjhQwsY`,
                          children: [
                            s(w, {
                              height: 48,
                              width: `48px`,
                              y:
                                (p?.y || 0) +
                                16 +
                                (((p?.height || 395) - 32 - 502.2) / 2 + 113 + 24) +
                                0 +
                                221.2 +
                                0,
                              children: s(h, {
                                className: `framer-1wwtc3p-container`,
                                layoutDependency: z,
                                layoutId: `XfaMQ18eb-container`,
                                nodeId: `XfaMQ18eb`,
                                rendersWithMotion: !0,
                                scopeId: `zgPgqLLcU`,
                                children: s(F, {
                                  height: `100%`,
                                  id: `XfaMQ18eb`,
                                  layoutId: `XfaMQ18eb`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            s(u.div, {
                              className: `framer-118ejbm`,
                              "data-framer-name": `Text`,
                              layoutDependency: z,
                              layoutId: `IU9OjmbXW`,
                              style: {
                                backgroundColor: `var(--token-f3fe21e3-0094-4480-b0bd-3d122b4528c2, rgb(241, 241, 241))`,
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                              },
                              children: s(x, {
                                __fromCanvasComponent: !0,
                                children: s(t, {
                                  children: s(u.p, {
                                    className: `framer-styles-preset-163ovsm`,
                                    "data-styles-preset": `ptQSvPZIk`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                    },
                                    children: `Both. Alongside app/dashboard product design, Bejaman also designs websites and landing pages with a storytelling approach, not just visuals.`,
                                  }),
                                }),
                                className: `framer-mv8mks`,
                                fonts: [`Inter`],
                                layoutDependency: z,
                                layoutId: `gMJGjb6X6`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: k,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-XpcBM.framer-l8jezy, .framer-XpcBM .framer-l8jezy { display: block; }`,
          `.framer-XpcBM.framer-1veqy74 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 405px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XpcBM .framer-1nr62ao, .framer-XpcBM .framer-g4iw1u, .framer-XpcBM .framer-mv8mks { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-XpcBM .framer-zgsgnp { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-XpcBM .framer-y14uf4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-XpcBM .framer-9horxc, .framer-XpcBM .framer-13eoqms { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-XpcBM .framer-a8usfk { flex: none; height: 48px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XpcBM .framer-uovzwb-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 24px; }`,
          `.framer-XpcBM .framer-k3l9rd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-XpcBM .framer-davbjb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-XpcBM .framer-newkbl { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 500px; position: relative; width: 100%; }`,
          `.framer-XpcBM .framer-xvgca { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-XpcBM .framer-1o3exdt { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-XpcBM .framer-mu9rsq-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-XpcBM .framer-1v8v8le { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-XpcBM .framer-1wwtc3p-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 48px; }`,
          `.framer-XpcBM .framer-118ejbm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          ...ae,
          ...oe,
          ...j,
          `.framer-XpcBM[data-border="true"]::after, .framer-XpcBM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-XpcBM`
      )),
      ($.displayName = `FAQ`),
      ($.defaultProps = { height: 395, width: 405 }),
      T($, {
        VytUwWJbU: {
          defaultValue: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248)) /* {"name":"Primary100"} */`,
          title: `BG Icon`,
          type: O.Color,
        },
        qcAgofAur: {
          defaultValue: `Does Bejaman design websites, or only digital products?`,
          displayTextArea: !1,
          title: `Question`,
          type: O.String,
        },
        onqcAgofAurChange: { changes: `qcAgofAur`, type: O.ChangeHandler },
        dgAViie3e: {
          defaultValue: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8422 8.33905C14.1047 7.99217 14.25 7.56717 14.25 7.12499C14.25 6.42342 13.8578 5.75936 13.2266 5.38905C13.0641 5.29373 12.879 5.24356 12.6906 5.24374H8.94375L9.0375 3.32342C9.05938 2.85936 8.89531 2.41874 8.57656 2.0828C8.42013 1.91722 8.23141 1.78548 8.02206 1.69571C7.8127 1.60595 7.58716 1.56008 7.35938 1.56092C6.54688 1.56092 5.82813 2.1078 5.6125 2.89061L4.27031 7.74999H4.26562V14.4375H11.6453C11.7891 14.4375 11.9297 14.4094 12.0594 14.3531C12.8031 14.0359 13.2828 13.3094 13.2828 12.5031C13.2828 12.3062 13.2547 12.1125 13.1984 11.925C13.4609 11.5781 13.6062 11.1531 13.6062 10.7109C13.6062 10.514 13.5781 10.3203 13.5219 10.1328C13.7844 9.78592 13.9297 9.36092 13.9297 8.91874C13.9266 8.72186 13.8984 8.52655 13.8422 8.33905ZM1.75 8.24999V13.9375C1.75 14.214 1.97344 14.4375 2.25 14.4375H3.26562V7.74999H2.25C1.97344 7.74999 1.75 7.97342 1.75 8.24999Z" fill="black"/>
</svg>
`,
          displayTextArea: !0,
          title: `Icon React`,
          type: O.String,
        },
        ondgAViie3eChange: { changes: `dgAViie3e`, type: O.ChangeHandler },
        p3WWqDzsE: {
          defaultValue: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
          title: `Color React`,
          type: O.Color,
        },
        PaKv0z7_4: {
          defaultValue: {
            borderColor: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
          title: `Border React`,
          type: O.Border,
        },
        IUeobxgHJ: {
          defaultValue: `Both. Alongside app/dashboard product design, Bejaman also designs websites and landing pages with a storytelling approach, not just visuals.`,
          displayTextArea: !0,
          title: `Answer`,
          type: O.String,
        },
        onIUeobxgHJChange: { changes: `IUeobxgHJ`, type: O.ChangeHandler },
      }),
      y(
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
          ...B,
          ...V,
          ...S(R),
          ...S(z),
          ...S(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => D([() => b(F, {}, t)], t) }));
  });
export { ce as n, $ as t };
//# sourceMappingURL=zgPgqLLcU.CJGjQOoQ.mjs.map
