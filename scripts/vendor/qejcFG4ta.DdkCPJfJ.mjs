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
  Ct as h,
  J as g,
  M as _,
  O as v,
  T as y,
  V as b,
  _t as x,
  k as S,
  lt as C,
  o as w,
  wt as T,
} from "./framer.Bi3K3xOo.mjs";
import { i as E, n as D, r as O, t as k } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { i as A, n as j, r as M, t as N } from "./TI_CAjGBM.BACS-TeA.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    (i(),
      g(),
      m(),
      r(),
      E(),
      A(),
      (F = [`JgPWxqQc0`, `ZRCh4e0jb`]),
      (I = `framer-4rhqc`),
      (L = { JgPWxqQc0: `framer-v-1sbsau2`, ZRCh4e0jb: `framer-v-1gflzdq` }),
      (R = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (z = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (B = { "Heading + Content": `JgPWxqQc0`, "Only Content": `ZRCh4e0jb` }),
      (V = d.create(t)),
      (H = ({ content: e, fill: t, heading: n, height: r, id: i, width: a, ...o }) => ({
        ...o,
        CCL0FQB1w: n ?? o.CCL0FQB1w ?? `Starting with why, not what`,
        HXsiawEy3:
          t ??
          o.HXsiawEy3 ??
          `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
        variant: B[o.variant] ?? o.variant ?? `JgPWxqQc0`,
        wpqZCAGnP:
          e ??
          o.wpqZCAGnP ??
          `Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight. `,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = T(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: f } = x();
          C();
          let {
              style: m,
              className: g,
              layoutId: v,
              variant: b,
              HXsiawEy3: S,
              CCL0FQB1w: w,
              wpqZCAGnP: T,
              ...E
            } = H(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: B,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = h({
              cycleOrder: F,
              defaultVariant: `JgPWxqQc0`,
              ref: i,
              variant: b,
              variantClassNames: L,
            }),
            q = U(e, K),
            J = _(I, N, k),
            Y = () => D !== `ZRCh4e0jb`;
          return s(p, {
            id: v ?? a,
            children: s(V, {
              animate: K,
              initial: !1,
              children: s(z, {
                value: R,
                children: c(d.div, {
                  ...E,
                  ...j,
                  className: _(J, `framer-1sbsau2`, g, O),
                  "data-framer-name": `Heading + Content`,
                  layoutDependency: q,
                  layoutId: `JgPWxqQc0`,
                  ref: i,
                  style: { backgroundColor: S, ...m },
                  ...P({ ZRCh4e0jb: { "data-framer-name": `Only Content` } }, D, M),
                  children: [
                    Y() &&
                      s(y, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.h4, {
                            className: `framer-styles-preset-jjv5nu`,
                            "data-styles-preset": `TI_CAjGBM`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                            },
                            children: `Starting with why, not what`,
                          }),
                        }),
                        className: `framer-1jcsxx1`,
                        fonts: [`Inter`],
                        layoutDependency: q,
                        layoutId: `cs6otpats`,
                        style: {
                          "--extracted-1eung3n": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: w,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    s(y, {
                      __fromCanvasComponent: !0,
                      children: s(t, {
                        children: s(d.p, {
                          className: `framer-styles-preset-163ovsm`,
                          "data-styles-preset": `ptQSvPZIk`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                          },
                          children: `Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight. `,
                        }),
                      }),
                      className: `framer-lbfqwd`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `xS7bcSvse`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: T,
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
          `.framer-4rhqc.framer-cjws76, .framer-4rhqc .framer-cjws76 { display: block; }`,
          `.framer-4rhqc.framer-1sbsau2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px; position: relative; width: 405px; }`,
          `.framer-4rhqc .framer-1jcsxx1, .framer-4rhqc .framer-lbfqwd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4rhqc.framer-v-1gflzdq.framer-1sbsau2 { padding: 16px; }`,
          ...j,
          ...D,
        ],
        `framer-4rhqc`
      )),
      (W.displayName = `Sticky Card`),
      (W.defaultProps = { height: 302, width: 405 }),
      S(W, {
        variant: {
          options: [`JgPWxqQc0`, `ZRCh4e0jb`],
          optionTitles: [`Heading + Content`, `Only Content`],
          title: `Variant`,
          type: w.Enum,
        },
        HXsiawEy3: {
          defaultValue: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248)) /* {"name":"Primary100"} */`,
          title: `Fill`,
          type: w.Color,
        },
        CCL0FQB1w: {
          defaultValue: `Starting with why, not what`,
          displayTextArea: !1,
          title: `Heading`,
          type: w.String,
        },
        onCCL0FQB1wChange: { changes: `CCL0FQB1w`, type: w.ChangeHandler },
        wpqZCAGnP: {
          defaultValue: `Before jumping into wireframes, I want to understand what problem we're actually solving. Sometimes the thing people ask for isn't the thing they need. My favorite projects start with good questions and end with solutions that feel obvious in hindsight. `,
          displayTextArea: !0,
          title: `Content`,
          type: w.String,
        },
        onwpqZCAGnPChange: { changes: `wpqZCAGnP`, type: w.ChangeHandler },
      }),
      v(
        W,
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
          ...b(M),
          ...b(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { G as n, W as t };
//# sourceMappingURL=qejcFG4ta.DdkCPJfJ.mjs.map
