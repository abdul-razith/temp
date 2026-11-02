import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  M as n,
  R as r,
  T as i,
  b as a,
  c as o,
  j as s,
  k as c,
  m as l,
  s as u,
  u as d,
  w as f,
  x as p,
} from "./react.BDb-TZZO.mjs";
import { E as m, a as h, r as g, t as _ } from "./motion.DUnltMVz.mjs";
import {
  B as v,
  J as y,
  M as b,
  O as x,
  _t as S,
  a as C,
  f as w,
  ft as T,
  i as E,
  k as D,
  lt as ee,
  mt as te,
  o as O,
  pt as k,
  vt as A,
  wt as j,
} from "./framer.Bi3K3xOo.mjs";
import { i as M, l as N, r as P, u as F } from "./shared-lib.DAxb9xg1.mjs";
import { n as I, t as L } from "./Lenis.Bav3QMVP.mjs";
import R, { t as z } from "./sA17GrONMREW7hSOzazpa-ybijlUnJJJVvELPIhKZns.D8dzu_Ht.mjs";
function B(e) {
  let { items: r, decor: i, decorItems: o } = e,
    s = p(null),
    l = p(null),
    f = p({ x: 0, y: 0 }),
    m = p(1),
    h = p(!1),
    g = p({ x: 0, y: 0 }),
    _ = p(null),
    v = p(null),
    y = n(() => {
      let e = Math.max(...r.map((e) => e.size ?? 200)) + 80,
        t = Math.ceil(Math.sqrt(r.length)),
        n = Math.ceil(r.length / t);
      return r.map((r, i) => {
        let a = i % t,
          o = Math.floor(i / t),
          s = (a - (t - 1) / 2) * e,
          c = (o - (n - 1) / 2) * e,
          l = e * 0.38;
        return {
          ...r,
          id: `item-${i}`,
          x: s + N.utils.random(-l, l),
          y: c + N.utils.random(-l, l),
          rotation: N.utils.random(-8, 8),
          noteOffset: N.utils.random(-(r.size ?? 200) * 0.3, (r.size ?? 200) * 0.3),
        };
      });
    }, [r]),
    b = n(() => {
      if (!i || !o?.length) return [];
      let e = (r.length ? Math.max(...r.map((e) => e.size ?? 200)) : 200) + 80,
        t = Math.max(1, Math.ceil(Math.sqrt(r.length))),
        n = Math.max(1, Math.ceil(r.length / t)),
        a = t * e,
        s = n * e;
      return o.map((e, t) => ({
        ...e,
        id: `decor-${t}`,
        x: N.utils.random(-a / 2, a / 2),
        y: N.utils.random(-s / 2, s / 2),
        rotation: N.utils.random(-15, 15),
      }));
    }, [i, o, r]),
    x = c((e, t, n) => {
      let r = l.current;
      if (!r) return;
      let i = Math.min(1, Math.max(0.5, e)),
        a = i / m.current;
      ((f.current.x = t + (f.current.x - t) * a),
        (f.current.y = n + (f.current.y - n) * a),
        (m.current = i),
        N.to(r, {
          x: f.current.x,
          y: f.current.y,
          scale: m.current,
          duration: 0.25,
          ease: `power2.out`,
        }));
    }, []);
  return (
    a(() => {
      let e = l.current,
        n = s.current;
      if (!e || !n) return;
      let r = (t) => {
          t.target.closest(`[data-image]`) ||
            ((h.current = !0),
            (g.current = { x: t.clientX, y: t.clientY }),
            (n.style.cursor = `grabbing`),
            N.killTweensOf(e));
        },
        i = (t) => {
          if (h.current) {
            let n = (t.clientX - g.current.x) / m.current,
              r = (t.clientY - g.current.y) / m.current;
            ((g.current = { x: t.clientX, y: t.clientY }),
              (f.current.x += n * m.current),
              (f.current.y += r * m.current),
              N.set(e, { x: f.current.x, y: f.current.y }));
            return;
          }
          if (v.current) {
            let { local: e, lastPos: n, velocity: r } = v.current,
              i = (t.clientX - n.x) / m.current,
              a = (t.clientY - n.y) / m.current;
            ((r.x = i),
              (r.y = a),
              (n.x = t.clientX),
              (n.y = t.clientY),
              (e.current.x += i),
              (e.current.y += a));
          }
        },
        a = () => {
          h.current &&
            ((h.current = !1),
            (n.style.cursor = `grab`),
            N.to(e, { x: f.current.x, y: f.current.y, duration: 0.5, ease: `power3.out` }));
        },
        o = (e) => {
          e.preventDefault();
          let t = n.getBoundingClientRect();
          x(
            m.current + (e.deltaY > 0 ? -0.05 : 0.05),
            e.clientX - t.left - t.width / 2,
            e.clientY - t.top - t.height / 2
          );
        },
        c = (e) => {
          if (e.touches.length === 2) {
            let t = e.touches[0].clientX - e.touches[1].clientX,
              n = e.touches[0].clientY - e.touches[1].clientY;
            _.current = Math.sqrt(t * t + n * n);
          }
        },
        u = (e) => {
          if (e.touches.length === 2 && _.current !== null) {
            e.preventDefault();
            let t = e.touches[0].clientX - e.touches[1].clientX,
              r = e.touches[0].clientY - e.touches[1].clientY,
              i = Math.sqrt(t * t + r * r),
              a = n.getBoundingClientRect(),
              o = (e.touches[0].clientX + e.touches[1].clientX) / 2,
              s = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            (x(m.current * (i / _.current), o - a.left - a.width / 2, s - a.top - a.height / 2),
              (_.current = i));
          }
        },
        d = () => {
          _.current = null;
        };
      return (
        n.addEventListener(`pointerdown`, r),
        t.addEventListener(`pointermove`, i),
        t.addEventListener(`pointerup`, a),
        n.addEventListener(`wheel`, o, { passive: !1 }),
        n.addEventListener(`touchstart`, c, { passive: !0 }),
        n.addEventListener(`touchmove`, u, { passive: !1 }),
        t.addEventListener(`touchend`, d),
        () => {
          (n.removeEventListener(`pointerdown`, r),
            t.removeEventListener(`pointermove`, i),
            t.removeEventListener(`pointerup`, a),
            n.removeEventListener(`wheel`, o),
            n.removeEventListener(`touchstart`, c),
            n.removeEventListener(`touchmove`, u),
            t.removeEventListener(`touchend`, d));
        }
      );
    }, [x]),
    u(`div`, {
      ref: s,
      style: {
        width: `100%`,
        height: `100vh`,
        overflow: `hidden`,
        position: `relative`,
        cursor: `grab`,
        userSelect: `none`,
        WebkitUserSelect: `none`,
        touchAction: `none`,
      },
      children: d(`div`, {
        ref: l,
        style: {
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        },
        children: [
          y.map((e) => u(re, { item: e, canvasDragging: h, activeImageDrag: v, scale: m }, e.id)),
          b.map((e) => u(ne, { item: e, canvasDragging: h, activeImageDrag: v, scale: m }, e.id)),
        ],
      }),
    })
  );
}
function ne({ item: e, canvasDragging: n, activeImageDrag: r, scale: i }) {
  let o = p(null),
    s = p(null),
    c = p({ x: e.x, y: e.y }),
    l = !!e.hoverEnabled;
  (a(() => {
    let t = o.current;
    t && N.set(t, { x: c.current.x, y: c.current.y, rotation: e.rotation });
  }, []),
    a(() => {
      let e = o.current;
      if (!e) return;
      let t = () => N.set(e, { x: c.current.x, y: c.current.y });
      return (N.ticker.add(t), () => N.ticker.remove(t));
    }, []));
  let d = (e) => {
    s.current && N.set(s.current, { scaleX: e ? -1 : 1 });
  };
  return u(`div`, {
    ref: o,
    "data-image": `true`,
    onPointerDown: (e) => {
      if (n.current) return;
      e.stopPropagation();
      let i = o.current,
        a = { x: 0, y: 0 };
      ((r.current = { local: c, lastPos: { x: e.clientX, y: e.clientY }, velocity: a }),
        N.killTweensOf(c.current),
        N.killTweensOf(i),
        N.to(i, { scale: 1.1, duration: 0.2, ease: `power2.out` }),
        (i.style.cursor = `grabbing`),
        (i.style.zIndex = 100));
      let s = () => {
        r.current?.local === c &&
          ((r.current = null),
          N.to(c.current, {
            x: c.current.x + a.x * 6,
            y: c.current.y + a.y * 6,
            duration: 0.6,
            ease: `power3.out`,
          }),
          N.to(i, { scale: 1, duration: 0.25, ease: `power2.out` }),
          (i.style.cursor = `grab`),
          (i.style.zIndex = ``),
          t.removeEventListener(`pointerup`, s));
      };
      t.addEventListener(`pointerup`, s);
    },
    onPointerEnter: () => {
      !l ||
        n.current ||
        r.current ||
        (d(!0), N.to(o.current, { scale: 1.1, duration: 0.2, ease: `power2.out` }));
    },
    onPointerLeave: () => {
      !l ||
        r.current?.local === c ||
        (d(!1), N.to(o.current, { scale: 1, duration: 0.2, ease: `power2.out` }));
    },
    style: {
      position: `absolute`,
      width: e.size,
      height: e.size,
      cursor: `grab`,
      transformOrigin: `center center`,
      willChange: `transform`,
      zIndex: 10,
    },
    children: u(`img`, {
      ref: s,
      src: e.imageDefault,
      draggable: !1,
      style: {
        width: `100%`,
        height: `100%`,
        objectFit: `contain`,
        userSelect: `none`,
        pointerEvents: `none`,
      },
    }),
  });
}
function re({ item: e, canvasDragging: n, activeImageDrag: r, scale: i }) {
  let o = p(null),
    s = p({ x: e.x, y: e.y }),
    c = e.linkNewTab && e.link,
    l = c ? `pointer` : `grab`;
  return (
    a(() => {
      let t = o.current;
      t && N.set(t, { x: s.current.x, y: s.current.y, rotation: e.rotation });
    }, []),
    a(() => {
      let e = o.current;
      if (!e) return;
      let t = () => N.set(e, { x: s.current.x, y: s.current.y });
      return (N.ticker.add(t), () => N.ticker.remove(t));
    }, []),
    d(`div`, {
      ref: o,
      "data-image": `true`,
      onPointerDown: (i) => {
        if (n.current) return;
        i.stopPropagation();
        let a = o.current,
          u = { x: 0, y: 0 },
          d = { x: i.clientX, y: i.clientY },
          f = !1;
        ((r.current = { local: s, lastPos: { x: i.clientX, y: i.clientY }, velocity: u }),
          N.killTweensOf(s.current),
          N.killTweensOf(a),
          N.to(a, { scale: 1.1, duration: 0.2, ease: `power2.out` }),
          (a.style.cursor = c ? `pointer` : `grabbing`),
          (a.style.zIndex = 100));
        let p = (e) => {
          (Math.abs(e.clientX - d.x) > 4 || Math.abs(e.clientY - d.y) > 4) && (f = !0);
        };
        t.addEventListener(`pointermove`, p);
        let m = () => {
          if (r.current?.local === s) {
            if (
              ((r.current = null),
              t.removeEventListener(`pointermove`, p),
              t.removeEventListener(`pointerup`, m),
              !f && c)
            ) {
              (t.open(e.link, `_blank`, `noopener,noreferrer`),
                N.to(a, { scale: 1, duration: 0.25, ease: `power2.out` }),
                (a.style.cursor = l),
                (a.style.zIndex = ``));
              return;
            }
            (N.to(s.current, {
              x: s.current.x + u.x * 6,
              y: s.current.y + u.y * 6,
              duration: 0.6,
              ease: `power3.out`,
            }),
              N.to(a, { scale: 1, duration: 0.25, ease: `power2.out` }),
              (a.style.cursor = l),
              (a.style.zIndex = ``));
          }
        };
        t.addEventListener(`pointerup`, m);
      },
      onPointerEnter: () => {
        if (n.current || r.current) return;
        let e = o.current;
        e && N.to(e, { scale: 1.1, duration: 0.2, ease: `power2.out` });
      },
      onPointerLeave: () => {
        if (r.current?.local === s) return;
        let e = o.current;
        e && N.to(e, { scale: 1, duration: 0.2, ease: `power2.out` });
      },
      style: {
        position: `absolute`,
        width: e.size,
        height: e.size,
        cursor: l,
        transformOrigin: `center center`,
        willChange: `transform`,
      },
      children: [
        u(`img`, {
          src: e.image,
          draggable: !1,
          style: {
            width: `100%`,
            height: `100%`,
            objectFit: `cover`,
            userSelect: `none`,
            pointerEvents: `none`,
          },
        }),
        u(ie, { ...e }),
      ],
    })
  );
}
function ie({
  noteText: e,
  notePosition: t,
  noteColor: n,
  noteBg: r,
  fontSize: i,
  fontFamily: a,
  noteOffset: o,
  gap: s = 8,
}) {
  let c = {
      position: `absolute`,
      padding: `8px 12px`,
      background: r,
      color: n,
      fontSize: i,
      fontFamily: a,
      whiteSpace: `nowrap`,
      pointerEvents: `none`,
    },
    l = {
      top: {
        bottom: `calc(100% + ${s}px)`,
        left: `50%`,
        transform: `translate(calc(-50% + ${o}px), 0)`,
      },
      bottom: {
        top: `calc(100% + ${s}px)`,
        left: `50%`,
        transform: `translate(calc(-50% + ${o}px), 0)`,
      },
      left: {
        right: `calc(100% + ${s}px)`,
        top: `50%`,
        transform: `translate(0, calc(-50% + ${o}px))`,
      },
      right: {
        left: `calc(100% + ${s}px)`,
        top: `50%`,
        transform: `translate(0, calc(-50% + ${o}px))`,
      },
    };
  return u(`div`, { style: { ...c, ...l[t] }, children: e });
}
var ae = e(() => {
    (r(),
      o(),
      i(),
      y(),
      F(),
      D(B, {
        items: {
          type: O.Array,
          control: {
            type: O.Object,
            controls: {
              image: { type: O.Image },
              size: { type: O.Number, defaultValue: 200 },
              linkNewTab: {
                type: O.Boolean,
                title: `Link New Tab`,
                defaultValue: !1,
                enabledTitle: `Yes`,
                disabledTitle: `No`,
              },
              link: {
                type: O.String,
                title: `Link`,
                defaultValue: ``,
                placeholder: `https://...`,
                hidden: (e) => !e.linkNewTab,
              },
              noteText: { type: O.String, defaultValue: `Note` },
              notePosition: {
                type: O.Enum,
                options: [`top`, `right`, `bottom`, `left`],
                defaultValue: `top`,
              },
              gap: { type: O.Number, defaultValue: 8, title: `Note Gap` },
              noteColor: { type: O.Color, defaultValue: `#000` },
              noteBg: { type: O.Color, defaultValue: `#BFEAF5` },
              fontSize: { type: O.Number, defaultValue: 32 },
              fontFamily: { type: O.String, defaultValue: `Just me again down here` },
            },
          },
        },
        decor: {
          type: O.Boolean,
          title: `Decor`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        decorItems: {
          type: O.Array,
          title: `Decor Items`,
          hidden: (e) => !e.decor,
          control: {
            type: O.Object,
            controls: {
              imageDefault: { type: O.Image, title: `Image` },
              hoverEnabled: {
                type: O.Boolean,
                title: `Flip Hover`,
                defaultValue: !1,
                enabledTitle: `Yes`,
                disabledTitle: `No`,
              },
              size: { type: O.Number, defaultValue: 120 },
            },
          },
        },
      }));
  }),
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
  $;
e(() => {
  (o(),
    y(),
    _(),
    i(),
    I(),
    ae(),
    M(),
    z(),
    (V = v(L)),
    (H = v(B)),
    (U = v(P)),
    (W = {
      bPGebdqnd: `(min-width: 1200px)`,
      LQxOWmAF7: `(min-width: 810px) and (max-width: 1199.98px)`,
      ofnvdCgTd: `(max-width: 809.98px)`,
    }),
    (G = []),
    (K = `framer-S9TC9`),
    (q = {
      bPGebdqnd: `framer-v-sezhfj`,
      LQxOWmAF7: `framer-v-151jsl5`,
      ofnvdCgTd: `framer-v-1isfees`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = { Desktop: `bPGebdqnd`, Phone: `ofnvdCgTd`, Tablet: `LQxOWmAF7` }),
    (X = ({ value: e }) =>
      te()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `bPGebdqnd`,
    })),
    (Q = j(
      l(function (e, t) {
        let r = p(null),
          i = t ?? r,
          a = f(),
          { activeLocale: o, setLocale: c } = S();
        ee();
        let { style: l, className: _, layoutId: v, variant: y, ...x } = Z(e);
        A(n(() => R({}, o), [o]));
        let [D, te] = k(y, W, !1),
          O = b(K),
          j = s(w)?.isLayoutTemplate,
          M = !!s(h)?.transition?.layout,
          N = J(j, M);
        return (
          T({}),
          u(w.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Y,
              primaryVariantId: `bPGebdqnd`,
              variantClassNames: q,
            },
            children: d(g, {
              id: v ?? a,
              children: [
                u(X, {
                  value: `html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`,
                }),
                d(m.div, {
                  ...x,
                  className: b(O, `framer-sezhfj`, _),
                  ref: i,
                  style: { ...l },
                  children: [
                    u(E, {
                      children: u(C, {
                        className: `framer-cxn5ob-container`,
                        "data-framer-name": `Smooth Scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: N,
                        layoutScroll: !0,
                        name: `Smooth Scroll`,
                        nodeId: `w2GB4a8Jr`,
                        scopeId: `OZ8sqXvDF`,
                        children: u(L, {
                          height: `100%`,
                          id: `w2GB4a8Jr`,
                          infinite: !1,
                          intensity: 5,
                          layoutId: `w2GB4a8Jr`,
                          name: `Smooth Scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(E, {
                      children: u(C, {
                        className: `framer-42pi2o-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: N,
                        nodeId: `x5VBdil1i`,
                        scopeId: `OZ8sqXvDF`,
                        children: u(B, {
                          decor: !0,
                          decorItems: [
                            {
                              hoverEnabled: !1,
                              id: `w0f4BDnun`,
                              imageDefault: `https://framerusercontent.com/images/Ay6UwXx6wHLQOecM35hd5LRxp7M.svg?width=175&height=119`,
                              size: 120,
                            },
                            {
                              hoverEnabled: !0,
                              id: `C_OJ5h_jp`,
                              imageDefault: `https://framerusercontent.com/images/wjJVW6wXiEdpt3FsVxX6WgN57A.svg?width=233&height=442`,
                              size: 150,
                            },
                            {
                              hoverEnabled: !0,
                              id: `BrTkEefHi`,
                              imageDefault: `https://framerusercontent.com/images/21grU6l1dWSbhywxo3slnW2OaO0.png?width=249&height=488`,
                              size: 150,
                            },
                            {
                              hoverEnabled: !0,
                              id: `uRLG0wG8T`,
                              imageDefault: `https://framerusercontent.com/images/j1txL4jzAkhcOCLvdJyu7cdmdc.svg?width=171&height=171`,
                              size: 80,
                            },
                            {
                              hoverEnabled: !0,
                              id: `GY4sOIWv7`,
                              imageDefault: `https://framerusercontent.com/images/JUnMqT8Qvgy4qXyHMyMFixluE.svg?width=117&height=107`,
                              size: 100,
                            },
                          ],
                          height: `100%`,
                          id: `x5VBdil1i`,
                          items: [
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -30,
                              id: `KdtvXUYgP`,
                              image: `https://framerusercontent.com/images/dePDiIbQ0pEr3GA9qJX5vggP8c.png?width=1342&height=894`,
                              link: `https://framer.com/`,
                              linkNewTab: !0,
                              noteBg: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `top`,
                              noteText: `nothing big, still feels nice`,
                              size: 300,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -20,
                              id: `O74TDpzXq`,
                              image: `https://framerusercontent.com/images/hkqAE76OI4thM32d4iwu4EFQps.png?width=1342&height=1342`,
                              link: `https://framer.com/`,
                              linkNewTab: !0,
                              noteBg: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `bottom`,
                              noteText: `Brain’s messy, but it’s okay`,
                              size: 250,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -20,
                              id: `tqMHCdmNr`,
                              image: `https://framerusercontent.com/images/ImWtq4yKP0WdM1PBrSczsl11z1A.png?width=1342&height=1678`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-3b25897c-a78c-4fb0-9a93-831975a769c1, rgb(161, 223, 197))`,
                              noteColor: `rgb(0, 0, 0)`,
                              notePosition: `right`,
                              noteText: `Good weather`,
                              size: 150,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -50,
                              id: `xzUG2d3cK`,
                              image: `https://framerusercontent.com/images/h4E4SLgLCRWR0vwuAQOQvUvGn0.png?width=1342&height=1007`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-221f5458-30ad-42f0-b005-7c3d9fe30e8d, rgb(250, 190, 209))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `left`,
                              noteText: `Random shot`,
                              size: 200,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -20,
                              id: `gE8nXZkiI`,
                              image: `https://framerusercontent.com/images/8WCddJF9lKOfd38rMGa4CTi7egs.png?width=1342&height=2074`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-cd9da077-16e0-46f3-9a80-6bf4c2a79928, rgb(245, 221, 161))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `top`,
                              noteText: `Tiny moments`,
                              size: 250,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -20,
                              id: `PYJKy0vAJ`,
                              image: `https://framerusercontent.com/images/GeBUV4VcRCbGk0YtC0xD3Hts4.png?width=1342&height=1007`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-a40bc7b7-fed8-4930-b9f7-5dc39bc097a2, rgb(164, 229, 248))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `top`,
                              noteText: `Not sure what I’m doing`,
                              size: 400,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -30,
                              id: `AtnFnmmQC`,
                              image: `https://framerusercontent.com/images/htQBJ0hwpd8OwRHUnkgEDJuVDo.png?width=1342&height=895`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-221f5458-30ad-42f0-b005-7c3d9fe30e8d, rgb(250, 190, 209))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `left`,
                              noteText: `bus bus bus`,
                              size: 200,
                            },
                            {
                              fontFamily: `Just me again down here`,
                              fontSize: 32,
                              gap: -20,
                              id: `aXWpYqU6W`,
                              image: `https://framerusercontent.com/images/HTUAceLZFBiFgG7xm5wwwQXQM.png?width=1342&height=1624`,
                              link: ``,
                              linkNewTab: !1,
                              noteBg: `var(--token-3b25897c-a78c-4fb0-9a93-831975a769c1, rgb(161, 223, 197))`,
                              noteColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              notePosition: `right`,
                              noteText: `flower!`,
                              size: 300,
                            },
                          ],
                          layoutId: `x5VBdil1i`,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(m.div, {
                      className: `framer-1ltaivp`,
                      "data-framer-name": `All Content`,
                      layout: N,
                      children: u(E, {
                        children: u(C, {
                          className: `framer-ptg9fe-container`,
                          isAuthoredByUser: !0,
                          nodeId: `G111u7bNn`,
                          scopeId: `OZ8sqXvDF`,
                          children: u(P, {
                            color: `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                            height: `100%`,
                            id: `G111u7bNn`,
                            layoutId: `G111u7bNn`,
                            majorStep: 100,
                            speed: 0.2,
                            style: { width: `100%` },
                            subdivisions: 2,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-S9TC9.framer-1s32ujw, .framer-S9TC9 .framer-1s32ujw { display: block; }`,
        `.framer-S9TC9.framer-sezhfj { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-S9TC9 .framer-cxn5ob-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-S9TC9 .framer-42pi2o-container { flex: none; height: 100vh; position: relative; width: 100%; }`,
        `.framer-S9TC9 .framer-1ltaivp { align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 48px 0px 0px 0px; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-S9TC9 .framer-ptg9fe-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-S9TC9.framer-sezhfj { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-S9TC9.framer-sezhfj { width: 390px; }}`,
      ],
      `framer-S9TC9`
    )),
    (Q.displayName = `Case Study`),
    (Q.defaultProps = { height: 1e3, width: 1200 }),
    x(Q, [{ explicitInter: !0, fonts: [] }, ...V, ...H, ...U], {
      supportsExplicitInterCodegen: !0,
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerOZ8sqXvDF`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"LQxOWmAF7":{"layout":["fixed","auto"]},"ofnvdCgTd":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `1000`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, G as queryParamNames };
//# sourceMappingURL=j_-9UOQg2T5Mg7ylaFcQM2FcQs9cI0r7te9LDoin8wY.C1amZGIn.mjs.map
