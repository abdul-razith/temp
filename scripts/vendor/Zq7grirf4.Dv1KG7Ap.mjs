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
  J as v,
  M as y,
  O as b,
  T as x,
  V as S,
  _t as C,
  ct as w,
  g as T,
  i as E,
  k as D,
  lt as O,
  o as k,
  wt as A,
} from "./framer.Bi3K3xOo.mjs";
import { n as j, t as M } from "./SVGComponent.CcbG4JSa.mjs";
import { i as N, n as P, r as F, t as I } from "./MffBJovlA.DNehB8j9.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
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
  X = e(() => {
    (i(),
      v(),
      m(),
      r(),
      j(),
      N(),
      (R = h(M)),
      (z = { f_D_QmORM: { hover: !0 }, ubuftqAhL: { hover: !0 }, ypBdqWJVj: { hover: !0 } }),
      (B = [`ubuftqAhL`, `ypBdqWJVj`, `f_D_QmORM`]),
      (V = `framer-YVcpB`),
      (H = {
        f_D_QmORM: `framer-v-kxlijb`,
        ubuftqAhL: `framer-v-9o7ndm`,
        ypBdqWJVj: `framer-v-11ob9oj`,
      }),
      (U = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (W = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (G = { "Dark Button": `ypBdqWJVj`, "White Button": `f_D_QmORM`, Default: `ubuftqAhL` }),
      (K = d.create(t)),
      (q = ({ click: e, height: t, id: n, link: r, showIcon: i, title: a, width: o, ...s }) => ({
        ...s,
        cUOC4w3WT: e ?? s.cUOC4w3WT,
        errt8torn: a ?? s.errt8torn ?? `Contact`,
        OY8OQlhvY: i ?? s.OY8OQlhvY ?? !0,
        variant: G[s.variant] ?? s.variant ?? `ubuftqAhL`,
        zt8ifGc_Q: r ?? s.zt8ifGc_Q,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = A(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: f } = C();
          O();
          let {
              style: m,
              className: h,
              layoutId: v,
              variant: b,
              cUOC4w3WT: S,
              zt8ifGc_Q: D,
              errt8torn: k,
              OY8OQlhvY: A,
              ...j
            } = q(e),
            {
              baseVariant: N,
              classNames: P,
              clearLoadingGesture: F,
              gestureHandlers: R,
              gestureVariant: G,
              isLoading: Y,
              setGestureState: X,
              setVariant: ee,
              variants: Z,
            } = g({
              cycleOrder: B,
              defaultVariant: `ubuftqAhL`,
              enabledGestures: z,
              ref: i,
              variant: b,
              variantClassNames: H,
            }),
            Q = J(e, Z),
            { activeVariantCallback: $, delay: te } = w(N),
            ne = $(async (...e) => {
              if ((X({ isPressed: !1 }), S && (await S(...e)) === !1)) return !1;
            }),
            re = y(V, I);
          return s(p, {
            id: v ?? a,
            children: s(K, {
              animate: Z,
              initial: !1,
              children: s(W, {
                value: U,
                children: s(T, {
                  href: D,
                  motionChild: !0,
                  nodeId: `ubuftqAhL`,
                  openInNewTab: !1,
                  scopeId: `Zq7grirf4`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...j,
                    ...R,
                    className: `${y(re, `framer-9o7ndm`, h, P)} framer-11o3b02`,
                    "data-border": !0,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: Q,
                    layoutId: `ubuftqAhL`,
                    onTap: ne,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      ...m,
                    },
                    variants: {
                      "f_D_QmORM-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                      "ubuftqAhL-hover": {
                        backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                      },
                      "ypBdqWJVj-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                      f_D_QmORM: {
                        "--border-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      ypBdqWJVj: {
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                    },
                    ...L(
                      {
                        "f_D_QmORM-hover": { "data-framer-name": void 0 },
                        "ubuftqAhL-hover": { "data-framer-name": void 0 },
                        "ypBdqWJVj-hover": { "data-framer-name": void 0 },
                        f_D_QmORM: { "data-framer-name": `White Button` },
                        ypBdqWJVj: { "data-framer-name": `Dark Button` },
                      },
                      N,
                      G
                    ),
                    children: [
                      A !== !1 &&
                        s(E, {
                          children: s(_, {
                            className: `framer-ijnmpo-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            layoutDependency: Q,
                            layoutId: `m1bXFVwNd-container`,
                            nodeId: `m1bXFVwNd`,
                            rendersWithMotion: !0,
                            scopeId: `Zq7grirf4`,
                            style: { rotate: 0 },
                            variants: {
                              "f_D_QmORM-hover": { rotate: 0 },
                              "ubuftqAhL-hover": { rotate: 0 },
                              "ypBdqWJVj-hover": { rotate: 0 },
                              f_D_QmORM: { rotate: -45 },
                              ypBdqWJVj: { rotate: -45 },
                            },
                            children: s(M, {
                              color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              height: `100%`,
                              id: `m1bXFVwNd`,
                              layoutId: `m1bXFVwNd`,
                              stroke: !1,
                              strokeColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              style: { height: `100%`, width: `100%` },
                              svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M141.973 85.5469C106.123 54.7091 52.0556 58.797 21.2493 94.6746C-9.51888 130.508 -5.43715 184.493 30.3689 215.293L176.234 340.762L177.378 342.095L177.581 341.921L177.783 342.095L178.928 340.762L324.793 215.293C360.599 184.493 364.681 130.508 333.912 94.6746C303.106 58.797 249.039 54.7091 213.188 85.5469L177.581 116.176L141.973 85.5469Z" fill="#F4ADB3"/>
</svg>
`,
                              width: `100%`,
                              ...L(
                                {
                                  "ubuftqAhL-hover": {
                                    color: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                  },
                                  f_D_QmORM: {
                                    color: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                    strokeColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                    svgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99984 13.0001L3.99984 11.0001L15.9998 11.0001L10.4998 5.50008L11.9198 4.08008L19.8398 12.0001L11.9198 19.9201L10.4998 18.5001L15.9998 13.0001L3.99984 13.0001Z" fill="black"/>
</svg>
`,
                                  },
                                  ypBdqWJVj: {
                                    svgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99984 13.0001L3.99984 11.0001L15.9998 11.0001L10.4998 5.50008L11.9198 4.08008L19.8398 12.0001L11.9198 19.9201L10.4998 18.5001L15.9998 13.0001L3.99984 13.0001Z" fill="black"/>
</svg>
`,
                                  },
                                },
                                N,
                                G
                              ),
                            }),
                          }),
                        }),
                      s(x, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-27ku3y`,
                            "data-styles-preset": `MffBJovlA`,
                            dir: `auto`,
                            children: `Contact`,
                          }),
                        }),
                        className: `framer-ar7qgq`,
                        fonts: [`Inter`],
                        layoutDependency: Q,
                        layoutId: `Xpw_6LmHA`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: k,
                        variants: {
                          "ubuftqAhL-hover": {
                            "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                          },
                          f_D_QmORM: {
                            "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...L(
                          {
                            "ubuftqAhL-hover": {
                              children: s(t, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-27ku3y`,
                                  "data-styles-preset": `MffBJovlA`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Contact`,
                                }),
                              }),
                            },
                            f_D_QmORM: {
                              children: s(t, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-27ku3y`,
                                  "data-styles-preset": `MffBJovlA`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Contact`,
                                }),
                              }),
                            },
                          },
                          N,
                          G
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
          `.framer-YVcpB.framer-11o3b02, .framer-YVcpB .framer-11o3b02 { display: block; }`,
          `.framer-YVcpB.framer-9o7ndm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-YVcpB .framer-ijnmpo-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; z-index: 1; }`,
          `.framer-YVcpB .framer-ar7qgq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YVcpB.framer-v-11ob9oj.framer-9o7ndm, .framer-YVcpB.framer-v-kxlijb.framer-9o7ndm { padding: 8px 0px 8px 0px; }`,
          `.framer-YVcpB.framer-v-11ob9oj .framer-ijnmpo-container, .framer-YVcpB.framer-v-kxlijb .framer-ijnmpo-container { order: 1; }`,
          `.framer-YVcpB.framer-v-11ob9oj .framer-ar7qgq, .framer-YVcpB.framer-v-kxlijb .framer-ar7qgq { order: 0; }`,
          `.framer-YVcpB.framer-v-11ob9oj.hover.framer-9o7ndm, .framer-YVcpB.framer-v-kxlijb.hover.framer-9o7ndm { padding: 8px; }`,
          ...P,
          `.framer-YVcpB[data-border="true"]::after, .framer-YVcpB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-YVcpB`
      )),
      (Y.displayName = `Button`),
      (Y.defaultProps = { height: 32, width: 112 }),
      D(Y, {
        variant: {
          options: [`ubuftqAhL`, `ypBdqWJVj`, `f_D_QmORM`],
          optionTitles: [`Default`, `Dark Button`, `White Button`],
          title: `Variant`,
          type: k.Enum,
        },
        cUOC4w3WT: { title: `Click`, type: k.EventHandler },
        zt8ifGc_Q: { title: `Link`, type: k.Link },
        errt8torn: { defaultValue: `Contact`, displayTextArea: !1, title: `Title`, type: k.String },
        onerrt8tornChange: { changes: `errt8torn`, type: k.ChangeHandler },
        OY8OQlhvY: { defaultValue: !0, title: `Show Icon`, type: k.Boolean },
        onOY8OQlhvYChange: { changes: `OY8OQlhvY`, type: k.ChangeHandler },
      }),
      b(
        Y,
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
          ...R,
          ...S(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=Zq7grirf4.Dv1KG7Ap.mjs.map
