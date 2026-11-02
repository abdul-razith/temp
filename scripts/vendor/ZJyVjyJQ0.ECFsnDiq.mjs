import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  l as o,
  m as s,
  s as c,
  u as l,
  w as ee,
  x as u,
} from "./react.BDb-TZZO.mjs";
import { E as d, a as f, r as te, t as p } from "./motion.DUnltMVz.mjs";
import {
  B as m,
  Ct as h,
  D as g,
  Et as _,
  J as v,
  M as y,
  O as b,
  P as x,
  T as S,
  V as C,
  _t as w,
  ct as ne,
  d as T,
  i as E,
  k as D,
  lt as re,
  nt as O,
  o as k,
  u as A,
  wt as j,
} from "./framer.Bi3K3xOo.mjs";
import { a as M, c as ie, o as ae, s as N } from "./shared-lib.DAxb9xg1.mjs";
import { n as P, t as F } from "./SVGComponent.CcbG4JSa.mjs";
import { i as I, n as L, r as R, t as z } from "./MffBJovlA.DNehB8j9.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  oe,
  se,
  ce,
  le,
  ue,
  X,
  de = e(() => {
    (i(),
      v(),
      p(),
      r(),
      I(),
      (V = _(d.div)),
      (H = { OT2uanF9T: { hover: !0 } }),
      (U = [`OT2uanF9T`, `LOCOwYd4z`, `yFNDGGZL8`, `q59urRCUO`, `xocAH7Ajf`]),
      (W = `framer-kXHLo`),
      (G = {
        LOCOwYd4z: `framer-v-1qw2b4u`,
        OT2uanF9T: `framer-v-iocju`,
        q59urRCUO: `framer-v-1yg89za`,
        xocAH7Ajf: `framer-v-cz3ejg`,
        yFNDGGZL8: `framer-v-g2p3jk`,
      }),
      (K = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (q = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (J = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Y = (e, t) => `translateX(-50%) ${t}`),
      (oe = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: o, children: t });
      }),
      (se = {
        Default: `OT2uanF9T`,
        Disabled: `yFNDGGZL8`,
        Error: `xocAH7Ajf`,
        Loading: `LOCOwYd4z`,
        Success: `q59urRCUO`,
      }),
      (ce = d.create(t)),
      (le = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nVnfz6ljX: e ?? i.nVnfz6ljX,
        variant: se[i.variant] ?? i.variant ?? `OT2uanF9T`,
      })),
      (ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = j(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = w();
          re();
          let { style: f, className: p, layoutId: m, variant: g, nVnfz6ljX: _, ...v } = le(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = h({
              cycleOrder: U,
              defaultVariant: `OT2uanF9T`,
              enabledGestures: H,
              ref: i,
              variant: g,
              variantClassNames: G,
            }),
            j = ue(e, A),
            { activeVariantCallback: M, delay: ie } = ne(b),
            ae = M(async (...e) => {
              if ((O({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            N = y(W, z),
            P = () => b !== `LOCOwYd4z`,
            F = () => b === `LOCOwYd4z`;
          return c(te, {
            id: m ?? a,
            children: c(ce, {
              animate: A,
              initial: !1,
              children: c(oe, {
                value: K,
                children: l(d.button, {
                  ...v,
                  ...T,
                  className: y(N, `framer-iocju`, p, x),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: j,
                  layoutId: `OT2uanF9T`,
                  onTap: ae,
                  ref: i,
                  style: { opacity: 1, ...f },
                  variants: {
                    "OT2uanF9T-hover": { opacity: 1 },
                    q59urRCUO: { opacity: 1 },
                    xocAH7Ajf: { opacity: 1 },
                    yFNDGGZL8: { opacity: 0.5 },
                  },
                  ...B(
                    {
                      "OT2uanF9T-hover": { "data-framer-name": void 0 },
                      LOCOwYd4z: { "data-framer-name": `Loading` },
                      q59urRCUO: { "data-framer-name": `Success` },
                      xocAH7Ajf: { "data-framer-name": `Error` },
                      yFNDGGZL8: { "data-framer-name": `Disabled` },
                    },
                    b,
                    E
                  ),
                  children: [
                    l(d.div, {
                      className: `framer-b0ambj`,
                      "data-framer-name": `Border`,
                      layoutDependency: j,
                      layoutId: `LuQCLObwU`,
                      children: [
                        c(d.div, {
                          className: `framer-1u6yel4`,
                          "data-border": !0,
                          "data-framer-name": `Fill Color`,
                          layoutDependency: j,
                          layoutId: `MUZoWrNrS`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                          },
                          variants: {
                            xocAH7Ajf: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `var(--token-221f5458-30ad-42f0-b005-7c3d9fe30e8d, rgb(250, 190, 209))`,
                            },
                          },
                        }),
                        c(d.div, {
                          className: `framer-cnj19u`,
                          "data-border": !0,
                          "data-framer-name": `Dot`,
                          layoutDependency: j,
                          layoutId: `CZ8PC7f8R`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(34, 34, 34)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            opacity: 0,
                          },
                          variants: { "OT2uanF9T-hover": { opacity: 1 } },
                        }),
                        c(d.div, {
                          className: `framer-141guim`,
                          "data-border": !0,
                          "data-framer-name": `Dot`,
                          layoutDependency: j,
                          layoutId: `PDY02k1h9`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(34, 34, 34)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            opacity: 0,
                          },
                          variants: { "OT2uanF9T-hover": { opacity: 1 } },
                        }),
                        c(d.div, {
                          className: `framer-jwf2l4`,
                          "data-border": !0,
                          "data-framer-name": `Dot`,
                          layoutDependency: j,
                          layoutId: `wreAAbP7w`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(34, 34, 34)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            opacity: 0,
                          },
                          variants: { "OT2uanF9T-hover": { opacity: 1 } },
                        }),
                        c(d.div, {
                          className: `framer-1s6ak0o`,
                          "data-border": !0,
                          "data-framer-name": `Dot`,
                          layoutDependency: j,
                          layoutId: `eS5D6wcpt`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(34, 34, 34)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                            opacity: 0,
                          },
                          variants: { "OT2uanF9T-hover": { opacity: 1 } },
                        }),
                      ],
                    }),
                    P() &&
                      c(S, {
                        __fromCanvasComponent: !0,
                        children: c(t, {
                          children: c(d.p, {
                            className: `framer-styles-preset-27ku3y`,
                            "data-styles-preset": `MffBJovlA`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                            },
                            children: `Post this note`,
                          }),
                        }),
                        className: `framer-y9ron3`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `dnCJXN3cH`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: { xocAH7Ajf: { "--extracted-r6o4lv": `rgb(255, 34, 68)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...B(
                          {
                            q59urRCUO: {
                              children: c(t, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-27ku3y`,
                                  "data-styles-preset": `MffBJovlA`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                  },
                                  children: `we've sent it`,
                                }),
                              }),
                            },
                            xocAH7Ajf: {
                              children: c(t, {
                                children: c(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          b,
                          E
                        ),
                      }),
                    F() &&
                      c(d.div, {
                        className: `framer-10w1i9d`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: j,
                        layoutId: `tM5scAT3F`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: c(V, {
                          __framer__loop: J,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: q,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-uvsees`,
                          "data-framer-name": `Conic`,
                          layoutDependency: j,
                          layoutId: `fZ08Clo5e`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            LOCOwYd4z: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: c(d.div, {
                            className: `framer-3flsq5`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: j,
                            layoutId: `GbfzWT7nw`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Y,
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
          `.framer-kXHLo.framer-b80l7u, .framer-kXHLo .framer-b80l7u { display: block; }`,
          `.framer-kXHLo.framer-iocju { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }`,
          `.framer-kXHLo .framer-b0ambj, .framer-kXHLo .framer-1u6yel4 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-kXHLo .framer-cnj19u { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-kXHLo .framer-141guim { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 0px; overflow: visible; position: absolute; width: 8px; z-index: 1; }`,
          `.framer-kXHLo .framer-jwf2l4 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; width: 8px; z-index: 1; }`,
          `.framer-kXHLo .framer-1s6ak0o { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: visible; position: absolute; right: 0px; top: 0px; width: 8px; z-index: 1; }`,
          `.framer-kXHLo .framer-y9ron3 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-kXHLo .framer-10w1i9d { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-kXHLo .framer-uvsees { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-kXHLo .framer-3flsq5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-kXHLo.framer-v-1qw2b4u .framer-uvsees { overflow: hidden; }`,
          `.framer-kXHLo.framer-v-iocju.hover .framer-cnj19u { left: -4px; top: -4px; }`,
          `.framer-kXHLo.framer-v-iocju.hover .framer-141guim { bottom: -4px; left: -4px; }`,
          `.framer-kXHLo.framer-v-iocju.hover .framer-jwf2l4 { bottom: -4px; right: -4px; }`,
          `.framer-kXHLo.framer-v-iocju.hover .framer-1s6ak0o { right: -4px; top: -4px; }`,
          ...L,
          `.framer-kXHLo[data-border="true"]::after, .framer-kXHLo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-kXHLo`
      )),
      (X.displayName = `Button Contact`),
      (X.defaultProps = { height: 30, width: 128 }),
      D(X, {
        variant: {
          options: [`OT2uanF9T`, `LOCOwYd4z`, `yFNDGGZL8`, `q59urRCUO`, `xocAH7Ajf`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: k.Enum,
        },
        nVnfz6ljX: { title: `Click`, type: k.EventHandler },
      }),
      b(
        X,
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
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...C(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  Q,
  ye,
  be,
  xe,
  Se,
  Ce,
  $,
  we = e(() => {
    (i(),
      v(),
      p(),
      r(),
      P(),
      ie(),
      I(),
      de(),
      (fe = m(X)),
      (pe = m(F)),
      (me = [`EHPqehZUY`, `DSLWHl86v`]),
      (he = `framer-i50iG`),
      (ge = { DSLWHl86v: `framer-v-h2p93q`, EHPqehZUY: `framer-v-1wt6bqy` }),
      (_e = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (ve = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (ye = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: o, children: t });
      }),
      (be = { Email: `DSLWHl86v`, Message: `EHPqehZUY` }),
      (xe = d.create(t)),
      (Se = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: be[r.variant] ?? r.variant ?? `EHPqehZUY`,
      })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = j(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: s, setLocale: f } = w(),
            p = re(),
            { style: m, className: _, layoutId: v, variant: b, ...x } = Se(e),
            {
              baseVariant: C,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: ie,
              setGestureState: ae,
              setVariant: N,
              variants: P,
            } = h({
              cycleOrder: me,
              defaultVariant: `EHPqehZUY`,
              ref: i,
              variant: b,
              variantClassNames: ge,
            }),
            I = Ce(e, P),
            L = y(he, M, z),
            R = () => C === `DSLWHl86v`,
            B = () => C !== `DSLWHl86v`,
            { activeVariantCallback: V, delay: H } = ne(C),
            U = V(async (...e) => {
              N(`DSLWHl86v`);
            }),
            W = V(async (...e) => {
              N(`EHPqehZUY`);
            });
          return c(te, {
            id: v ?? a,
            children: c(xe, {
              animate: P,
              initial: !1,
              children: c(ye, {
                value: _e,
                children: c(A, {
                  ...x,
                  ...k,
                  action: `https://api.framer.com/forms/v1/forms/9a34b19b-6ecc-48cb-b534-34d24d161ee2/submit`,
                  className: y(L, `framer-1wt6bqy`, _, D),
                  "data-framer-name": `Message`,
                  layoutDependency: I,
                  layoutId: `EHPqehZUY`,
                  nodeId: `EHPqehZUY`,
                  ref: i,
                  style: { ...m },
                  ...Z({ DSLWHl86v: { "data-framer-name": `Email` } }, C, j),
                  children: (e) =>
                    l(o, {
                      children: [
                        l(d.label, {
                          className: `framer-7nw6i1`,
                          "data-framer-name": `Email`,
                          layoutDependency: I,
                          layoutId: `h2RXVzPie`,
                          style: {
                            backgroundColor: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                            opacity: 0,
                          },
                          variants: { DSLWHl86v: { opacity: 1 } },
                          children: [
                            c(S, {
                              __fromCanvasComponent: !0,
                              children: c(t, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-1833qg6`,
                                  "data-styles-preset": `jB2nPzqr7`,
                                  dir: `auto`,
                                  children: `Where to find you?`,
                                }),
                              }),
                              className: `framer-1crp85u`,
                              fonts: [`Inter`],
                              layoutDependency: I,
                              layoutId: `FJZPhNBOD`,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(T, {
                              className: `framer-ob6hus`,
                              inputName: `Email`,
                              layoutDependency: I,
                              layoutId: `GQso_PrSG`,
                              placeholder: `hello@yourmail.com`,
                              required: !0,
                              style: {
                                "--framer-input-font-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--framer-input-icon-mask-image": `none`,
                                "--framer-input-placeholder-color": `var(--token-9aa8d99c-a5bb-4541-a292-62e252d963bf, rgb(69, 71, 71))`,
                              },
                              type: `textarea`,
                            }),
                          ],
                        }),
                        l(d.label, {
                          className: `framer-xiv7xx`,
                          "data-framer-name": `Message`,
                          layoutDependency: I,
                          layoutId: `vHCVZY6vC`,
                          style: {
                            backgroundColor: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                            opacity: 1,
                          },
                          variants: { DSLWHl86v: { opacity: 0 } },
                          children: [
                            c(S, {
                              __fromCanvasComponent: !0,
                              children: c(t, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-1833qg6`,
                                  "data-styles-preset": `jB2nPzqr7`,
                                  dir: `auto`,
                                  children: `What's on your mind?`,
                                }),
                              }),
                              className: `framer-qdtym2`,
                              fonts: [`Inter`],
                              layoutDependency: I,
                              layoutId: `JPVXcbDXX`,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(T, {
                              className: `framer-1ispb5p`,
                              inputName: `Message`,
                              layoutDependency: I,
                              layoutId: `vvQBF5iel`,
                              placeholder: `Tell me a story, or project idea...`,
                              required: !0,
                              style: {
                                "--framer-input-font-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                "--framer-input-icon-mask-image": `none`,
                                "--framer-input-placeholder-color": `var(--token-9aa8d99c-a5bb-4541-a292-62e252d963bf, rgb(69, 71, 71))`,
                              },
                              type: `textarea`,
                            }),
                          ],
                        }),
                        l(d.div, {
                          className: `framer-mtu3d9`,
                          "data-framer-name": `Next`,
                          layoutDependency: I,
                          layoutId: `c0GRdTuso`,
                          children: [
                            R() &&
                              c(E, {
                                ...Z(
                                  {
                                    DSLWHl86v: {
                                      height: 30,
                                      y: (p?.y || 0) + (p?.height || 164) - 16 + 1,
                                    },
                                  },
                                  C,
                                  j
                                ),
                                children: c(g, {
                                  className: `framer-vgsdy1-container`,
                                  layoutDependency: I,
                                  layoutId: `tKmsJKqLH-container`,
                                  nodeId: `tKmsJKqLH`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZJyVjyJQ0`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `tKmsJKqLH`,
                                    layoutId: `tKmsJKqLH`,
                                    type: `submit`,
                                    variant: Q(
                                      e,
                                      { pending: `LOCOwYd4z`, success: `q59urRCUO` },
                                      ve(`OT2uanF9T`)
                                    ),
                                    width: `100%`,
                                    ...Z({ DSLWHl86v: { nVnfz6ljX: void 0 } }, C, j),
                                  }),
                                }),
                              }),
                            B() &&
                              l(d.div, {
                                className: `framer-12hbfkr`,
                                "data-framer-name": `Next`,
                                "data-highlight": !0,
                                layoutDependency: I,
                                layoutId: `E2IOab2sr`,
                                onTap: U,
                                style: {
                                  backgroundColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                },
                                children: [
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(t, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-27ku3y`,
                                        "data-styles-preset": `MffBJovlA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                        },
                                        children: `Next`,
                                      }),
                                    }),
                                    className: `framer-1cqhfxk`,
                                    fonts: [`Inter`],
                                    layoutDependency: I,
                                    layoutId: `G4MVk32TA`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(t, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-27ku3y`,
                                        "data-styles-preset": `MffBJovlA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)))`,
                                        },
                                        children: `(1/2)`,
                                      }),
                                    }),
                                    className: `framer-sqwffj`,
                                    fonts: [`Inter`],
                                    layoutDependency: I,
                                    layoutId: `Qp_zyQ_o5`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            R() &&
                              l(d.div, {
                                className: `framer-wfsri1`,
                                "data-border": !0,
                                "data-framer-name": `Previous`,
                                "data-highlight": !0,
                                layoutDependency: I,
                                layoutId: `WbPL_RECH`,
                                onTap: W,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `rgb(34, 34, 34)`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                                },
                                children: [
                                  c(E, {
                                    children: c(g, {
                                      className: `framer-11n7er2-container`,
                                      "data-code-component-plugin-id": `84d4c1`,
                                      isAuthoredByUser: !0,
                                      layoutDependency: I,
                                      layoutId: `TS6wsHR1P-container`,
                                      nodeId: `TS6wsHR1P`,
                                      rendersWithMotion: !0,
                                      scopeId: `ZJyVjyJQ0`,
                                      children: c(F, {
                                        color: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        height: `100%`,
                                        id: `TS6wsHR1P`,
                                        layoutId: `TS6wsHR1P`,
                                        stroke: !1,
                                        strokeColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                        style: { height: `100%`, width: `100%` },
                                        svgCode: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_653_2)">
<path d="M11.5996 0.300781L3.90039 8L11.5996 15.6992" stroke="black"/>
</g>
<defs>
<clipPath id="clip0_653_2">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(t, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-27ku3y`,
                                        "data-styles-preset": `MffBJovlA`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18)))`,
                                        },
                                        children: `Previous`,
                                      }),
                                    }),
                                    className: `framer-16wrmyn`,
                                    fonts: [`Inter`],
                                    layoutDependency: I,
                                    layoutId: `BcXUST4YP`,
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
                }),
              }),
            }),
          });
        }),
        [
          `.framer-i50iG.framer-1xgrzfm, .framer-i50iG .framer-1xgrzfm { display: block; }`,
          `.framer-i50iG.framer-1wt6bqy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 379px; }`,
          `.framer-i50iG .framer-7nw6i1 { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; left: 0px; padding: 16px; pointer-events: none; position: absolute; right: 0px; top: -164px; user-select: none; z-index: 1; }`,
          `.framer-i50iG .framer-1crp85u, .framer-i50iG .framer-qdtym2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-i50iG .framer-ob6hus { --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 140%; --framer-input-font-size: 16px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 0px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
          `.framer-i50iG .framer-xiv7xx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 16px; position: relative; width: 100%; }`,
          `.framer-i50iG .framer-1ispb5p { --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 140%; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 0px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
          `.framer-i50iG .framer-mtu3d9 { align-content: center; align-items: center; bottom: -16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 16px; overflow: visible; padding: 0px; position: absolute; right: 16px; z-index: 3; }`,
          `.framer-i50iG .framer-vgsdy1-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
          `.framer-i50iG .framer-12hbfkr, .framer-i50iG .framer-wfsri1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }`,
          `.framer-i50iG .framer-1cqhfxk, .framer-i50iG .framer-sqwffj, .framer-i50iG .framer-16wrmyn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-i50iG .framer-11n7er2-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 12px; }`,
          `.framer-i50iG.framer-v-h2p93q .framer-7nw6i1 { -webkit-user-select: auto; left: unset; pointer-events: auto; position: relative; right: unset; top: unset; user-select: auto; width: 100%; }`,
          `.framer-i50iG.framer-v-h2p93q .framer-xiv7xx { -webkit-user-select: none; left: 0px; pointer-events: none; position: absolute; top: -164px; user-select: none; width: 379px; z-index: 1; }`,
          `.framer-i50iG.framer-v-h2p93q .framer-mtu3d9 { gap: unset; justify-content: space-between; }`,
          `.framer-i50iG.framer-v-h2p93q .framer-vgsdy1-container { order: 1; }`,
          `.framer-i50iG.framer-v-h2p93q .framer-wfsri1 { order: 0; }`,
          ...ae,
          ...L,
          `.framer-i50iG[data-border="true"]::after, .framer-i50iG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-i50iG`
      )),
      ($.displayName = `Form Contact`),
      ($.defaultProps = { height: 164, width: 379 }),
      D($, {
        variant: {
          options: [`EHPqehZUY`, `DSLWHl86v`],
          optionTitles: [`Message`, `Email`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      b(
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
                url: `../../assets/fonts/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
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
          ...fe,
          ...pe,
          ...C(N),
          ...C(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => O([() => x(X, {}, t)], t) }));
  });
export { de as i, we as n, X as r, $ as t };
//# sourceMappingURL=ZJyVjyJQ0.ECFsnDiq.mjs.map
