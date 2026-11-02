import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  l as ee,
  m as te,
  s as o,
  u as s,
  w as ne,
  x as re,
} from "./react.BDb-TZZO.mjs";
import { E as c, a as ie, r as l, t as u } from "./motion.DUnltMVz.mjs";
import {
  B as d,
  J as ae,
  M as f,
  O as p,
  P as m,
  St as oe,
  T as se,
  V as h,
  _t as ce,
  a as g,
  b as le,
  bt as _,
  et as v,
  f as y,
  ft as ue,
  gt as de,
  i as b,
  lt as fe,
  mt as x,
  n as pe,
  nt as S,
  pt as me,
  rt as he,
  vt as ge,
  w as _e,
  wt as C,
  x as w,
} from "./framer.Bi3K3xOo.mjs";
import { i as T, r as E } from "./shared-lib.DAxb9xg1.mjs";
import { n as D, t as O } from "./VtZoRV2tQ.D294Z8Kc.mjs";
import { n as k, t as ve } from "./Lenis.Bav3QMVP.mjs";
import { i as ye, t as be } from "./hu3yniggG.DmEUKfyJ.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./Iep6i79Kc.D1awO1TT.mjs";
import { n as Te, t as A } from "./sIdehpYTO.wY8F-JBX.mjs";
import Ee, { t as De } from "./O7QjeVyujuu4CFRQ-1tC5X78TrB0nYTHuKZ3MB7G0ik.Bp5snbKC.mjs";
var j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (i(),
    ae(),
    u(),
    r(),
    k(),
    Te(),
    D(),
    T(),
    ye(),
    xe(),
    De(),
    (j = d(ve)),
    (M = d(E)),
    (N = d(A)),
    (P = d(O)),
    (F = {
      D1z13GAFz: `(min-width: 810px) and (max-width: 1199.98px)`,
      pYTGc8eAp: `(min-width: 1200px)`,
      u8wuLOmSr: `(max-width: 809.98px)`,
    }),
    (I = []),
    (L = `framer-IX68f`),
    (R = {
      D1z13GAFz: `framer-v-1yqm1cj`,
      pYTGc8eAp: `framer-v-1icv9fb`,
      u8wuLOmSr: `framer-v-1gihznu`,
    }),
    (z = (e, t, n) => (e && t ? `position` : n)),
    (B = {
      effect: { opacity: 0.001, rotate: 0, scale: 0.9, skewX: 0, skewY: 0, x: 40, y: 0 },
      repeat: !1,
      startDelay: 0,
      threshold: 0.5,
      tokenization: `character`,
      transition: { damping: 40, delay: 0.03, mass: 4, stiffness: 400, type: `spring` },
      trigger: `onInView`,
      type: `appear`,
    }),
    (V = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (H = { dateStyle: `medium`, timeZone: `UTC` }),
    (U = (e, t) => V(e, H, t)),
    (W = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (K = () => ({
      from: { alias: `ftthz8Ycm`, data: be, type: `Collection` },
      select: [
        { collection: `ftthz8Ycm`, name: `N9PVOHoUg`, type: `Identifier` },
        { collection: `ftthz8Ycm`, name: `v80eqeLsH`, type: `Identifier` },
        { collection: `ftthz8Ycm`, name: `rAITKxrzh`, type: `Identifier` },
        { collection: `ftthz8Ycm`, name: `rS05UF0Io`, type: `Identifier` },
        { collection: `ftthz8Ycm`, name: `KVCXsWDZS`, type: `Identifier` },
        { collection: `ftthz8Ycm`, name: `id`, type: `Identifier` },
      ],
    })),
    (q = ({ query: e, pageSize: t, children: n }) => n(_(e))),
    (J = { Desktop: `pYTGc8eAp`, Phone: `u8wuLOmSr`, Tablet: `D1z13GAFz` }),
    (Y = ({ value: e }) =>
      x()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `pYTGc8eAp`,
    })),
    (Z = { component: O, variant: `EFVy2p6H0` }),
    (Q = C(
      te(function (e, r) {
        let i = re(null),
          te = r ?? i,
          u = ne(),
          { activeLocale: d, setLocale: ae } = ce(),
          p = fe(),
          { style: m, className: h, layoutId: _, variant: v, ...x } = X(e);
        ge(n(() => Ee({}, d), [d]));
        let [S, he] = me(v, F, !1),
          C = f(L, we),
          T = a(y)?.isLayoutTemplate,
          D = !!a(ie)?.transition?.layout,
          O = z(T, D),
          k = de();
        return (
          oe(),
          ue({ "1jx41yq": Z }),
          o(y.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: J,
              primaryVariantId: `pYTGc8eAp`,
              variantClassNames: R,
            },
            children: s(l, {
              id: _ ?? u,
              children: [
                o(Y, {
                  value: `html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`,
                }),
                s(c.div, {
                  ...x,
                  className: f(C, `framer-1icv9fb`, h),
                  ref: te,
                  style: { ...m },
                  children: [
                    o(b, {
                      children: o(g, {
                        className: `framer-z9msoz-container`,
                        "data-framer-name": `Smooth Scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: O,
                        layoutScroll: !0,
                        name: `Smooth Scroll`,
                        nodeId: `MHDtAGakY`,
                        scopeId: `xZeukHXrK`,
                        children: o(ve, {
                          height: `100%`,
                          id: `MHDtAGakY`,
                          infinite: !1,
                          intensity: 5,
                          layoutId: `MHDtAGakY`,
                          name: `Smooth Scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(c.div, {
                      className: `framer-am084x`,
                      "data-framer-name": `All Content`,
                      layout: O,
                      children: [
                        o(b, {
                          children: o(g, {
                            className: `framer-7lgw6g-container`,
                            isAuthoredByUser: !0,
                            nodeId: `V_8KrMcSH`,
                            scopeId: `xZeukHXrK`,
                            children: o(E, {
                              color: `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                              height: `100%`,
                              id: `V_8KrMcSH`,
                              layoutId: `V_8KrMcSH`,
                              majorStep: 100,
                              speed: 0.2,
                              style: { width: `100%` },
                              subdivisions: 2,
                              width: `100%`,
                            }),
                          }),
                        }),
                        o(`section`, {
                          className: `framer-zz0cz0`,
                          "data-framer-name": `Content`,
                          children: s(`div`, {
                            className: `framer-jgplzk`,
                            "data-framer-name": `Contain`,
                            children: [
                              o(se, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(`h1`, {
                                    className: `framer-styles-preset-4nri6j`,
                                    "data-styles-preset": `Iep6i79Kc`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                    },
                                    children: `Case studies`,
                                  }),
                                }),
                                className: `framer-flgjia`,
                                effect: B,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(`div`, {
                                className: `framer-1bq5bhj`,
                                children: o(pe, {
                                  children: o(q, {
                                    query: K(),
                                    children: (e, t, n) =>
                                      o(ee, {
                                        children: e?.map(
                                          (
                                            {
                                              id: e,
                                              KVCXsWDZS: t,
                                              N9PVOHoUg: n,
                                              rAITKxrzh: r,
                                              rS05UF0Io: i,
                                              v80eqeLsH: a,
                                            },
                                            ee
                                          ) => (
                                            (r ??= ``),
                                            (i ??= ``),
                                            (t ??= ``),
                                            o(
                                              l,
                                              {
                                                id: `ftthz8Ycm-${e}`,
                                                children: o(le.Provider, {
                                                  value: { KVCXsWDZS: t },
                                                  children: o(`div`, {
                                                    className: `framer-1fx0h3y`,
                                                    children: o(_e, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { KVCXsWDZS: t },
                                                            webPageId: `ooP4yMWDH`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { KVCXsWDZS: t },
                                                            webPageId: `ooP4yMWDH`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { KVCXsWDZS: t },
                                                            webPageId: `ooP4yMWDH`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        o(w, {
                                                          breakpoint: S,
                                                          overrides: {
                                                            D1z13GAFz: {
                                                              height: 500,
                                                              width: `max(max((min(${p?.width || `100vw`} - 80px, 1800px) - 32px) / 2, 50px), 1px)`,
                                                              y:
                                                                (p?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                            u8wuLOmSr: {
                                                              height: 500,
                                                              width: `max(max(min(${p?.width || `100vw`} - 32px, 1800px), 50px), 1px)`,
                                                              y:
                                                                (p?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: o(b, {
                                                            height: 700,
                                                            width: `max(max((min(${p?.width || `100vw`} - 200px, 1800px) - 56px) / 2, 50px), 1px)`,
                                                            y:
                                                              (p?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: o(g, {
                                                              className: `framer-n2jx13-container`,
                                                              nodeId: `RvxqMIgEQ`,
                                                              scopeId: `xZeukHXrK`,
                                                              children: o(w, {
                                                                breakpoint: S,
                                                                overrides: {
                                                                  D1z13GAFz: {
                                                                    uPPWxacbW: e[1],
                                                                    variant: G(`GOV2Nz6gM`),
                                                                  },
                                                                  u8wuLOmSr: {
                                                                    uPPWxacbW: e[2],
                                                                    variant: G(`GOV2Nz6gM`),
                                                                  },
                                                                },
                                                                children: o(A, {
                                                                  cVyaClw4d: U(n, k),
                                                                  f5kWVydGz: r,
                                                                  gM3jiPhHN: W(a),
                                                                  height: `100%`,
                                                                  id: `RvxqMIgEQ`,
                                                                  iTSHuycxR: `1jx41yq`,
                                                                  layoutId: `RvxqMIgEQ`,
                                                                  N4yte788s: i,
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                  uPPWxacbW: e[0],
                                                                  variant: G(`zSrutOacH`),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              e
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-IX68f.framer-a8j6nc, .framer-IX68f .framer-a8j6nc { display: block; }`,
        `.framer-IX68f.framer-1icv9fb { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 3444px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-IX68f .framer-z9msoz-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-IX68f .framer-am084x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-7lgw6g-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-zz0cz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-jgplzk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; max-width: 1800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-flgjia { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IX68f .framer-1bq5bhj { display: grid; flex: none; gap: 56px 56px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-1fx0h3y { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IX68f .framer-n2jx13-container { flex: 1 0 0px; height: 70vh; position: relative; width: 1px; }`,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-IX68f.framer-1icv9fb { width: 810px; } .framer-IX68f .framer-zz0cz0 { padding: 0px 40px 0px 40px; } .framer-IX68f .framer-jgplzk { gap: 32px; } .framer-IX68f .framer-1bq5bhj { gap: 56px 32px; } .framer-IX68f .framer-n2jx13-container { height: 50vh; }}`,
        `@media (max-width: 809.98px) { .framer-IX68f.framer-1icv9fb { width: 390px; } .framer-IX68f .framer-zz0cz0 { padding: 0px 16px 0px 16px; } .framer-IX68f .framer-jgplzk { gap: 32px; } .framer-IX68f .framer-1bq5bhj { gap: 32px 32px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-IX68f .framer-n2jx13-container { height: 50vh; }}`,
      ],
      `framer-IX68f`
    )),
    (Q.displayName = `About`),
    (Q.defaultProps = { height: 3352.5, width: 1200 }),
    p(
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
        ...j,
        ...M,
        ...N,
        ...P,
        ...h(Ce),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = v.get(K(), n, r);
        return S(
          [
            () => i.preload(),
            async () =>
              S(
                ((await he(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => m(A, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerxZeukHXrK`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `3352.5`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"D1z13GAFz":{"layout":["fixed","fixed"]},"u8wuLOmSr":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, I as queryParamNames };
//# sourceMappingURL=dCzIeJ1zOtbadg7gAZ8tOWvZXEVwMIluwXwJJn_9J9A.B7Mzcfs7.mjs.map
