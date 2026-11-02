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
import { E as d, a as f, r as ee, t as p } from "./motion.DUnltMVz.mjs";
import {
  B as m,
  Ct as h,
  D as te,
  H as g,
  J as _,
  M as v,
  O as y,
  T as b,
  V as x,
  _t as S,
  i as C,
  k as w,
  lt as T,
  m as E,
  o as D,
  wt as O,
} from "./framer.Bi3K3xOo.mjs";
import { a as k, c as A, o as j, s as M } from "./shared-lib.DAxb9xg1.mjs";
import { n as N, t as P } from "./SVGComponent.CcbG4JSa.mjs";
import { i as F, n as I, r as L, t as ne } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { i as re, n as R, r as z, t as B } from "./TI_CAjGBM.BACS-TeA.mjs";
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
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
  ie = e(() => {
    (i(),
      _(),
      p(),
      r(),
      N(),
      A(),
      F(),
      re(),
      (H = m(P)),
      (U = [`YJnKcc1Ok`, `WzVQtCWbz`]),
      (W = `framer-TZS3x`),
      (G = { WzVQtCWbz: `framer-v-12t281j`, YJnKcc1Ok: `framer-v-10gofpt` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (J = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (Y = { Current: `YJnKcc1Ok`, Past: `WzVQtCWbz` }),
      (X = d.create(t)),
      (Z = ({ description: e, height: t, id: n, image: r, title: i, width: a, year: o, ...s }) => ({
        ...s,
        AMQxizGuL:
          e ??
          s.AMQxizGuL ??
          `Designing across scheduling, case management, treatment planning, and clinical documentation for mental health practices. The challenge is balancing what clinicians need with what administrators need—often very different things—while keeping everything HIPAA-compliant and actually usable. `,
        CGvW32DQL: o ?? s.CGvW32DQL ?? `Sep 2025 - Current`,
        variant: Y[s.variant] ?? s.variant ?? `YJnKcc1Ok`,
        VtoKB64T8: r ??
          s.VtoKB64T8 ?? {
            alt: ``,
            pixelHeight: 32,
            pixelWidth: 78,
            src: `https://framerusercontent.com/images/aWwxH6dqmUu5jCNRFneN4Z8gLE0.svg?width=78&height=32`,
          },
        xLqLyNMp1: i ?? s.xLqLyNMp1 ?? `Meridian Health`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = O(
        o(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = l(),
            { activeLocale: o, setLocale: f } = S(),
            p = T(),
            {
              style: m,
              className: _,
              layoutId: y,
              variant: x,
              VtoKB64T8: w,
              xLqLyNMp1: D,
              AMQxizGuL: O,
              CGvW32DQL: A,
              ...j
            } = Z(e),
            {
              baseVariant: M,
              classNames: N,
              clearLoadingGesture: F,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: re,
              setGestureState: R,
              setVariant: z,
              variants: H,
            } = h({
              cycleOrder: U,
              defaultVariant: `YJnKcc1Ok`,
              ref: i,
              variant: x,
              variantClassNames: G,
            }),
            Y = Q(e, H),
            $ = v(W, B, ne, k);
          return s(ee, {
            id: y ?? a,
            children: s(X, {
              animate: H,
              initial: !1,
              children: s(J, {
                value: K,
                children: c(d.div, {
                  ...j,
                  ...I,
                  className: v($, `framer-10gofpt`, _, N),
                  "data-framer-name": `Current`,
                  layoutDependency: Y,
                  layoutId: `YJnKcc1Ok`,
                  ref: i,
                  style: { ...m },
                  ...V({ WzVQtCWbz: { "data-framer-name": `Past` } }, M, L),
                  children: [
                    s(E, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        intrinsicHeight: 32,
                        intrinsicWidth: 78,
                        loading: g((p?.y || 0) + 0),
                        pixelHeight: 32,
                        pixelWidth: 78,
                        sizes: `40px`,
                        ...q(w),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-17g34jv`,
                      layoutDependency: Y,
                      layoutId: `A6b5sdp8A`,
                      style: {
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                      },
                    }),
                    c(d.div, {
                      className: `framer-13hmzbm`,
                      "data-framer-name": `Text + Icon`,
                      layoutDependency: Y,
                      layoutId: `O9e77RhaF`,
                      children: [
                        c(d.div, {
                          className: `framer-10vmn3d`,
                          "data-framer-name": `Text`,
                          layoutDependency: Y,
                          layoutId: `lT6CJWxEZ`,
                          children: [
                            s(b, {
                              __fromCanvasComponent: !0,
                              children: s(t, {
                                children: s(d.h4, {
                                  className: `framer-styles-preset-jjv5nu`,
                                  "data-styles-preset": `TI_CAjGBM`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                  },
                                  children: `Meridian Health`,
                                }),
                              }),
                              className: `framer-wbeqe6`,
                              fonts: [`Inter`],
                              layoutDependency: Y,
                              layoutId: `m6CtxQYsf`,
                              style: {
                                "--extracted-1eung3n": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: D,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(b, {
                              __fromCanvasComponent: !0,
                              children: s(t, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-163ovsm`,
                                  "data-styles-preset": `ptQSvPZIk`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                  },
                                  children: `Designing across scheduling, case management, treatment planning, and clinical documentation for mental health practices. The challenge is balancing what clinicians need with what administrators need—often very different things—while keeping everything HIPAA-compliant and actually usable. `,
                                }),
                              }),
                              className: `framer-zkzmni`,
                              fonts: [`Inter`],
                              layoutDependency: Y,
                              layoutId: `aw0Mf06gj`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: O,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        c(d.div, {
                          className: `framer-1m7f4yp`,
                          "data-border": !0,
                          "data-framer-name": `React`,
                          layoutDependency: Y,
                          layoutId: `r_Pgu3TG5`,
                          style: {
                            "--border-bottom-width": `2px`,
                            "--border-color": `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(0, 94, 217))`,
                            "--border-left-width": `2px`,
                            "--border-right-width": `2px`,
                            "--border-style": `solid`,
                            "--border-top-width": `2px`,
                            backgroundColor: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          },
                          variants: {
                            WzVQtCWbz: {
                              "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                            },
                          },
                          children: [
                            s(C, {
                              children: s(te, {
                                className: `framer-1qlx9ve-container`,
                                "data-code-component-plugin-id": `84d4c1`,
                                isAuthoredByUser: !0,
                                layoutDependency: Y,
                                layoutId: `DNPL4WguH-container`,
                                nodeId: `DNPL4WguH`,
                                rendersWithMotion: !0,
                                scopeId: `Gt7mmnlqE`,
                                children: s(P, {
                                  color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                  height: `100%`,
                                  id: `DNPL4WguH`,
                                  layoutId: `DNPL4WguH`,
                                  stroke: !1,
                                  strokeColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                  style: { height: `100%`, width: `100%` },
                                  svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.287 0H279.807L203.041 101.593H346.847L91.972 355.528L169.695 184.3H26.7266L161.287 0Z" fill="#2F2965"/>
</svg>
`,
                                  width: `100%`,
                                  ...V(
                                    {
                                      WzVQtCWbz: {
                                        svgCode: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 77.6142 122.386 100 150 100C122.386 100 100 122.386 100 150C100 122.386 77.6142 100 50 100ZM50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200C77.6142 200 100 177.614 100 150C100 177.614 122.386 200 150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="#3D3D3D"/>
</svg>
`,
                                      },
                                    },
                                    M,
                                    L
                                  ),
                                }),
                              }),
                            }),
                            s(b, {
                              __fromCanvasComponent: !0,
                              children: s(t, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-1833qg6`,
                                  "data-styles-preset": `jB2nPzqr7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                  },
                                  children: `Sep 2025 - Current`,
                                }),
                              }),
                              className: `framer-lnnxhg`,
                              fonts: [`Inter`],
                              layoutDependency: Y,
                              layoutId: `LVKR07Klf`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: A,
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
            }),
          });
        }),
        [
          `.framer-TZS3x.framer-sgzjd5, .framer-TZS3x .framer-sgzjd5 { display: block; }`,
          `.framer-TZS3x.framer-10gofpt { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 618px; }`,
          `.framer-TZS3x .framer-17g34jv { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TZS3x .framer-13hmzbm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-TZS3x .framer-10vmn3d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-TZS3x .framer-wbeqe6, .framer-TZS3x .framer-zkzmni { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-TZS3x .framer-1m7f4yp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TZS3x .framer-1qlx9ve-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-TZS3x .framer-lnnxhg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...R,
          ...I,
          ...j,
          `.framer-TZS3x[data-border="true"]::after, .framer-TZS3x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-TZS3x`
      )),
      ($.displayName = `Timeline Work`),
      ($.defaultProps = { height: 192, width: 618 }),
      w($, {
        variant: {
          options: [`YJnKcc1Ok`, `WzVQtCWbz`],
          optionTitles: [`Current`, `Past`],
          title: `Variant`,
          type: D.Enum,
        },
        VtoKB64T8: {
          __defaultAssetReference: `data:framer/asset-reference,aWwxH6dqmUu5jCNRFneN4Z8gLE0.svg?originalFilename=1.svg&width=78&height=32`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,aWwxH6dqmUu5jCNRFneN4Z8gLE0.svg?originalFilename=1.svg&width=78&height=32`,
          },
          title: `Image`,
          type: D.ResponsiveImage,
        },
        xLqLyNMp1: {
          defaultValue: `Meridian Health`,
          displayTextArea: !1,
          title: `Title`,
          type: D.String,
        },
        onxLqLyNMp1Change: { changes: `xLqLyNMp1`, type: D.ChangeHandler },
        AMQxizGuL: {
          defaultValue: `Designing across scheduling, case management, treatment planning, and clinical documentation for mental health practices. The challenge is balancing what clinicians need with what administrators need—often very different things—while keeping everything HIPAA-compliant and actually usable. `,
          displayTextArea: !0,
          title: `Description`,
          type: D.String,
        },
        onAMQxizGuLChange: { changes: `AMQxizGuL`, type: D.ChangeHandler },
        CGvW32DQL: {
          defaultValue: `Sep 2025 - Current`,
          displayTextArea: !1,
          title: `Year`,
          type: D.String,
        },
        onCGvW32DQLChange: { changes: `CGvW32DQL`, type: D.ChangeHandler },
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
          ...H,
          ...x(z),
          ...x(L),
          ...x(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { ie as n, $ as t };
//# sourceMappingURL=Gt7mmnlqE.BZS30L97.mjs.map
