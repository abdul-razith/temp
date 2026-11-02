import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as ee,
  T as n,
  c as te,
  j as r,
  m as i,
  s as a,
  u as o,
  w as ne,
  x as s,
} from "./react.BDb-TZZO.mjs";
import { E as c, a as re, r as ie, t as ae } from "./motion.DUnltMVz.mjs";
import {
  B as l,
  E as u,
  Et as oe,
  J as d,
  M as f,
  O as p,
  P as m,
  St as se,
  T as h,
  V as g,
  _t as ce,
  a as _,
  f as le,
  ft as ue,
  i as v,
  kt as de,
  lt as fe,
  mt as pe,
  nt as y,
  pt as me,
  vt as he,
  w as b,
  wt as ge,
  x,
  xt as S,
} from "./framer.Bi3K3xOo.mjs";
import { a as _e, c as C, i as w, o as T, r as E, s as D } from "./shared-lib.DAxb9xg1.mjs";
import { i as O, n as k, r as A, t as ve } from "./MffBJovlA.DNehB8j9.mjs";
import {
  a as ye,
  c as j,
  i as M,
  n as N,
  o as P,
  r as be,
  s as xe,
  t as Se,
} from "./ptQSvPZIk.BLtTlgC6.mjs";
import { n as Ce, t as F } from "./Lenis.Bav3QMVP.mjs";
import { n as we, t as I } from "./InlineImageText.DkJzNnLR.mjs";
import { n as Te, t as L } from "./HoverForce_Prod.BPyhdbdz.mjs";
import { n as Ee, t as R } from "./IM9DdPdb9.BLv_1gGg.mjs";
import { n as De, t as z } from "./qejcFG4ta.DdkCPJfJ.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./H8WdmyHet.CWBOLGXo.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./Iep6i79Kc.D1awO1TT.mjs";
import { n as Ie, t as B } from "./gJdXPlkLU.D0GU04NL.mjs";
import { n as Le, t as V } from "./Gt7mmnlqE.BZS30L97.mjs";
import { n as Re, t as H } from "./Iy0vxRObD.CgnUhTn2.mjs";
import { n as ze, t as U } from "./yL7dV40eM.MIEj1xip.mjs";
import Be, { t as Ve } from "./seFITjWlqntXqz6LH58x75yGLrExo4Fhm6J31YYEVt0.CNf8CSVK.mjs";
var He,
  Ue,
  We,
  W,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  G,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  K,
  nt,
  rt,
  q,
  it,
  at,
  J,
  Y,
  X,
  Z,
  Q,
  ot,
  st,
  $,
  ct;
e(() => {
  (te(),
    d(),
    ae(),
    n(),
    Ce(),
    Te(),
    we(),
    Ie(),
    Le(),
    Ee(),
    De(),
    w(),
    Oe(),
    Me(),
    C(),
    j(),
    O(),
    M(),
    Re(),
    ze(),
    Ve(),
    (He = l(F)),
    (Ue = l(E)),
    (We = l(B)),
    (W = de(B)),
    (Ge = l(I)),
    (Ke = l(z)),
    (qe = l(R)),
    (Je = oe(_)),
    (Ye = l(L)),
    (G = oe(c.div)),
    (Xe = l(H)),
    (Ze = l(U)),
    (Qe = l(V)),
    ($e = {
      aKL_agKUT: `(min-width: 1200px)`,
      jW_4HARls: `(max-width: 809.98px)`,
      NmnvqlgWe: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (et = () => typeof document < `u`),
    (tt = []),
    (K = `framer-FxZaQ`),
    (nt = {
      aKL_agKUT: `framer-v-1fzvxue`,
      jW_4HARls: `framer-v-1hh7fxx`,
      NmnvqlgWe: `framer-v-y5t7zo`,
    }),
    (rt = (e, t, ee) => (e && t ? `position` : ee)),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (it = {
      effect: { opacity: 0.001, rotate: 0, scale: 0.9, skewX: 0, skewY: 0, x: 40, y: 0 },
      repeat: !1,
      startDelay: 0,
      threshold: 0.5,
      tokenization: `character`,
      transition: { damping: 40, delay: 0.03, mass: 4, stiffness: 400, type: `spring` },
      trigger: `onInView`,
      type: `appear`,
    }),
    (at = (e) => e.preventDefault()),
    (J = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Y = { delay: 0, duration: 2.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (X = {
      opacity: 1,
      rotate: 18,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -80,
      y: -60,
    }),
    (Z = (e, t) => `translateY(-50%) ${t}`),
    (Q = { Desktop: `aKL_agKUT`, Phone: `jW_4HARls`, Tablet: `NmnvqlgWe` }),
    (ot = ({ value: e }) =>
      pe()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (st = ({ height: e, id: t, width: ee, ...n }) => ({
      ...n,
      variant: Q[n.variant] ?? n.variant ?? `aKL_agKUT`,
    })),
    ($ = ge(
      i(function (e, n) {
        let te = s(null),
          i = n ?? te,
          ae = ne(),
          { activeLocale: l, setLocale: oe } = ce(),
          d = fe(),
          { style: p, className: m, layoutId: g, variant: de, ...pe } = st(e);
        he(ee(() => Be({}, l), [l]));
        let [y, ge] = me(de, $e, !1),
          C = f(K, Fe, ve, Se, _e, je, ye),
          w = r(le)?.isLayoutTemplate,
          T = !!r(re)?.transition?.layout,
          D = rt(w, T);
        se();
        let O = s(null),
          k = s(null),
          A = s(null),
          j = S(`dkrKqQyE0`),
          M = () => !et() || y !== `jW_4HARls`,
          N = S(`Jdwi6XhE4`),
          P = S(`OlJBi42Qf`);
        return (
          ue({}),
          a(le.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: Q,
              primaryVariantId: `aKL_agKUT`,
              variantClassNames: nt,
            },
            children: o(ie, {
              id: g ?? ae,
              children: [
                a(ot, {
                  value: `html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`,
                }),
                o(c.div, {
                  ...pe,
                  className: f(C, `framer-1fzvxue`, m),
                  ref: i,
                  style: { ...p },
                  children: [
                    a(v, {
                      children: a(_, {
                        className: `framer-1tvkrgo-container`,
                        "data-framer-name": `Smooth Scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: D,
                        layoutScroll: !0,
                        name: `Smooth Scroll`,
                        nodeId: `p2tpBZjRD`,
                        scopeId: `NFldwpxHM`,
                        children: a(F, {
                          height: `100%`,
                          id: `p2tpBZjRD`,
                          infinite: !1,
                          intensity: 5,
                          layoutId: `p2tpBZjRD`,
                          name: `Smooth Scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    o(c.div, {
                      className: `framer-1akwkpq`,
                      "data-framer-name": `All content`,
                      layout: D,
                      children: [
                        a(v, {
                          children: a(_, {
                            className: `framer-3w7je1-container`,
                            isAuthoredByUser: !0,
                            nodeId: `BYPzOSxtI`,
                            scopeId: `NFldwpxHM`,
                            children: a(E, {
                              color: `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                              height: `100%`,
                              id: `BYPzOSxtI`,
                              layoutId: `BYPzOSxtI`,
                              majorStep: 100,
                              speed: 0.2,
                              style: { width: `100%` },
                              subdivisions: 2,
                              width: `100%`,
                            }),
                          }),
                        }),
                        a(`div`, {
                          className: `framer-1hsbhf7`,
                          "data-framer-name": `Content`,
                          children: o(`div`, {
                            className: `framer-1u3qm76`,
                            "data-framer-name": `Contain`,
                            children: [
                              a(`div`, {
                                className: `framer-1ukjnmv`,
                                "data-framer-name": `Contain Nav sticky`,
                                children: a(`div`, {
                                  className: `framer-qu7yco`,
                                  "data-framer-name": `List`,
                                  children: o(`div`, {
                                    className: `framer-rmz83s`,
                                    "data-framer-name": `Nav Sticky`,
                                    children: [
                                      a(b, {
                                        links: [
                                          {
                                            href: { hash: `:dkrKqQyE0`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:dkrKqQyE0`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:dkrKqQyE0`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          a(x, {
                                            breakpoint: y,
                                            overrides: {
                                              jW_4HARls: {
                                                width: `56px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  721.763 +
                                                  8,
                                              },
                                              NmnvqlgWe: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  0,
                                              },
                                            },
                                            children: a(v, {
                                              height: 62,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                0,
                                              children: a(_, {
                                                className: `framer-6rgt2z-container`,
                                                nodeId: `S6HoPI9b9`,
                                                rendersWithMotion: !0,
                                                scopeId: `NFldwpxHM`,
                                                children: a(x, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    jW_4HARls: { CenImty1m: e[2] },
                                                    NmnvqlgWe: { CenImty1m: e[1] },
                                                  },
                                                  children: a(W, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { ref: O, target: `GFYf86X4h` },
                                                    ],
                                                    __framer__threshold: 0.5,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    CenImty1m: e[0],
                                                    height: `100%`,
                                                    id: `S6HoPI9b9`,
                                                    layoutId: `S6HoPI9b9`,
                                                    n6coU5zGX: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4294 66.2123C15.6458 53.315 19.2658 39.3128 29.2893 29.2893C39.3129 19.2658 53.315 15.6458 66.2123 18.4293C73.3638 7.34131 85.8246 0 100 0C114.175 0 126.636 7.34133 133.788 18.4294C146.685 15.6458 160.687 19.2658 170.711 29.2893C180.734 39.3129 184.354 53.315 181.571 66.2123C192.659 73.3638 200 85.8246 200 100C200 114.175 192.659 126.636 181.571 133.788C184.354 146.685 180.734 160.687 170.711 170.711C160.687 180.734 146.685 184.354 133.788 181.571C126.636 192.659 114.175 200 100 200C85.8246 200 73.3639 192.659 66.2123 181.571C53.315 184.354 39.3129 180.734 29.2893 170.711C19.2658 160.687 15.6458 146.685 18.4294 133.788C7.34132 126.636 0 114.175 0 100C0 85.8246 7.34132 73.3638 18.4294 66.2123ZM71.4555 128.495C87.1454 144.184 112.584 144.184 128.274 128.495C143.964 112.805 143.964 87.3662 128.274 71.6762C112.584 55.9863 87.1454 55.9863 71.4555 71.6762C55.7656 87.3662 55.7656 112.805 71.4555 128.495Z" fill="#3D3D3D"/>
</svg>
`,
                                                    s4KXbrELs: !1,
                                                    style: { width: `100%` },
                                                    variant: q(`lFsyY1e3B`),
                                                    VyONsZJ7g: `Bio`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      a(b, {
                                        links: [
                                          {
                                            href: { hash: `:Jdwi6XhE4`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:Jdwi6XhE4`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:Jdwi6XhE4`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          a(x, {
                                            breakpoint: y,
                                            overrides: {
                                              jW_4HARls: {
                                                width: `56px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  721.763 +
                                                  8,
                                              },
                                              NmnvqlgWe: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  78,
                                              },
                                            },
                                            children: a(v, {
                                              height: 62,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                86,
                                              children: a(_, {
                                                className: `framer-1pd4qj9-container`,
                                                nodeId: `fut2cWtNC`,
                                                rendersWithMotion: !0,
                                                scopeId: `NFldwpxHM`,
                                                children: a(x, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    jW_4HARls: { CenImty1m: e[2] },
                                                    NmnvqlgWe: { CenImty1m: e[1] },
                                                  },
                                                  children: a(W, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { ref: k, target: `GFYf86X4h` },
                                                      { ref: O, target: `lFsyY1e3B` },
                                                      { ref: A, target: `GFYf86X4h` },
                                                    ],
                                                    __framer__threshold: 0.5,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    CenImty1m: e[0],
                                                    height: `100%`,
                                                    id: `fut2cWtNC`,
                                                    layoutId: `fut2cWtNC`,
                                                    n6coU5zGX: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z" fill="#3D3D3D"/>
</svg>
`,
                                                    s4KXbrELs: !1,
                                                    style: { width: `100%` },
                                                    variant: q(`GFYf86X4h`),
                                                    VyONsZJ7g: `Story`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      a(b, {
                                        links: [
                                          {
                                            href: { hash: `:OlJBi42Qf`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:OlJBi42Qf`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:OlJBi42Qf`, webPageId: `NFldwpxHM` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          a(x, {
                                            breakpoint: y,
                                            overrides: {
                                              jW_4HARls: {
                                                width: `56px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  721.763 +
                                                  8,
                                              },
                                              NmnvqlgWe: {
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  156,
                                              },
                                            },
                                            children: a(v, {
                                              height: 62,
                                              y:
                                                (d?.y || 0) +
                                                0 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                172,
                                              children: a(_, {
                                                className: `framer-1q98y8i-container`,
                                                nodeId: `VhudcIe4v`,
                                                rendersWithMotion: !0,
                                                scopeId: `NFldwpxHM`,
                                                children: a(x, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    jW_4HARls: { CenImty1m: e[2] },
                                                    NmnvqlgWe: { CenImty1m: e[1] },
                                                  },
                                                  children: a(W, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { ref: k, target: `GFYf86X4h` },
                                                      { ref: O, target: `GFYf86X4h` },
                                                      { ref: A, target: `lFsyY1e3B` },
                                                    ],
                                                    __framer__threshold: 0.5,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    CenImty1m: e[0],
                                                    height: `100%`,
                                                    id: `VhudcIe4v`,
                                                    layoutId: `VhudcIe4v`,
                                                    n6coU5zGX: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 100L7.62939e-06 0H100H200V100C144.78 100 100.013 55.2417 100 0.0239258C99.987 55.2417 55.2204 100 0 100ZM100 200C100 144.771 144.772 100 200 100V200H100ZM100 200C100 144.771 55.2285 100 0 100V200H100Z" fill="#3D3D3D"/>
</svg>
`,
                                                    s4KXbrELs: !1,
                                                    style: { width: `100%` },
                                                    variant: q(`GFYf86X4h`),
                                                    VyONsZJ7g: `Work`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              o(`div`, {
                                className: `framer-94tkti`,
                                "data-framer-name": `Content`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1pltn3m`,
                                    "data-framer-name": `Heading`,
                                    children: a(h, {
                                      __fromCanvasComponent: !0,
                                      children: a(t, {
                                        children: a(`h1`, {
                                          className: `framer-styles-preset-4nri6j`,
                                          "data-styles-preset": `Iep6i79Kc`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                          },
                                          children: `About`,
                                        }),
                                      }),
                                      className: `framer-n5931f`,
                                      effect: it,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(`div`, {
                                    className: `framer-me803a`,
                                    "data-framer-name": `List Content`,
                                    children: [
                                      o(`section`, {
                                        className: `framer-1q34n9d`,
                                        "data-framer-name": `Bio `,
                                        id: j,
                                        ref: k,
                                        children: [
                                          a(`div`, {
                                            className: `framer-13tnzw6`,
                                            "data-framer-name": `Tag`,
                                            children: a(`div`, {
                                              className: `framer-1m4k8ak`,
                                              "data-framer-name": `Text`,
                                              children: a(h, {
                                                __fromCanvasComponent: !0,
                                                children: a(t, {
                                                  children: a(`h1`, {
                                                    className: `framer-styles-preset-27ku3y`,
                                                    "data-styles-preset": `MffBJovlA`,
                                                    dir: `auto`,
                                                    children: `Main bio`,
                                                  }),
                                                }),
                                                className: `framer-n067kb`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                          o(`div`, {
                                            className: `framer-1y1mzru`,
                                            "data-border": !0,
                                            "data-framer-name": `Bio`,
                                            children: [
                                              o(`div`, {
                                                className: `framer-154vkhg`,
                                                "data-framer-name": `Border`,
                                                children: [
                                                  a(`div`, {
                                                    className: `framer-7saf92`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Rectangle`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-ze7fwm`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Rectangle`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-h8548a`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Rectangle`,
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-1909pth`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Rectangle`,
                                                  }),
                                                ],
                                              }),
                                              a(v, {
                                                children: a(_, {
                                                  className: `framer-1vsjwpg-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `Fk6nhpuDG`,
                                                  scopeId: `NFldwpxHM`,
                                                  children: a(x, {
                                                    breakpoint: y,
                                                    overrides: {
                                                      jW_4HARls: { fontSize: 28 },
                                                      NmnvqlgWe: { fontSize: 32 },
                                                    },
                                                    children: a(I, {
                                                      align: `left`,
                                                      angle: 0,
                                                      color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                      delay: 0,
                                                      duration: 2,
                                                      enableAnimation: !0,
                                                      fontFamily: {
                                                        fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                      },
                                                      fontSize: 40,
                                                      gap: 0.1,
                                                      height: `100%`,
                                                      id: `Fk6nhpuDG`,
                                                      images: [
                                                        `https://framerusercontent.com/images/O9xt0wGigYzX3kxKzDZ20639Y.jpg?width=870&height=869`,
                                                        `../../assets/images/FZxylYfrf6MjQ4LPhIBR4t1H5s.avif`,
                                                        `../../assets/images/c3dZgxHqG5LPDkUqNkbQbZSjBk.avif`,
                                                      ],
                                                      layoutId: `Fk6nhpuDG`,
                                                      letterSpacing: -0.03,
                                                      lineHeight: 1.1,
                                                      style: { maxWidth: `100%`, width: `100%` },
                                                      tag: `p`,
                                                      text: `‎‎I'm Bejaman [] a product designer in Chicago who gets excited [] about making complicated things simple []. `,
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              o(`div`, {
                                                className: `framer-1af8o5`,
                                                "data-framer-name": `List content`,
                                                children: [
                                                  a(h, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(t, {
                                                      children: a(`p`, {
                                                        className: `framer-styles-preset-163ovsm`,
                                                        "data-styles-preset": `ptQSvPZIk`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                        },
                                                        children: `I spend my days designing for healthcare platforms, booking systems, and other products where 'just figure it out' isn't an option. The people using these tools are busy, stressed, and have actual work to do. My job is to get out of their way.`,
                                                      }),
                                                    }),
                                                    className: `framer-1lxxv7w`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(h, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(t, {
                                                      children: a(`p`, {
                                                        className: `framer-styles-preset-163ovsm`,
                                                        "data-styles-preset": `ptQSvPZIk`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                        },
                                                        children: `I've worked on teams of two and teams of twenty. I've had access to endless user research and I've had to make educated guesses with limited data. I've worked within strict component libraries and I've built design systems from scratch. What stays consistent is asking good questions, collaborating with people who know more than me, and shipping things that actually help`,
                                                      }),
                                                    }),
                                                    className: `framer-t4ear5`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  o(`div`, {
                                                    className: `framer-2vhojh`,
                                                    "data-framer-name": `Text + Polaroid`,
                                                    children: [
                                                      a(x, {
                                                        breakpoint: y,
                                                        overrides: {
                                                          jW_4HARls: {
                                                            width: `min(min(min(${d?.width || `100vw`} - 32px, 1800px), 800px) - 48px, 400px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              152 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              24 +
                                                              1024 +
                                                              0 +
                                                              256 +
                                                              0 +
                                                              0,
                                                          },
                                                          NmnvqlgWe: {
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              152 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              32 +
                                                              1024 +
                                                              0 +
                                                              256 +
                                                              0,
                                                          },
                                                        },
                                                        children: a(v, {
                                                          height: 302,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            176 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            56 +
                                                            1032 +
                                                            0 +
                                                            256 +
                                                            0,
                                                          children: a(_, {
                                                            className: `framer-1qahak7-container`,
                                                            nodeId: `ZP51Z22Py`,
                                                            scopeId: `NFldwpxHM`,
                                                            children: a(z, {
                                                              CCL0FQB1w: `Starting with why, not what`,
                                                              height: `100%`,
                                                              HXsiawEy3: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                                                              id: `ZP51Z22Py`,
                                                              layoutId: `ZP51Z22Py`,
                                                              style: {
                                                                maxWidth: `100%`,
                                                                width: `100%`,
                                                              },
                                                              variant: q(`ZRCh4e0jb`),
                                                              width: `100%`,
                                                              wpqZCAGnP: `Currently, I'm at Meridian Health working on experiences for mental health clinicians and administrators. Before that, I spent almost two years at StyleBook helping salons manage their businesses (and discovering that stylists have very strong opinions about scheduling interfaces, which I deeply respect). `,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      a(x, {
                                                        breakpoint: y,
                                                        overrides: {
                                                          jW_4HARls: {
                                                            width: `min((min(min(${d?.width || `100vw`} - 32px, 1800px), 800px) - 48px) * 0.56, 200px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              152 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              24 +
                                                              1024 +
                                                              0 +
                                                              256 +
                                                              0 +
                                                              318,
                                                          },
                                                          NmnvqlgWe: {
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              152 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              32 +
                                                              1024 +
                                                              0 +
                                                              256 +
                                                              55,
                                                          },
                                                        },
                                                        children: a(v, {
                                                          height: 192,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            176 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            56 +
                                                            1032 +
                                                            0 +
                                                            256 +
                                                            55,
                                                          children: a(Je, {
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-4hsz50-container`,
                                                            drag: !0,
                                                            dragMomentum: !1,
                                                            nodeId: `giMezpJF3`,
                                                            onMouseDown: at,
                                                            rendersWithMotion: !0,
                                                            scopeId: `NFldwpxHM`,
                                                            style: { rotate: 6 },
                                                            children: a(R, {
                                                              FfMVhlfbN: J(
                                                                {
                                                                  pixelHeight: 869,
                                                                  pixelWidth: 870,
                                                                  src: `../../assets/images/tEtevi8JenLoBT4YdyPpWydOJg.png`,
                                                                  srcSet: `../../assets/images/tEtevi8JenLoBT4YdyPpWydOJg.avif 512w,../../assets/images/tEtevi8JenLoBT4YdyPpWydOJg.png 870w`,
                                                                },
                                                                `a man (it's me)`
                                                              ),
                                                              height: `100%`,
                                                              id: `giMezpJF3`,
                                                              L_BjSwjBv: `it's me`,
                                                              layoutId: `giMezpJF3`,
                                                              style: {
                                                                height: `100%`,
                                                                maxWidth: `100%`,
                                                                width: `100%`,
                                                              },
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                  a(`div`, {
                                                    className: `framer-9u3yg7`,
                                                    "data-framer-name": `Text Box`,
                                                    children: a(x, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        jW_4HARls: {
                                                          width: `calc((min(min(${d?.width || `100vw`} - 32px, 1800px), 800px) - 48px) * 0.9)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            24 +
                                                            1024 +
                                                            0 +
                                                            782 +
                                                            0,
                                                        },
                                                        NmnvqlgWe: {
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            32 +
                                                            1024 +
                                                            0 +
                                                            574 +
                                                            0,
                                                        },
                                                      },
                                                      children: a(v, {
                                                        height: 302,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          48 +
                                                          1100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          176 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          38 +
                                                          56 +
                                                          1032 +
                                                          0 +
                                                          574 +
                                                          0,
                                                        children: a(x, {
                                                          breakpoint: y,
                                                          overrides: { jW_4HARls: { style: {} } },
                                                          children: a(_, {
                                                            className: `framer-1t1zpi3-container`,
                                                            nodeId: `wwJB4uyjc`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `NFldwpxHM`,
                                                            style: { rotate: 5 },
                                                            children: a(z, {
                                                              CCL0FQB1w: `Starting with why, not what`,
                                                              height: `100%`,
                                                              HXsiawEy3: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                                                              id: `wwJB4uyjc`,
                                                              layoutId: `wwJB4uyjc`,
                                                              style: { width: `100%` },
                                                              variant: q(`ZRCh4e0jb`),
                                                              width: `100%`,
                                                              wpqZCAGnP: `When I'm not designing, you'll find me thinking about why some interfaces feel intuitive and others make you want to throw your laptop out a window. Usually with coffee. `,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              M() &&
                                                o(G, {
                                                  __framer__loop: X,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !0,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `mirror`,
                                                  __framer__loopTransition: Y,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1yo890v hidden-1hh7fxx`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Cursor Tag`,
                                                  style: { rotate: -11 },
                                                  transformTemplate: Z,
                                                  children: [
                                                    a(v, {
                                                      children: a(_, {
                                                        className: `framer-13xxg5d-container`,
                                                        isAuthoredByUser: !0,
                                                        isModuleExternal: !0,
                                                        nodeId: `GR81_0jgr`,
                                                        scopeId: `NFldwpxHM`,
                                                        children: a(L, {
                                                          animationDistance: 300,
                                                          direction: `both`,
                                                          enabled: !0,
                                                          height: `100%`,
                                                          id: `GR81_0jgr`,
                                                          layoutId: `GR81_0jgr`,
                                                          mode: `repel`,
                                                          smoothness: 10,
                                                          threshold: 300,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                    a(u, {
                                                      className: `framer-5ogdh7`,
                                                      "data-framer-name": `Cursor`,
                                                      requiresOverflowVisible: !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 26" overflow="visible"><path d="M 0 0 L 12 26 L 14 13 L 28 9.5 Z" fill="var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(241, 231, 178))" stroke-width="2" stroke="var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))"></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(h, {
                                                      __fromCanvasComponent: !0,
                                                      children: a(t, {
                                                        children: a(`p`, {
                                                          className: `framer-styles-preset-1833qg6`,
                                                          "data-styles-preset": `jB2nPzqr7`,
                                                          dir: `auto`,
                                                          children: `Bejaman`,
                                                        }),
                                                      }),
                                                      className: `framer-1yusfv1`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      a(`section`, {
                                        className: `framer-14jsokh`,
                                        "data-framer-name": `My Story`,
                                        id: N,
                                        ref: O,
                                        children: o(`div`, {
                                          className: `framer-1h8izsz`,
                                          "data-framer-name": `Content`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-3cnw1y`,
                                              "data-framer-name": `Tag`,
                                              children: a(`div`, {
                                                className: `framer-71winf`,
                                                "data-framer-name": `Text`,
                                                children: a(h, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(t, {
                                                    children: a(`h2`, {
                                                      className: `framer-styles-preset-27ku3y`,
                                                      "data-styles-preset": `MffBJovlA`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                                      },
                                                      children: `What dive into my work`,
                                                    }),
                                                  }),
                                                  className: `framer-19x1pr`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            o(`div`, {
                                              className: `framer-ixsok6`,
                                              "data-border": !0,
                                              "data-framer-name": `Bio`,
                                              children: [
                                                o(`div`, {
                                                  className: `framer-mpn7rf`,
                                                  children: [
                                                    a(x, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        jW_4HARls: {
                                                          width: `max(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 1000px) - 48px, 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2294 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                        NmnvqlgWe: {
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2102 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: a(v, {
                                                        height: 302,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          48 +
                                                          1100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          176 +
                                                          0 +
                                                          2158 +
                                                          0 +
                                                          0 +
                                                          38 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: a(_, {
                                                          className: `framer-15xqkt6-container`,
                                                          nodeId: `LGz4LHh9H`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(z, {
                                                            CCL0FQB1w: `Starting with why, not what`,
                                                            height: `100%`,
                                                            HXsiawEy3: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
                                                            id: `LGz4LHh9H`,
                                                            layoutId: `LGz4LHh9H`,
                                                            style: { width: `100%` },
                                                            variant: q(`JgPWxqQc0`),
                                                            width: `100%`,
                                                            wpqZCAGnP: `Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight. `,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-1mk7bzi`,
                                                      "data-framer-name": `Note`,
                                                      children: o(`div`, {
                                                        className: `framer-1lnd6n7`,
                                                        "data-framer-name": `Decoration`,
                                                        children: [
                                                          a(H, {
                                                            animated: !1,
                                                            className: `framer-fm2tup`,
                                                            "data-framer-name": `Arrow`,
                                                            layoutId: `vbEcO5G8_`,
                                                          }),
                                                          a(h, {
                                                            __fromCanvasComponent: !0,
                                                            children: a(t, {
                                                              children: a(`h5`, {
                                                                className: `framer-styles-preset-1o05o96`,
                                                                "data-styles-preset": `H8WdmyHet`,
                                                                dir: `auto`,
                                                                children: `think first, draw later.`,
                                                              }),
                                                            }),
                                                            className: `framer-13p3nrk`,
                                                            fonts: [`Inter`],
                                                            style: { rotate: -15 },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-rvqxqo`,
                                                      "data-framer-name": `Note`,
                                                      children: o(`div`, {
                                                        className: `framer-3w4or8`,
                                                        "data-framer-name": `Decoration`,
                                                        children: [
                                                          a(h, {
                                                            __fromCanvasComponent: !0,
                                                            children: a(t, {
                                                              children: a(`h5`, {
                                                                className: `framer-styles-preset-1o05o96`,
                                                                "data-styles-preset": `H8WdmyHet`,
                                                                dir: `auto`,
                                                                children: `no perfect world here!`,
                                                              }),
                                                            }),
                                                            className: `framer-u6fwr5`,
                                                            fonts: [`Inter`],
                                                            style: { rotate: 9 },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          a(U, {
                                                            animated: !1,
                                                            className: `framer-1ugaiiq`,
                                                            "data-framer-name": `Arrow`,
                                                            layoutId: `GxTqt3umO`,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    a(x, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        jW_4HARls: {
                                                          width: `max(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 1000px) - 48px, 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2294 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            412.4,
                                                        },
                                                        NmnvqlgWe: {
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2102 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            326,
                                                        },
                                                      },
                                                      children: a(v, {
                                                        height: 302,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          48 +
                                                          1100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          176 +
                                                          0 +
                                                          2158 +
                                                          0 +
                                                          0 +
                                                          38 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          334,
                                                        children: a(_, {
                                                          className: `framer-705mjb-container`,
                                                          nodeId: `bTPUJFdHi`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(z, {
                                                            CCL0FQB1w: `Designing for real constraints`,
                                                            height: `100%`,
                                                            HXsiawEy3: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                                                            id: `bTPUJFdHi`,
                                                            layoutId: `bTPUJFdHi`,
                                                            style: { width: `100%` },
                                                            variant: q(`JgPWxqQc0`),
                                                            width: `100%`,
                                                            wpqZCAGnP: `Perfect conditions don't exist. Budgets are tight, timelines are aggressive, legacy systems are messy, and sometimes you just can't talk to users directly. I'm comfortable making smart decisions with imperfect information and finding creative solutions within real limitations. `,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    a(x, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        jW_4HARls: {
                                                          width: `max(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 1000px) - 48px, 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2294 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            824.8,
                                                        },
                                                        NmnvqlgWe: {
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2102 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            652,
                                                        },
                                                      },
                                                      children: a(v, {
                                                        height: 302,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          48 +
                                                          1100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          176 +
                                                          0 +
                                                          2158 +
                                                          0 +
                                                          0 +
                                                          38 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          668,
                                                        children: a(_, {
                                                          className: `framer-bml7qr-container`,
                                                          nodeId: `mAiYVE4hR`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(z, {
                                                            CCL0FQB1w: `Collaboration over hero design`,
                                                            height: `100%`,
                                                            HXsiawEy3: `var(--token-3b25897c-a78c-4fb0-9a93-831975a769c1, rgb(161, 223, 197))`,
                                                            id: `mAiYVE4hR`,
                                                            layoutId: `mAiYVE4hR`,
                                                            style: { width: `100%` },
                                                            variant: q(`JgPWxqQc0`),
                                                            width: `100%`,
                                                            wpqZCAGnP: `The best work happens when designers, engineers, and product folks are actually talking to each other—not throwing things over the wall. I genuinely enjoy the back-and-forth of figuring out what's possible, what's practical, and what's going to create the most value. `,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-h7eo1w`,
                                                      "data-framer-name": `Note`,
                                                      children: o(`div`, {
                                                        className: `framer-enz7kh`,
                                                        "data-framer-name": `Decoration`,
                                                        children: [
                                                          a(H, {
                                                            animated: !1,
                                                            className: `framer-1a3z98x`,
                                                            "data-framer-name": `Arrow`,
                                                            layoutId: `iEy_P3Qu6`,
                                                          }),
                                                          a(h, {
                                                            __fromCanvasComponent: !0,
                                                            children: a(t, {
                                                              children: a(`h5`, {
                                                                className: `framer-styles-preset-1o05o96`,
                                                                "data-styles-preset": `H8WdmyHet`,
                                                                dir: `auto`,
                                                                children: `we, not me.`,
                                                              }),
                                                            }),
                                                            className: `framer-1j4k69v`,
                                                            fonts: [`Inter`],
                                                            style: { rotate: -15 },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-li1ezw`,
                                                      "data-framer-name": `Note`,
                                                      children: o(`div`, {
                                                        className: `framer-1m7msg9`,
                                                        "data-framer-name": `Decoration`,
                                                        children: [
                                                          a(h, {
                                                            __fromCanvasComponent: !0,
                                                            children: a(t, {
                                                              children: a(`h5`, {
                                                                className: `framer-styles-preset-1o05o96`,
                                                                "data-styles-preset": `H8WdmyHet`,
                                                                dir: `auto`,
                                                                children: `details build trust.`,
                                                              }),
                                                            }),
                                                            className: `framer-1xesv5c`,
                                                            fonts: [`Inter`],
                                                            style: { rotate: 9 },
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          a(U, {
                                                            animated: !1,
                                                            className: `framer-1t5eghs`,
                                                            "data-framer-name": `Arrow`,
                                                            layoutId: `TSc14cjce`,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    a(x, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        jW_4HARls: {
                                                          width: `max(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 1000px) - 48px, 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2294 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            1237.2,
                                                        },
                                                        NmnvqlgWe: {
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            48 +
                                                            1100 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            152 +
                                                            0 +
                                                            2102 +
                                                            0 +
                                                            0 +
                                                            38 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            978,
                                                        },
                                                      },
                                                      children: a(v, {
                                                        height: 302,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          48 +
                                                          1100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          176 +
                                                          0 +
                                                          2158 +
                                                          0 +
                                                          0 +
                                                          38 +
                                                          56 +
                                                          0 +
                                                          0 +
                                                          1002,
                                                        children: a(_, {
                                                          className: `framer-1pbq76w-container`,
                                                          nodeId: `K1QMrY6oR`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(z, {
                                                            CCL0FQB1w: `Making the invisible visible `,
                                                            height: `100%`,
                                                            HXsiawEy3: `var(--token-221f5458-30ad-42f0-b005-7c3d9fe30e8d, rgb(250, 190, 209))`,
                                                            id: `K1QMrY6oR`,
                                                            layoutId: `K1QMrY6oR`,
                                                            style: { width: `100%` },
                                                            variant: q(`JgPWxqQc0`),
                                                            width: `100%`,
                                                            wpqZCAGnP: `Some of the most impactful design work isn't flashy—it's the progress indicator that keeps people oriented, the auto-save that prevents panic, the validation message that actually helps instead of just saying 'error.' These details build trust. `,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                o(`div`, {
                                                  className: `framer-w1h06a`,
                                                  "data-framer-name": `Border`,
                                                  children: [
                                                    a(`div`, {
                                                      className: `framer-19dxwmd`,
                                                      "data-border": !0,
                                                      "data-framer-name": `LT`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-1a4182c`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-15z12r4`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-sat85g`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                  ],
                                                }),
                                                M() &&
                                                  o(G, {
                                                    __framer__loop: X,
                                                    __framer__loopEffectEnabled: !0,
                                                    __framer__loopPauseOffscreen: !0,
                                                    __framer__loopRepeatDelay: 0,
                                                    __framer__loopRepeatType: `mirror`,
                                                    __framer__loopTransition: Y,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-1h2do80 hidden-1hh7fxx`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Cursor Tag`,
                                                    style: { rotate: -11 },
                                                    transformTemplate: Z,
                                                    children: [
                                                      a(v, {
                                                        children: a(_, {
                                                          className: `framer-1f6mfj4-container`,
                                                          isAuthoredByUser: !0,
                                                          isModuleExternal: !0,
                                                          nodeId: `c4hrP4z7E`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(L, {
                                                            animationDistance: 300,
                                                            direction: `both`,
                                                            enabled: !0,
                                                            height: `100%`,
                                                            id: `c4hrP4z7E`,
                                                            layoutId: `c4hrP4z7E`,
                                                            mode: `repel`,
                                                            smoothness: 10,
                                                            threshold: 300,
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                      a(u, {
                                                        className: `framer-1slwc7v`,
                                                        "data-framer-name": `Cursor`,
                                                        requiresOverflowVisible: !0,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 26" overflow="visible"><path d="M 0 0 L 12 26 L 14 13 L 28 9.5 Z" fill="var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, rgb(224, 30, 90)) /* {&quot;name&quot;:&quot;Red&quot;} */" stroke-width="2" stroke="var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))"></path></svg>`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      a(h, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1833qg6`,
                                                            "data-styles-preset": `jB2nPzqr7`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                                            },
                                                            children: `My story`,
                                                          }),
                                                        }),
                                                        className: `framer-1k7dwc9`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      a(`section`, {
                                        className: `framer-o05pe9`,
                                        "data-framer-name": `Work`,
                                        id: P,
                                        ref: A,
                                        children: o(`div`, {
                                          className: `framer-foyt4c`,
                                          "data-framer-name": `Contain`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-eox33i`,
                                              "data-framer-name": `Tag`,
                                              children: a(`div`, {
                                                className: `framer-nc06ra`,
                                                "data-framer-name": `Text`,
                                                children: a(h, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(t, {
                                                    children: a(`h2`, {
                                                      className: `framer-styles-preset-27ku3y`,
                                                      "data-styles-preset": `MffBJovlA`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                      },
                                                      children: `What dive into my work`,
                                                    }),
                                                  }),
                                                  className: `framer-tzv26k`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            }),
                                            o(`div`, {
                                              className: `framer-1ql5gwc`,
                                              "data-border": !0,
                                              "data-framer-name": `Content`,
                                              children: [
                                                o(`div`, {
                                                  className: `framer-6aawbq`,
                                                  "data-framer-name": `Border`,
                                                  children: [
                                                    a(`div`, {
                                                      className: `framer-3cixhw`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-iw10lq`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-11qzkjj`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-cis23f`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Rectangle`,
                                                    }),
                                                  ],
                                                }),
                                                M() &&
                                                  o(G, {
                                                    __framer__loop: X,
                                                    __framer__loopEffectEnabled: !0,
                                                    __framer__loopPauseOffscreen: !0,
                                                    __framer__loopRepeatDelay: 0,
                                                    __framer__loopRepeatType: `mirror`,
                                                    __framer__loopTransition: Y,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-1sty39j hidden-1hh7fxx`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Cursor Tag`,
                                                    style: { rotate: -11 },
                                                    transformTemplate: Z,
                                                    children: [
                                                      a(v, {
                                                        children: a(_, {
                                                          className: `framer-161e4g2-container`,
                                                          isAuthoredByUser: !0,
                                                          isModuleExternal: !0,
                                                          nodeId: `PRX6iqFU2`,
                                                          scopeId: `NFldwpxHM`,
                                                          children: a(L, {
                                                            animationDistance: 300,
                                                            direction: `both`,
                                                            enabled: !0,
                                                            height: `100%`,
                                                            id: `PRX6iqFU2`,
                                                            layoutId: `PRX6iqFU2`,
                                                            mode: `repel`,
                                                            smoothness: 10,
                                                            threshold: 300,
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                      a(u, {
                                                        className: `framer-1mrct6g`,
                                                        "data-framer-name": `Cursor`,
                                                        requiresOverflowVisible: !0,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 26" overflow="visible"><path d="M 0 0 L 12 26 L 14 13 L 28 9.5 Z" fill="var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(54, 197, 240)) /* {&quot;name&quot;:&quot;Primary&quot;} */" stroke-width="2" stroke="var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))"></path></svg>`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      a(h, {
                                                        __fromCanvasComponent: !0,
                                                        children: a(t, {
                                                          children: a(`p`, {
                                                            className: `framer-styles-preset-1833qg6`,
                                                            "data-styles-preset": `jB2nPzqr7`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                            },
                                                            children: `My work`,
                                                          }),
                                                        }),
                                                        className: `framer-n52824`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                o(`div`, {
                                                  className: `framer-6p0jh5`,
                                                  "data-framer-name": `Comment`,
                                                  children: [
                                                    a(h, {
                                                      __fromCanvasComponent: !0,
                                                      children: a(t, {
                                                        children: a(`h5`, {
                                                          className: `framer-styles-preset-7q6rdi`,
                                                          "data-styles-preset": `JCTbwXFKE`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-94d217a4-b19e-496f-a9f0-41c83f611b07, rgb(118, 119, 119))`,
                                                          },
                                                          children: `Timeline`,
                                                        }),
                                                      }),
                                                      className: `framer-xanzq5`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(`div`, {
                                                      className: `framer-4y5xew`,
                                                      "data-framer-name": `Line`,
                                                    }),
                                                    o(`div`, {
                                                      className: `framer-1no5cfb`,
                                                      "data-framer-name": `List works`,
                                                      children: [
                                                        a(x, {
                                                          breakpoint: y,
                                                          overrides: {
                                                            jW_4HARls: {
                                                              width: `calc(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 800px) - 32px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4105.6 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                0,
                                                            },
                                                            NmnvqlgWe: {
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                3584 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                32 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: a(v, {
                                                            height: 192,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              3712 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              56 +
                                                              0 +
                                                              0 +
                                                              80.2 +
                                                              0 +
                                                              0,
                                                            children: a(_, {
                                                              className: `framer-n3c4-container`,
                                                              nodeId: `oIrQDv8Wg`,
                                                              scopeId: `NFldwpxHM`,
                                                              children: a(V, {
                                                                AMQxizGuL: `Designing across scheduling, case management, treatment planning, and clinical documentation for mental health practices. The challenge is balancing what clinicians need with what administrators need—often very different things—while keeping everything HIPAA-compliant and actually usable. `,
                                                                CGvW32DQL: `Sep 2025 - Current`,
                                                                height: `100%`,
                                                                id: `oIrQDv8Wg`,
                                                                layoutId: `oIrQDv8Wg`,
                                                                style: { width: `100%` },
                                                                variant: q(`YJnKcc1Ok`),
                                                                width: `100%`,
                                                                xLqLyNMp1: `Meridian Health`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        a(`div`, {
                                                          className: `framer-1k6gw7g`,
                                                          "data-framer-name": `Line`,
                                                        }),
                                                        a(x, {
                                                          breakpoint: y,
                                                          overrides: {
                                                            jW_4HARls: {
                                                              width: `calc(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 800px) - 32px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4105.6 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                225,
                                                            },
                                                            NmnvqlgWe: {
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                3584 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                32 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                257,
                                                            },
                                                          },
                                                          children: a(v, {
                                                            height: 192,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              3712 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              56 +
                                                              0 +
                                                              0 +
                                                              80.2 +
                                                              0 +
                                                              305,
                                                            children: a(_, {
                                                              className: `framer-o62oz8-container`,
                                                              nodeId: `S20lvPKTJ`,
                                                              scopeId: `NFldwpxHM`,
                                                              children: a(V, {
                                                                AMQxizGuL: `Redesigned everything from appointment booking to inventory management for a salon management platform. Worked directly with salon owners and stylists to understand their workflows, then rebuilt features to match how they actually work instead of how we thought they worked.`,
                                                                CGvW32DQL: `Mar 2024 - aug 2025`,
                                                                height: `100%`,
                                                                id: `S20lvPKTJ`,
                                                                layoutId: `S20lvPKTJ`,
                                                                style: { width: `100%` },
                                                                variant: q(`WzVQtCWbz`),
                                                                VtoKB64T8: J(
                                                                  {
                                                                    pixelHeight: 39,
                                                                    pixelWidth: 50,
                                                                    src: `https://framerusercontent.com/images/oCWnU4BxvjGfHzEiZF1rhnFs.svg?width=50&height=39`,
                                                                  },
                                                                  ``
                                                                ),
                                                                width: `100%`,
                                                                xLqLyNMp1: `StyleBook`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        a(`div`, {
                                                          className: `framer-1lo4iwf`,
                                                          "data-framer-name": `Line`,
                                                        }),
                                                        a(x, {
                                                          breakpoint: y,
                                                          overrides: {
                                                            jW_4HARls: {
                                                              width: `calc(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 800px) - 32px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4105.6 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                450,
                                                            },
                                                            NmnvqlgWe: {
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                3584 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                32 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                514,
                                                            },
                                                          },
                                                          children: a(v, {
                                                            height: 192,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              3712 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              56 +
                                                              0 +
                                                              0 +
                                                              80.2 +
                                                              0 +
                                                              610,
                                                            children: a(_, {
                                                              className: `framer-w7q4b1-container`,
                                                              nodeId: `P5DtQCSff`,
                                                              scopeId: `NFldwpxHM`,
                                                              children: a(V, {
                                                                AMQxizGuL: `Led UX strategy and discovery for enterprise clients. Facilitated workshops with stakeholders who had very different ideas about what they were building, then helped everyone land on the same page. Also mentored junior designers, which taught me how to articulate my process instead of just doing it. `,
                                                                CGvW32DQL: `Feb 2024 - dec 2024`,
                                                                height: `100%`,
                                                                id: `P5DtQCSff`,
                                                                layoutId: `P5DtQCSff`,
                                                                style: { width: `100%` },
                                                                variant: q(`WzVQtCWbz`),
                                                                VtoKB64T8: J(
                                                                  {
                                                                    pixelHeight: 36,
                                                                    pixelWidth: 59,
                                                                    src: `https://framerusercontent.com/images/c8llj7bjZDasXPotcD32uirJjwU.svg?width=59&height=36`,
                                                                  },
                                                                  ``
                                                                ),
                                                                width: `100%`,
                                                                xLqLyNMp1: `Northlight Consulting`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        a(`div`, {
                                                          className: `framer-1q4r4qm`,
                                                          "data-framer-name": `Line`,
                                                        }),
                                                        a(x, {
                                                          breakpoint: y,
                                                          overrides: {
                                                            jW_4HARls: {
                                                              width: `calc(min(max(min(${d?.width || `100vw`} - 32px, 1800px), 1px), 800px) - 32px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4105.6 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                16 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                675,
                                                            },
                                                            NmnvqlgWe: {
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                48 +
                                                                1100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                3584 +
                                                                0 +
                                                                0 +
                                                                38 +
                                                                32 +
                                                                0 +
                                                                0 +
                                                                64.2 +
                                                                0 +
                                                                771,
                                                            },
                                                          },
                                                          children: a(v, {
                                                            height: 192,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              48 +
                                                              1100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              3712 +
                                                              0 +
                                                              0 +
                                                              38 +
                                                              56 +
                                                              0 +
                                                              0 +
                                                              80.2 +
                                                              0 +
                                                              915,
                                                            children: a(_, {
                                                              className: `framer-16ez5zt-container`,
                                                              nodeId: `s2mE8Pixo`,
                                                              scopeId: `NFldwpxHM`,
                                                              children: a(V, {
                                                                AMQxizGuL: `Joined when the product was technically functional but deeply confusing. Talked to users who were struggling, mapped out where the interface was failing them, and redesigned the core experience to actually make sense. Also helped establish initial brand direction. `,
                                                                CGvW32DQL: `jan 2022 - dec 2023`,
                                                                height: `100%`,
                                                                id: `s2mE8Pixo`,
                                                                layoutId: `s2mE8Pixo`,
                                                                style: { width: `100%` },
                                                                variant: q(`WzVQtCWbz`),
                                                                VtoKB64T8: J(
                                                                  {
                                                                    pixelHeight: 28,
                                                                    pixelWidth: 40,
                                                                    src: `https://framerusercontent.com/images/yMcXNSNKzTKIukLJc4d9uhurDwE.svg?width=40&height=28`,
                                                                  },
                                                                  ``
                                                                ),
                                                                width: `100%`,
                                                                xLqLyNMp1: `Homestead`,
                                                              }),
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
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-FxZaQ.framer-12hy5k5, .framer-FxZaQ .framer-12hy5k5 { display: block; }`,
        `.framer-FxZaQ.framer-1fzvxue { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2659px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-FxZaQ .framer-1tvkrgo-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-FxZaQ .framer-1akwkpq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-3w7je1-container, .framer-FxZaQ .framer-n3c4-container, .framer-FxZaQ .framer-o62oz8-container, .framer-FxZaQ .framer-w7q4b1-container, .framer-FxZaQ .framer-16ez5zt-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1hsbhf7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: visible; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1u3qm76 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1ukjnmv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 150px; width: min-content; z-index: 2; }`,
        `.framer-FxZaQ .framer-qu7yco { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-FxZaQ .framer-rmz83s { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0px 0.3010936508871964px 0.9032809526615893px -0.8333333333333333px rgba(0, 0, 0, 0.13), 0px 1.1442666516217286px 3.4327999548651857px -1.6666666666666665px rgba(0, 0, 0, 0.13), 0px 5px 15px -2.5px rgba(0, 0, 0, 0.13); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-FxZaQ .framer-6rgt2z-container, .framer-FxZaQ .framer-1pd4qj9-container, .framer-FxZaQ .framer-1q98y8i-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-FxZaQ .framer-94tkti { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FxZaQ .framer-1pltn3m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 85%; }`,
        `.framer-FxZaQ .framer-n5931f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FxZaQ .framer-me803a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1q34n9d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 85%; }`,
        `.framer-FxZaQ .framer-13tnzw6, .framer-FxZaQ .framer-3cnw1y, .framer-FxZaQ .framer-eox33i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1m4k8ak { align-content: center; align-items: center; background-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; }`,
        `.framer-FxZaQ .framer-n067kb, .framer-FxZaQ .framer-1yusfv1, .framer-FxZaQ .framer-19x1pr, .framer-FxZaQ .framer-13p3nrk, .framer-FxZaQ .framer-u6fwr5, .framer-FxZaQ .framer-1j4k69v, .framer-FxZaQ .framer-1xesv5c, .framer-FxZaQ .framer-1k7dwc9, .framer-FxZaQ .framer-tzv26k, .framer-FxZaQ .framer-n52824 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-FxZaQ .framer-1y1mzru { --border-bottom-width: 1px; --border-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 56px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-154vkhg, .framer-FxZaQ .framer-w1h06a, .framer-FxZaQ .framer-6aawbq { bottom: -8px; flex: none; left: -8px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -8px; top: -8px; z-index: 1; }`,
        `.framer-FxZaQ .framer-7saf92 { --border-bottom-width: 2px; --border-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-ze7fwm { --border-bottom-width: 2px; --border-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-h8548a { --border-bottom-width: 2px; --border-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-1909pth { --border-bottom-width: 2px; --border-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-1vsjwpg-container { flex: none; height: auto; max-width: 700px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-FxZaQ .framer-1af8o5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1lxxv7w, .framer-FxZaQ .framer-t4ear5, .framer-FxZaQ .framer-xanzq5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FxZaQ .framer-2vhojh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1qahak7-container { flex: 1 0 0px; height: auto; max-width: 400px; position: relative; width: 1px; }`,
        `.framer-FxZaQ .framer-4hsz50-container { aspect-ratio: 0.84375 / 1; flex: none; height: auto; max-width: 200px; position: relative; width: 23%; }`,
        `.framer-FxZaQ .framer-9u3yg7, .framer-FxZaQ .framer-14jsokh, .framer-FxZaQ .framer-o05pe9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1t1zpi3-container { flex: none; height: auto; position: relative; width: 50%; }`,
        `.framer-FxZaQ .framer-1yo890v { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #d8a59d); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 16px 24px; position: absolute; right: -60px; top: 50%; transform: translateY(-50%); width: min-content; z-index: 1; }`,
        `.framer-FxZaQ .framer-13xxg5d-container, .framer-FxZaQ .framer-1f6mfj4-container, .framer-FxZaQ .framer-161e4g2-container { flex: none; height: auto; left: 24px; position: absolute; top: 50%; transform: translateY(-50%); width: auto; z-index: 1; }`,
        `.framer-FxZaQ .framer-5ogdh7, .framer-FxZaQ .framer-1slwc7v, .framer-FxZaQ .framer-1mrct6g { height: 26px; left: -23px; position: absolute; top: -18px; width: 28px; }`,
        `.framer-FxZaQ .framer-1h8izsz { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FxZaQ .framer-71winf { align-content: center; align-items: center; background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; }`,
        `.framer-FxZaQ .framer-ixsok6 { --border-bottom-width: 1px; --border-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 56px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-mpn7rf { display: grid; flex: none; gap: 32px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(9, minmax(1px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-15xqkt6-container, .framer-FxZaQ .framer-705mjb-container, .framer-FxZaQ .framer-bml7qr-container, .framer-FxZaQ .framer-1pbq76w-container { align-self: start; flex: none; grid-column: span 5; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1mk7bzi, .framer-FxZaQ .framer-rvqxqo, .framer-FxZaQ .framer-h7eo1w, .framer-FxZaQ .framer-li1ezw { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 4; height: 100%; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1lnd6n7, .framer-FxZaQ .framer-enz7kh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-fm2tup, .framer-FxZaQ .framer-1ugaiiq, .framer-FxZaQ .framer-1a3z98x, .framer-FxZaQ .framer-1t5eghs { flex: none; height: auto; position: relative; width: 71px; }`,
        `.framer-FxZaQ .framer-3w4or8, .framer-FxZaQ .framer-1m7msg9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-19dxwmd { --border-bottom-width: 2px; --border-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-1a4182c { --border-bottom-width: 2px; --border-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-15z12r4 { --border-bottom-width: 2px; --border-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-sat85g { --border-bottom-width: 2px; --border-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-1h2do80 { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 16px 24px; position: absolute; right: -60px; top: 50%; transform: translateY(-50%); width: min-content; z-index: 1; }`,
        `.framer-FxZaQ .framer-foyt4c { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FxZaQ .framer-nc06ra { align-content: center; align-items: center; background-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: min-content; }`,
        `.framer-FxZaQ .framer-1ql5gwc { --border-bottom-width: 1px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 56px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-3cixhw { --border-bottom-width: 2px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-iw10lq { --border-bottom-width: 2px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-11qzkjj { --border-bottom-width: 2px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-cis23f { --border-bottom-width: 2px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 16px; z-index: 1; }`,
        `.framer-FxZaQ .framer-1sty39j { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 16px 24px 16px 24px; position: absolute; right: -60px; top: 50%; transform: translateY(-50%); width: min-content; z-index: 1; }`,
        `.framer-FxZaQ .framer-6p0jh5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-4y5xew, .framer-FxZaQ .framer-1k6gw7g, .framer-FxZaQ .framer-1lo4iwf, .framer-FxZaQ .framer-1q4r4qm { background-color: var(--token-0aa568ec-3cf9-436c-a43a-7190c1309ca5, #c6c6c7); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-FxZaQ .framer-1no5cfb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        ...Ne,
        ...k,
        ...N,
        ...T,
        ...ke,
        ...P,
        `.framer-FxZaQ[data-border="true"]::after, .framer-FxZaQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-FxZaQ.framer-1fzvxue { width: 810px; } .framer-FxZaQ .framer-1hsbhf7 { gap: 32px; padding: 0px 40px 0px 40px; } .framer-FxZaQ .framer-rmz83s { gap: 16px; padding: 8px; } .framer-FxZaQ .framer-94tkti, .framer-FxZaQ .framer-1no5cfb { gap: 32px; } .framer-FxZaQ .framer-1y1mzru { gap: 24px; padding: 32px; } .framer-FxZaQ .framer-1h8izsz { flex: 1 0 0px; } .framer-FxZaQ .framer-ixsok6, .framer-FxZaQ .framer-1ql5gwc { padding: 32px; } .framer-FxZaQ .framer-mpn7rf { gap: 24px 16px; } .framer-FxZaQ .framer-6p0jh5 { gap: 16px; }}`,
        `@media (max-width: 809.98px) { .framer-FxZaQ.framer-1fzvxue { width: 390px; } .framer-FxZaQ .framer-1hsbhf7 { gap: 32px; padding: 0px 16px 0px 16px; } .framer-FxZaQ .framer-1u3qm76 { flex-direction: column; } .framer-FxZaQ .framer-1ukjnmv { align-content: flex-start; align-items: flex-start; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; } .framer-FxZaQ .framer-qu7yco { align-content: flex-end; align-items: flex-end; height: 79.97630331753555vh; position: sticky; top: 0px; } .framer-FxZaQ .framer-rmz83s { flex-direction: row; gap: 16px; padding: 8px; } .framer-FxZaQ .framer-6rgt2z-container, .framer-FxZaQ .framer-1pd4qj9-container, .framer-FxZaQ .framer-1q98y8i-container { align-self: unset; width: 56px; } .framer-FxZaQ .framer-94tkti { flex: none; gap: 32px; width: 100%; } .framer-FxZaQ .framer-1pltn3m, .framer-FxZaQ .framer-1q34n9d { width: 100%; } .framer-FxZaQ .framer-1y1mzru { gap: 24px; padding: 24px; } .framer-FxZaQ .framer-2vhojh { flex-direction: column; gap: 16px; justify-content: flex-start; } .framer-FxZaQ .framer-1qahak7-container { flex: none; width: 100%; } .framer-FxZaQ .framer-4hsz50-container { width: 56%; } .framer-FxZaQ .framer-9u3yg7 { justify-content: flex-start; } .framer-FxZaQ .framer-1t1zpi3-container { width: 90%; } .framer-FxZaQ .framer-1h8izsz, .framer-FxZaQ .framer-foyt4c { flex: 1 0 0px; } .framer-FxZaQ .framer-ixsok6 { padding: 24px; } .framer-FxZaQ .framer-mpn7rf { gap: 24px 16px; grid-template-columns: repeat(1, minmax(1px, 1fr)); } .framer-FxZaQ .framer-15xqkt6-container { grid-column: span 1; order: 0; } .framer-FxZaQ .framer-1mk7bzi { grid-column: span 1; order: 1; padding: 0px 0px 24px 0px; } .framer-FxZaQ .framer-rvqxqo { grid-column: span 1; order: 3; padding: 0px 0px 24px 0px; } .framer-FxZaQ .framer-705mjb-container { grid-column: span 1; order: 2; } .framer-FxZaQ .framer-bml7qr-container { grid-column: span 1; order: 4; } .framer-FxZaQ .framer-h7eo1w { grid-column: span 1; order: 5; padding: 0px 0px 24px 0px; } .framer-FxZaQ .framer-li1ezw { grid-column: span 1; order: 7; padding: 0px 0px 24px 0px; } .framer-FxZaQ .framer-1pbq76w-container { grid-column: span 1; order: 6; } .framer-FxZaQ .framer-1ql5gwc { padding: 16px; } .framer-FxZaQ .framer-6p0jh5, .framer-FxZaQ .framer-1no5cfb { gap: 16px; }}`,
      ],
      `framer-FxZaQ`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 6093, width: 1200 }),
    p(
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
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
          ],
        },
        ...He,
        ...Ue,
        ...We,
        ...Ge,
        ...Ke,
        ...qe,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...g(Pe),
        ...g(A),
        ...g(be),
        ...g(D),
        ...g(Ae),
        ...g(xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) =>
        y([() => m(B, {}, t), () => m(z, {}, t), () => m(R, {}, t), () => m(V, {}, t)], t),
    }),
    (ct = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerNFldwpxHM`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `6093`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"NmnvqlgWe":{"layout":["fixed","fixed"]},"jW_4HARls":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `{"dkrKqQyE0":{"pattern":":dkrKqQyE0","name":"mainbio"},"Jdwi6XhE4":{"pattern":":Jdwi6XhE4","name":"my-story"},"OlJBi42Qf":{"pattern":":OlJBi42Qf","name":"work"}}`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ct as __FramerMetadata__, $ as default, tt as queryParamNames };
//# sourceMappingURL=ghhEsyYxG8eUgj2UtsL7CebRSjTz-oryPG1KtddxVUI.oDRsCbMf.mjs.map
