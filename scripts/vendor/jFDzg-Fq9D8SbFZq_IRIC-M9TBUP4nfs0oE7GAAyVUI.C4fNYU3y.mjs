import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as ee,
  m as te,
  s as a,
  u as o,
  w as ne,
  x as re,
} from "./react.BDb-TZZO.mjs";
import { E as s, a as ie, r as ae, t as oe } from "./motion.DUnltMVz.mjs";
import {
  B as c,
  H as l,
  J as se,
  M as ce,
  O as u,
  P as d,
  St as le,
  T as f,
  V as p,
  W as ue,
  _ as de,
  _t as fe,
  a as m,
  bt as pe,
  et as h,
  f as me,
  ft as he,
  gt as ge,
  i as g,
  lt as _e,
  m as _,
  mt as ve,
  nt as ye,
  pt as be,
  ut as xe,
  vt as Se,
  w as Ce,
  wt as we,
  x as v,
} from "./framer.Bi3K3xOo.mjs";
import { a as Te, c as Ee, i as y, o as b, r as De, s as Oe } from "./shared-lib.DAxb9xg1.mjs";
import { i as x, n as ke, r as S, t as Ae } from "./to1tng0Qo.DXKLFRTZ.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./aJRokyP_h.TRnP7oxH.mjs";
import { i as Fe, n as Ie, r as C, t as Le } from "./MffBJovlA.DNehB8j9.mjs";
import { i as w, n as T, r as E, t as Re } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { n as D, t as O } from "./VtZoRV2tQ.D294Z8Kc.mjs";
import { n as k, t as ze } from "./Lenis.Bav3QMVP.mjs";
import { i as A, n as j, r as M, t as Be } from "./TI_CAjGBM.BACS-TeA.mjs";
import {
  a as Ve,
  c as N,
  i as P,
  n as He,
  o as Ue,
  r as We,
  s as Ge,
  t as Ke,
} from "./R28tD7UOw.DdUmI0oA.mjs";
import { n as qe, t as F } from "./jUfJHCvjJ.DoUQs7YU.mjs";
import { i as Je, t as I } from "./hu3yniggG.DmEUKfyJ.mjs";
import { i as L, n as Ye, r as Xe, t as Ze } from "./Iep6i79Kc.D1awO1TT.mjs";
import { n as Qe, t as R } from "./OUyMhnj3r.DvLPwY1y.mjs";
import { i as $e, n as z, r as et, t as tt } from "./a0iFXSebs.Dq1bFxN9.mjs";
import nt, { t as rt } from "./8YiYJNlH_-zaAVlDnhzPfvO9YCKXmx9DlBDbqzniJbs.CyijBkMR.mjs";
var B, V, H, U, W, it, G, at, ot, st, K, q, ct, lt, J, Y, X, Z, ut, dt, ft, pt, Q, $;
e(() => {
  (i(),
    se(),
    oe(),
    r(),
    k(),
    qe(),
    Qe(),
    D(),
    y(),
    Je(),
    $e(),
    je(),
    N(),
    L(),
    Ee(),
    Fe(),
    w(),
    P(),
    A(),
    x(),
    rt(),
    (B = c(ze)),
    (V = c(De)),
    (H = c(F)),
    (U = c(R)),
    (W = c(O)),
    (it = {
      eK4b42cln: `(max-width: 809.98px)`,
      vRWFWIe4R: `(min-width: 1200px)`,
      X0JHWOPvl: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (G = []),
    (at = `framer-y6Rfa`),
    (ot = {
      eK4b42cln: `framer-v-h2ojg8`,
      vRWFWIe4R: `framer-v-xlckfo`,
      X0JHWOPvl: `framer-v-1ye9ay8`,
    }),
    (st = (e, t, n) => (e && t ? `position` : n)),
    (K = (e, t, n) => {
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
    (q = { dateStyle: `medium`, timeZone: `UTC` }),
    (ct = (e, t) => K(e, q, t)),
    (lt = {
      effect: { opacity: 0.001, rotate: 0, scale: 0.9, skewX: 0, skewY: 0, x: 40, y: 0 },
      repeat: !1,
      startDelay: 0,
      threshold: 0.5,
      tokenization: `character`,
      transition: { damping: 40, delay: 0.03, mass: 4, stiffness: 400, type: `spring` },
      trigger: `onInView`,
      type: `appear`,
    }),
    (J = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = { Desktop: `vRWFWIe4R`, Phone: `eK4b42cln`, Tablet: `X0JHWOPvl` }),
    (ut = ({ value: e }) =>
      ve()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (dt = (e) => ({
      from: {
        constraint: {
          left: { collection: `ooP4yMWDH`, name: `nextItemId`, type: `Identifier` },
          operator: `==`,
          right: { collection: `nextItemId`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `ooP4yMWDH`, data: I, type: `Collection` },
        right: { alias: `nextItemId`, data: I, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `ooP4yMWDH`, name: `N9PVOHoUg`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `rAITKxrzh`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `rS05UF0Io`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `v80eqeLsH`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `ERYmqqg82`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `Dag0GQUu2`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `vyzMKeGSA`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `B8NfttVrW`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `MarT7bDIS`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `IWcgMXwyy`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `fM51CJnkf`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `VgTI7GPgd`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `WLOiLtgdz`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `gF5lHaYLx`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `lqwSGb8R9`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `pAvQLahrh`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `TrJ9IPIgM`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `WLHhWaUUA`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `MiaQVIA_j`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `w3odghtHA`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `ynjzhZ6iu`, type: `Identifier` },
        { collection: `ooP4yMWDH`, name: `P6B5F5Hvc`, type: `Identifier` },
        {
          alias: `nextItemId.KVCXsWDZS`,
          collection: `nextItemId`,
          name: `KVCXsWDZS`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.rAITKxrzh`,
          collection: `nextItemId`,
          name: `rAITKxrzh`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.rS05UF0Io`,
          collection: `nextItemId`,
          name: `rS05UF0Io`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.v80eqeLsH`,
          collection: `nextItemId`,
          name: `v80eqeLsH`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.ERYmqqg82`,
          collection: `nextItemId`,
          name: `ERYmqqg82`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.Dag0GQUu2`,
          collection: `nextItemId`,
          name: `Dag0GQUu2`,
          type: `Identifier`,
        },
        { alias: `nextItemId`, collection: `nextItemId`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (ft = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `vRWFWIe4R`,
    })),
    (pt = { component: O, variant: `EFVy2p6H0` }),
    (Q = we(
      te(function (e, r) {
        let i = re(null),
          te = r ?? i,
          oe = ne(),
          { activeLocale: c, setLocale: se } = fe(),
          u = _e(),
          d = xe(),
          [p] = pe(dt(ue(d, `ooP4yMWDH`))),
          h = (e) => {
            if (!p) throw new de(`No data matches path variables: ${JSON.stringify(d)}`);
            return p[e];
          },
          {
            style: ve,
            className: ye,
            layoutId: we,
            variant: Ee,
            N9PVOHoUg: y = h(`N9PVOHoUg`),
            rAITKxrzh: b = h(`rAITKxrzh`) ?? ``,
            rS05UF0Io: Oe = h(`rS05UF0Io`) ?? ``,
            v80eqeLsH: x = h(`v80eqeLsH`),
            ERYmqqg82: ke = h(`ERYmqqg82`) ?? ``,
            Dag0GQUu2: S = h(`Dag0GQUu2`) ?? ``,
            vyzMKeGSA: je = h(`vyzMKeGSA`) ?? ``,
            B8NfttVrW: Me = h(`B8NfttVrW`) ?? ``,
            MarT7bDIS: Ne = h(`MarT7bDIS`) ?? ``,
            IWcgMXwyy: Fe = h(`IWcgMXwyy`) ?? ``,
            fM51CJnkf: Ie = h(`fM51CJnkf`) ?? ``,
            VgTI7GPgd: C = h(`VgTI7GPgd`),
            WLOiLtgdz: w = h(`WLOiLtgdz`) ?? ``,
            gF5lHaYLx: T = h(`gF5lHaYLx`),
            lqwSGb8R9: E = h(`lqwSGb8R9`) ?? ``,
            pAvQLahrh: D = h(`pAvQLahrh`),
            TrJ9IPIgM: O = h(`TrJ9IPIgM`) ?? ``,
            WLHhWaUUA: k = h(`WLHhWaUUA`),
            MiaQVIA_j: A = h(`MiaQVIA_j`) ?? ``,
            w3odghtHA: j = h(`w3odghtHA`),
            ynjzhZ6iu: M = h(`ynjzhZ6iu`) ?? ``,
            P6B5F5Hvc: N = h(`P6B5F5Hvc`),
            nextItemId_KVCXsWDZS: P = h(`nextItemId.KVCXsWDZS`) ?? ``,
            nextItemId_rAITKxrzh: He = h(`nextItemId.rAITKxrzh`) ?? ``,
            nextItemId_rS05UF0Io: Ue = h(`nextItemId.rS05UF0Io`) ?? ``,
            nextItemId_v80eqeLsH: We = h(`nextItemId.v80eqeLsH`),
            nextItemId_ERYmqqg82: Ge = h(`nextItemId.ERYmqqg82`) ?? ``,
            nextItemId_Dag0GQUu2: qe = h(`nextItemId.Dag0GQUu2`) ?? ``,
            nextItemId: Je = h(`nextItemId`),
            ...I
          } = ft(e);
        Se(n(() => nt({ rAITKxrzh: b, v80eqeLsH: x }, c), [b, x, c]));
        let [L, Ye] = be(Ee, it, !1),
          Xe = ce(at, Le, Ae, Re, Te, Ve, Be, Ze, Ke, Pe, tt),
          Qe = ee(me)?.isLayoutTemplate,
          $e = !!ee(ie)?.transition?.layout,
          z = st(Qe, $e),
          et = ge(),
          rt = ct(y, et),
          B = J(S),
          V = J(C),
          H = J(E),
          U = J(T),
          W = J(O),
          G = J(D),
          K = J(A),
          q = J(k),
          Q = J(w),
          $ = J(j),
          mt = J(M),
          ht = J(N),
          gt = J(Je);
        return (
          le(),
          he({ "1jx41yq": pt }),
          a(me.Provider, {
            value: {
              activeVariantId: L,
              humanReadableVariantMap: Z,
              primaryVariantId: `vRWFWIe4R`,
              variantClassNames: ot,
            },
            children: o(ae, {
              id: we ?? oe,
              children: [
                a(ut, {
                  value: `html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`,
                }),
                o(s.div, {
                  ...I,
                  className: ce(Xe, `framer-xlckfo`, ye),
                  ref: te,
                  style: { ...ve },
                  children: [
                    a(g, {
                      children: a(m, {
                        className: `framer-kv2cvj-container`,
                        "data-framer-name": `Smooth Scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: z,
                        layoutScroll: !0,
                        name: `Smooth Scroll`,
                        nodeId: `SppSlWdSs`,
                        scopeId: `ooP4yMWDH`,
                        children: a(ze, {
                          height: `100%`,
                          id: `SppSlWdSs`,
                          infinite: !1,
                          intensity: 5,
                          layoutId: `SppSlWdSs`,
                          name: `Smooth Scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    o(s.div, {
                      className: `framer-eleqzd`,
                      "data-framer-name": `All Content`,
                      layout: z,
                      children: [
                        a(g, {
                          children: a(m, {
                            className: `framer-mbeaz4-container`,
                            isAuthoredByUser: !0,
                            nodeId: `yYArGTPj5`,
                            scopeId: `ooP4yMWDH`,
                            children: a(De, {
                              color: `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                              height: `100%`,
                              id: `yYArGTPj5`,
                              layoutId: `yYArGTPj5`,
                              majorStep: 100,
                              speed: 0.2,
                              style: { width: `100%` },
                              subdivisions: 2,
                              width: `100%`,
                            }),
                          }),
                        }),
                        a(`div`, {
                          className: `framer-15aqhwa`,
                          "data-framer-name": `Contain`,
                          children: o(`div`, {
                            className: `framer-fka777`,
                            "data-framer-name": `Content`,
                            children: [
                              o(`div`, {
                                className: `framer-kddf1q`,
                                children: [
                                  o(`div`, {
                                    className: `framer-1up7p9o`,
                                    "data-framer-name": `Information`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-1fikw3g`,
                                        "data-framer-name": `Date`,
                                        children: [
                                          a(`div`, { className: `framer-xpo76l` }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-27ku3y`,
                                                "data-styles-preset": `MffBJovlA`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `04, April 2026`,
                                              }),
                                            }),
                                            className: `framer-71j951`,
                                            fonts: [`Inter`],
                                            text: a(`time`, { dateTime: y, children: rt }),
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(`div`, {
                                        className: `framer-1obybnh`,
                                        children: [
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`h2`, {
                                                className: `framer-styles-preset-k31no2`,
                                                "data-styles-preset": `to1tng0Qo`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `Meridian Health`,
                                              }),
                                            }),
                                            className: `framer-8rqc9p`,
                                            effect: lt,
                                            fonts: [`Inter`],
                                            text: b,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-163ovsm`,
                                                "data-styles-preset": `ptQSvPZIk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `When therapists spend less time clicking, they have more time for patients.`,
                                              }),
                                            }),
                                            className: `framer-lcr6b3`,
                                            fonts: [`Inter`],
                                            text: Oe,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(`div`, {
                                        className: `framer-1stbt7f`,
                                        "data-framer-name": `Tag`,
                                        children: [
                                          a(v, {
                                            breakpoint: L,
                                            overrides: {
                                              eK4b42cln: {
                                                y:
                                                  (u?.y || 0) +
                                                  140 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  289 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  318 +
                                                  0,
                                              },
                                              X0JHWOPvl: {
                                                y:
                                                  (u?.y || 0) +
                                                  140 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  266 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  318 +
                                                  0,
                                              },
                                            },
                                            children: a(g, {
                                              height: 44,
                                              y:
                                                (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                301 +
                                                0 +
                                                0 +
                                                0 +
                                                334 +
                                                0,
                                              children: a(m, {
                                                className: `framer-ux2tki-container`,
                                                nodeId: `SOt3toINR`,
                                                scopeId: `ooP4yMWDH`,
                                                children: a(F, {
                                                  Ha3WZBmxl: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                  height: `100%`,
                                                  id: `SOt3toINR`,
                                                  layoutId: `SOt3toINR`,
                                                  rTmzt9Hxo: ke,
                                                  width: `100%`,
                                                  WtvdAMl0x: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          B !== !1 &&
                                            a(v, {
                                              breakpoint: L,
                                              overrides: {
                                                eK4b42cln: {
                                                  y:
                                                    (u?.y || 0) +
                                                    140 +
                                                    0 +
                                                    48 +
                                                    1100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    289 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    318 +
                                                    0,
                                                },
                                                X0JHWOPvl: {
                                                  y:
                                                    (u?.y || 0) +
                                                    140 +
                                                    0 +
                                                    48 +
                                                    1100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    266 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    318 +
                                                    0,
                                                },
                                              },
                                              children: a(g, {
                                                height: 44,
                                                y:
                                                  (u?.y || 0) +
                                                  140 +
                                                  0 +
                                                  48 +
                                                  1100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  301 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  334 +
                                                  0,
                                                children: a(m, {
                                                  className: `framer-10562cl-container`,
                                                  nodeId: `gm_KksPb4`,
                                                  scopeId: `ooP4yMWDH`,
                                                  children: a(F, {
                                                    Ha3WZBmxl: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                    height: `100%`,
                                                    id: `gm_KksPb4`,
                                                    layoutId: `gm_KksPb4`,
                                                    rTmzt9Hxo: S,
                                                    width: `100%`,
                                                    WtvdAMl0x: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(237, 237, 237))`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-176roea`,
                                    "data-framer-name": `More In4`,
                                    children: [
                                      o(s.div, {
                                        className: `framer-j8h697`,
                                        "data-framer-name": `Role`,
                                        style: { rotate: -4 },
                                        children: [
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1833qg6`,
                                                "data-styles-preset": `jB2nPzqr7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: a(`strong`, { children: `Role` }),
                                              }),
                                            }),
                                            className: `framer-7y5mf6`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-163ovsm`,
                                                "data-styles-preset": `ptQSvPZIk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `Product Designer`,
                                              }),
                                            }),
                                            className: `framer-16eli8k`,
                                            fonts: [`Inter`],
                                            text: je,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(s.div, {
                                        className: `framer-1qsex57`,
                                        "data-framer-name": `Role`,
                                        style: { rotate: 7 },
                                        children: [
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1833qg6`,
                                                "data-styles-preset": `jB2nPzqr7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: a(`strong`, { children: `Timeline` }),
                                              }),
                                            }),
                                            className: `framer-1ul0l1v`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-163ovsm`,
                                                "data-styles-preset": `ptQSvPZIk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `8 weeks`,
                                              }),
                                            }),
                                            className: `framer-1s9zonj`,
                                            fonts: [`Inter`],
                                            text: Me,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(s.div, {
                                        className: `framer-ylk8kg`,
                                        "data-framer-name": `Role`,
                                        style: { rotate: 5 },
                                        children: [
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1833qg6`,
                                                "data-styles-preset": `jB2nPzqr7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: a(`strong`, { children: `team` }),
                                              }),
                                            }),
                                            className: `framer-h4wzs5`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-163ovsm`,
                                                "data-styles-preset": `ptQSvPZIk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `2 Enginners, 1 PM, me`,
                                              }),
                                            }),
                                            className: `framer-ykellg`,
                                            fonts: [`Inter`],
                                            text: Ne,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(s.div, {
                                        className: `framer-1rbj1cg`,
                                        "data-framer-name": `Role`,
                                        style: { rotate: 2 },
                                        children: [
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-1833qg6`,
                                                "data-styles-preset": `jB2nPzqr7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: a(`strong`, { children: `platform` }),
                                              }),
                                            }),
                                            className: `framer-17ni2kh`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(f, {
                                            __fromCanvasComponent: !0,
                                            children: a(t, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-163ovsm`,
                                                "data-styles-preset": `ptQSvPZIk`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                },
                                                children: `Web`,
                                              }),
                                            }),
                                            className: `framer-kxhsp9`,
                                            fonts: [`Inter`],
                                            text: Fe,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-n6ccy7`,
                                "data-framer-name": `Content`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1spfgd6`,
                                    "data-framer-name": `Image`,
                                    children: a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `a group of people `,
                                            fit: `fill`,
                                            intrinsicHeight: 1875,
                                            intrinsicWidth: 1500,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                1748 +
                                                0
                                            ),
                                            pixelHeight: 1603,
                                            pixelWidth: 2400,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(x),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `a group of people `,
                                            fit: `fill`,
                                            intrinsicHeight: 1875,
                                            intrinsicWidth: 1500,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                2348 +
                                                0
                                            ),
                                            pixelHeight: 1603,
                                            pixelWidth: 2400,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(x),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `a group of people `,
                                          fit: `fill`,
                                          intrinsicHeight: 1875,
                                          intrinsicWidth: 1500,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              3190 +
                                              0
                                          ),
                                          pixelHeight: 1603,
                                          pixelWidth: 2400,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(x),
                                        },
                                        className: `framer-p2fvhh`,
                                        "data-framer-name": `Image`,
                                        children: o(`div`, {
                                          className: `framer-53jf28`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1amt9bm`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1jwrlbt`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1i39xik`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-tiogd4`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1smiik6`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(f, {
                                    __fromCanvasComponent: !0,
                                    children: Ie,
                                    className: `framer-sxbmzy`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      h2: `framer-styles-preset-k31no2`,
                                      h3: `framer-styles-preset-16swsjh`,
                                      h4: `framer-styles-preset-jjv5nu`,
                                      p: `framer-styles-preset-163ovsm`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  V !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `Stylish woman in white tennis attire leans`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(C),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `Stylish woman in white tennis attire leans`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(C),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `Stylish woman in white tennis attire leans`,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 1130,
                                          pixelWidth: 1500,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(C),
                                        },
                                        className: `framer-2ibhow`,
                                        children: o(`div`, {
                                          className: `framer-1lqle49`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-12e5j0b`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1avp6je`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-c8fien`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-j4ed1m`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-k53fon`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  H !== !1 &&
                                    a(f, {
                                      __fromCanvasComponent: !0,
                                      children: E,
                                      className: `framer-u1mcci`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-1gbd6t2`,
                                        code: `framer-styles-preset-1j2scqf`,
                                        h1: `framer-styles-preset-4nri6j`,
                                        h2: `framer-styles-preset-k31no2`,
                                        h3: `framer-styles-preset-16swsjh`,
                                        h4: `framer-styles-preset-jjv5nu`,
                                        h5: `framer-styles-preset-2lfg8k`,
                                        p: `framer-styles-preset-163ovsm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  U !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `A dynamic shot of runners in motion,`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(T),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `A dynamic shot of runners in motion,`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(T),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `A dynamic shot of runners in motion,`,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 1130,
                                          pixelWidth: 1500,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(T),
                                        },
                                        className: `framer-1ssjtfy`,
                                        children: o(`div`, {
                                          className: `framer-mls9vv`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-h0t6t8`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1kl3xqd`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1bwck1z`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-vqexx6`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-tvr5z4`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  W !== !1 &&
                                    a(f, {
                                      __fromCanvasComponent: !0,
                                      children: O,
                                      className: `framer-nqiyyb`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-1gbd6t2`,
                                        code: `framer-styles-preset-1j2scqf`,
                                        h1: `framer-styles-preset-4nri6j`,
                                        h2: `framer-styles-preset-k31no2`,
                                        h3: `framer-styles-preset-16swsjh`,
                                        h4: `framer-styles-preset-jjv5nu`,
                                        h5: `framer-styles-preset-2lfg8k`,
                                        p: `framer-styles-preset-163ovsm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  G !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `Intense gaze of a young woman`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 1e3,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(D),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `Intense gaze of a young woman`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 1e3,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(D),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `Intense gaze of a young woman`,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 1e3,
                                          pixelWidth: 1500,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(D),
                                        },
                                        className: `framer-q02hip`,
                                        children: o(`div`, {
                                          className: `framer-dkpmtr`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-n6hf4n`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1y6xdy1`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-4kgt72`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-14ljufp`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1sdexp1`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  K !== !1 &&
                                    a(f, {
                                      __fromCanvasComponent: !0,
                                      children: A,
                                      className: `framer-1qjcz2f`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-1gbd6t2`,
                                        code: `framer-styles-preset-1j2scqf`,
                                        h1: `framer-styles-preset-4nri6j`,
                                        h2: `framer-styles-preset-k31no2`,
                                        h3: `framer-styles-preset-16swsjh`,
                                        h4: `framer-styles-preset-jjv5nu`,
                                        h5: `framer-styles-preset-2lfg8k`,
                                        p: `framer-styles-preset-163ovsm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  q !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `A person in winter gear with ski goggles`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 514,
                                            pixelWidth: 1199,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(k),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `A person in winter gear with ski goggles`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 514,
                                            pixelWidth: 1199,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(k),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `A person in winter gear with ski goggles`,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 514,
                                          pixelWidth: 1199,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(k),
                                        },
                                        className: `framer-66kkm2`,
                                        children: o(`div`, {
                                          className: `framer-1mj75e0`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1anlbbr`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1qcvaf8`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-17keimi`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-18gxeyw`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1qhybvh`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  Q !== !1 &&
                                    a(f, {
                                      __fromCanvasComponent: !0,
                                      children: w,
                                      className: `framer-rt4ik2`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-1gbd6t2`,
                                        code: `framer-styles-preset-1j2scqf`,
                                        h1: `framer-styles-preset-4nri6j`,
                                        h2: `framer-styles-preset-k31no2`,
                                        h3: `framer-styles-preset-16swsjh`,
                                        h4: `framer-styles-preset-jjv5nu`,
                                        h5: `framer-styles-preset-2lfg8k`,
                                        p: `framer-styles-preset-163ovsm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  $ !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `Close-up of a person in a black motorcycle `,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(j),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `Close-up of a person in a black motorcycle `,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 1130,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(j),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `Close-up of a person in a black motorcycle `,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 1130,
                                          pixelWidth: 1500,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(j),
                                        },
                                        className: `framer-4w8ho6`,
                                        children: o(`div`, {
                                          className: `framer-b7wxf6`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1dafgvx`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-bkvisw`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-ud73b0`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1vtzkva`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-qxz13`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  mt !== !1 &&
                                    a(f, {
                                      __fromCanvasComponent: !0,
                                      children: M,
                                      className: `framer-15wylng`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-1gbd6t2`,
                                        code: `framer-styles-preset-1j2scqf`,
                                        h1: `framer-styles-preset-4nri6j`,
                                        h2: `framer-styles-preset-k31no2`,
                                        h3: `framer-styles-preset-16swsjh`,
                                        h4: `framer-styles-preset-jjv5nu`,
                                        h5: `framer-styles-preset-2lfg8k`,
                                        p: `framer-styles-preset-163ovsm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ht !== !1 &&
                                    a(v, {
                                      breakpoint: L,
                                      overrides: {
                                        eK4b42cln: {
                                          background: {
                                            alt: `A cyclist in a black helmet and blue jersey`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1179 +
                                                0 +
                                                2456
                                            ),
                                            pixelHeight: 1050,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            ...Y(N),
                                          },
                                        },
                                        X0JHWOPvl: {
                                          background: {
                                            alt: `A cyclist in a black helmet and blue jersey`,
                                            fit: `fill`,
                                            loading: l(
                                              (u?.y || 0) +
                                                140 +
                                                0 +
                                                48 +
                                                1100 +
                                                0 +
                                                0 +
                                                0 +
                                                1156 +
                                                0 +
                                                3056
                                            ),
                                            pixelHeight: 1050,
                                            pixelWidth: 1500,
                                            sizes: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            ...Y(N),
                                          },
                                        },
                                      },
                                      children: a(_, {
                                        background: {
                                          alt: `A cyclist in a black helmet and blue jersey`,
                                          fit: `fill`,
                                          loading: l(
                                            (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              821 +
                                              0 +
                                              4386
                                          ),
                                          pixelHeight: 1050,
                                          pixelWidth: 1500,
                                          sizes: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          ...Y(N),
                                        },
                                        className: `framer-19s2zb3`,
                                        children: o(`div`, {
                                          className: `framer-a01whm`,
                                          "data-framer-name": `Border`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-a660iw`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1bjucnn`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1du3cqy`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-vyodw`,
                                              "data-border": !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-181uoet`,
                                              "data-border": !0,
                                              "data-framer-name": `border`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              gt !== !1 &&
                                a(`div`, {
                                  className: `framer-181gwqx`,
                                  "data-framer-name": `Next Case Study`,
                                  children: a(Ce, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { KVCXsWDZS: P },
                                          webPageId: `ooP4yMWDH`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { KVCXsWDZS: P },
                                          webPageId: `ooP4yMWDH`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { KVCXsWDZS: P },
                                          webPageId: `ooP4yMWDH`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      a(v, {
                                        breakpoint: L,
                                        overrides: {
                                          eK4b42cln: {
                                            width: `min(${u?.width || `100vw`} - 72px, 1800px)`,
                                            y:
                                              (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              5359 +
                                              100 +
                                              0,
                                          },
                                          X0JHWOPvl: {
                                            width: `min(${u?.width || `100vw`} - 120px, 1800px)`,
                                            y:
                                              (u?.y || 0) +
                                              140 +
                                              0 +
                                              48 +
                                              1100 +
                                              0 +
                                              0 +
                                              0 +
                                              6536 +
                                              100 +
                                              -23,
                                          },
                                        },
                                        children: a(g, {
                                          height: 446,
                                          width: `min(${u?.width || `100vw`} - 240px, 1800px)`,
                                          y:
                                            (u?.y || 0) +
                                            140 +
                                            0 +
                                            48 +
                                            1100 +
                                            0 +
                                            0 +
                                            0 +
                                            8353 +
                                            100 +
                                            0,
                                          children: a(m, {
                                            className: `framer-1181m0t-container`,
                                            nodeId: `mbbB1ufNt`,
                                            scopeId: `ooP4yMWDH`,
                                            children: a(v, {
                                              breakpoint: L,
                                              overrides: {
                                                eK4b42cln: {
                                                  GV6qtoPTo: e[2],
                                                  variant: X(`VwFvX__ug`),
                                                },
                                                X0JHWOPvl: { GV6qtoPTo: e[1] },
                                              },
                                              children: a(R, {
                                                CVPDwhjsv: Y(We),
                                                e4RP7oipI: qe,
                                                fUieGlHaC: He,
                                                GV6qtoPTo: e[0],
                                                height: `100%`,
                                                HHcdgI9hY: Ge,
                                                hsDVGQ1Lm: `1jx41yq`,
                                                id: `mbbB1ufNt`,
                                                layoutId: `mbbB1ufNt`,
                                                mVwzj0Lnz: S,
                                                style: { width: `100%` },
                                                variant: X(`bnTSrHTjV`),
                                                width: `100%`,
                                                y1NPIrKnB: Ue,
                                              }),
                                            }),
                                          }),
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-y6Rfa.framer-14e73sc, .framer-y6Rfa .framer-14e73sc { display: block; }`,
        `.framer-y6Rfa.framer-xlckfo { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-y6Rfa .framer-kv2cvj-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-y6Rfa .framer-eleqzd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-mbeaz4-container, .framer-y6Rfa .framer-1181m0t-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-15aqhwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-fka777 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-kddf1q { display: grid; flex: none; gap: 10px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-1up7p9o { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-1fikw3g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-xpo76l { aspect-ratio: 1 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; overflow: visible; position: relative; width: 12px; }`,
        `.framer-y6Rfa .framer-71j951 { flex: 1 0 0px; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y6Rfa .framer-1obybnh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-8rqc9p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y6Rfa .framer-lcr6b3 { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y6Rfa .framer-1stbt7f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-ux2tki-container, .framer-y6Rfa .framer-10562cl-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-y6Rfa .framer-176roea { align-self: start; display: grid; flex: none; gap: 8px 8px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-j8h697 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, #a4e5f8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-7y5mf6, .framer-y6Rfa .framer-16eli8k, .framer-y6Rfa .framer-1ul0l1v, .framer-y6Rfa .framer-1s9zonj, .framer-y6Rfa .framer-h4wzs5, .framer-y6Rfa .framer-ykellg, .framer-y6Rfa .framer-17ni2kh, .framer-y6Rfa .framer-kxhsp9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y6Rfa .framer-1qsex57 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, #f5dda1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-ylk8kg { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-3b25897c-a78c-4fb0-9a93-831975a769c1, #a1dfc5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-1rbj1cg { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-221f5458-30ad-42f0-b005-7c3d9fe30e8d, #fabed1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-n6ccy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-1spfgd6 { flex: none; height: 90vh; overflow: visible; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-p2fvhh { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
        `.framer-y6Rfa .framer-53jf28, .framer-y6Rfa .framer-1lqle49, .framer-y6Rfa .framer-mls9vv, .framer-y6Rfa .framer-dkpmtr, .framer-y6Rfa .framer-1mj75e0, .framer-y6Rfa .framer-b7wxf6, .framer-y6Rfa .framer-a01whm { bottom: -8px; flex: none; left: -8px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -8px; top: -8px; z-index: 1; }`,
        `.framer-y6Rfa .framer-1amt9bm, .framer-y6Rfa .framer-12e5j0b, .framer-y6Rfa .framer-h0t6t8, .framer-y6Rfa .framer-n6hf4n, .framer-y6Rfa .framer-1anlbbr, .framer-y6Rfa .framer-1dafgvx, .framer-y6Rfa .framer-a660iw { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: 16px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-y6Rfa .framer-1jwrlbt, .framer-y6Rfa .framer-1avp6je, .framer-y6Rfa .framer-1kl3xqd, .framer-y6Rfa .framer-1y6xdy1, .framer-y6Rfa .framer-1qcvaf8, .framer-y6Rfa .framer-bkvisw, .framer-y6Rfa .framer-1bjucnn { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 16px; z-index: 1; }`,
        `.framer-y6Rfa .framer-1i39xik, .framer-y6Rfa .framer-c8fien, .framer-y6Rfa .framer-1bwck1z, .framer-y6Rfa .framer-4kgt72, .framer-y6Rfa .framer-17keimi, .framer-y6Rfa .framer-ud73b0, .framer-y6Rfa .framer-1du3cqy { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 16px; z-index: 1; }`,
        `.framer-y6Rfa .framer-tiogd4, .framer-y6Rfa .framer-j4ed1m, .framer-y6Rfa .framer-vqexx6, .framer-y6Rfa .framer-14ljufp, .framer-y6Rfa .framer-18gxeyw, .framer-y6Rfa .framer-1vtzkva, .framer-y6Rfa .framer-vyodw { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: 16px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; z-index: 1; }`,
        `.framer-y6Rfa .framer-1smiik6, .framer-y6Rfa .framer-k53fon, .framer-y6Rfa .framer-tvr5z4, .framer-y6Rfa .framer-1sdexp1, .framer-y6Rfa .framer-1qhybvh, .framer-y6Rfa .framer-qxz13, .framer-y6Rfa .framer-181uoet { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; bottom: 8px; flex: none; left: 8px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 8px; top: 8px; }`,
        `.framer-y6Rfa .framer-sxbmzy, .framer-y6Rfa .framer-u1mcci, .framer-y6Rfa .framer-nqiyyb, .framer-y6Rfa .framer-1qjcz2f, .framer-y6Rfa .framer-rt4ik2, .framer-y6Rfa .framer-15wylng { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-y6Rfa .framer-2ibhow, .framer-y6Rfa .framer-1ssjtfy, .framer-y6Rfa .framer-q02hip, .framer-y6Rfa .framer-66kkm2, .framer-y6Rfa .framer-4w8ho6, .framer-y6Rfa .framer-19s2zb3 { flex: none; height: 80vh; overflow: visible; position: relative; width: 100%; }`,
        `.framer-y6Rfa .framer-181gwqx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        ...Ie,
        ...ke,
        ...T,
        ...b,
        ...Ue,
        ...j,
        ...Ye,
        ...He,
        ...Me,
        ...z,
        `.framer-y6Rfa[data-border="true"]::after, .framer-y6Rfa [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-y6Rfa.framer-xlckfo { width: 810px; } .framer-y6Rfa .framer-15aqhwa { padding: 0px 40px 0px 40px; } .framer-y6Rfa .framer-fka777 { gap: 32px; } .framer-y6Rfa .framer-kddf1q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; } .framer-y6Rfa .framer-1up7p9o { align-self: unset; gap: 16px; } .framer-y6Rfa .framer-1fikw3g, .framer-y6Rfa .framer-1stbt7f { gap: 8px; } .framer-y6Rfa .framer-176roea { align-self: unset; } .framer-y6Rfa .framer-n6ccy7 { gap: 56px; } .framer-y6Rfa .framer-1spfgd6 { height: 50vh; } .framer-y6Rfa .framer-2ibhow, .framer-y6Rfa .framer-1ssjtfy, .framer-y6Rfa .framer-q02hip, .framer-y6Rfa .framer-66kkm2, .framer-y6Rfa .framer-4w8ho6, .framer-y6Rfa .framer-19s2zb3 { height: 60vh; } .framer-y6Rfa .framer-181gwqx { gap: 16px; height: 50vh; }}`,
        `@media (max-width: 809.98px) { .framer-y6Rfa.framer-xlckfo { width: 390px; } .framer-y6Rfa .framer-15aqhwa { padding: 0px 16px 0px 16px; } .framer-y6Rfa .framer-fka777 { gap: 32px; } .framer-y6Rfa .framer-kddf1q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; } .framer-y6Rfa .framer-1up7p9o { align-self: unset; gap: 16px; } .framer-y6Rfa .framer-1fikw3g, .framer-y6Rfa .framer-1stbt7f { gap: 8px; } .framer-y6Rfa .framer-176roea { align-self: unset; } .framer-y6Rfa .framer-n6ccy7 { gap: 56px; } .framer-y6Rfa .framer-1spfgd6 { height: 50vh; } .framer-y6Rfa .framer-sxbmzy, .framer-y6Rfa .framer-u1mcci, .framer-y6Rfa .framer-nqiyyb, .framer-y6Rfa .framer-1qjcz2f, .framer-y6Rfa .framer-rt4ik2, .framer-y6Rfa .framer-15wylng { width: 100%; } .framer-y6Rfa .framer-2ibhow, .framer-y6Rfa .framer-1ssjtfy, .framer-y6Rfa .framer-q02hip, .framer-y6Rfa .framer-66kkm2, .framer-y6Rfa .framer-4w8ho6, .framer-y6Rfa .framer-19s2zb3 { height: 400px; } .framer-y6Rfa .framer-181gwqx { gap: 16px; }}`,
      ],
      `framer-y6Rfa`
    )),
    (Q.displayName = `Articles`),
    (Q.defaultProps = { height: 11383, width: 1200 }),
    u(
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
          ],
        },
        ...B,
        ...V,
        ...H,
        ...U,
        ...W,
        ...p(C),
        ...p(S),
        ...p(E),
        ...p(Oe),
        ...p(Ge),
        ...p(M),
        ...p(Xe),
        ...p(We),
        ...p(Ne),
        ...p(et),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return ye(
          [
            () => h.get(dt(ue(t.pathVariables, `ooP4yMWDH`)), n, r).preload(),
            () => d(F, {}, t),
            () => d(R, {}, t),
          ],
          t
        );
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerooP4yMWDH`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `11383`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"X0JHWOPvl":{"layout":["fixed","auto"]},"eK4b42cln":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, G as queryParamNames };
//# sourceMappingURL=jFDzg-Fq9D8SbFZq_IRIC-M9TBUP4nfs0oE7GAAyVUI.C4fNYU3y.mjs.map
