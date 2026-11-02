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
import { E as d, a as f, r as te, t as p } from "./motion.DUnltMVz.mjs";
import {
  B as m,
  Ct as ne,
  D as h,
  Et as g,
  H as _,
  J as v,
  M as y,
  O as b,
  P as x,
  T as S,
  U as C,
  V as w,
  _t as re,
  i as T,
  k as E,
  lt as ie,
  m as D,
  nt as ae,
  o as O,
  wt as k,
} from "./framer.Bi3K3xOo.mjs";
import { a as A, c as j, o as M, s as N } from "./shared-lib.DAxb9xg1.mjs";
import { n as oe, t as se } from "./SVGComponent.CcbG4JSa.mjs";
import { i as ce, n as le, r as ue, t as de } from "./MffBJovlA.DNehB8j9.mjs";
import { n as fe, t as P } from "./yRyDmqcvG.M-nrb9u_.mjs";
import { n as F, t as I } from "./Zq7grirf4.Dv1KG7Ap.mjs";
import { i as L, n as R, r as z, t as pe } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { a as me, c as he, o as ge, s as B } from "./R28tD7UOw.DdUmI0oA.mjs";
import { n as _e, t as V } from "./jUfJHCvjJ.DoUQs7YU.mjs";
function ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ye,
  H,
  U,
  W,
  G,
  be,
  xe,
  Se,
  Ce,
  K,
  we = e(() => {
    (i(),
      v(),
      p(),
      r(),
      L(),
      fe(),
      (ye = m(P)),
      (H = { w2v2WvcOJ: { hover: !0 } }),
      (U = `framer-x12lq`),
      (W = { w2v2WvcOJ: `framer-v-1b4chb6` }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (be = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (xe = d.create(t)),
      (Se = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        hb00M7k4H: n ?? i.hb00M7k4H ?? `Hello my friends`,
      })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = k(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: l } = re(),
            f = ie(),
            { style: p, className: m, layoutId: g, variant: _, hb00M7k4H: v, ...b } = Se(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: ae,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = ne({
              defaultVariant: `w2v2WvcOJ`,
              enabledGestures: H,
              ref: i,
              variant: _,
              variantClassNames: W,
            }),
            j = Ce(e, A),
            M = y(U, pe),
            N = () => D === `w2v2WvcOJ-hover`;
          return s(te, {
            id: g ?? a,
            children: s(xe, {
              animate: A,
              initial: !1,
              children: s(be, {
                value: G,
                children: c(d.div, {
                  ...b,
                  ...E,
                  className: y(M, `framer-1b4chb6`, m, C),
                  "data-framer-name": `Default`,
                  layoutDependency: j,
                  layoutId: `w2v2WvcOJ`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
                    borderBottomRightRadius: 56,
                    borderTopLeftRadius: 56,
                    borderTopRightRadius: 56,
                    ...p,
                  },
                  ...ve({ "w2v2WvcOJ-hover": { "data-framer-name": void 0 } }, x, D),
                  children: [
                    s(T, {
                      height: ((f?.height || 56) - 16) * 1,
                      width: `40px`,
                      y:
                        (f?.y || 0) +
                        (8 + ((f?.height || 56) - 16 - ((f?.height || 56) - 16) * 1) / 2),
                      children: s(h, {
                        className: `framer-qqfm0o-container`,
                        layoutDependency: j,
                        layoutId: `iGiZAZyAd-container`,
                        nodeId: `iGiZAZyAd`,
                        rendersWithMotion: !0,
                        scopeId: `atYKmJ8ZG`,
                        children: s(P, {
                          height: `100%`,
                          id: `iGiZAZyAd`,
                          layoutId: `iGiZAZyAd`,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    N() &&
                      s(S, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-163ovsm`,
                            "data-styles-preset": `ptQSvPZIk`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                            },
                            children: `Hello my friends`,
                          }),
                        }),
                        className: `framer-tygadv`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `G8LS3tOyG`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-x12lq.framer-fk3yi7, .framer-x12lq .framer-fk3yi7 { display: block; }`,
          `.framer-x12lq.framer-1b4chb6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 56px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-x12lq .framer-qqfm0o-container { flex: none; height: 100%; position: relative; width: 40px; }`,
          `.framer-x12lq .framer-tygadv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...R,
        ],
        `framer-x12lq`
      )),
      (K.displayName = `Comment`),
      (K.defaultProps = { height: 56, width: 56 }),
      E(K, {
        hb00M7k4H: {
          defaultValue: `Hello my friends`,
          displayTextArea: !1,
          title: `Title`,
          type: O.String,
        },
        onhb00M7k4HChange: { changes: `hb00M7k4H`, type: O.ChangeHandler },
      }),
      b(
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
          ...ye,
          ...w(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (K.loader = { load: (e, t) => ae([() => x(P, {}, t)], t) }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Te,
  Ee,
  De,
  Oe,
  J,
  ke,
  Ae,
  je,
  Me,
  Y,
  Ne,
  Pe,
  X,
  Fe,
  Ie,
  Le,
  Re,
  Z,
  ze,
  Be,
  Q,
  Ve = e(() => {
    (i(),
      v(),
      p(),
      r(),
      oe(),
      he(),
      j(),
      ce(),
      L(),
      _e(),
      F(),
      (Te = m(I)),
      (Ee = g(d.div)),
      (De = m(V)),
      (Oe = m(se)),
      (J = C(I)),
      (ke = [`tlxvYbsNB`, `wxTyfazKi`, `krwXTRczj`]),
      (Ae = `framer-uaooh`),
      (je = {
        krwXTRczj: `framer-v-1n7vf33`,
        tlxvYbsNB: `framer-v-17joz88`,
        wxTyfazKi: `framer-v-y0jxmb`,
      }),
      (Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 40 },
        repeat: !1,
        startDelay: 0,
        threshold: 0.5,
        tokenization: `line`,
        transition: { damping: 40, delay: 0.01, mass: 4, stiffness: 400, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Ne = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pe = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Fe = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (Ie = { Desktop: `tlxvYbsNB`, Mobile: `krwXTRczj`, Tablet: `wxTyfazKi` }),
      (Le = d.create(t)),
      (Re = { "Dark Button": `ypBdqWJVj`, "White Button": `f_D_QmORM`, Default: `ubuftqAhL` }),
      (Z = (e, t) => {
        let [n, r] = l(e),
          [i, a] = l(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (ze = ({
        borderColor: e,
        button: t,
        date: n,
        description: r,
        fillColor: i,
        height: a,
        id: o,
        image: s,
        link: c,
        tag1: l,
        tag2: ee,
        textColor: u,
        textDisappear: d,
        title: f,
        width: te,
        ...p
      }) => ({
        ...p,
        aMvYYFdlj: s ??
          p.aMvYYFdlj ?? {
            alt: ``,
            pixelHeight: 1875,
            pixelWidth: 1500,
            src: `https://framerusercontent.com/images/rzHXuz08vREQBKIbUbgse32DgI.png?width=1500&height=1875`,
            srcSet: `https://framerusercontent.com/images/rzHXuz08vREQBKIbUbgse32DgI.png?scale-down-to=1024&width=1500&height=1875 819w,https://framerusercontent.com/images/rzHXuz08vREQBKIbUbgse32DgI.png?width=1500&height=1875 1500w`,
          },
        cUyzKucce: ee ?? p.cUyzKucce ?? `Workflow design`,
        Fb73f9BVm:
          r ??
          p.Fb73f9BVm ??
          `When therapists spend less time clicking, they have more time for patients.`,
        hA5JZp5id: c ?? p.hA5JZp5id,
        hHixhb3Sw: n ?? p.hHixhb3Sw ?? `04, April 2026`,
        JDs6Ey0E7:
          u ??
          p.JDs6Ey0E7 ??
          `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
        NNBVv0e4O: e ??
          p.NNBVv0e4O ?? {
            borderColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)) /* {"name":"gray-scale-0"} */`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
        NxZK0Ti0n: l ?? p.NxZK0Ti0n ?? `Healthcare`,
        q7Vb7T2sX: f ?? p.q7Vb7T2sX ?? `Meridian Healthg`,
        variant: Ie[p.variant] ?? p.variant ?? `tlxvYbsNB`,
        w9lvJIC3K:
          i ?? p.w9lvJIC3K ?? `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
        yl57f7vbg: Re[t] ?? t ?? p.yl57f7vbg ?? `f_D_QmORM`,
        yRt28Ieqx: d ?? p.yRt28Ieqx,
      })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = k(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: l } = re(),
            f = ie(),
            {
              style: p,
              className: m,
              layoutId: g,
              variant: v,
              yl57f7vbg: b,
              w9lvJIC3K: x,
              JDs6Ey0E7: C,
              NNBVv0e4O: w,
              hHixhb3Sw: E,
              q7Vb7T2sX: ae,
              Fb73f9BVm: O,
              aMvYYFdlj: k,
              NxZK0Ti0n: j,
              onNxZK0Ti0nChange: M,
              cUyzKucce: N,
              oncUyzKucceChange: oe,
              yRt28Ieqx: ce,
              hA5JZp5id: le,
              ...ue
            } = ze(e),
            [fe, P] = Z(j, M),
            [F, L] = Z(N, oe),
            {
              baseVariant: R,
              classNames: z,
              clearLoadingGesture: he,
              gestureHandlers: ge,
              gestureVariant: B,
              isLoading: _e,
              setGestureState: ve,
              setVariant: ye,
              variants: H,
            } = ne({
              cycleOrder: ke,
              defaultVariant: `tlxvYbsNB`,
              ref: i,
              variant: v,
              variantClassNames: je,
            }),
            U = Be(e, H),
            W = y(Ae, de, me, pe, A),
            G = Pe(F);
          return s(te, {
            id: g ?? a,
            children: s(Le, {
              animate: H,
              initial: !1,
              children: s(Fe, {
                value: Me,
                children: c(d.div, {
                  ...ue,
                  ...ge,
                  className: y(W, `framer-17joz88`, m, z),
                  "data-framer-name": `Desktop`,
                  layoutDependency: U,
                  layoutId: `tlxvYbsNB`,
                  ref: i,
                  style: { backgroundColor: x, ...p },
                  ...q(
                    {
                      krwXTRczj: { "data-framer-name": `Mobile` },
                      wxTyfazKi: { "data-framer-name": `Tablet` },
                    },
                    R,
                    B
                  ),
                  children: [
                    s(d.div, {
                      className: `framer-1iqx81u`,
                      "data-framer-name": `Fix Color`,
                      layoutDependency: U,
                      layoutId: `MliAPYsWl`,
                      style: { backgroundColor: x },
                    }),
                    c(d.div, {
                      className: `framer-zqpo5p`,
                      "data-framer-name": `Content`,
                      layoutDependency: U,
                      layoutId: `XkBe_ysKb`,
                      children: [
                        c(Ee, {
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              ref: ce,
                              target: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 1,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-tf09wj`,
                          "data-framer-name": `Text`,
                          layoutDependency: U,
                          layoutId: `EBybfODzv`,
                          children: [
                            c(d.div, {
                              className: `framer-clg0ld`,
                              "data-framer-name": `Text`,
                              layoutDependency: U,
                              layoutId: `hChIx98os`,
                              children: [
                                c(d.div, {
                                  className: `framer-97t7mi`,
                                  "data-framer-name": `Text + date`,
                                  layoutDependency: U,
                                  layoutId: `QMSdCGrGM`,
                                  children: [
                                    c(d.div, {
                                      className: `framer-w5n1wd`,
                                      "data-framer-name": `Date`,
                                      layoutDependency: U,
                                      layoutId: `RWUK7U5hn`,
                                      children: [
                                        s(d.div, {
                                          className: `framer-1tdrzuz`,
                                          layoutDependency: U,
                                          layoutId: `xcL69b4Vl`,
                                          style: {
                                            backgroundColor: C,
                                            borderBottomLeftRadius: 8,
                                            borderBottomRightRadius: 8,
                                            borderTopLeftRadius: 8,
                                            borderTopRightRadius: 8,
                                          },
                                        }),
                                        s(S, {
                                          __fromCanvasComponent: !0,
                                          children: s(t, {
                                            children: s(d.p, {
                                              className: `framer-styles-preset-27ku3y`,
                                              "data-styles-preset": `MffBJovlA`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-JDs6Ey0E7-vqnJudyFq))`,
                                              },
                                              children: `04, April 2026`,
                                            }),
                                          }),
                                          className: `framer-jg01a3`,
                                          fonts: [`Inter`],
                                          layoutDependency: U,
                                          layoutId: `v1A_diLZ_`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--variable-reference-JDs6Ey0E7-vqnJudyFq)`,
                                            "--variable-reference-JDs6Ey0E7-vqnJudyFq": C,
                                          },
                                          text: E,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    s(S, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(d.h3, {
                                          className: `framer-styles-preset-16swsjh`,
                                          "data-styles-preset": `G6r9h69Ct`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-JDs6Ey0E7-vqnJudyFq))`,
                                          },
                                          children: `Meridian Healthg`,
                                        }),
                                      }),
                                      className: `framer-ce3686`,
                                      effect: Y,
                                      fonts: [`Inter`],
                                      layoutDependency: U,
                                      layoutId: `RyUQedLID`,
                                      style: {
                                        "--extracted-a0htzi": `var(--variable-reference-JDs6Ey0E7-vqnJudyFq)`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                        "--variable-reference-JDs6Ey0E7-vqnJudyFq": C,
                                      },
                                      text: ae,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(t, {
                                    children: s(d.p, {
                                      className: `framer-styles-preset-163ovsm`,
                                      "data-styles-preset": `ptQSvPZIk`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-JDs6Ey0E7-vqnJudyFq))`,
                                      },
                                      children: `When therapists spend less time clicking, they have more time for patients.`,
                                    }),
                                  }),
                                  className: `framer-4rnzul`,
                                  effect: Y,
                                  fonts: [`Inter`],
                                  layoutDependency: U,
                                  layoutId: `EUDANYIHm`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--variable-reference-JDs6Ey0E7-vqnJudyFq)`,
                                    "--variable-reference-JDs6Ey0E7-vqnJudyFq": C,
                                  },
                                  text: O,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            s(T, {
                              height: 32,
                              y:
                                (f?.y || 0) +
                                (16 +
                                  ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) / 2) +
                                32 +
                                ((((f?.height || 648) - 32) * 1 -
                                  32 -
                                  (328.8 +
                                    Math.max(0, (((f?.height || 648) - 32) * 1 - 32 - 352.8) / 1) *
                                      1 +
                                    24)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                296.8,
                              ...q(
                                {
                                  krwXTRczj: {
                                    y:
                                      (f?.y || 0) +
                                      16 +
                                      (((f?.height || 784) - 32 - 900.8) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      284.8,
                                  },
                                  wxTyfazKi: {
                                    y:
                                      (f?.y || 0) +
                                      (16 +
                                        ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) /
                                          2) +
                                      32 +
                                      ((((f?.height || 648) - 32) * 1 -
                                        32 -
                                        (316.8 +
                                          Math.max(
                                            0,
                                            (((f?.height || 648) - 32) * 1 - 32 - 340.8) / 1
                                          ) *
                                            1 +
                                          24)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      284.8,
                                  },
                                },
                                R,
                                B
                              ),
                              children: s(h, {
                                className: `framer-1nmyz7r-container`,
                                layoutDependency: U,
                                layoutId: `iPcQ4Wq3M-container`,
                                nodeId: `iPcQ4Wq3M`,
                                rendersWithMotion: !0,
                                scopeId: `vqnJudyFq`,
                                children: s(I, {
                                  errt8torn: `View Project`,
                                  height: `100%`,
                                  id: `iPcQ4Wq3M`,
                                  layoutId: `iPcQ4Wq3M`,
                                  OY8OQlhvY: !0,
                                  variant: Ne(b),
                                  width: `100%`,
                                  zt8ifGc_Q: le,
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(d.div, {
                          className: `framer-jethw`,
                          "data-framer-name": `Tags`,
                          layoutDependency: U,
                          layoutId: `jrPof3PmR`,
                          children: [
                            s(T, {
                              height: 44,
                              y:
                                (f?.y || 0) +
                                (16 +
                                  ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) / 2) +
                                32 +
                                ((((f?.height || 648) - 32) * 1 -
                                  32 -
                                  (328.8 +
                                    Math.max(0, (((f?.height || 648) - 32) * 1 - 32 - 352.8) / 1) *
                                      1 +
                                    24)) /
                                  2 +
                                  328.8 +
                                  24) +
                                0 +
                                (Math.max(0, (((f?.height || 648) - 32) * 1 - 32 - 352.8) / 1) * 1 -
                                  0 -
                                  44),
                              ...q(
                                {
                                  krwXTRczj: {
                                    y:
                                      (f?.y || 0) +
                                      16 +
                                      (((f?.height || 784) - 32 - 900.8) / 2 + 0 + 0) +
                                      0 +
                                      332.8 +
                                      0 +
                                      0,
                                  },
                                  wxTyfazKi: {
                                    y:
                                      (f?.y || 0) +
                                      (16 +
                                        ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) /
                                          2) +
                                      32 +
                                      ((((f?.height || 648) - 32) * 1 -
                                        32 -
                                        (316.8 +
                                          Math.max(
                                            0,
                                            (((f?.height || 648) - 32) * 1 - 32 - 340.8) / 1
                                          ) *
                                            1 +
                                          24)) /
                                        2 +
                                        316.8 +
                                        24) +
                                      0 +
                                      (Math.max(
                                        0,
                                        (((f?.height || 648) - 32) * 1 - 32 - 340.8) / 1
                                      ) *
                                        1 -
                                        0 -
                                        44),
                                  },
                                },
                                R,
                                B
                              ),
                              children: s(h, {
                                className: `framer-1ox4haq-container`,
                                layoutDependency: U,
                                layoutId: `krKs5qI0J-container`,
                                nodeId: `krKs5qI0J`,
                                rendersWithMotion: !0,
                                scopeId: `vqnJudyFq`,
                                children: s(V, {
                                  Ha3WZBmxl: x,
                                  height: `100%`,
                                  id: `krKs5qI0J`,
                                  layoutId: `krKs5qI0J`,
                                  onrTmzt9HxoChange: P,
                                  rTmzt9Hxo: fe,
                                  width: `100%`,
                                  WtvdAMl0x: C,
                                }),
                              }),
                            }),
                            G !== !1 &&
                              s(T, {
                                height: 44,
                                y:
                                  (f?.y || 0) +
                                  (16 +
                                    ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) / 2) +
                                  32 +
                                  ((((f?.height || 648) - 32) * 1 -
                                    32 -
                                    (328.8 +
                                      Math.max(
                                        0,
                                        (((f?.height || 648) - 32) * 1 - 32 - 352.8) / 1
                                      ) *
                                        1 +
                                      24)) /
                                    2 +
                                    328.8 +
                                    24) +
                                  0 +
                                  (Math.max(0, (((f?.height || 648) - 32) * 1 - 32 - 352.8) / 1) *
                                    1 -
                                    0 -
                                    44),
                                ...q(
                                  {
                                    krwXTRczj: {
                                      y:
                                        (f?.y || 0) +
                                        16 +
                                        (((f?.height || 784) - 32 - 900.8) / 2 + 0 + 0) +
                                        0 +
                                        332.8 +
                                        0 +
                                        0,
                                    },
                                    wxTyfazKi: {
                                      y:
                                        (f?.y || 0) +
                                        (16 +
                                          ((f?.height || 648) -
                                            32 -
                                            ((f?.height || 648) - 32) * 1) /
                                            2) +
                                        32 +
                                        ((((f?.height || 648) - 32) * 1 -
                                          32 -
                                          (316.8 +
                                            Math.max(
                                              0,
                                              (((f?.height || 648) - 32) * 1 - 32 - 340.8) / 1
                                            ) *
                                              1 +
                                            24)) /
                                          2 +
                                          316.8 +
                                          24) +
                                        0 +
                                        (Math.max(
                                          0,
                                          (((f?.height || 648) - 32) * 1 - 32 - 340.8) / 1
                                        ) *
                                          1 -
                                          0 -
                                          44),
                                    },
                                  },
                                  R,
                                  B
                                ),
                                children: s(h, {
                                  className: `framer-6wop43-container`,
                                  layoutDependency: U,
                                  layoutId: `ORCfBYzYA-container`,
                                  nodeId: `ORCfBYzYA`,
                                  rendersWithMotion: !0,
                                  scopeId: `vqnJudyFq`,
                                  children: s(V, {
                                    Ha3WZBmxl: x,
                                    height: `100%`,
                                    id: `ORCfBYzYA`,
                                    layoutId: `ORCfBYzYA`,
                                    onrTmzt9HxoChange: L,
                                    rTmzt9Hxo: F,
                                    width: `100%`,
                                    WtvdAMl0x: C,
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-f233jw`,
                      "data-framer-name": `IMG`,
                      layoutDependency: U,
                      layoutId: `n8vrzbwYL`,
                      children: s(d.div, {
                        className: `framer-186ax1i`,
                        "data-framer-name": `Image`,
                        layoutDependency: U,
                        layoutId: `qB0pBgvJc`,
                        children: c(D, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1875,
                            intrinsicWidth: 1500,
                            loading: _(
                              (f?.y || 0) +
                                (16 +
                                  ((f?.height || 648) - 32 - ((f?.height || 648) - 32) * 1) / 2) +
                                0 +
                                (((f?.height || 648) - 32) * 1 -
                                  0 -
                                  (Math.max(0, (((f?.height || 648) - 32) * 1 - 0 - 0) / 1) * 1 +
                                    0) +
                                  0 +
                                  0) +
                                0
                            ),
                            pixelHeight: 1875,
                            pixelWidth: 1500,
                            sizes: `max((${f?.width || `100vw`} - 32px) / 2, 1px)`,
                            ...X(k),
                          },
                          className: `framer-25tfn4`,
                          "data-framer-name": `Image`,
                          layoutDependency: U,
                          layoutId: `ZaovApRo0`,
                          ...q(
                            {
                              krwXTRczj: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1875,
                                  intrinsicWidth: 1500,
                                  loading: _(
                                    (f?.y || 0) +
                                      16 +
                                      (((f?.height || 784) - 32 - 900.8) / 2 + 376.8 + 24) +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1875,
                                  pixelWidth: 1500,
                                  sizes: `calc(${f?.width || `100vw`} - 32px)`,
                                  ...X(k),
                                },
                              },
                            },
                            R,
                            B
                          ),
                          children: [
                            c(d.div, {
                              className: `framer-nlfnxy`,
                              "data-framer-name": `Border`,
                              layoutDependency: U,
                              layoutId: `FH2pJsbLK`,
                              children: [
                                s(d.div, {
                                  className: `framer-2wtkhw`,
                                  "data-border": !0,
                                  layoutDependency: U,
                                  layoutId: `zPedMc8NG`,
                                  style: {
                                    "--border-bottom-width":
                                      (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                                    "--border-color": w?.borderColor,
                                    "--border-left-width":
                                      (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                                    "--border-style": w?.borderStyle,
                                    "--border-top-width":
                                      (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                                    backgroundColor: x,
                                  },
                                }),
                                s(d.div, {
                                  className: `framer-17azylh`,
                                  "data-border": !0,
                                  layoutDependency: U,
                                  layoutId: `vIn7jjLaU`,
                                  style: {
                                    "--border-bottom-width":
                                      (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                                    "--border-color": w?.borderColor,
                                    "--border-left-width":
                                      (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                                    "--border-style": w?.borderStyle,
                                    "--border-top-width":
                                      (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                                    backgroundColor: x,
                                  },
                                }),
                                s(d.div, {
                                  className: `framer-pzbn2t`,
                                  "data-border": !0,
                                  layoutDependency: U,
                                  layoutId: `YztPMXPwt`,
                                  style: {
                                    "--border-bottom-width":
                                      (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                                    "--border-color": w?.borderColor,
                                    "--border-left-width":
                                      (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                                    "--border-style": w?.borderStyle,
                                    "--border-top-width":
                                      (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                                    backgroundColor: x,
                                  },
                                }),
                                s(d.div, {
                                  className: `framer-1a84a36`,
                                  "data-border": !0,
                                  layoutDependency: U,
                                  layoutId: `a3PnXTwSx`,
                                  style: {
                                    "--border-bottom-width":
                                      (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                                    "--border-color": w?.borderColor,
                                    "--border-left-width":
                                      (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                                    "--border-style": w?.borderStyle,
                                    "--border-top-width":
                                      (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                                    backgroundColor: x,
                                  },
                                }),
                                s(d.div, {
                                  className: `framer-sa2o8o`,
                                  "data-border": !0,
                                  "data-framer-name": `border`,
                                  layoutDependency: U,
                                  layoutId: `q2BOxE86N`,
                                  style: {
                                    "--border-bottom-width":
                                      (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                                    "--border-color": w?.borderColor,
                                    "--border-left-width":
                                      (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                                    "--border-right-width":
                                      (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                                    "--border-style": w?.borderStyle,
                                    "--border-top-width":
                                      (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                                  },
                                }),
                              ],
                            }),
                            c(d.div, {
                              className: `framer-4g5dgx`,
                              layoutDependency: U,
                              layoutId: `W2hC9fVJg`,
                              style: { backgroundColor: C },
                              children: [
                                s(T, {
                                  children: s(h, {
                                    className: `framer-jar8ki-container`,
                                    "data-code-component-plugin-id": `84d4c1`,
                                    isAuthoredByUser: !0,
                                    layoutDependency: U,
                                    layoutId: `t3FKyY7h1-container`,
                                    nodeId: `t3FKyY7h1`,
                                    rendersWithMotion: !0,
                                    scopeId: `vqnJudyFq`,
                                    children: s(se, {
                                      color: x,
                                      height: `100%`,
                                      id: `t3FKyY7h1`,
                                      layoutId: `t3FKyY7h1`,
                                      stroke: !1,
                                      strokeColor: `rgb(0, 0, 0)`,
                                      style: { height: `100%`, width: `100%` },
                                      svgCode: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7334 12.2667H11.5001C11.7034 12.2667 11.8984 12.186 12.0422 12.0422C12.186 11.8984 12.2667 11.7034 12.2667 11.5001C12.2667 11.2967 12.186 11.1017 12.0422 10.958C11.8984 10.8142 11.7034 10.7334 11.5001 10.7334H10.7334V12.2667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5332 2.3C1.5332 1.69 1.77552 1.10499 2.20686 0.673654C2.63819 0.242321 3.22321 0 3.8332 0L16.4173 0L21.4665 5.04927V20.7C21.4665 21.31 21.2242 21.895 20.7929 22.3263C20.3615 22.7577 19.7765 23 19.1665 23H3.8332C3.22321 23 2.63819 22.7577 2.20686 22.3263C1.77552 21.895 1.5332 21.31 1.5332 20.7V2.3ZM6.1332 10.7333H3.06654V9.2H7.66654V16.8667H3.06654V13.8H4.59987V15.3333H6.1332V10.7333ZM9.19987 9.2H11.4999C12.1099 9.2 12.6949 9.44232 13.1262 9.87365C13.5575 10.305 13.7999 10.89 13.7999 11.5C13.7999 12.11 13.5575 12.695 13.1262 13.1263C12.6949 13.5577 12.1099 13.8 11.4999 13.8H10.7332V16.8667H9.19987V9.2ZM15.3332 9.2H19.9332V10.7333H16.8665V15.3333H18.3999V13.0333H19.9332V16.8667H15.3332V9.2Z" fill="black"/>
</svg>
`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(t, {
                                    children: s(d.p, {
                                      className: `framer-styles-preset-1833qg6`,
                                      "data-styles-preset": `jB2nPzqr7`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-w9lvJIC3K-vqnJudyFq))`,
                                      },
                                      children: `Image.jpg`,
                                    }),
                                  }),
                                  className: `framer-nzuz47`,
                                  fonts: [`Inter`],
                                  layoutDependency: U,
                                  layoutId: `Xx304ZQnw`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--variable-reference-w9lvJIC3K-vqnJudyFq)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    "--variable-reference-w9lvJIC3K-vqnJudyFq": x,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-uaooh.framer-dcre8g, .framer-uaooh .framer-dcre8g { display: block; }`,
          `.framer-uaooh.framer-17joz88 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 648px; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 1168px; }`,
          `.framer-uaooh .framer-1iqx81u { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: -1px; z-index: 1; }`,
          `.framer-uaooh .framer-zqpo5p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 0px 0px; position: relative; width: 50%; }`,
          `.framer-uaooh .framer-tf09wj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-clg0ld { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-97t7mi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-w5n1wd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-1tdrzuz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: visible; position: relative; width: 12px; }`,
          `.framer-uaooh .framer-jg01a3 { flex: 1 0 0px; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-uaooh .framer-ce3686 { flex: none; height: auto; max-width: 80%; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-uaooh .framer-4rnzul { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-uaooh .framer-1nmyz7r-container, .framer-uaooh .framer-1ox4haq-container, .framer-uaooh .framer-6wop43-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-uaooh .framer-jethw { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-f233jw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-uaooh .framer-186ax1i { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-uaooh .framer-25tfn4 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-uaooh .framer-nlfnxy { bottom: -8px; flex: none; left: -8px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -8px; top: -8px; z-index: 1; }`,
          `.framer-uaooh .framer-2wtkhw { flex: none; height: 16px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 16px; z-index: 1; }`,
          `.framer-uaooh .framer-17azylh { flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 16px; z-index: 1; }`,
          `.framer-uaooh .framer-pzbn2t { bottom: 0px; flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 16px; z-index: 1; }`,
          `.framer-uaooh .framer-1a84a36 { bottom: 0px; flex: none; height: 16px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; z-index: 1; }`,
          `.framer-uaooh .framer-sa2o8o { bottom: 8px; flex: none; left: 8px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 8px; top: 8px; }`,
          `.framer-uaooh .framer-4g5dgx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: absolute; right: 16px; top: 16px; width: min-content; }`,
          `.framer-uaooh .framer-jar8ki-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-uaooh .framer-nzuz47 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-uaooh.framer-v-y0jxmb .framer-tf09wj, .framer-uaooh.framer-v-1n7vf33 .framer-tf09wj { gap: 16px; }`,
          `.framer-uaooh.framer-v-y0jxmb .framer-clg0ld, .framer-uaooh.framer-v-1n7vf33 .framer-clg0ld { gap: 4px; }`,
          `.framer-uaooh.framer-v-y0jxmb .framer-w5n1wd, .framer-uaooh.framer-v-y0jxmb .framer-jethw, .framer-uaooh.framer-v-1n7vf33 .framer-w5n1wd { gap: 8px; }`,
          `.framer-uaooh.framer-v-1n7vf33.framer-17joz88 { flex-direction: column; gap: 24px; height: min-content; width: 375px; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-zqpo5p { gap: 16px; height: min-content; padding: 0px; width: 100%; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-ce3686, .framer-uaooh.framer-v-1n7vf33 .framer-4rnzul { max-width: unset; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-jethw { flex: none; gap: 8px; height: min-content; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-1ox4haq-container { order: 0; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-6wop43-container { order: 1; }`,
          `.framer-uaooh.framer-v-1n7vf33 .framer-f233jw { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 0.5); width: 100%; }`,
          ...le,
          ...ge,
          ...R,
          ...M,
          `.framer-uaooh[data-border="true"]::after, .framer-uaooh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-uaooh`
      )),
      (Q.displayName = `Casestudy (Home)`),
      (Q.defaultProps = { height: 648, width: 1168 }),
      E(Q, {
        variant: {
          options: [`tlxvYbsNB`, `wxTyfazKi`, `krwXTRczj`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: O.Enum,
        },
        yl57f7vbg: J?.variant && {
          ...J.variant,
          defaultValue: `f_D_QmORM`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Button`,
        },
        onyl57f7vbgChange: { changes: `yl57f7vbg`, type: O.ChangeHandler },
        w9lvJIC3K: {
          defaultValue: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217)) /* {"name":"Primary"} */`,
          title: `Fill Color`,
          type: O.Color,
        },
        JDs6Ey0E7: {
          defaultValue: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)) /* {"name":"gray-scale-0"} */`,
          title: `Text Color`,
          type: O.Color,
        },
        NNBVv0e4O: {
          defaultValue: {
            borderColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)) /* {"name":"gray-scale-0"} */`,
            borderStyle: `solid`,
            borderWidth: 2,
          },
          title: `Border Color`,
          type: O.Border,
        },
        hHixhb3Sw: {
          defaultValue: `04, April 2026`,
          displayTextArea: !1,
          title: `Date`,
          type: O.String,
        },
        onhHixhb3SwChange: { changes: `hHixhb3Sw`, type: O.ChangeHandler },
        q7Vb7T2sX: {
          defaultValue: `Meridian Healthg`,
          displayTextArea: !1,
          title: `Title`,
          type: O.String,
        },
        onq7Vb7T2sXChange: { changes: `q7Vb7T2sX`, type: O.ChangeHandler },
        Fb73f9BVm: {
          defaultValue: `When therapists spend less time clicking, they have more time for patients.`,
          description: ``,
          displayTextArea: !1,
          title: `Description`,
          type: O.String,
        },
        onFb73f9BVmChange: { changes: `Fb73f9BVm`, type: O.ChangeHandler },
        aMvYYFdlj: {
          __defaultAssetReference: `data:framer/asset-reference,rzHXuz08vREQBKIbUbgse32DgI.png?originalFilename=image.png&width=1500&height=1875`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,rzHXuz08vREQBKIbUbgse32DgI.png?originalFilename=image.png&width=1500&height=1875`,
          },
          title: `Image`,
          type: O.ResponsiveImage,
        },
        NxZK0Ti0n: {
          defaultValue: `Healthcare`,
          displayTextArea: !1,
          title: `Tag 1`,
          type: O.String,
        },
        onNxZK0Ti0nChange: { changes: `NxZK0Ti0n`, type: O.ChangeHandler },
        cUyzKucce: {
          defaultValue: `Workflow design`,
          displayTextArea: !1,
          title: `Tag 2`,
          type: O.String,
        },
        oncUyzKucceChange: { changes: `cUyzKucce`, type: O.ChangeHandler },
        yRt28Ieqx: { title: `Text Disappear`, type: O.ScrollSectionRef },
        hA5JZp5id: { title: `Link`, type: O.Link },
      }),
      b(
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
          ...Te,
          ...De,
          ...Oe,
          ...w(ue),
          ...w(B),
          ...w(z),
          ...w(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(I, {}, t), x(V, {}, t)])) }));
  }),
  He,
  Ue,
  We,
  $,
  Ge = e(() => {
    (i(),
      v(),
      r(),
      (He = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 80 72" xmlns="http://www.w3.org/2000/svg"><path d="M 80 0 L 44.224 36 L 18.882 63 L 17.382 64.341 C 12.544 68.669 6.458 71.35 0 72 L 0 72 L 80 72 Z" fill="var(--omwlqg, var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217)))" height="72px" id="hIJNcHkQz" transform="rotate(360 40 36)" width="80px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ue = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? s(d.div, { ...a, layoutId: r, ref: t }) : s(`div`, { ...a, ref: t });
      })),
      (We = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        TRQekEzPm:
          e ?? i.TRQekEzPm ?? `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
      })),
      ($ = k(
        o(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, TRQekEzPm: o, ...c } = We(e);
          return s(Ue, {
            ...c,
            className: y(`framer-tOfnx`, r),
            layoutId: i,
            ref: t,
            style: { "--omwlqg": o, ...n },
          });
        }),
        [
          `.framer-tOfnx { -webkit-mask: ${He}; aspect-ratio: 1.1111111111111112; background-color: var(--omwlqg); mask: ${He}; width: 80px; }`,
        ],
        `framer-tOfnx`
      )),
      ($.displayName = `Flip`),
      E($, {
        TRQekEzPm: {
          defaultValue: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217)) /* {"name":"Primary"} */`,
          hidden: !1,
          title: `Fill`,
          type: O.Color,
        },
      }));
  });
export { K as a, Ve as i, Ge as n, we as o, Q as r, $ as t };
//# sourceMappingURL=COqtQferw.RIW4ools.mjs.map
