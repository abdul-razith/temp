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
  J as _,
  M as v,
  O as y,
  T as b,
  V as x,
  _t as S,
  k as C,
  lt as w,
  o as T,
  wt as E,
} from "./framer.Bi3K3xOo.mjs";
import { a as D, c as O, o as k, s as A } from "./shared-lib.DAxb9xg1.mjs";
import { n as j, t as M } from "./t4LSIy2Sl.D5gxG3a5.mjs";
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    (i(),
      _(),
      m(),
      r(),
      O(),
      j(),
      (N = h(M)),
      (P = `framer-QXdCu`),
      (F = { BeADIvy3e: `framer-v-15a3f6r` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (R = d.create(t)),
      (z = ({ backgroundColor: e, height: t, id: n, textColor: r, title: i, width: a, ...o }) => ({
        ...o,
        a_X5HpvjX: i ?? o.a_X5HpvjX ?? `UX / UI Design`,
        i8L7gysl1: r ?? o.i8L7gysl1 ?? `rgb(255, 255, 255)`,
        PzQ4VZqss:
          e ??
          o.PzQ4VZqss ??
          `var(--token-5572d352-4df4-4ec3-ad7e-a66a084483f0, rgb(46, 182, 125))`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = E(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: f } = S();
          w();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              a_X5HpvjX: x,
              PzQ4VZqss: C,
              i8L7gysl1: T,
              ...E
            } = z(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: N,
              isLoading: V,
              setGestureState: H,
              setVariant: U,
              variants: W,
            } = g({ defaultVariant: `BeADIvy3e`, ref: i, variant: y, variantClassNames: F }),
            G = B(e, W),
            K = v(P, D);
          return s(p, {
            id: _ ?? a,
            children: s(R, {
              animate: W,
              initial: !1,
              children: s(L, {
                value: I,
                children: c(d.div, {
                  ...E,
                  ...j,
                  className: v(K, `framer-15a3f6r`, h, k),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: G,
                  layoutId: `BeADIvy3e`,
                  ref: i,
                  style: { ...m },
                  children: [
                    c(d.div, {
                      className: `framer-wfbsdl`,
                      layoutDependency: G,
                      layoutId: `g1qOZVFNH`,
                      children: [
                        s(d.div, {
                          className: `framer-1qyaye6`,
                          "data-framer-name": `Frame`,
                          layoutDependency: G,
                          layoutId: `U1tt7onP1`,
                          style: { backgroundColor: C },
                        }),
                        s(M, {
                          animated: !0,
                          className: `framer-mpqruv`,
                          layoutDependency: G,
                          layoutId: `Fvi8f0HWH`,
                          style: { "--omwlqg": C },
                        }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-18z3hsd`,
                      "data-framer-name": `Content`,
                      layoutDependency: G,
                      layoutId: `zT1vKH3Q0`,
                      style: { backgroundColor: C },
                      children: s(b, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-1833qg6`,
                            "data-styles-preset": `jB2nPzqr7`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-i8L7gysl1-jYw7xoRPm))`,
                            },
                            children: `UX / UI Design`,
                          }),
                        }),
                        className: `framer-yic7ww`,
                        fonts: [`Inter`],
                        layoutDependency: G,
                        layoutId: `EQHsoMluI`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-i8L7gysl1-jYw7xoRPm)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-i8L7gysl1-jYw7xoRPm": T,
                        },
                        text: x,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-QXdCu.framer-10u0fu9, .framer-QXdCu .framer-10u0fu9 { display: block; }`,
          `.framer-QXdCu.framer-15a3f6r { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 302px; }`,
          `.framer-QXdCu .framer-wfbsdl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 12px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-QXdCu .framer-1qyaye6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 12px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 2px 8px 2px 8px; position: relative; width: 32px; }`,
          `.framer-QXdCu .framer-mpqruv { aspect-ratio: 1.1111111111111112 / 1; flex: none; height: 100%; position: relative; width: auto; }`,
          `.framer-QXdCu .framer-18z3hsd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
          `.framer-QXdCu .framer-yic7ww { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...k,
        ],
        `framer-QXdCu`
      )),
      (V.displayName = `Service Item`),
      (V.defaultProps = { height: 60, width: 302 }),
      C(V, {
        a_X5HpvjX: {
          defaultValue: `UX / UI Design`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        ona_X5HpvjXChange: { changes: `a_X5HpvjX`, type: T.ChangeHandler },
        PzQ4VZqss: {
          defaultValue: `var(--token-5572d352-4df4-4ec3-ad7e-a66a084483f0, rgb(46, 182, 125)) /* {"name":"Green"} */`,
          title: `Background Color`,
          type: T.Color,
        },
        i8L7gysl1: { defaultValue: `rgb(255, 255, 255)`, title: `Text Color`, type: T.Color },
      }),
      y(
        V,
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
          ...N,
          ...x(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { H as n, V as t };
//# sourceMappingURL=jYw7xoRPm.B1Dvr8TB.mjs.map
