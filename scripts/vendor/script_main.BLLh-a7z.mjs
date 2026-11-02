import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  D as r,
  F as i,
  P as a,
  R as o,
  T as s,
  _ as c,
  a as l,
  b as u,
  c as d,
  f,
  g as p,
  k as m,
  m as h,
  n as g,
  o as _,
  r as v,
  s as y,
  t as b,
  u as x,
  v as S,
  w as C,
  x as w,
  z as T,
} from "./react.BDb-TZZO.mjs";
import { E, r as D, t as O } from "./motion.DUnltMVz.mjs";
import {
  $ as k,
  At as A,
  B as j,
  C as M,
  Et as N,
  J as P,
  K as ee,
  M as te,
  O as F,
  Ot as I,
  P as L,
  St as R,
  T as z,
  Tt as ne,
  U as B,
  V,
  Y as re,
  Z as H,
  _t as U,
  a as W,
  at as G,
  c as K,
  dt as q,
  f as ie,
  ft as ae,
  h as oe,
  i as se,
  it as ce,
  k as le,
  mt as ue,
  nt as de,
  o as J,
  p as fe,
  pt as Y,
  q as pe,
  st as me,
  tt as he,
  v as ge,
  w as _e,
  wt as ve,
  x as ye,
  y as be,
} from "./framer.Bi3K3xOo.mjs";
import {
  a as xe,
  c as Se,
  i as Ce,
  l as we,
  o as Te,
  r as Ee,
  s as De,
  u as Oe,
} from "./shared-lib.DAxb9xg1.mjs";
import { d as ke, n as Ae, r as je, t as Me, u as Ne } from "./Loop.DHov720H.mjs";
import { n as Pe, t as Fe } from "./SVGComponent.CcbG4JSa.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./to1tng0Qo.DXKLFRTZ.mjs";
import { c as Be, i as Ve, n as He, r as Ue, s as We, t as Ge } from "./Ql1sfNpaE.BjVtp0Dr.mjs";
import { n as Ke, t as qe } from "./yRyDmqcvG.M-nrb9u_.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./ptQSvPZIk.BLtTlgC6.mjs";
import { n as Qe, t as $e } from "./VtZoRV2tQ.D294Z8Kc.mjs";
function et(e) {
  let { gap: n, zIndex: a, top: o, bottom: s, style: c } = e,
    d = w(null),
    f = w(null),
    [p, m] = S(null),
    [h, g] = S(!1),
    [_, v] = S(!1),
    b = M.current() === M.canvas,
    C = o.visible !== !1,
    T = s.visible !== !1,
    E = C && T ? n : 0,
    D = (C ? o.height : 0) + E + (T ? s.height : 0);
  (r(() => {
    if (b || !f.current) return;
    let e = () => {
      f.current && m(f.current.getBoundingClientRect());
    };
    e();
    let n = new ResizeObserver(e);
    return (
      n.observe(f.current),
      t.addEventListener(`scroll`, e, { passive: !0, capture: !0 }),
      t.addEventListener(`resize`, e),
      () => {
        (n.disconnect(),
          t.removeEventListener(`scroll`, e, !0),
          t.removeEventListener(`resize`, e));
      }
    );
  }, [b, D]),
    u(() => {
      if (!d.current || b || !C) return;
      let e = we.context(() => {
        let e = we.utils.toArray(`[data-char]`);
        e.length &&
          we
            .timeline({ delay: o.startDelay, repeat: -1, repeatDelay: o.loopDelay })
            .to(e, {
              keyframes: { opacity: [1, 0, 1, 0, 1] },
              duration: o.blinkDuration,
              ease: `none`,
              stagger: o.stagger,
            });
      }, d);
      return () => e.revert();
    }, [p === null, C, o.text, o.startDelay, o.loopDelay, o.blinkDuration, o.stagger]),
    u(() => {
      if (!d.current || b) return;
      let e = we.context(() => {
        let e = (e, t) => {
          if (!t.rings) return;
          let n = we.utils.toArray(`[${e}]`);
          n.length &&
            we
              .timeline({ repeat: -1, delay: t.ringStartDelay, repeatDelay: t.ringLoopDelay })
              .fromTo(
                n,
                { scale: 0 },
                { scale: 1, duration: t.ringDuration, ease: t.ringEase, stagger: t.ringStagger }
              );
        };
        (C && e(`data-ring-top`, o), T && e(`data-ring-bottom`, s));
      }, d);
      return () => e.revert();
    }, [
      p === null,
      C,
      T,
      o.rings,
      o.ringDuration,
      o.ringStagger,
      o.ringStartDelay,
      o.ringLoopDelay,
      o.ringEase,
      o.circleSize,
      s.rings,
      s.ringDuration,
      s.ringStagger,
      s.ringStartDelay,
      s.ringLoopDelay,
      s.ringEase,
      s.circleSize,
    ]));
  let O = (e, t) => ({
      position: `relative`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      textDecoration: `none`,
      cursor: `pointer`,
      width: `100%`,
      height: t.height,
      background: e ? t.hoverBg : t.bg,
      color: e ? t.hoverTextColor : t.rings ? t.blendTextColor : t.textColor,
      borderRadius: t.radius,
      boxShadow: e ? t.hoverShadow : t.shadow,
      transition: `background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease`,
      ...t.font,
      whiteSpace: `nowrap`,
      userSelect: `none`,
      overflow: t.rings ? `hidden` : void 0,
      isolation: t.rings ? `isolate` : void 0,
    }),
    k = (e, t) => {
      if (!t.rings) return null;
      let n = [t.ringColor1, t.ringColor2, t.ringColor3, t.circleBg];
      return y(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          zIndex: 0,
          pointerEvents: `none`,
          borderRadius: t.radius,
          overflow: `hidden`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: n.map((n, r) =>
          y(
            `div`,
            {
              [e]: !0,
              style: {
                position: `absolute`,
                flex: `none`,
                width: `${t.circleSize}%`,
                aspectRatio: `1 / 1`,
                borderRadius: `50%`,
                background: n,
                transformOrigin: `center center`,
                transform: `scale(0)`,
                willChange: `transform`,
              },
            },
            r
          )
        ),
      });
    },
    A = (e) => ({
      position: `relative`,
      zIndex: 1,
      mixBlendMode: e.rings ? `difference` : void 0,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }),
    j = x(`div`, {
      ref: d,
      style: {
        ...(b
          ? c
          : {
              position: `fixed`,
              top: p ? p.top : 0,
              left: p ? p.left : 0,
              width: p ? p.width : `auto`,
            }),
        display: `flex`,
        flexDirection: `column`,
        gap: E,
        zIndex: a,
        pointerEvents: `auto`,
      },
      children: [
        C &&
          x(`a`, {
            href: o.link || void 0,
            target: o.newTab ? `_blank` : void 0,
            rel: o.newTab ? `noopener noreferrer` : void 0,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            style: O(h, o),
            children: [
              k(`data-ring-top`, o),
              y(`span`, {
                style: A(o),
                children: Array.from(o.text).map((e, t) =>
                  y(
                    `span`,
                    {
                      "data-char": !0,
                      style: { display: `inline-block`, willChange: `opacity` },
                      children: e === ` ` ? `\xA0` : e,
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        T &&
          x(`a`, {
            href: s.link || void 0,
            target: s.newTab ? `_blank` : void 0,
            rel: s.newTab ? `noopener noreferrer` : void 0,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            style: O(_, s),
            children: [k(`data-ring-bottom`, s), y(`span`, { style: A(s), children: s.text })],
          }),
      ],
    });
  return b
    ? j
    : x(i, {
        children: [y(`div`, { ref: f, style: { ...c, height: D } }), p && l(j, document.body)],
      });
}
var tt,
  nt,
  rt,
  it = e(() => {
    (o(),
      d(),
      s(),
      _(),
      P(),
      Oe(),
      (tt = (e) => !e.rings),
      (nt = {
        rings: { type: J.Boolean, title: `Circles`, defaultValue: !1 },
        blendTextColor: { type: J.Color, title: `Blend Text`, defaultValue: `#FFFFFF`, hidden: tt },
        ringColor1: { type: J.Color, title: `Outer`, defaultValue: `#0443B5`, hidden: tt },
        ringColor2: { type: J.Color, title: `Mid`, defaultValue: `#BD0000`, hidden: tt },
        ringColor3: { type: J.Color, title: `Inner`, defaultValue: `#FBB833`, hidden: tt },
        circleBg: { type: J.Color, title: `Reset Circle`, defaultValue: `#FFFFFF`, hidden: tt },
        circleSize: {
          type: J.Number,
          title: `Circle Size`,
          min: 100,
          max: 400,
          step: 5,
          unit: `%`,
          defaultValue: 150,
          hidden: tt,
        },
        ringDuration: {
          type: J.Number,
          title: `Expand Speed`,
          min: 0.1,
          max: 3,
          step: 0.05,
          unit: `s`,
          defaultValue: 2.95,
          hidden: tt,
        },
        ringStagger: {
          type: J.Number,
          title: `Stagger`,
          min: 0,
          max: 1,
          step: 0.01,
          unit: `s`,
          defaultValue: 0.15,
          hidden: tt,
        },
        ringEase: {
          type: J.Enum,
          title: `Ease`,
          options: [`none`, `power2.out`, `power3.out`, `expo.out`],
          optionTitles: [`Linear`, `Power2`, `Power3`, `Expo`],
          defaultValue: `power3.out`,
          hidden: tt,
        },
        ringStartDelay: {
          type: J.Number,
          title: `Start Delay`,
          min: 0,
          max: 10,
          step: 0.1,
          unit: `s`,
          defaultValue: 0,
          hidden: tt,
        },
        ringLoopDelay: {
          type: J.Number,
          title: `Loop Gap`,
          min: 0,
          max: 10,
          step: 0.1,
          unit: `s`,
          defaultValue: 1,
          hidden: tt,
        },
      }),
      (rt = {
        visible: { type: J.Boolean, title: `Visible`, defaultValue: !0 },
        text: { type: J.String, title: `Text` },
        font: {
          type: J.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `monospace`,
          defaultValue: { fontSize: 13 },
        },
        height: { type: J.Number, title: `Height`, min: 20, max: 120, step: 1, defaultValue: 40 },
        textColor: { type: J.Color, title: `Text` },
        hoverTextColor: { type: J.Color, title: `Hover Text` },
        bg: { type: J.Color, title: `BG` },
        hoverBg: { type: J.Color, title: `Hover BG` },
        shadow: {
          type: J.BoxShadow,
          title: `Shadow`,
          defaultValue: `0px 2px 8px 0px rgba(0,0,0,0.25)`,
        },
        hoverShadow: {
          type: J.BoxShadow,
          title: `Hover Shadow`,
          defaultValue: `0px 4px 16px 0px rgba(0,0,0,0.35)`,
        },
        radius: { type: J.Number, title: `Radius`, min: 0, max: 100, step: 1, defaultValue: 10 },
        link: { type: J.Link, title: `Link` },
        newTab: { type: J.Boolean, title: `New Tab`, defaultValue: !0 },
        ...nt,
      }),
      le(et, {
        gap: { type: J.Number, title: `Gap`, min: 0, max: 60, step: 1, defaultValue: 8 },
        zIndex: {
          type: J.Number,
          title: `Z-Index`,
          min: 0,
          max: 9999999999,
          step: 1,
          defaultValue: 9999999999,
        },
        top: {
          type: J.Object,
          title: `Top Button`,
          controls: {
            ...rt,
            text: { ...rt.text, defaultValue: `Free Template` },
            textColor: { ...rt.textColor, defaultValue: `#FFFFFF` },
            hoverTextColor: { ...rt.hoverTextColor, defaultValue: `#000000` },
            bg: { ...rt.bg, defaultValue: `#000000` },
            hoverBg: { ...rt.hoverBg, defaultValue: `#FFFFFF` },
            startDelay: {
              type: J.Number,
              title: `Start Delay`,
              min: 0,
              max: 10,
              step: 0.1,
              unit: `s`,
              defaultValue: 0,
            },
            loopDelay: {
              type: J.Number,
              title: `Loop Delay`,
              min: 0,
              max: 10,
              step: 0.1,
              unit: `s`,
              defaultValue: 0,
            },
            blinkDuration: {
              type: J.Number,
              title: `Blink Speed`,
              min: 0.1,
              max: 2,
              step: 0.05,
              unit: `s`,
              defaultValue: 0.6,
            },
            stagger: {
              type: J.Number,
              title: `Stagger`,
              min: 0,
              max: 0.3,
              step: 0.01,
              unit: `s`,
              defaultValue: 0.05,
            },
          },
        },
        bottom: {
          type: J.Object,
          title: `Bottom Button`,
          controls: {
            ...rt,
            text: { ...rt.text, defaultValue: `Made in Framer` },
            textColor: { ...rt.textColor, defaultValue: `#000000` },
            hoverTextColor: { ...rt.hoverTextColor, defaultValue: `#FFFFFF` },
            bg: { ...rt.bg, defaultValue: `#FFFFFF` },
            hoverBg: { ...rt.hoverBg, defaultValue: `#000000` },
          },
        },
      }));
  });
function at(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function ot(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
function st(e) {
  e = (Jo(e) && zo.test(e) && document.querySelector(e)) || e;
  var t = e.getAttribute ? e : 0,
    n;
  return t && (e = e.getAttribute(`d`))
    ? ((t._gsPath ||= {}), (n = t._gsPath[e]), n && !n._dirty ? n : (t._gsPath[e] = bt(e)))
    : e
      ? Jo(e)
        ? bt(e)
        : Yo(e[0])
          ? [e]
          : e
      : console.warn(`Expecting a <path> element or an SVG path data string`);
}
function ct(e) {
  for (var t = [], n = 0; n < e.length; n++) t[n] = os(e[n], e[n].slice(0));
  return os(e, t);
}
function lt(e) {
  var t = 0,
    n;
  for (e.reverse(); t < e.length; t += 2) ((n = e[t]), (e[t] = e[t + 1]), (e[t + 1] = n));
  e.reversed = !e.reversed;
}
function ut(e, t) {
  var n = e.tagName.toLowerCase(),
    r = 0.552284749831,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T;
  return n === `path` || !e.getBBox
    ? e
    : ((l = cs(e, `x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points`)),
      (T = us(e, ls[n])),
      n === `rect`
        ? ((s = T.rx),
          (c = T.ry || s),
          (a = T.x),
          (o = T.y),
          (p = T.width - s * 2),
          (m = T.height - c * 2),
          s || c
            ? ((h = a + s * (1 - r)),
              (g = a + s),
              (_ = g + p),
              (v = _ + s * r),
              (y = _ + s),
              (b = o + c * (1 - r)),
              (x = o + c),
              (S = x + m),
              (C = S + c * r),
              (w = S + c),
              (i =
                `M` +
                y +
                `,` +
                x +
                ` V` +
                S +
                ` C` +
                [
                  y,
                  C,
                  v,
                  w,
                  _,
                  w,
                  _ - (_ - g) / 3,
                  w,
                  g + (_ - g) / 3,
                  w,
                  g,
                  w,
                  h,
                  w,
                  a,
                  C,
                  a,
                  S,
                  a,
                  S - (S - x) / 3,
                  a,
                  x + (S - x) / 3,
                  a,
                  x,
                  a,
                  b,
                  h,
                  o,
                  g,
                  o,
                  g + (_ - g) / 3,
                  o,
                  _ - (_ - g) / 3,
                  o,
                  _,
                  o,
                  v,
                  o,
                  y,
                  b,
                  y,
                  x,
                ].join(`,`) +
                `z`))
            : (i = `M` + (a + p) + `,` + o + ` v` + m + ` h` + -p + ` v` + -m + ` h` + p + `z`))
        : n === `circle` || n === `ellipse`
          ? (n === `circle` ? ((s = c = T.r), (d = s * r)) : ((s = T.rx), (c = T.ry), (d = c * r)),
            (a = T.cx),
            (o = T.cy),
            (u = s * r),
            (i =
              `M` +
              (a + s) +
              `,` +
              o +
              ` C` +
              [
                a + s,
                o + d,
                a + u,
                o + c,
                a,
                o + c,
                a - u,
                o + c,
                a - s,
                o + d,
                a - s,
                o,
                a - s,
                o - d,
                a - u,
                o - c,
                a,
                o - c,
                a + u,
                o - c,
                a + s,
                o - d,
                a + s,
                o,
              ].join(`,`) +
              `z`))
          : n === `line`
            ? (i = `M` + T.x1 + `,` + T.y1 + ` L` + T.x2 + `,` + T.y2)
            : (n === `polyline` || n === `polygon`) &&
              ((f = (e.getAttribute(`points`) + ``).match(Lo) || []),
              (a = f.shift()),
              (o = f.shift()),
              (i = `M` + a + `,` + o + ` L` + f.join(`,`)),
              n === `polygon` && (i += `,` + a + `,` + o + `z`)),
      l.setAttribute(`d`, Ct((l._gsRawPath = bt(i)))),
      t && e.parentNode && (e.parentNode.insertBefore(l, e), e.parentNode.removeChild(e)),
      l);
}
function dt(e, t, n) {
  var r = e[t],
    i = e[t + 2],
    a = e[t + 4],
    o;
  return (
    (r += (i - r) * n),
    (i += (a - i) * n),
    (r += (i - r) * n),
    (o = i + (a + (e[t + 6] - a) * n - i) * n - r),
    (r = e[t + 1]),
    (i = e[t + 3]),
    (a = e[t + 5]),
    (r += (i - r) * n),
    (i += (a - i) * n),
    (r += (i - r) * n),
    ts(Ko(i + (a + (e[t + 7] - a) * n - i) * n - r, o) * Vo)
  );
}
function ft(e, t, n) {
  ((n = Xo(n) ? 1 : ns(n) || 0), (t = ns(t) || 0));
  var r = Math.max(0, ~~(Wo(n - t) - 1e-8)),
    i = ct(e);
  if ((t > n && ((t = 1 - t), (n = 1 - n), as(i), (i.totalLength = 0)), t < 0 || n < 0)) {
    var a = Math.abs(~~Math.min(t, n)) + 1;
    ((t += a), (n += a));
  }
  i.totalLength || mt(i);
  var o = n > 1,
    s = gt(i, t, Zo, !0),
    c = gt(i, n, Qo),
    l = c.segment,
    u = s.segment,
    d = c.segIndex,
    f = s.segIndex,
    p = c.i,
    m = s.i,
    h = f === d,
    g = p === m && h,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  if (o || r) {
    for (
      _ = d < f || (h && p < m) || (g && c.t < s.t),
        rs(i, f, m, s.t) &&
          (f++, _ || (d++, g ? ((c.t = (c.t - s.t) / (1 - s.t)), (p = 0)) : h && (p -= m))),
        Math.abs(1 - (n - t)) < 1e-5 ? (d = f - 1) : !c.t && d ? d-- : rs(i, d, p, c.t) && _ && f++,
        s.t === 1 && (f = (f + 1) % i.length),
        x = [],
        S = i.length,
        C = 1 + S * r,
        w = f,
        C += (S - f + d) % S,
        b = 0;
      b < C;
      b++
    )
      ss(x, i[w++ % S]);
    i = x;
  } else if (((y = c.t === 1 ? 6 : ht(l, p, c.t)), t !== n))
    for (
      v = ht(u, m, g ? s.t / c.t : s.t),
        h && (y += v),
        l.splice(p + y + 2),
        (v || m) && u.splice(0, m + v),
        b = i.length;
      b--;
    )
      (b < f || b > d) && i.splice(b, 1);
  else
    ((l.angle = dt(l, p + y, 0)),
      (p += y),
      (s = l[p]),
      (c = l[p + 1]),
      (l.length = l.totalLength = 0),
      (l.totalPoints = i.totalPoints = 8),
      l.push(s, c, s, c, s, c, s, c));
  return ((i.totalLength = 0), i);
}
function pt(e, t, n) {
  ((t ||= 0), e.samples || ((e.samples = []), (e.lookup = [])));
  var r = ~~e.resolution || 12,
    i = 1 / r,
    a = n ? t + n * 6 + 1 : e.length,
    o = e[t],
    s = e[t + 1],
    c = t ? (t / 6) * r : 0,
    l = e.samples,
    u = e.lookup,
    d = (t ? e.minLength : qo) || qo,
    f = l[c + n * r - 1],
    p = t ? l[c - 1] : 0,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A;
  for (l.length = u.length = 0, h = t + 2; h < a; h += 6) {
    if (
      ((g = e[h + 4] - o),
      (_ = e[h + 2] - o),
      (v = e[h] - o),
      (x = e[h + 5] - s),
      (S = e[h + 3] - s),
      (C = e[h + 1] - s),
      (y = b = w = T = 0),
      Wo(g) < 0.01 && Wo(x) < 0.01 && Wo(v) + Wo(C) < 0.01)
    )
      e.length > 8 && (e.splice(h, 6), (h -= 6), (a -= 6));
    else
      for (m = 1; m <= r; m++)
        ((D = i * m),
          (E = 1 - D),
          (y = b - (b = (D * D * g + 3 * E * (D * _ + E * v)) * D)),
          (w = T - (T = (D * D * x + 3 * E * (D * S + E * C)) * D)),
          (k = Go(w * w + y * y)),
          k < d && (d = k),
          (p += k),
          (l[c++] = p));
    ((o += g), (s += x));
  }
  if (f) for (f -= p; c < l.length; c++) l[c] += f;
  if (l.length && d) {
    if (((e.totalLength = A = l[l.length - 1] || 0), (e.minLength = d), A / d < 9999))
      for (k = O = 0, m = 0; m < A; m += d) u[k++] = l[O] < m ? ++O : O;
  } else e.totalLength = l[0] = 0;
  return t ? p - l[t / 2 - 1] : p;
}
function mt(e, t) {
  var n, r, i;
  for (i = n = r = 0; i < e.length; i++)
    ((e[i].resolution = ~~t || 12), (r += e[i].length), (n += pt(e[i])));
  return ((e.totalPoints = r), (e.totalLength = n), e);
}
function ht(e, t, n) {
  if (n <= 0 || n >= 1) return 0;
  var r = e[t],
    i = e[t + 1],
    a = e[t + 2],
    o = e[t + 3],
    s = e[t + 4],
    c = e[t + 5],
    l = e[t + 6],
    u = e[t + 7],
    d = r + (a - r) * n,
    f = a + (s - a) * n,
    p = i + (o - i) * n,
    m = o + (c - o) * n,
    h = d + (f - d) * n,
    g = p + (m - p) * n,
    _ = s + (l - s) * n,
    v = c + (u - c) * n;
  return (
    (f += (_ - f) * n),
    (m += (v - m) * n),
    e.splice(
      t + 2,
      4,
      ts(d),
      ts(p),
      ts(h),
      ts(g),
      ts(h + (f - h) * n),
      ts(g + (m - g) * n),
      ts(f),
      ts(m),
      ts(_),
      ts(v)
    ),
    e.samples && e.samples.splice(((t / 6) * e.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
    6
  );
}
function gt(e, t, n, r) {
  ((n ||= {}), e.totalLength || mt(e), (t < 0 || t > 1) && (t = es(t)));
  var i = 0,
    a = e[0],
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  if (!t) ((f = d = i = 0), (a = e[0]));
  else if (t === 1) ((f = 1), (i = e.length - 1), (a = e[i]), (d = a.length - 8));
  else {
    if (e.length > 1) {
      for (c = e.totalLength * t, u = d = 0; (u += e[d++].totalLength) < c; ) i = d;
      ((a = e[i]), (l = u - a.totalLength), (t = (c - l) / (u - l) || 0));
    }
    ((o = a.samples),
      (s = a.resolution),
      (c = a.totalLength * t),
      (d = a.lookup.length ? a.lookup[~~(c / a.minLength)] || 0 : is(o, c, t)),
      (l = d ? o[d - 1] : 0),
      (u = o[d]),
      u < c && ((l = u), (u = o[++d])),
      (f = (1 / s) * ((c - l) / (u - l) + (d % s))),
      (d = ~~(d / s) * 6),
      r &&
        f === 1 &&
        (d + 6 < a.length ? ((d += 6), (f = 0)) : i + 1 < e.length && ((d = f = 0), (a = e[++i]))));
  }
  return ((n.t = f), (n.i = d), (n.path = e), (n.segment = a), (n.segIndex = i), n);
}
function _t(e, t, n, r) {
  var i = e[0],
    a = r || {},
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (((t < 0 || t > 1) && (t = es(t)), i.lookup || mt(e), e.length > 1)) {
    for (c = e.totalLength * t, u = d = 0; (u += e[d++].totalLength) < c; ) i = e[d];
    ((l = u - i.totalLength), (t = (c - l) / (u - l) || 0));
  }
  return (
    (o = i.samples),
    (s = i.resolution),
    (c = i.totalLength * t),
    (d = i.lookup.length
      ? i.lookup[t < 1 ? ~~(c / i.minLength) : i.lookup.length - 1] || 0
      : is(o, c, t)),
    (l = d ? o[d - 1] : 0),
    (u = o[d]),
    u < c && ((l = u), (u = o[++d])),
    (f = (1 / s) * ((c - l) / (u - l) + (d % s)) || 0),
    (m = 1 - f),
    (d = ~~(d / s) * 6),
    (p = i[d]),
    (a.x = ts(
      (f * f * (i[d + 6] - p) + 3 * m * (f * (i[d + 4] - p) + m * (i[d + 2] - p))) * f + p
    )),
    (a.y = ts(
      (f * f * (i[d + 7] - (p = i[d + 1])) + 3 * m * (f * (i[d + 5] - p) + m * (i[d + 3] - p))) *
        f +
        p
    )),
    n && (a.angle = i.totalLength ? dt(i, d, f >= 1 ? 0.999999999 : f || 1e-9) : i.angle || 0),
    a
  );
}
function vt(e, t, n, r, i, a, o) {
  for (var s = e.length, c, l, u, d, f; --s > -1; )
    for (c = e[s], l = c.length, u = 0; u < l; u += 2)
      ((d = c[u]), (f = c[u + 1]), (c[u] = d * t + f * r + a), (c[u + 1] = d * n + f * i + o));
  return ((e._dirty = 1), e);
}
function yt(e, t, n, r, i, a, o, s, c) {
  if (!(e === s && t === c)) {
    ((n = Wo(n)), (r = Wo(r)));
    var l = (i % 360) * Bo,
      u = Uo(l),
      d = Ho(l),
      f = Math.PI,
      p = f * 2,
      m = (e - s) / 2,
      h = (t - c) / 2,
      g = u * m + d * h,
      _ = -d * m + u * h,
      v = g * g,
      y = _ * _,
      b = v / (n * n) + y / (r * r);
    b > 1 && ((n = Go(b) * n), (r = Go(b) * r));
    var x = n * n,
      S = r * r,
      C = (x * S - x * y - S * v) / (x * y + S * v);
    C < 0 && (C = 0);
    var w = (a === o ? -1 : 1) * Go(C),
      T = w * ((n * _) / r),
      E = w * -((r * g) / n),
      D = (e + s) / 2,
      O = (t + c) / 2,
      k = D + (u * T - d * E),
      A = O + (d * T + u * E),
      j = (g - T) / n,
      M = (_ - E) / r,
      N = (-g - T) / n,
      P = (-_ - E) / r,
      ee = j * j + M * M,
      te = (M < 0 ? -1 : 1) * Math.acos(j / Go(ee)),
      F = (j * P - M * N < 0 ? -1 : 1) * Math.acos((j * N + M * P) / Go(ee * (N * N + P * P)));
    (isNaN(F) && (F = f), !o && F > 0 ? (F -= p) : o && F < 0 && (F += p), (te %= p), (F %= p));
    var I = Math.ceil(Wo(F) / (p / 4)),
      L = [],
      R = F / I,
      z = ((4 / 3) * Ho(R / 2)) / (1 + Uo(R / 2)),
      ne = u * n,
      B = d * n,
      V = d * -r,
      re = u * r,
      H;
    for (H = 0; H < I; H++)
      ((i = te + H * R),
        (g = Uo(i)),
        (_ = Ho(i)),
        (j = Uo((i += R))),
        (M = Ho(i)),
        L.push(g - z * _, _ + z * g, j + z * M, M - z * j, j, M));
    for (H = 0; H < L.length; H += 2)
      ((g = L[H]), (_ = L[H + 1]), (L[H] = g * ne + _ * V + k), (L[H + 1] = g * B + _ * re + A));
    return ((L[H - 2] = s), (L[H - 1] = c), L);
  }
}
function bt(e) {
  var t =
      (e + ``)
        .replace(Ro, function (e) {
          var t = +e;
          return t < 1e-4 && t > -1e-4 ? 0 : t;
        })
        .match(Io) || [],
    n = [],
    r = 0,
    i = 0,
    a = 2 / 3,
    o = t.length,
    s = 0,
    c = `ERROR: malformed path: ` + e,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w = function (e, t, n, r) {
      ((v = (n - e) / 3), (y = (r - t) / 3), h.push(e + v, t + y, n - v, r - y, n, r));
    };
  if (!e || !isNaN(t[0]) || isNaN(t[1])) return (console.log(c), n);
  for (l = 0; l < o; l++)
    if (
      ((x = p),
      isNaN(t[l]) ? ((p = t[l].toUpperCase()), (m = p !== t[l])) : l--,
      (d = +t[l + 1]),
      (f = +t[l + 2]),
      m && ((d += r), (f += i)),
      l || ((g = d), (_ = f)),
      p === `M`)
    )
      (h && (h.length < 8 ? --n.length : (s += h.length)),
        (r = g = d),
        (i = _ = f),
        (h = [d, f]),
        n.push(h),
        (l += 2),
        (p = `L`));
    else if (p === `C`)
      ((h ||= [0, 0]),
        m || (r = i = 0),
        h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, (r += t[l + 5] * 1), (i += t[l + 6] * 1)),
        (l += 6));
    else if (p === `S`)
      ((v = r),
        (y = i),
        (x === `C` || x === `S`) && ((v += r - h[h.length - 4]), (y += i - h[h.length - 3])),
        m || (r = i = 0),
        h.push(v, y, d, f, (r += t[l + 3] * 1), (i += t[l + 4] * 1)),
        (l += 4));
    else if (p === `Q`)
      ((v = r + (d - r) * a),
        (y = i + (f - i) * a),
        m || (r = i = 0),
        (r += t[l + 3] * 1),
        (i += t[l + 4] * 1),
        h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i),
        (l += 4));
    else if (p === `T`)
      ((v = r - h[h.length - 4]),
        (y = i - h[h.length - 3]),
        h.push(
          r + v,
          i + y,
          d + (r + v * 1.5 - d) * a,
          f + (i + y * 1.5 - f) * a,
          (r = d),
          (i = f)
        ),
        (l += 2));
    else if (p === `H`) (w(r, i, (r = d), i), (l += 1));
    else if (p === `V`) (w(r, i, r, (i = d + (m ? i - r : 0))), (l += 1));
    else if (p === `L` || p === `Z`)
      (p === `Z` && ((d = g), (f = _), (h.closed = !0)),
        (p === `L` || Wo(r - d) > 0.5 || Wo(i - f) > 0.5) && (w(r, i, d, f), p === `L` && (l += 2)),
        (r = d),
        (i = f));
    else if (p === `A`) {
      if (
        ((S = t[l + 4]),
        (C = t[l + 5]),
        (v = t[l + 6]),
        (y = t[l + 7]),
        (u = 7),
        S.length > 1 &&
          (S.length < 3 ? ((y = v), (v = C), u--) : ((y = C), (v = S.substr(2)), (u -= 2)),
          (C = S.charAt(1)),
          (S = S.charAt(0))),
        (b = yt(
          r,
          i,
          +t[l + 1],
          +t[l + 2],
          +t[l + 3],
          +S,
          +C,
          (m ? r : 0) + v * 1,
          (m ? i : 0) + y * 1
        )),
        (l += u),
        b)
      )
        for (u = 0; u < b.length; u++) h.push(b[u]);
      ((r = h[h.length - 2]), (i = h[h.length - 1]));
    } else console.log(c);
  return (
    (l = h.length),
    l < 6 ? (n.pop(), (l = 0)) : h[0] === h[l - 2] && h[1] === h[l - 1] && (h.closed = !0),
    (n.totalPoints = s + l),
    n
  );
}
function xt(e, t) {
  t === void 0 && (t = 1);
  for (var n = e[0], r = 0, i = [n, r], a = 2; a < e.length; a += 2)
    i.push(n, r, e[a], (r = ((e[a] - n) * t) / 2), (n = e[a]), -r);
  return i;
}
function St(e, t) {
  Wo(e[0] - e[2]) < 1e-4 && Wo(e[1] - e[3]) < 1e-4 && (e = e.slice(2));
  var n = e.length - 2,
    r = +e[0],
    i = +e[1],
    a = +e[2],
    o = +e[3],
    s = [r, i, r, i],
    c = a - r,
    l = o - i,
    u = Math.abs(e[n] - r) < 0.001 && Math.abs(e[n + 1] - i) < 0.001,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T;
  for (
    u &&
      (e.push(a, o), (a = r), (o = i), (r = e[n - 2]), (i = e[n - 1]), e.unshift(r, i), (n += 4)),
      t = t || t === 0 ? +t : 1,
      p = 2;
    p < n;
    p += 2
  )
    ((d = r),
      (f = i),
      (r = a),
      (i = o),
      (a = +e[p + 2]),
      (o = +e[p + 3]),
      !(r === a && i === o) &&
        ((m = c),
        (h = l),
        (c = a - r),
        (l = o - i),
        (g = Go(m * m + h * h)),
        (_ = Go(c * c + l * l)),
        (v = Go((c / _ + m / g) ** 2 + (l / _ + h / g) ** 2)),
        (y = ((g + _) * t * 0.25) / v),
        (b = r - (r - d) * (g ? y / g : 0)),
        (x = r + (a - r) * (_ ? y / _ : 0)),
        (S = r - (b + (((x - b) * ((g * 3) / (g + _) + 0.5)) / 4 || 0))),
        (C = i - (i - f) * (g ? y / g : 0)),
        (w = i + (o - i) * (_ ? y / _ : 0)),
        (T = i - (C + (((w - C) * ((g * 3) / (g + _) + 0.5)) / 4 || 0))),
        (r !== d || i !== f) && s.push(ts(b + S), ts(C + T), ts(r), ts(i), ts(x + S), ts(w + T))));
  return (
    r !== a || i !== o || s.length < 4 ? s.push(ts(a), ts(o), ts(a), ts(o)) : (s.length -= 2),
    s.length === 2 ? s.push(r, i, r, i, r, i) : u && (s.splice(0, 6), (s.length -= 6)),
    s
  );
}
function Ct(e) {
  Yo(e[0]) && (e = [e]);
  var t = ``,
    n = e.length,
    r,
    i,
    a,
    o;
  for (i = 0; i < n; i++) {
    for (o = e[i], t += `M` + ts(o[0]) + `,` + ts(o[1]) + ` C`, r = o.length, a = 2; a < r; a++)
      t +=
        ts(o[a++]) +
        `,` +
        ts(o[a++]) +
        ` ` +
        ts(o[a++]) +
        `,` +
        ts(o[a++]) +
        ` ` +
        ts(o[a++]) +
        `,` +
        ts(o[a]) +
        ` `;
    o.closed && (t += `z`);
  }
  return t;
}
function wt(e, t, n, r) {
  if (!e || !e.parentNode || (ws || Fs(e)).documentElement === e) return new Js();
  var i = Is(e),
    a = Vs(e) ? Ls : Rs,
    o = Ks(e, n),
    s = a[0].getBoundingClientRect(),
    c = a[1].getBoundingClientRect(),
    l = a[2].getBoundingClientRect(),
    u = o.parentNode,
    d = !r && Hs(e),
    f = new Js(
      (c.left - s.left) / 100,
      (c.top - s.top) / 100,
      (l.left - s.left) / 100,
      (l.top - s.top) / 100,
      s.left + (d ? 0 : Bs()),
      s.top + (d ? 0 : zs())
    );
  if ((u.removeChild(o), i))
    for (s = i.length; s--; ) ((c = i[s]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c));
  return t ? f.inverse() : f;
}
function Tt(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function Et(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
function Dt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function Ot(e, t, n) {
  return (t && Dt(e.prototype, t), n && Dt(e, n), e);
}
function kt(e) {
  var t = e.nodeType,
    n = ``;
  if (t === 1 || t === 9 || t === 11) {
    if (typeof e.textContent == `string`) return e.textContent;
    for (e = e.firstChild; e; e = e.nextSibling) n += kt(e);
  } else if (t === 3 || t === 4) return e.nodeValue;
  return n;
}
function At(e, t, n, r) {
  for (var i = e.firstChild, a = [], o; i; )
    (i.nodeType === 3
      ? ((o = (i.nodeValue + ``).replace(/^\n+/g, ``)),
        r || (o = o.replace(/\s+/g, ` `)),
        a.push.apply(a, jt(o, t, n, r)))
      : (i.nodeName + ``).toLowerCase() === `br`
        ? (a[a.length - 1] += `<br>`)
        : a.push(i.outerHTML),
      (i = i.nextSibling));
  for (o = a.length; o--; ) a[o] === `&` && a.splice(o, 1, `&amp;`);
  return a;
}
function jt(e, t, n, r) {
  if (((e += ``), n && (e = e.trim ? e.trim() : e.replace(bg, ``)), t && t !== ``))
    return e.replace(/>/g, `&gt;`).replace(/</g, `&lt;`).split(t);
  for (var i = [], a = e.length, o = 0, s, c; o < a; o++)
    ((c = e.charAt(o)),
      ((c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319) ||
        (e.charCodeAt(o + 1) >= 65024 && e.charCodeAt(o + 1) <= 65039)) &&
        ((s = ((e.substr(o, 12).split(xg) || [])[1] || ``).length || 2),
        (c = e.substr(o, s)),
        (i.emoji = 1),
        (o += s - 1)),
      i.push(
        c === `>`
          ? `&gt;`
          : c === `<`
            ? `&lt;`
            : r && c === ` ` && (e.charAt(o - 1) === ` ` || e.charAt(o + 1) === ` `)
              ? `&nbsp;`
              : c
      ));
  return i;
}
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  X,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Z,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am,
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Q,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  $,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg = e(() => {
    for (hu in (o(),
    (Mt = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } }),
    (Nt = { duration: 0.5, overwrite: !1, delay: 0 }),
    (Lt = 1e8),
    (Rt = 1 / Lt),
    (zt = Math.PI * 2),
    (Bt = zt / 4),
    (Vt = 0),
    (Ht = Math.sqrt),
    (Ut = Math.cos),
    (Wt = Math.sin),
    (Gt = function (e) {
      return typeof e == `string`;
    }),
    (Kt = function (e) {
      return typeof e == `function`;
    }),
    (qt = function (e) {
      return typeof e == `number`;
    }),
    (Jt = function (e) {
      return typeof e > `u`;
    }),
    (Yt = function (e) {
      return typeof e == `object`;
    }),
    (Xt = function (e) {
      return e !== !1;
    }),
    (Zt = function () {
      return typeof t < `u`;
    }),
    (Qt = function (e) {
      return Kt(e) || Gt(e);
    }),
    ($t = (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {}),
    (en = Array.isArray),
    (tn = /(?:-?\.?\d|\.)+/gi),
    (nn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g),
    (rn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g),
    (an = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi),
    (on = /[+-]=-?[.\d]+/),
    (sn = /[^,'"\[\]\s]+/gi),
    (cn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i),
    (pn = {}),
    (mn = {}),
    (gn = function (e) {
      return (mn = qn(e, pn)) && pa;
    }),
    (_n = function (e, t) {
      return console.warn(
        `Invalid property`,
        e,
        `set to`,
        t,
        `Missing plugin? gsap.registerPlugin()`
      );
    }),
    (vn = function (e, t) {
      return !t && console.warn(e);
    }),
    (yn = function (e, t) {
      return (e && (pn[e] = t) && mn && (mn[e] = t)) || pn;
    }),
    (bn = function () {
      return 0;
    }),
    (xn = { suppressEvents: !0, isStart: !0, kill: !1 }),
    (Sn = { suppressEvents: !0, kill: !1 }),
    (Cn = { suppressEvents: !0 }),
    (wn = {}),
    (Tn = []),
    (En = {}),
    (On = {}),
    (kn = {}),
    (An = 30),
    (jn = []),
    (Mn = ``),
    (Nn = function (e) {
      var t = e[0],
        n,
        r;
      if ((Yt(t) || Kt(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
        for (r = jn.length; r-- && !jn[r].targetTest(t); );
        n = jn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Ci(e[r], n)))) || e.splice(r, 1);
      return e;
    }),
    (Pn = function (e) {
      return e._gsap || Nn(Ar(e))[0]._gsap;
    }),
    (Fn = function (e, t, n) {
      return (n = e[t]) && Kt(n) ? e[t]() : (Jt(n) && e.getAttribute && e.getAttribute(t)) || n;
    }),
    (In = function (e, t) {
      return (e = e.split(`,`)).forEach(t) || e;
    }),
    (Ln = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    }),
    (Rn = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    }),
    (zn = function (e, t) {
      var n = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
      );
    }),
    (Bn = function (e, t) {
      for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
      return r < n;
    }),
    (Vn = function () {
      var e = Tn.length,
        t = Tn.slice(0),
        n,
        r;
      for (En = {}, Tn.length = 0, n = 0; n < e; n++)
        ((r = t[n]), r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
    }),
    (Hn = function (e, t, n, r) {
      (Tn.length && !Ft && Vn(),
        e.render(t, n, r || (Ft && t < 0 && (e._initted || e._startAt))),
        Tn.length && !Ft && Vn());
    }),
    (Un = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + ``).match(sn).length < 2 ? t : Gt(e) ? e.trim() : e;
    }),
    (Wn = function (e) {
      return e;
    }),
    (Gn = function (e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e;
    }),
    (Kn = function (e) {
      return function (t, n) {
        for (var r in n) r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
      };
    }),
    (qn = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }),
    (Jn = function e(t, n) {
      for (var r in n)
        r !== `__proto__` &&
          r !== `constructor` &&
          r !== `prototype` &&
          (t[r] = Yt(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t;
    }),
    (Yn = function (e, t) {
      var n = {},
        r;
      for (r in e) r in t || (n[r] = e[r]);
      return n;
    }),
    (Xn = function (e) {
      var t = e.parent || ln,
        n = e.keyframes ? Kn(en(e.keyframes)) : Gn;
      if (Xt(e.inherit)) for (; t; ) (n(e, t.vars.defaults), (t = t.parent || t._dp));
      return e;
    }),
    (Zn = function (e, t) {
      for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
      return n < 0;
    }),
    (Qn = function (e, t, n, r, i) {
      (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
      var a = e[r],
        o;
      if (i) for (o = t[i]; a && a[i] > o; ) a = a._prev;
      return (
        a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    }),
    ($n = function (e, t, n, r) {
      (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
      var i = t._prev,
        a = t._next;
      (i ? (i._next = a) : e[n] === t && (e[n] = a),
        a ? (a._prev = i) : e[r] === t && (e[r] = i),
        (t._next = t._prev = t.parent = null));
    }),
    (er = function (e, t) {
      (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
        (e._act = 0));
    }),
    (tr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var n = e; n; ) ((n._dirty = 1), (n = n.parent));
      return e;
    }),
    (nr = function (e) {
      for (var t = e.parent; t && t.parent; ) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
      return e;
    }),
    (rr = function (e, t, n, r) {
      return (
        e._startAt &&
        (Ft
          ? e._startAt.revert(Sn)
          : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
      );
    }),
    (ir = function e(t) {
      return !t || (t._ts && e(t.parent));
    }),
    (ar = function (e) {
      return e._repeat ? or(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    }),
    (or = function (e, t) {
      var n = Math.floor((e /= t));
      return e && n === e ? n - 1 : n;
    }),
    (sr = function (e, t) {
      return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
    }),
    (cr = function (e) {
      return (e._end = Rn(e._start + (e._tDur / Math.abs(e._ts || e._rts || Rt) || 0)));
    }),
    (lr = function (e, t) {
      var n = e._dp;
      return (
        n &&
          n.smoothChildTiming &&
          e._ts &&
          ((e._start = Rn(
            n._time -
              (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          cr(e),
          n._dirty || tr(n, e)),
        e
      );
    }),
    (ur = function (e, t) {
      var n;
      if (
        ((t._time || (!t._dur && t._initted) || (t._start < e._time && (t._dur || !t.add))) &&
          ((n = sr(e.rawTime(), t)),
          (!t._dur || wr(0, t.totalDuration(), n) - t._tTime > Rt) && t.render(n, !0)),
        tr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (n = e; n._dp; ) (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
        e._zTime = -Rt;
      }
    }),
    (dr = function (e, t, n, r) {
      return (
        t.parent && er(t),
        (t._start = Rn((qt(n) ? n : n || e !== ln ? xr(e, n, t) : e._time) + t._delay)),
        (t._end = Rn(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
        Qn(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
        hr(t) || (e._recent = t),
        r || ur(e, t),
        e._ts < 0 && lr(e, e._tTime),
        e
      );
    }),
    (fr = function (e, t) {
      return (pn.ScrollTrigger || _n(`scrollTrigger`, t)) && pn.ScrollTrigger.create(t, e);
    }),
    (pr = function (e, t, n, r, i) {
      if ((Mi(e, t, i), !e._initted)) return 1;
      if (
        !n &&
        e._pt &&
        !Ft &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Dn !== ci.frame
      )
        return (Tn.push(e), (e._lazy = [i, r]), 1);
    }),
    (mr = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
    }),
    (hr = function (e) {
      var t = e.data;
      return t === `isFromStart` || t === `isStart`;
    }),
    (gr = function (e, t, n, r) {
      var i = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && mr(e) && !(!e._initted && hr(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !hr(e))))
            ? 0
            : 1,
        o = e._rDelay,
        s = 0,
        c,
        l,
        u;
      if (
        (o &&
          e._repeat &&
          ((s = wr(0, e._tDur, t)),
          (l = or(s, o)),
          e._yoyo && l & 1 && (a = 1 - a),
          l !== or(e._tTime, o) &&
            ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== i || Ft || r || e._zTime === Rt || (!t && e._zTime))
      ) {
        if (!e._initted && pr(e, t, r, n, s)) return;
        for (
          u = e._zTime,
            e._zTime = t || (n ? Rt : 0),
            n ||= t && !u,
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = s,
            c = e._pt;
          c;
        )
          (c.r(a, c.d), (c = c._next));
        (t < 0 && rr(e, t, n, !0),
          e._onUpdate && !n && qr(e, `onUpdate`),
          s && e._repeat && !n && e.parent && qr(e, `onRepeat`),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && er(e, 1),
            !n &&
              !Ft &&
              (qr(e, a ? `onComplete` : `onReverseComplete`, !0), e._prom && e._prom())));
      } else e._zTime ||= t;
    }),
    (_r = function (e, t, n) {
      var r;
      if (n > t)
        for (r = e._first; r && r._start <= n; ) {
          if (r.data === `isPause` && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= n; ) {
          if (r.data === `isPause` && r._start < t) return r;
          r = r._prev;
        }
    }),
    (vr = function (e, t, n, r) {
      var i = e._repeat,
        a = Rn(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = i ? (i < 0 ? 1e10 : Rn(a * (i + 1) + e._rDelay * i)) : a),
        o > 0 && !r && lr(e, (e._tTime = e._tDur * o)),
        e.parent && cr(e),
        n || tr(e.parent, e),
        e
      );
    }),
    (yr = function (e) {
      return e instanceof Ti ? tr(e) : vr(e, e._dur);
    }),
    (br = { _start: 0, endTime: bn, totalDuration: bn }),
    (xr = function e(t, n, r) {
      var i = t.labels,
        a = t._recent || br,
        o = t.duration() >= Lt ? a.endTime(!1) : t._dur,
        s,
        c,
        l;
      return Gt(n) && (isNaN(n) || n in i)
        ? ((c = n.charAt(0)),
          (l = n.substr(-1) === `%`),
          (s = n.indexOf(`=`)),
          c === `<` || c === `>`
            ? (s >= 0 && (n = n.replace(/=/, ``)),
              (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
            : s < 0
              ? (n in i || (i[n] = o), i[n])
              : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
                l && r && (c = (c / 100) * (en(r) ? r[0] : r).totalDuration()),
                s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
        : n == null
          ? o
          : +n;
    }),
    (Sr = function (e, t, n) {
      var r = qt(t[1]),
        i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[i],
        o,
        s;
      if ((r && (a.duration = t[1]), (a.parent = n), e)) {
        for (o = a, s = n; s && !(`immediateRender` in o); )
          ((o = s.vars.defaults || {}), (s = Xt(s.vars.inherit) && s.parent));
        ((a.immediateRender = Xt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
      }
      return new zi(t[0], a, t[i + 1]);
    }),
    (Cr = function (e, t) {
      return e || e === 0 ? t(e) : t;
    }),
    (wr = function (e, t, n) {
      return n < e ? e : n > t ? t : n;
    }),
    (Tr = function (e, t) {
      return !Gt(e) || !(t = cn.exec(e)) ? `` : t[1];
    }),
    (Er = function (e, t, n) {
      return Cr(n, function (n) {
        return wr(e, t, n);
      });
    }),
    (Dr = [].slice),
    (Or = function (e, t) {
      return (
        e &&
        Yt(e) &&
        `length` in e &&
        ((!t && !e.length) || (e.length - 1 in e && Yt(e[0]))) &&
        !e.nodeType &&
        e !== un
      );
    }),
    (kr = function (e, t, n) {
      return (
        n === void 0 && (n = []),
        e.forEach(function (e) {
          var r;
          return (Gt(e) && !t) || Or(e, 1) ? (r = n).push.apply(r, Ar(e)) : n.push(e);
        }) || n
      );
    }),
    (Ar = function (e, t, n) {
      return It && !t && It.selector
        ? It.selector(e)
        : Gt(e) && !n && (dn || !li())
          ? Dr.call((t || fn).querySelectorAll(e), 0)
          : en(e)
            ? kr(e, n)
            : Or(e)
              ? Dr.call(e, 0)
              : e
                ? [e]
                : [];
    }),
    (jr = function (e) {
      return (
        (e = Ar(e)[0] || vn(`Invalid scope`) || {}),
        function (t) {
          var n = e.current || e.nativeElement || e;
          return Ar(
            t,
            n.querySelectorAll ? n : n === e ? vn(`Invalid scope`) || fn.createElement(`div`) : e
          );
        }
      );
    }),
    (Mr = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    }),
    (Nr = function (e) {
      if (Kt(e)) return e;
      var t = Yt(e) ? e : { each: e },
        n = vi(t.ease),
        r = t.from || 0,
        i = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        s = isNaN(r) || o,
        c = t.axis,
        l = r,
        u = r;
      return (
        Gt(r)
          ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && s && ((l = r[0]), (u = r[1])),
        function (e, o, d) {
          var f = (d || t).length,
            p = a[f],
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x,
            S;
          if (!p) {
            if (((S = t.grid === `auto` ? 0 : (t.grid || [1, Lt])[1]), !S)) {
              for (b = -Lt; b < (b = d[S++].getBoundingClientRect().left) && S < f; );
              S < f && S--;
            }
            for (
              p = a[f] = [],
                m = s ? Math.min(S, f) * l - 0.5 : r % S,
                h = S === Lt ? 0 : s ? (f * u) / S - 0.5 : (r / S) | 0,
                b = 0,
                x = Lt,
                y = 0;
              y < f;
              y++
            )
              ((g = (y % S) - m),
                (_ = h - ((y / S) | 0)),
                (p[y] = v = c ? Math.abs(c === `y` ? _ : g) : Ht(g * g + _ * _)),
                v > b && (b = v),
                v < x && (x = v));
            (r === `random` && Mr(p),
              (p.max = b - x),
              (p.min = x),
              (p.v = f =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (S > f ? f - 1 : c ? (c === `y` ? f / S : S) : Math.max(S, f / S)) ||
                  0) * (r === `edges` ? -1 : 1)),
              (p.b = f < 0 ? i - f : i),
              (p.u = Tr(t.amount || t.each) || 0),
              (n = n && f < 0 ? gi(n) : n));
          }
          return ((f = (p[e] - p.min) / p.max || 0), Rn(p.b + (n ? n(f) : f) * p.v) + p.u);
        }
      );
    }),
    (Pr = function (e) {
      var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
      return function (n) {
        var r = Rn(Math.round(parseFloat(n) / e) * e * t);
        return (r - (r % 1)) / t + (qt(n) ? 0 : Tr(n));
      };
    }),
    (Fr = function (e, t) {
      var n = en(e),
        r,
        i;
      return (
        !n &&
          Yt(e) &&
          ((r = n = e.radius || Lt),
          e.values ? ((e = Ar(e.values)), (i = !qt(e[0])) && (r *= r)) : (e = Pr(e.increment))),
        Cr(
          t,
          n
            ? Kt(e)
              ? function (t) {
                  return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
                }
              : function (t) {
                  for (
                    var n = parseFloat(i ? t.x : t),
                      a = parseFloat(i ? t.y : 0),
                      o = Lt,
                      s = 0,
                      c = e.length,
                      l,
                      u;
                    c--;
                  )
                    (i
                      ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                      : (l = Math.abs(e[c] - n)),
                      l < o && ((o = l), (s = c)));
                  return ((s = !r || o <= r ? e[s] : t), i || s === t || qt(t) ? s : s + Tr(t));
                }
            : Pr(e)
        )
      );
    }),
    (Ir = function (e, t, n, r) {
      return Cr(en(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
        return en(e)
          ? e[~~(Math.random() * e.length)]
          : (n ||= 1e-5) &&
              (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
              Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * r) /
                r;
      });
    }),
    (Lr = function () {
      var e = [...arguments];
      return function (t) {
        return e.reduce(function (e, t) {
          return t(e);
        }, t);
      };
    }),
    (Rr = function (e, t) {
      return function (n) {
        return e(parseFloat(n)) + (t || Tr(n));
      };
    }),
    (zr = function (e, t, n) {
      return Wr(e, t, 0, 1, n);
    }),
    (Br = function (e, t, n) {
      return Cr(n, function (n) {
        return e[~~t(n)];
      });
    }),
    (Vr = function e(t, n, r) {
      var i = n - t;
      return en(t)
        ? Br(t, e(0, t.length), n)
        : Cr(r, function (e) {
            return ((i + ((e - t) % i)) % i) + t;
          });
    }),
    (Hr = function e(t, n, r) {
      var i = n - t,
        a = i * 2;
      return en(t)
        ? Br(t, e(0, t.length - 1), n)
        : Cr(r, function (e) {
            return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
          });
    }),
    (Ur = function (e) {
      for (var t = 0, n = ``, r, i, a, o; ~(r = e.indexOf(`random(`, t)); )
        ((a = e.indexOf(`)`, r)),
          (o = e.charAt(r + 7) === `[`),
          (i = e.substr(r + 7, a - r - 7).match(o ? sn : tn)),
          (n += e.substr(t, r - t) + Ir(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5)),
          (t = a + 1));
      return n + e.substr(t, e.length - t);
    }),
    (Wr = function (e, t, n, r, i) {
      var a = t - e,
        o = r - n;
      return Cr(i, function (t) {
        return n + (((t - e) / a) * o || 0);
      });
    }),
    (Gr = function e(t, n, r, i) {
      var a = isNaN(t + n)
        ? 0
        : function (e) {
            return (1 - e) * t + e * n;
          };
      if (!a) {
        var o = Gt(t),
          s = {},
          c,
          l,
          u,
          d,
          f;
        if ((r === !0 && (i = 1) && (r = null), o)) ((t = { p: t }), (n = { p: n }));
        else if (en(t) && !en(n)) {
          for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
          (d--,
            (a = function (e) {
              e *= d;
              var t = Math.min(f, ~~e);
              return u[t](e - t);
            }),
            (r = n));
        } else i || (t = qn(en(t) ? [] : {}, t));
        if (!u) {
          for (c in n) Di.call(s, t, c, `get`, n[c]);
          a = function (e) {
            return Ji(e, s) || (o ? t.p : t);
          };
        }
      }
      return Cr(r, a);
    }),
    (Kr = function (e, t, n) {
      var r = e.labels,
        i = Lt,
        a,
        o,
        s;
      for (a in r)
        ((o = r[a] - t), o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
      return s;
    }),
    (qr = function (e, t, n) {
      var r = e.vars,
        i = r[t],
        a = It,
        o = e._ctx,
        s,
        c,
        l;
      if (i)
        return (
          (s = r[t + `Params`]),
          (c = r.callbackScope || e),
          n && Tn.length && Vn(),
          o && (It = o),
          (l = s ? i.apply(c, s) : i.call(c)),
          (It = a),
          l
        );
    }),
    (Jr = function (e) {
      return (
        er(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ft),
        e.progress() < 1 && qr(e, `onInterrupt`),
        e
      );
    }),
    (Xr = []),
    (Zr = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Zt() || e.headless)) {
          var t = e.name,
            n = Kt(e),
            r =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            i = { init: bn, render: Ji, add: Di, kill: Xi, modifier: Yi, rawVars: 0 },
            a = { targetTest: 0, get: 0, getSetter: Wi, aliases: {}, register: 0 };
          if ((li(), e !== r)) {
            if (On[t]) return;
            (Gn(r, Gn(Yn(e, i), a)),
              qn(r.prototype, qn(i, Yn(e, a))),
              (On[(r.prop = t)] = r),
              e.targetTest && (jn.push(r), (wn[t] = 1)),
              (t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`));
          }
          (yn(t, r), e.register && e.register(pa, r, $i));
        } else Xr.push(e);
    }),
    (Qr = 255),
    ($r = {
      aqua: [0, Qr, Qr],
      lime: [0, Qr, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Qr],
      navy: [0, 0, 128],
      white: [Qr, Qr, Qr],
      olive: [128, 128, 0],
      yellow: [Qr, Qr, 0],
      orange: [Qr, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Qr, 0, 0],
      pink: [Qr, 192, 203],
      cyan: [0, Qr, Qr],
      transparent: [Qr, Qr, Qr, 0],
    }),
    (ei = function (e, t, n) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (n - t) * e * 6
          : e < 0.5
            ? n
            : e * 3 < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) *
          Qr +
          0.5) |
          0
      );
    }),
    (ti = function (e, t, n) {
      var r = e ? (qt(e) ? [e >> 16, (e >> 8) & Qr, e & Qr] : 0) : $r.black,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      if (!r) {
        if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), $r[e])) r = $r[e];
        else if (e.charAt(0) === `#`) {
          if (
            (e.length < 6 &&
              ((i = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                `#` + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & Qr, r & Qr, parseInt(e.substr(7), 16) / 255]
            );
          ((e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & Qr, e & Qr]));
        } else if (e.substr(0, 3) === `hsl`) {
          if (((r = p = e.match(tn)), !t))
            ((s = (r[0] % 360) / 360),
              (c = r[1] / 100),
              (l = r[2] / 100),
              (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
              (i = l * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ei(s + 1 / 3, i, a)),
              (r[1] = ei(s, i, a)),
              (r[2] = ei(s - 1 / 3, i, a)));
          else if (~e.indexOf(`=`)) return ((r = e.match(nn)), n && r.length < 4 && (r[3] = 1), r);
        } else r = e.match(tn) || $r.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !p &&
          ((i = r[0] / Qr),
          (a = r[1] / Qr),
          (o = r[2] / Qr),
          (u = Math.max(i, a, o)),
          (d = Math.min(i, a, o)),
          (l = (u + d) / 2),
          u === d
            ? (s = c = 0)
            : ((f = u - d),
              (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
              (s =
                u === i
                  ? (a - o) / f + (a < o ? 6 : 0)
                  : u === a
                    ? (o - i) / f + 2
                    : (i - a) / f + 4),
              (s *= 60)),
          (r[0] = ~~(s + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(l * 100 + 0.5))),
        n && r.length < 4 && (r[3] = 1),
        r
      );
    }),
    (ni = function (e) {
      var t = [],
        n = [],
        r = -1;
      return (
        e.split(ii).forEach(function (e) {
          var i = e.match(rn) || [];
          (t.push.apply(t, i), n.push((r += i.length + 1)));
        }),
        (t.c = n),
        t
      );
    }),
    (ri = function (e, t, n) {
      var r = ``,
        i = (e + r).match(ii),
        a = t ? `hsla(` : `rgba(`,
        o = 0,
        s,
        c,
        l,
        u;
      if (!i) return e;
      if (
        ((i = i.map(function (e) {
          return (
            (e = ti(e, t, 1)) &&
            a + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
          );
        })),
        n && ((l = ni(e)), (s = n.c), s.join(r) !== l.c.join(r)))
      )
        for (c = e.replace(ii, `1`).split(rn), u = c.length - 1; o < u; o++)
          r +=
            c[o] +
            (~s.indexOf(o)
              ? i.shift() || a + `0,0,0,0)`
              : (l.length ? l : i.length ? i : n).shift());
      if (!c) for (c = e.split(ii), u = c.length - 1; o < u; o++) r += c[o] + i[o];
      return r + c[u];
    }),
    (ii = (function () {
      var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
        t;
      for (t in $r) e += `|` + t + `\\b`;
      return RegExp(e + `)`, `gi`);
    })()),
    (ai = /hsl[a]?\(/),
    (oi = function (e) {
      var t = e.join(` `),
        n;
      if (((ii.lastIndex = 0), ii.test(t)))
        return ((n = ai.test(t)), (e[1] = ri(e[1], n)), (e[0] = ri(e[0], n, ni(e[1]))), !0);
    }),
    (ci = (function () {
      var e = Date.now,
        n = 500,
        r = 33,
        i = e(),
        a = i,
        o = 1e3 / 240,
        s = o,
        c = [],
        l,
        u,
        d,
        f,
        p,
        m,
        h = function t(d) {
          var h = e() - a,
            g = d === !0,
            _,
            v,
            y,
            b;
          if (
            ((h > n || h < 0) && (i += h - r),
            (a += h),
            (y = a - i),
            (_ = y - s),
            (_ > 0 || g) &&
              ((b = ++f.frame),
              (p = y - f.time * 1e3),
              (f.time = y /= 1e3),
              (s += _ + (_ >= o ? 4 : o - _)),
              (v = 1)),
            g || (l = u(t)),
            v)
          )
            for (m = 0; m < c.length; m++) c[m](y, p, b, d);
        };
      return (
        (f = {
          time: 0,
          frame: 0,
          tick: function () {
            h(!0);
          },
          deltaRatio: function (e) {
            return p / (1e3 / (e || 60));
          },
          wake: function () {
            hn &&
              (!dn &&
                Zt() &&
                ((un = dn = t),
                (fn = un.document || {}),
                (pn.gsap = pa),
                (un.gsapVersions ||= []).push(pa.version),
                gn(mn || un.GreenSockGlobals || (!un.gsap && un) || {}),
                Xr.forEach(Zr)),
              (d = typeof requestAnimationFrame < `u` && requestAnimationFrame),
              l && f.sleep(),
              (u =
                d ||
                function (e) {
                  return setTimeout(e, (s - f.time * 1e3 + 1) | 0);
                }),
              (si = 1),
              h(2));
          },
          sleep: function () {
            ((d ? cancelAnimationFrame : clearTimeout)(l), (si = 0), (u = bn));
          },
          lagSmoothing: function (e, t) {
            ((n = e || 1 / 0), (r = Math.min(t || 33, n)));
          },
          fps: function (e) {
            ((o = 1e3 / (e || 240)), (s = f.time * 1e3 + o));
          },
          add: function (e, t, n) {
            var r = t
              ? function (t, n, i, a) {
                  (e(t, n, i, a), f.remove(r));
                }
              : e;
            return (f.remove(e), c[n ? `unshift` : `push`](r), li(), r);
          },
          remove: function (e, t) {
            ~(t = c.indexOf(e)) && c.splice(t, 1) && m >= t && m--;
          },
          _listeners: c,
        }),
        f
      );
    })()),
    (li = function () {
      return !si && ci.wake();
    }),
    (ui = {}),
    (di = /^[\d.\-M][\d.\-,\s]/),
    (fi = /["']/g),
    (pi = function (e) {
      for (
        var t = {},
          n = e.substr(1, e.length - 3).split(`:`),
          r = n[0],
          i = 1,
          a = n.length,
          o,
          s,
          c;
        i < a;
        i++
      )
        ((s = n[i]),
          (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
          (c = s.substr(0, o)),
          (t[r] = isNaN(c) ? c.replace(fi, ``).trim() : +c),
          (r = s.substr(o + 1).trim()));
      return t;
    }),
    (mi = function (e) {
      var t = e.indexOf(`(`) + 1,
        n = e.indexOf(`)`),
        r = e.indexOf(`(`, t);
      return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
    }),
    (hi = function (e) {
      var t = (e + ``).split(`(`),
        n = ui[t[0]];
      return n && t.length > 1 && n.config
        ? n.config.apply(null, ~e.indexOf(`{`) ? [pi(t[1])] : mi(e).split(`,`).map(Un))
        : ui._CE && di.test(e)
          ? ui._CE(``, e)
          : n;
    }),
    (gi = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    }),
    (_i = function e(t, n) {
      for (var r = t._first, i; r; )
        (r instanceof Ti
          ? e(r, n)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== n &&
            (r.timeline
              ? e(r.timeline, n)
              : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = n))),
          (r = r._next));
    }),
    (vi = function (e, t) {
      return (e && (Kt(e) ? e : ui[e] || hi(e))) || t;
    }),
    (yi = function (e, t, n, r) {
      (n === void 0 &&
        (n = function (e) {
          return 1 - t(1 - e);
        }),
        r === void 0 &&
          (r = function (e) {
            return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
          }));
      var i = { easeIn: t, easeOut: n, easeInOut: r },
        a;
      return (
        In(e, function (e) {
          for (var t in ((ui[e] = pn[e] = i), (ui[(a = e.toLowerCase())] = n), i))
            ui[a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = ui[
              e + `.` + t
            ] = i[t];
        }),
        i
      );
    }),
    (bi = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    }),
    (xi = function e(t, n, r) {
      var i = n >= 1 ? n : 1,
        a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        o = (a / zt) * (Math.asin(1 / i) || 0),
        s = function (e) {
          return e === 1 ? 1 : i * 2 ** (-10 * e) * Wt((e - o) * a) + 1;
        },
        c =
          t === `out`
            ? s
            : t === `in`
              ? function (e) {
                  return 1 - s(1 - e);
                }
              : bi(s);
      return (
        (a = zt / a),
        (c.config = function (n, r) {
          return e(t, n, r);
        }),
        c
      );
    }),
    (Si = function e(t, n) {
      n === void 0 && (n = 1.70158);
      var r = function (e) {
          return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
        },
        i =
          t === `out`
            ? r
            : t === `in`
              ? function (e) {
                  return 1 - r(1 - e);
                }
              : bi(r);
      return (
        (i.config = function (n) {
          return e(t, n);
        }),
        i
      );
    }),
    In(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
      var n = t < 5 ? t + 1 : t;
      yi(
        e + `,Power` + (n - 1),
        t
          ? function (e) {
              return e ** +n;
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - (1 - e) ** n;
        },
        function (e) {
          return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
        }
      );
    }),
    (ui.Linear.easeNone = ui.none = ui.Linear.easeIn),
    yi(`Elastic`, xi(`in`), xi(`out`), xi()),
    (function (e, t) {
      var n = 1 / t,
        r = 2 * n,
        i = 2.5 * n,
        a = function (a) {
          return a < n
            ? e * a * a
            : a < r
              ? e * (a - 1.5 / t) ** 2 + 0.75
              : a < i
                ? e * (a -= 2.25 / t) * a + 0.9375
                : e * (a - 2.625 / t) ** 2 + 0.984375;
        };
      yi(
        `Bounce`,
        function (e) {
          return 1 - a(1 - e);
        },
        a
      );
    })(7.5625, 2.75),
    yi(`Expo`, function (e) {
      return e ? 2 ** (10 * (e - 1)) : 0;
    }),
    yi(`Circ`, function (e) {
      return -(Ht(1 - e * e) - 1);
    }),
    yi(`Sine`, function (e) {
      return e === 1 ? 1 : -Ut(e * Bt) + 1;
    }),
    yi(`Back`, Si(`in`), Si(`out`), Si()),
    (ui.SteppedEase =
      ui.steps =
      pn.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var n = 1 / e,
              r = e + +!t,
              i = +!!t,
              a = 1 - Rt;
            return function (e) {
              return (((r * wr(0, a, e)) | 0) + i) * n;
            };
          },
        }),
    (Nt.ease = ui[`quad.out`]),
    In(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function (e) {
      return (Mn += e + `,` + e + `Params,`);
    }),
    (Ci = function (e, t) {
      ((this.id = Vt++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Fn),
        (this.set = t ? t.getSetter : Wi));
    }),
    (wi = (function () {
      function e(e) {
        ((this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          vr(this, +e.duration, 1, 1),
          (this.data = e.data),
          It && ((this._ctx = It), It.data.push(this)),
          si || ci.wake());
      }
      var t = e.prototype;
      return (
        (t.delay = function (e) {
          return e || e === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              vr(
                this,
                this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, t) {
          if ((li(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (lr(this, e), !n._dp || n.parent || ur(n, this); n && n.parent; )
              (n.parent._time !==
                n._start +
                  (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent));
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              dr(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === Rt) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), Hn(this, e, t)),
            this
          );
        }),
        (t.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + ar(this)) % (this._dur + this._rDelay) ||
                  (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (t.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : +(this.rawTime() > 0);
        }),
        (t.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + ar(this),
                t
              )
            : this.duration()
              ? Math.min(1, this._time / this._dur)
              : +(this.rawTime() > 0);
        }),
        (t.iteration = function (e, t) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * n, t)
            : this._repeat
              ? or(this._tTime, n) + 1
              : 1;
        }),
        (t.timeScale = function (e, t) {
          if (!arguments.length) return this._rts === -Rt ? 0 : this._rts;
          if (this._rts === e) return this;
          var n = this.parent && this._ts ? sr(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -Rt ? 0 : this._rts),
            this.totalTime(wr(-Math.abs(this._delay), this._tDur, n), t !== !1),
            cr(this),
            nr(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (li(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 && Math.abs(this._zTime) !== Rt && (this._tTime -= Rt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return (t && (t._sort || !this.parent) && dr(t, this, e - this._delay), this);
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start + (Xt(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
                ? sr(t.rawTime(e), this)
                : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          e === void 0 && (e = Cn);
          var t = Ft;
          return (
            (Ft = e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
            this.data !== `nested` && e.kill !== !1 && this.kill(),
            (Ft = t),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
            ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
          return !this.parent && this._sat ? this._sat.globalTime(e) : n;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), yr(this))
            : this._repeat === -2
              ? 1 / 0
              : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var t = this._time;
            return ((this._rDelay = e), yr(this), t ? this.time(t) : this);
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, t) {
          return this.totalTime(xr(this, e), Xt(t));
        }),
        (t.restart = function (e, t) {
          return this.play().totalTime(e ? -this._delay : 0, Xt(t));
        }),
        (t.play = function (e, t) {
          return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
        }),
        (t.reverse = function (e, t) {
          return (
            e != null && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, t) {
          return (e != null && this.seek(e, t), this.paused(!0));
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -Rt : 0)), this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return ((this._initted = this._act = 0), (this._zTime = -Rt), this);
        }),
        (t.isActive = function () {
          var e = this.parent || this._dp,
            t = this._start,
            n;
          return !!(
            !e ||
            (this._ts &&
              this._initted &&
              e.isActive() &&
              (n = e.rawTime(!0)) >= t &&
              n < this.endTime(!0) - Rt)
          );
        }),
        (t.eventCallback = function (e, t, n) {
          var r = this.vars;
          return arguments.length > 1
            ? (t
                ? ((r[e] = t), n && (r[e + `Params`] = n), e === `onUpdate` && (this._onUpdate = t))
                : delete r[e],
              this)
            : r[e];
        }),
        (t.then = function (e) {
          var t = this;
          return new Promise(function (n) {
            var r = Kt(e) ? e : Wn,
              i = function () {
                var e = t.then;
                ((t.then = null),
                  Kt(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                  n(r),
                  (t.then = e));
              };
            (t._initted && t.totalProgress() === 1 && t._ts >= 0) || (!t._tTime && t._ts < 0)
              ? i()
              : (t._prom = i);
          });
        }),
        (t.kill = function () {
          Jr(this);
        }),
        e
      );
    })()),
    Gn(wi.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -Rt,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    }),
    (Ti = (function (e) {
      ot(t, e);
      function t(t, n) {
        var r;
        return (
          t === void 0 && (t = {}),
          (r = e.call(this, t) || this),
          (r.labels = {}),
          (r.smoothChildTiming = !!t.smoothChildTiming),
          (r.autoRemoveChildren = !!t.autoRemoveChildren),
          (r._sort = Xt(t.sortChildren)),
          ln && dr(t.parent || ln, at(r), n),
          t.reversed && r.reverse(),
          t.paused && r.paused(!0),
          t.scrollTrigger && fr(at(r), t.scrollTrigger),
          r
        );
      }
      var n = t.prototype;
      return (
        (n.to = function (e, t, n) {
          return (Sr(0, arguments, this), this);
        }),
        (n.from = function (e, t, n) {
          return (Sr(1, arguments, this), this);
        }),
        (n.fromTo = function (e, t, n, r) {
          return (Sr(2, arguments, this), this);
        }),
        (n.set = function (e, t, n) {
          return (
            (t.duration = 0),
            (t.parent = this),
            Xn(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new zi(e, t, xr(this, n), 1),
            this
          );
        }),
        (n.call = function (e, t, n) {
          return dr(this, zi.delayedCall(0, e, t), n);
        }),
        (n.staggerTo = function (e, t, n, r, i, a, o) {
          return (
            (n.duration = t),
            (n.stagger = n.stagger || r),
            (n.onComplete = a),
            (n.onCompleteParams = o),
            (n.parent = this),
            new zi(e, n, xr(this, i)),
            this
          );
        }),
        (n.staggerFrom = function (e, t, n, r, i, a, o) {
          return (
            (n.runBackwards = 1),
            (Xn(n).immediateRender = Xt(n.immediateRender)),
            this.staggerTo(e, t, n, r, i, a, o)
          );
        }),
        (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
          return (
            (r.startAt = n),
            (Xn(r).immediateRender = Xt(r.immediateRender)),
            this.staggerTo(e, t, r, i, a, o, s)
          );
        }),
        (n.render = function (e, t, n) {
          var r = this._time,
            i = this._dirty ? this.totalDuration() : this._tDur,
            a = this._dur,
            o = e <= 0 ? 0 : Rn(e),
            s = this._zTime < 0 != e < 0 && (this._initted || !a),
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g,
            _,
            v,
            y;
          if ((this !== ln && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)) {
            if (
              (r !== this._time && a && ((o += this._time - r), (e += this._time - r)),
              (c = o),
              (g = this._start),
              (h = this._ts),
              (p = !h),
              s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (((v = this._yoyo), (f = a + this._rDelay), this._repeat < -1 && e < 0))
                return this.totalTime(f * 100 + e, t, n);
              if (
                ((c = Rn(o % f)),
                o === i
                  ? ((d = this._repeat), (c = a))
                  : ((d = ~~(o / f)), d && d === o / f && ((c = a), d--), c > a && (c = a)),
                (_ = or(this._tTime, f)),
                !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d),
                v && d & 1 && ((c = a - c), (y = 1)),
                d !== _ && !this._lock)
              ) {
                var b = v && _ & 1,
                  x = b === (v && d & 1);
                if (
                  (d < _ && (b = !b),
                  (r = b ? 0 : o % a ? a : o),
                  (this._lock = 1),
                  (this.render(r || (y ? 0 : Rn(d * f)), t, !a)._lock = 0),
                  (this._tTime = o),
                  !t && this.parent && qr(this, `onRepeat`),
                  this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1),
                  (r && r !== this._time) ||
                    p !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act) ||
                    ((a = this._dur),
                    (i = this._tDur),
                    x &&
                      ((this._lock = 2),
                      (r = b ? a : -1e-4),
                      this.render(r, !0),
                      this.vars.repeatRefresh && !y && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !p))
                )
                  return this;
                _i(this, y);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((m = _r(this, Rn(r), Rn(c))), m && (o -= c - (c = m._start))),
              (this._tTime = o),
              (this._time = c),
              (this._act = !h),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (r = 0)),
              !r && c && !t && !d && (qr(this, `onStart`), this._tTime !== o))
            )
              return this;
            if (c >= r && e >= 0)
              for (l = this._first; l; ) {
                if (((u = l._next), (l._act || c >= l._start) && l._ts && m !== l)) {
                  if (l.parent !== this) return this.render(e, t, n);
                  if (
                    (l.render(
                      l._ts > 0
                        ? (c - l._start) * l._ts
                        : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts,
                      t,
                      n
                    ),
                    c !== this._time || (!this._ts && !p))
                  ) {
                    ((m = 0), u && (o += this._zTime = -Rt));
                    break;
                  }
                }
                l = u;
              }
            else {
              l = this._last;
              for (var S = e < 0 ? e : c; l; ) {
                if (((u = l._prev), (l._act || S <= l._end) && l._ts && m !== l)) {
                  if (l.parent !== this) return this.render(e, t, n);
                  if (
                    (l.render(
                      l._ts > 0
                        ? (S - l._start) * l._ts
                        : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts,
                      t,
                      n || (Ft && (l._initted || l._startAt))
                    ),
                    c !== this._time || (!this._ts && !p))
                  ) {
                    ((m = 0), u && (o += this._zTime = S ? -Rt : Rt));
                    break;
                  }
                }
                l = u;
              }
            }
            if (
              m &&
              !t &&
              (this.pause(), (m.render(c >= r ? 0 : -Rt)._zTime = c >= r ? 1 : -1), this._ts)
            )
              return ((this._start = g), cr(this), this.render(e, t, n));
            (this._onUpdate && !t && qr(this, `onUpdate`, !0),
              ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
                (g === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
                (this._lock ||
                  ((e || !a) && ((o === i && this._ts > 0) || (!o && this._ts < 0)) && er(this, 1),
                  !t &&
                    !(e < 0 && !r) &&
                    (o || r || !i) &&
                    (qr(this, o === i && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
                    this._prom && !(o < i && this.timeScale() > 0) && this._prom()))));
          }
          return this;
        }),
        (n.add = function (e, t) {
          var n = this;
          if ((qt(t) || (t = xr(this, t, e)), !(e instanceof wi))) {
            if (en(e))
              return (
                e.forEach(function (e) {
                  return n.add(e, t);
                }),
                this
              );
            if (Gt(e)) return this.addLabel(e, t);
            if (Kt(e)) e = zi.delayedCall(0, e);
            else return this;
          }
          return this === e ? this : dr(this, e, t);
        }),
        (n.getChildren = function (e, t, n, r) {
          (e === void 0 && (e = !0),
            t === void 0 && (t = !0),
            n === void 0 && (n = !0),
            r === void 0 && (r = -Lt));
          for (var i = [], a = this._first; a; )
            (a._start >= r &&
              (a instanceof zi
                ? t && i.push(a)
                : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
              (a = a._next));
          return i;
        }),
        (n.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e) return t[n];
        }),
        (n.remove = function (e) {
          return Gt(e)
            ? this.removeLabel(e)
            : Kt(e)
              ? this.killTweensOf(e)
              : ($n(this, e), e === this._recent && (this._recent = this._last), tr(this));
        }),
        (n.totalTime = function (t, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = Rn(
                  ci.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts)
                )),
              e.prototype.totalTime.call(this, t, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (e, t) {
          return ((this.labels[e] = xr(this, t)), this);
        }),
        (n.removeLabel = function (e) {
          return (delete this.labels[e], this);
        }),
        (n.addPause = function (e, t, n) {
          var r = zi.delayedCall(0, t || bn, n);
          return ((r.data = `isPause`), (this._hasPause = 1), dr(this, r, xr(this, e)));
        }),
        (n.removePause = function (e) {
          var t = this._first;
          for (e = xr(this, e); t; )
            (t._start === e && t.data === `isPause` && er(t), (t = t._next));
        }),
        (n.killTweensOf = function (e, t, n) {
          for (var r = this.getTweensOf(e, n), i = r.length; i--; ) Ai !== r[i] && r[i].kill(e, t);
          return this;
        }),
        (n.getTweensOf = function (e, t) {
          for (var n = [], r = Ar(e), i = this._first, a = qt(t), o; i; )
            (i instanceof zi
              ? Bn(i._targets, r) &&
                (a
                  ? (!Ai || (i._initted && i._ts)) &&
                    i.globalTime(0) <= t &&
                    i.globalTime(i.totalDuration()) > t
                  : !t || i.isActive()) &&
                n.push(i)
              : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
              (i = i._next));
          return n;
        }),
        (n.tweenTo = function (e, t) {
          t ||= {};
          var n = this,
            r = xr(n, e),
            i = t,
            a = i.startAt,
            o = i.onStart,
            s = i.onStartParams,
            c = i.immediateRender,
            l,
            u = zi.to(
              n,
              Gn(
                {
                  ease: t.ease || `none`,
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: `auto`,
                  duration:
                    t.duration ||
                    Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale()) ||
                    Rt,
                  onStart: function () {
                    if ((n.pause(), !l)) {
                      var e =
                        t.duration ||
                        Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale());
                      (u._dur !== e && vr(u, e, 0, 1).render(u._time, !0, !0), (l = 1));
                    }
                    o && o.apply(u, s || []);
                  },
                },
                t
              )
            );
          return c ? u.render(0) : u;
        }),
        (n.tweenFromTo = function (e, t, n) {
          return this.tweenTo(t, Gn({ startAt: { time: xr(this, e) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (e) {
          return (e === void 0 && (e = this._time), Kr(this, xr(this, e)));
        }),
        (n.previousLabel = function (e) {
          return (e === void 0 && (e = this._time), Kr(this, xr(this, e), 1));
        }),
        (n.currentLabel = function (e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Rt);
        }),
        (n.shiftChildren = function (e, t, n) {
          n === void 0 && (n = 0);
          for (var r = this._first, i = this.labels, a; r; )
            (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
          if (t) for (a in i) i[a] >= n && (i[a] += e);
          return tr(this);
        }),
        (n.invalidate = function (t) {
          var n = this._first;
          for (this._lock = 0; n; ) (n.invalidate(t), (n = n._next));
          return e.prototype.invalidate.call(this, t);
        }),
        (n.clear = function (e) {
          e === void 0 && (e = !0);
          for (var t = this._first, n; t; ) ((n = t._next), this.remove(t), (t = n));
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            tr(this)
          );
        }),
        (n.totalDuration = function (e) {
          var t = 0,
            n = this,
            r = n._last,
            i = Lt,
            a,
            o,
            s;
          if (arguments.length)
            return n.timeScale(
              (n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e)
            );
          if (n._dirty) {
            for (s = n.parent; r; )
              ((a = r._prev),
                r._dirty && r.totalDuration(),
                (o = r._start),
                o > i && n._sort && r._ts && !n._lock
                  ? ((n._lock = 1), (dr(n, r, o - r._delay, 1)._lock = 0))
                  : (i = o),
                o < 0 &&
                  r._ts &&
                  ((t -= o),
                  ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                    ((n._start += o / n._ts), (n._time -= o), (n._tTime -= o)),
                  n.shiftChildren(-o, !1, -1 / 0),
                  (i = 0)),
                r._end > t && r._ts && (t = r._end),
                (r = a));
            (vr(n, n === ln && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
          }
          return n._tDur;
        }),
        (t.updateRoot = function (e) {
          if ((ln._ts && (Hn(ln, sr(e, ln)), (Dn = ci.frame)), ci.frame >= An)) {
            An += Mt.autoSleep || 120;
            var t = ln._first;
            if ((!t || !t._ts) && Mt.autoSleep && ci._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || ci.sleep();
            }
          }
        }),
        t
      );
    })(wi)),
    Gn(Ti.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 }),
    (Ei = function (e, t, n, r, i, a, o) {
      var s = new $i(this._pt, e, t, 0, 1, qi, null, i),
        c = 0,
        l = 0,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _;
      for (
        s.b = n,
          s.e = r,
          n += ``,
          r += ``,
          (g = ~r.indexOf(`random(`)) && (r = Ur(r)),
          a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
          d = n.match(an) || [];
        (u = an.exec(r));
      )
        ((p = u[0]),
          (m = r.substring(c, u.index)),
          f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
          p !== d[l++] &&
            ((h = parseFloat(d[l - 1]) || 0),
            (s._pt = {
              _next: s._pt,
              p: m || l === 1 ? m : `,`,
              s: h,
              c: p.charAt(1) === `=` ? zn(h, p) - h : parseFloat(p) - h,
              m: f && f < 4 ? Math.round : 0,
            }),
            (c = an.lastIndex)));
      return (
        (s.c = c < r.length ? r.substring(c, r.length) : ``),
        (s.fp = o),
        (on.test(r) || g) && (s.e = 0),
        (this._pt = s),
        s
      );
    }),
    (Di = function (e, t, n, r, i, a, o, s, c, l) {
      Kt(r) && (r = r(i || 0, e, a));
      var u = e[t],
        d =
          n === `get`
            ? Kt(u)
              ? c
                ? e[t.indexOf(`set`) || !Kt(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c)
                : e[t]()
              : u
            : n,
        f = Kt(u) ? (c ? Hi : Vi) : Bi,
        p;
      if (
        (Gt(r) &&
          (~r.indexOf(`random(`) && (r = Ur(r)),
          r.charAt(1) === `=` && ((p = zn(d, r) + (Tr(d) || 0)), (p || p === 0) && (r = p))),
        !l || d !== r || ji)
      )
        return !isNaN(d * r) && r !== ``
          ? ((p = new $i(
              this._pt,
              e,
              t,
              +d || 0,
              r - (d || 0),
              typeof u == `boolean` ? Ki : Gi,
              0,
              f
            )),
            c && (p.fp = c),
            o && p.modifier(o, this, e),
            (this._pt = p))
          : (!u && !(t in e) && _n(t, r), Ei.call(this, e, t, d, r, f, s || Mt.stringFilter, c));
    }),
    (Oi = function (e, t, n, r, i) {
      if ((Kt(e) && (e = Ii(e, i, t, n, r)), !Yt(e) || (e.style && e.nodeType) || en(e) || $t(e)))
        return Gt(e) ? Ii(e, i, t, n, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = Ii(e[o], i, t, n, r);
      return a;
    }),
    (ki = function (e, t, n, r, i, a) {
      var o, s, c, l;
      if (
        On[e] &&
        (o = new On[e]()).init(i, o.rawVars ? t[e] : Oi(t[e], r, i, a, n), n, r, a) !== !1 &&
        ((n._pt = s = new $i(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)), n !== Yr)
      )
        for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--; ) c[o._props[l]] = s;
      return o;
    }),
    (Mi = function e(t, n, r) {
      var i = t.vars,
        a = i.ease,
        o = i.startAt,
        s = i.immediateRender,
        c = i.lazy,
        l = i.onUpdate,
        u = i.runBackwards,
        d = i.yoyoEase,
        f = i.keyframes,
        p = i.autoRevert,
        m = t._dur,
        h = t._startAt,
        g = t._targets,
        _ = t.parent,
        v = _ && _.data === `nested` ? _.vars.targets : g,
        y = t._overwrite === `auto` && !Pt,
        b = t.timeline,
        x,
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        j,
        M,
        N;
      if (
        (b && (!f || !a) && (a = `none`),
        (t._ease = vi(a, Nt.ease)),
        (t._yEase = d ? gi(vi(d === !0 ? a : d, Nt.ease)) : 0),
        d && t._yoyo && !t._repeat && ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
        (t._from = !b && !!i.runBackwards),
        !b || (f && !i.stagger))
      ) {
        if (
          ((O = g[0] ? Pn(g[0]).harness : 0),
          (M = O && i[O.prop]),
          (x = Yn(i, wn)),
          h &&
            (h._zTime < 0 && h.progress(1),
            n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Sn : xn),
            (h._lazy = 0)),
          o)
        ) {
          if (
            (er(
              (t._startAt = zi.set(
                g,
                Gn(
                  {
                    data: `isStart`,
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !h && Xt(c),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return qr(t, `onUpdate`);
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ft || (!s && !p)) && t._startAt.revert(Sn),
            s && m && n <= 0 && r <= 0)
          ) {
            n && (t._zTime = n);
            return;
          }
        } else if (u && m && !h) {
          if (
            (n && (s = !1),
            (C = Gn(
              {
                overwrite: !1,
                data: `isFromStart`,
                lazy: s && !h && Xt(c),
                immediateRender: s,
                stagger: 0,
                parent: _,
              },
              x
            )),
            M && (C[O.prop] = M),
            er((t._startAt = zi.set(g, C))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (Ft ? t._startAt.revert(Sn) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !s)
          )
            e(t._startAt, Rt, Rt);
          else if (!n) return;
        }
        for (t._pt = t._ptCache = 0, c = (m && Xt(c)) || (c && !m), S = 0; S < g.length; S++) {
          if (
            ((T = g[S]),
            (D = T._gsap || Nn(g)[S]._gsap),
            (t._ptLookup[S] = A = {}),
            En[D.id] && Tn.length && Vn(),
            (j = v === g ? S : v.indexOf(T)),
            O &&
              (k = new O()).init(T, M || x, t, j, v) !== !1 &&
              ((t._pt = w = new $i(t._pt, T, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (e) {
                A[e] = w;
              }),
              k.priority && (E = 1)),
            !O || M)
          )
            for (C in x)
              On[C] && (k = ki(C, x, t, j, T, v))
                ? k.priority && (E = 1)
                : (A[C] = w = Di.call(t, T, C, `get`, x[C], j, v, 0, i.stringFilter));
          (t._op && t._op[S] && t.kill(T, t._op[S]),
            y &&
              t._pt &&
              ((Ai = t), ln.killTweensOf(T, A, t.globalTime(n)), (N = !t.parent), (Ai = 0)),
            t._pt && c && (En[D.id] = 1));
        }
        (E && Qi(t), t._onInit && t._onInit(t));
      }
      ((t._onUpdate = l),
        (t._initted = (!t._op || t._pt) && !N),
        f && n <= 0 && b.render(Lt, !0, !0));
    }),
    (Ni = function (e, t, n, r, i, a, o, s) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        l,
        u,
        d,
        f;
      if (!c)
        for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--; ) {
          if (((l = d[f][t]), l && l.d && l.d._pt))
            for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
          if (!l)
            return (
              (ji = 1),
              (e.vars[t] = `+=0`),
              Mi(e, o),
              (ji = 0),
              s ? vn(t + ` not eligible for reset`) : 1
            );
          c.push(l);
        }
      for (f = c.length; f--; )
        ((u = c[f]),
          (l = u._pt || u),
          (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
          (l.c = n - l.s),
          (u.e &&= Ln(n) + Tr(u.e)),
          (u.b &&= l.s + Tr(u.b)));
    }),
    (Pi = function (e, t) {
      var n = e[0] ? Pn(e[0]).harness : 0,
        r = n && n.aliases,
        i,
        a,
        o,
        s;
      if (!r) return t;
      for (a in ((i = qn({}, t)), r))
        if (a in i) for (s = r[a].split(`,`), o = s.length; o--; ) i[s[o]] = i[a];
      return i;
    }),
    (Fi = function (e, t, n, r) {
      var i = t.ease || r || `power1.inOut`,
        a,
        o;
      if (en(t))
        ((o = n[e] || (n[e] = [])),
          t.forEach(function (e, n) {
            return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
          }));
      else
        for (a in t)
          ((o = n[a] || (n[a] = [])), a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
    }),
    (Ii = function (e, t, n, r, i) {
      return Kt(e) ? e.call(t, n, r, i) : Gt(e) && ~e.indexOf(`random(`) ? Ur(e) : e;
    }),
    (Li = Mn + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`),
    (Ri = {}),
    In(Li + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
      return (Ri[e] = 1);
    }),
    (zi = (function (e) {
      ot(t, e);
      function t(t, n, r, i) {
        var a;
        (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
          (a = e.call(this, i ? n : Xn(n)) || this));
        var o = a.vars,
          s = o.duration,
          c = o.delay,
          l = o.immediateRender,
          u = o.stagger,
          d = o.overwrite,
          f = o.keyframes,
          p = o.defaults,
          m = o.scrollTrigger,
          h = o.yoyoEase,
          g = n.parent || ln,
          _ = (en(t) || $t(t) ? qt(t[0]) : `length` in n) ? [t] : Ar(t),
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T;
        if (
          ((a._targets = _.length
            ? Nn(_)
            : vn(`GSAP target ` + t + ` not found. https://gsap.com`, !Mt.nullTargetWarn) || []),
          (a._ptLookup = []),
          (a._overwrite = d),
          f || u || Qt(s) || Qt(c))
        ) {
          if (
            ((n = a.vars),
            (v = a.timeline =
              new Ti({
                data: `nested`,
                defaults: p || {},
                targets: g && g.data === `nested` ? g.vars.targets : _,
              })),
            v.kill(),
            (v.parent = v._dp = at(a)),
            (v._start = 0),
            u || Qt(s) || Qt(c))
          ) {
            if (((x = _.length), (w = u && Nr(u)), Yt(u)))
              for (S in u) ~Li.indexOf(S) && ((T ||= {}), (T[S] = u[S]));
            for (y = 0; y < x; y++)
              ((b = Yn(n, Ri)),
                (b.stagger = 0),
                h && (b.yoyoEase = h),
                T && qn(b, T),
                (C = _[y]),
                (b.duration = +Ii(s, at(a), y, C, _)),
                (b.delay = (+Ii(c, at(a), y, C, _) || 0) - a._delay),
                !u &&
                  x === 1 &&
                  b.delay &&
                  ((a._delay = c = b.delay), (a._start += c), (b.delay = 0)),
                v.to(C, b, w ? w(y, C, _) : 0),
                (v._ease = ui.none));
            v.duration() ? (s = c = 0) : (a.timeline = 0);
          } else if (f) {
            (Xn(Gn(v.vars.defaults, { ease: `none` })), (v._ease = vi(f.ease || n.ease || `none`)));
            var E = 0,
              D,
              O,
              k;
            if (en(f))
              (f.forEach(function (e) {
                return v.to(_, e, `>`);
              }),
                v.duration());
            else {
              for (S in ((b = {}), f))
                S === `ease` || S === `easeEach` || Fi(S, f[S], b, f.easeEach);
              for (S in b)
                for (
                  D = b[S].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    E = 0,
                    y = 0;
                  y < D.length;
                  y++
                )
                  ((O = D[y]),
                    (k = { ease: O.e, duration: ((O.t - (y ? D[y - 1].t : 0)) / 100) * s }),
                    (k[S] = O.v),
                    v.to(_, k, E),
                    (E += k.duration));
              v.duration() < s && v.to({}, { duration: s - v.duration() });
            }
          }
          s || a.duration((s = v.duration()));
        } else a.timeline = 0;
        return (
          d === !0 && !Pt && ((Ai = at(a)), ln.killTweensOf(_), (Ai = 0)),
          dr(g, at(a), r),
          n.reversed && a.reverse(),
          n.paused && a.paused(!0),
          (l ||
            (!s && !f && a._start === Rn(g._time) && Xt(l) && ir(at(a)) && g.data !== `nested`)) &&
            ((a._tTime = -Rt), a.render(Math.max(0, -c) || 0)),
          m && fr(at(a), m),
          a
        );
      }
      var n = t.prototype;
      return (
        (n.render = function (e, t, n) {
          var r = this._time,
            i = this._tDur,
            a = this._dur,
            o = e < 0,
            s = e > i - Rt && !o ? i : e < Rt ? 0 : e,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g;
          if (!a) gr(this, e, t, n);
          else if (
            s !== this._tTime ||
            !e ||
            n ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== o)
          ) {
            if (((c = s), (h = this.timeline), this._repeat)) {
              if (((d = a + this._rDelay), this._repeat < -1 && o))
                return this.totalTime(d * 100 + e, t, n);
              if (
                ((c = Rn(s % d)),
                s === i
                  ? ((u = this._repeat), (c = a))
                  : ((u = ~~(s / d)), u && u === Rn(s / d) && ((c = a), u--), c > a && (c = a)),
                (p = this._yoyo && u & 1),
                p && ((g = this._yEase), (c = a - c)),
                (f = or(this._tTime, d)),
                c === r && !n && this._initted && u === f)
              )
                return ((this._tTime = s), this);
              u !== f &&
                (h && this._yEase && _i(h, p),
                this.vars.repeatRefresh &&
                  !p &&
                  !this._lock &&
                  this._time !== d &&
                  this._initted &&
                  ((this._lock = n = 1), (this.render(Rn(d * u), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (pr(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
              if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f)) return this;
              if (a !== this._dur) return this.render(e, t, n);
            }
            if (
              ((this._tTime = s),
              (this._time = c),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = m = (g || this._ease)(c / a)),
              this._from && (this.ratio = m = 1 - m),
              c && !r && !t && !u && (qr(this, `onStart`), this._tTime !== s))
            )
              return this;
            for (l = this._pt; l; ) (l.r(m, l.d), (l = l._next));
            ((h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n)) ||
              (this._startAt && (this._zTime = e)),
              this._onUpdate && !t && (o && rr(this, e, t, n), qr(this, `onUpdate`)),
              this._repeat &&
                u !== f &&
                this.vars.onRepeat &&
                !t &&
                this.parent &&
                qr(this, `onRepeat`),
              (s === this._tDur || !s) &&
                this._tTime === s &&
                (o && !this._onUpdate && rr(this, e, !0, !0),
                (e || !a) &&
                  ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
                  er(this, 1),
                !t &&
                  !(o && !r) &&
                  (s || r || p) &&
                  (qr(this, s === i ? `onComplete` : `onReverseComplete`, !0),
                  this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function (t) {
          return (
            (!t || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(t),
            e.prototype.invalidate.call(this, t)
          );
        }),
        (n.resetTo = function (e, t, n, r, i) {
          (si || ci.wake(), this._ts || this.play());
          var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            o;
          return (
            this._initted || Mi(this, a),
            (o = this._ease(a / this._dur)),
            Ni(this, e, t, n, r, o, a, i)
              ? this.resetTo(e, t, n, r, 1)
              : (lr(this, 0),
                this.parent || Qn(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
                this.render(0))
          );
        }),
        (n.kill = function (e, t) {
          if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
            return ((this._lazy = this._pt = 0), this.parent ? Jr(this) : this);
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, Ai && Ai.vars.overwrite !== !0)._first || Jr(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                vr(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var r = this._targets,
            i = e ? Ar(e) : r,
            a = this._ptLookup,
            o = this._pt,
            s,
            c,
            l,
            u,
            d,
            f,
            p;
          if ((!t || t === `all`) && Zn(r, i)) return (t === `all` && (this._pt = 0), Jr(this));
          for (
            s = this._op = this._op || [],
              t !== `all` &&
                (Gt(t) &&
                  ((d = {}),
                  In(t, function (e) {
                    return (d[e] = 1);
                  }),
                  (t = d)),
                (t = Pi(r, t))),
              p = r.length;
            p--;
          )
            if (~i.indexOf(r[p]))
              for (d in ((c = a[p]),
              t === `all` ? ((s[p] = t), (u = c), (l = {})) : ((l = s[p] = s[p] || {}), (u = t)),
              u))
                ((f = c && c[d]),
                  f &&
                    ((!(`kill` in f.d) || f.d.kill(d) === !0) && $n(this, f, `_pt`), delete c[d]),
                  l !== `all` && (l[d] = 1));
          return (this._initted && !this._pt && o && Jr(this), this);
        }),
        (t.to = function (e, n) {
          return new t(e, n, arguments[2]);
        }),
        (t.from = function (e, t) {
          return Sr(1, arguments);
        }),
        (t.delayedCall = function (e, n, r, i) {
          return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (t.fromTo = function (e, t, n) {
          return Sr(2, arguments);
        }),
        (t.set = function (e, n) {
          return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
        }),
        (t.killTweensOf = function (e, t, n) {
          return ln.killTweensOf(e, t, n);
        }),
        t
      );
    })(wi)),
    Gn(zi.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    In(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
      zi[e] = function () {
        var t = new Ti(),
          n = Dr.call(arguments, 0);
        return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
      };
    }),
    (Bi = function (e, t, n) {
      return (e[t] = n);
    }),
    (Vi = function (e, t, n) {
      return e[t](n);
    }),
    (Hi = function (e, t, n, r) {
      return e[t](r.fp, n);
    }),
    (Ui = function (e, t, n) {
      return e.setAttribute(t, n);
    }),
    (Wi = function (e, t) {
      return Kt(e[t]) ? Vi : Jt(e[t]) && e.setAttribute ? Ui : Bi;
    }),
    (Gi = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    }),
    (Ki = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    }),
    (qi = function (e, t) {
      var n = t._pt,
        r = ``;
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; n; )
          ((r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r),
            (n = n._next));
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    }),
    (Ji = function (e, t) {
      for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next));
    }),
    (Yi = function (e, t, n, r) {
      for (var i = this._pt, a; i; ) ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
    }),
    (Xi = function (e) {
      for (var t = this._pt, n, r; t; )
        ((r = t._next),
          (t.p === e && !t.op) || t.op === e ? $n(this, t, `_pt`) : t.dep || (n = 1),
          (t = r));
      return !n;
    }),
    (Zi = function (e, t, n, r) {
      r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
    }),
    (Qi = function (e) {
      for (var t = e._pt, n, r, i, a; t; ) {
        for (n = t._next, r = i; r && r.pr > t.pr; ) r = r._next;
        ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = n));
      }
      e._pt = i;
    }),
    ($i = (function () {
      function e(e, t, n, r, i, a, o, s, c) {
        ((this.t = t),
          (this.s = r),
          (this.c = i),
          (this.p = n),
          (this.r = a || Gi),
          (this.d = o || this),
          (this.set = s || Bi),
          (this.pr = c || 0),
          (this._next = e),
          e && (e._prev = this));
      }
      var t = e.prototype;
      return (
        (t.modifier = function (e, t, n) {
          ((this.mSet = this.mSet || this.set),
            (this.set = Zi),
            (this.m = e),
            (this.mt = n),
            (this.tween = t));
        }),
        e
      );
    })()),
    In(
      Mn +
        `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,
      function (e) {
        return (wn[e] = 1);
      }
    ),
    (pn.TweenMax = pn.TweenLite = zi),
    (pn.TimelineLite = pn.TimelineMax = Ti),
    (ln = new Ti({
      sortChildren: !1,
      defaults: Nt,
      autoRemoveChildren: !0,
      id: `root`,
      smoothChildTiming: !0,
    })),
    (Mt.stringFilter = oi),
    (ea = []),
    (ta = {}),
    (na = []),
    (ra = 0),
    (ia = 0),
    (aa = function (e) {
      return (ta[e] || na).map(function (e) {
        return e();
      });
    }),
    (oa = function () {
      var e = Date.now(),
        t = [];
      e - ra > 2 &&
        (aa(`matchMediaInit`),
        ea.forEach(function (e) {
          var n = e.queries,
            r = e.conditions,
            i,
            a,
            o,
            s;
          for (a in n)
            ((i = un.matchMedia(n[a]).matches), i && (o = 1), i !== r[a] && ((r[a] = i), (s = 1)));
          s && (e.revert(), o && t.push(e));
        }),
        aa(`matchMediaRevert`),
        t.forEach(function (e) {
          return e.onMatch(e, function (t) {
            return e.add(null, t);
          });
        }),
        (ra = e),
        aa(`matchMedia`));
    }),
    (sa = (function () {
      function e(e, t) {
        ((this.selector = t && jr(t)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = ia++),
          e && this.add(e));
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, n) {
          Kt(e) && ((n = t), (t = e), (e = Kt));
          var r = this,
            i = function () {
              var e = It,
                i = r.selector,
                a;
              return (
                e && e !== r && e.data.push(r),
                n && (r.selector = jr(n)),
                (It = r),
                (a = t.apply(r, arguments)),
                Kt(a) && r._r.push(a),
                (It = e),
                (r.selector = i),
                (r.isReverted = !1),
                a
              );
            };
          return (
            (r.last = i),
            e === Kt
              ? i(r, function (e) {
                  return r.add(null, e);
                })
              : e
                ? (r[e] = i)
                : i
          );
        }),
        (t.ignore = function (e) {
          var t = It;
          ((It = null), e(this), (It = t));
        }),
        (t.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (n) {
              return n instanceof e
                ? t.push.apply(t, n.getTweens())
                : n instanceof zi && !(n.parent && n.parent.data === `nested`) && t.push(n);
            }),
            t
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, t) {
          var n = this;
          if (
            (e
              ? (function () {
                  for (var t = n.getTweens(), r = n.data.length, i; r--; )
                    ((i = n.data[r]),
                      i.data === `isFlip` &&
                        (i.revert(),
                        i.getChildren(!0, !0, !1).forEach(function (e) {
                          return t.splice(t.indexOf(e), 1);
                        })));
                  for (
                    t
                      .map(function (e) {
                        return {
                          g:
                            e._dur || e._delay || (e._sat && !e._sat.vars.immediateRender)
                              ? e.globalTime(0)
                              : -1 / 0,
                          t: e,
                        };
                      })
                      .sort(function (e, t) {
                        return t.g - e.g || -1 / 0;
                      })
                      .forEach(function (t) {
                        return t.t.revert(e);
                      }),
                      r = n.data.length;
                    r--;
                  )
                    ((i = n.data[r]),
                      i instanceof Ti
                        ? i.data !== `nested` &&
                          (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                        : !(i instanceof zi) && i.revert && i.revert(e));
                  (n._r.forEach(function (t) {
                    return t(e, n);
                  }),
                    (n.isReverted = !0));
                })()
              : this.data.forEach(function (e) {
                  return e.kill && e.kill();
                }),
            this.clear(),
            t)
          )
            for (var r = ea.length; r--; ) ea[r].id === this.id && ea.splice(r, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        e
      );
    })()),
    (ca = (function () {
      function e(e) {
        ((this.contexts = []), (this.scope = e), It && It.data.push(this));
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, n) {
          Yt(e) || (e = { matches: e });
          var r = new sa(0, n || this.scope),
            i = (r.conditions = {}),
            a,
            o,
            s;
          for (o in (It && !r.selector && (r.selector = It.selector),
          this.contexts.push(r),
          (t = r.add(`onMatch`, t)),
          (r.queries = e),
          e))
            o === `all`
              ? (s = 1)
              : ((a = un.matchMedia(e[o])),
                a &&
                  (ea.indexOf(r) < 0 && ea.push(r),
                  (i[o] = a.matches) && (s = 1),
                  a.addListener ? a.addListener(oa) : a.addEventListener(`change`, oa)));
          return (
            s &&
              t(r, function (e) {
                return r.add(null, e);
              }),
            this
          );
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (t) {
            return t.kill(e, !0);
          });
        }),
        e
      );
    })()),
    (la = {
      registerPlugin: function () {
        [...arguments].forEach(function (e) {
          return Zr(e);
        });
      },
      timeline: function (e) {
        return new Ti(e);
      },
      getTweensOf: function (e, t) {
        return ln.getTweensOf(e, t);
      },
      getProperty: function (e, t, n, r) {
        Gt(e) && (e = Ar(e)[0]);
        var i = Pn(e || {}).get,
          a = n ? Wn : Un;
        return (
          n === `native` && (n = ``),
          e &&
            (t
              ? a(((On[t] && On[t].get) || i)(e, t, n, r))
              : function (t, n, r) {
                  return a(((On[t] && On[t].get) || i)(e, t, n, r));
                })
        );
      },
      quickSetter: function (e, t, n) {
        if (((e = Ar(e)), e.length > 1)) {
          var r = e.map(function (e) {
              return pa.quickSetter(e, t, n);
            }),
            i = r.length;
          return function (e) {
            for (var t = i; t--; ) r[t](e);
          };
        }
        e = e[0] || {};
        var a = On[t],
          o = Pn(e),
          s = (o.harness && (o.harness.aliases || {})[t]) || t,
          c = a
            ? function (t) {
                var r = new a();
                ((Yr._pt = 0),
                  r.init(e, n ? t + n : t, Yr, 0, [e]),
                  r.render(1, r),
                  Yr._pt && Ji(1, Yr));
              }
            : o.set(e, s);
        return a
          ? c
          : function (t) {
              return c(e, s, n ? t + n : t, o, 1);
            };
      },
      quickTo: function (e, t, n) {
        var r,
          i = pa.to(e, qn(((r = {}), (r[t] = `+=0.1`), (r.paused = !0), r), n || {})),
          a = function (e, n, r) {
            return i.resetTo(t, e, n, r);
          };
        return ((a.tween = i), a);
      },
      isTweening: function (e) {
        return ln.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return (e && e.ease && (e.ease = vi(e.ease, Nt.ease)), Jn(Nt, e || {}));
      },
      config: function (e) {
        return Jn(Mt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          n = e.effect,
          r = e.plugins,
          i = e.defaults,
          a = e.extendTimeline;
        ((r || ``).split(`,`).forEach(function (e) {
          return e && !On[e] && !pn[e] && vn(t + ` effect requires ` + e + ` plugin.`);
        }),
          (kn[t] = function (e, t, r) {
            return n(Ar(e), Gn(t || {}, i), r);
          }),
          a &&
            (Ti.prototype[t] = function (e, n, r) {
              return this.add(kn[t](e, Yt(n) ? n : (r = n) && {}, this), r);
            }));
      },
      registerEase: function (e, t) {
        ui[e] = vi(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? vi(e, t) : ui;
      },
      getById: function (e) {
        return ln.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var n = new Ti(e),
          r,
          i;
        for (
          n.smoothChildTiming = Xt(e.smoothChildTiming),
            ln.remove(n),
            n._dp = 0,
            n._time = n._tTime = ln._time,
            r = ln._first;
          r;
        )
          ((i = r._next),
            (t || !(!r._dur && r instanceof zi && r.vars.onComplete === r._targets[0])) &&
              dr(n, r, r._start - r._delay),
            (r = i));
        return (dr(ln, n, 0), n);
      },
      context: function (e, t) {
        return e ? new sa(e, t) : It;
      },
      matchMedia: function (e) {
        return new ca(e);
      },
      matchMediaRefresh: function () {
        return (
          ea.forEach(function (e) {
            var t = e.conditions,
              n,
              r;
            for (r in t) t[r] && ((t[r] = !1), (n = 1));
            n && e.revert();
          }) || oa()
        );
      },
      addEventListener: function (e, t) {
        var n = ta[e] || (ta[e] = []);
        ~n.indexOf(t) || n.push(t);
      },
      removeEventListener: function (e, t) {
        var n = ta[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      },
      utils: {
        wrap: Vr,
        wrapYoyo: Hr,
        distribute: Nr,
        random: Ir,
        snap: Fr,
        normalize: zr,
        getUnit: Tr,
        clamp: Er,
        splitColor: ti,
        toArray: Ar,
        selector: jr,
        mapRange: Wr,
        pipe: Lr,
        unitize: Rr,
        interpolate: Gr,
        shuffle: Mr,
      },
      install: gn,
      effects: kn,
      ticker: ci,
      updateRoot: Ti.updateRoot,
      plugins: On,
      globalTimeline: ln,
      core: {
        PropTween: $i,
        globals: yn,
        Tween: zi,
        Timeline: Ti,
        Animation: wi,
        getCache: Pn,
        _removeLinkedListItem: $n,
        reverting: function () {
          return Ft;
        },
        context: function (e) {
          return (e && It && (It.data.push(e), (e._ctx = It)), It);
        },
        suppressOverwrites: function (e) {
          return (Pt = e);
        },
      },
    }),
    In(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
      return (la[e] = zi[e]);
    }),
    ci.add(Ti.updateRoot),
    (Yr = la.to({}, { duration: 0 })),
    (ua = function (e, t) {
      for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
      return n;
    }),
    (da = function (e, t) {
      var n = e._targets,
        r,
        i,
        a;
      for (r in t)
        for (i = n.length; i--; )
          ((a = e._ptLookup[i][r]),
            (a &&= a.d) &&
              (a._pt && (a = ua(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r)));
    }),
    (fa = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (e, n, r) {
          r._onInit = function (e) {
            var r, i;
            if (
              (Gt(n) &&
                ((r = {}),
                In(n, function (e) {
                  return (r[e] = 1);
                }),
                (n = r)),
              t)
            ) {
              for (i in ((r = {}), n)) r[i] = t(n[i]);
              n = r;
            }
            da(e, n);
          };
        },
      };
    }),
    (pa =
      la.registerPlugin(
        {
          name: `attr`,
          init: function (e, t, n, r, i) {
            var a, o, s;
            for (a in ((this.tween = n), t))
              ((s = e.getAttribute(a) || ``),
                (o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a)),
                (o.op = a),
                (o.b = s),
                this._props.push(a));
          },
          render: function (e, t) {
            for (var n = t._pt; n; ) (Ft ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
          },
        },
        {
          name: `endArray`,
          init: function (e, t) {
            for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
          },
        },
        fa(`roundProps`, Pr),
        fa(`modifiers`),
        fa(`snap`, Fr)
      ) || la),
    (zi.version = Ti.version = pa.version = `3.12.5`),
    (hn = 1),
    Zt() && li(),
    ui.Power0,
    ui.Power1,
    ui.Power2,
    ui.Power3,
    ui.Power4,
    ui.Linear,
    ui.Quad,
    ui.Cubic,
    ui.Quart,
    ui.Quint,
    ui.Strong,
    ui.Elastic,
    ui.Back,
    ui.SteppedEase,
    ui.Bounce,
    ui.Sine,
    ui.Expo,
    ui.Circ,
    (xa = function () {
      return typeof t < `u`;
    }),
    (Sa = {}),
    (Ca = 180 / Math.PI),
    (wa = Math.PI / 180),
    (Ta = Math.atan2),
    (Ea = 1e8),
    (Da = /([A-Z])/g),
    (Oa = /(left|right|width|margin|padding|x)/i),
    (ka = /[\s,\(]\S/),
    (Aa = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` }),
    (ja = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    }),
    (Ma = function (e, t) {
      return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    }),
    (Na = function (e, t) {
      return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
    }),
    (Pa = function (e, t) {
      var n = t.s + t.c * e;
      t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
    }),
    (Fa = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    }),
    (Ia = function (e, t) {
      return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
    }),
    (La = function (e, t, n) {
      return (e.style[t] = n);
    }),
    (Ra = function (e, t, n) {
      return e.style.setProperty(t, n);
    }),
    (za = function (e, t, n) {
      return (e._gsap[t] = n);
    }),
    (Ba = function (e, t, n) {
      return (e._gsap.scaleX = e._gsap.scaleY = n);
    }),
    (Va = function (e, t, n, r, i) {
      var a = e._gsap;
      ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
    }),
    (Ha = function (e, t, n, r, i) {
      var a = e._gsap;
      ((a[t] = n), a.renderTransform(i, a));
    }),
    (Ua = `transform`),
    (Wa = Ua + `Origin`),
    (Ga = function e(t, n) {
      var r = this,
        i = this.target,
        a = i.style,
        o = i._gsap;
      if (t in Sa && a) {
        if (((this.tfm = this.tfm || {}), t !== `transform`))
          ((t = Aa[t] || t),
            ~t.indexOf(`,`)
              ? t.split(`,`).forEach(function (e) {
                  return (r.tfm[e] = uo(i, e));
                })
              : (this.tfm[t] = o.x ? o[t] : uo(i, t)),
            t === Wa && (this.tfm.zOrigin = o.zOrigin));
        else
          return Aa.transform.split(`,`).forEach(function (t) {
            return e.call(r, t, n);
          });
        if (this.props.indexOf(Ua) >= 0) return;
        (o.svg && ((this.svgo = i.getAttribute(`data-svg-origin`)), this.props.push(Wa, n, ``)),
          (t = Ua));
      }
      (a || n) && this.props.push(t, n, a[t]);
    }),
    (Ka = function (e) {
      e.translate &&
        (e.removeProperty(`translate`), e.removeProperty(`scale`), e.removeProperty(`rotate`));
    }),
    (qa = function () {
      var e = this.props,
        t = this.target,
        n = t.style,
        r = t._gsap,
        i,
        a;
      for (i = 0; i < e.length; i += 3)
        e[i + 1]
          ? (t[e[i]] = e[i + 2])
          : e[i + 2]
            ? (n[e[i]] = e[i + 2])
            : n.removeProperty(
                e[i].substr(0, 2) === `--` ? e[i] : e[i].replace(Da, `-$1`).toLowerCase()
              );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        (r.svg && (r.renderTransform(), t.setAttribute(`data-svg-origin`, this.svgo || ``)),
          (i = ba()),
          (!i || !i.isStart) &&
            !n[Ua] &&
            (Ka(n),
            r.zOrigin &&
              n[Wa] &&
              ((n[Wa] += ` ` + r.zOrigin + `px`), (r.zOrigin = 0), r.renderTransform()),
            (r.uncache = 1)));
      }
    }),
    (Ja = function (e, t) {
      var n = { target: e, props: [], revert: qa, save: Ga };
      return (
        e._gsap || pa.core.getCache(e),
        t &&
          t.split(`,`).forEach(function (e) {
            return n.save(e);
          }),
        n
      );
    }),
    (Xa = function (e, t) {
      var n = ha.createElementNS
        ? ha.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
        : ha.createElement(e);
      return n && n.style ? n : ha.createElement(e);
    }),
    (Za = function e(t, n, r) {
      var i = getComputedStyle(t);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(Da, `-$1`).toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && e(t, $a(n) || n, 1)) ||
        ``
      );
    }),
    (Qa = `O,Moz,ms,Ms,Webkit`.split(`,`)),
    ($a = function (e, t, n) {
      var r = (t || va).style,
        i = 5;
      if (e in r && !n) return e;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Qa[i] + e in r); );
      return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Qa[i] : ``) + e;
    }),
    (eo = function () {
      xa() &&
        t.document &&
        ((ma = t),
        (ha = ma.document),
        (ga = ha.documentElement),
        (va = Xa(`div`) || { style: {} }),
        Xa(`div`),
        (Ua = $a(Ua)),
        (Wa = Ua + `Origin`),
        (va.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
        (Ya = !!$a(`perspective`)),
        (ba = pa.core.reverting),
        (_a = 1));
    }),
    (to = function e(t) {
      var n = Xa(
          `svg`,
          (this.ownerSVGElement && this.ownerSVGElement.getAttribute(`xmlns`)) ||
            `http://www.w3.org/2000/svg`
        ),
        r = this.parentNode,
        i = this.nextSibling,
        a = this.style.cssText,
        o;
      if ((ga.appendChild(n), n.appendChild(this), (this.style.display = `block`), t))
        try {
          ((o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e));
        } catch {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
        ga.removeChild(n),
        (this.style.cssText = a),
        o
      );
    }),
    (no = function (e, t) {
      for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
    }),
    (ro = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch {
        t = to.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) || e.getBBox === to || (t = to.call(e, !0)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +no(e, [`x`, `cx`, `x1`]) || 0,
              y: +no(e, [`y`, `cy`, `y1`]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    }),
    (io = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ro(e));
    }),
    (ao = function (e, t) {
      if (t) {
        var n = e.style,
          r;
        (t in Sa && t !== Wa && (t = Ua),
          n.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
              n.removeProperty(r === `--` ? t : t.replace(Da, `-$1`).toLowerCase()))
            : n.removeAttribute(t));
      }
    }),
    (oo = function (e, t, n, r, i, a) {
      var o = new $i(e._pt, t, n, 0, 1, a ? Ia : Fa);
      return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
    }),
    (so = { deg: 1, rad: 1, turn: 1 }),
    (co = { grid: 1, flex: 1 }),
    (lo = function e(t, n, r, i) {
      var a = parseFloat(r) || 0,
        o = (r + ``).trim().substr((a + ``).length) || `px`,
        s = va.style,
        c = Oa.test(n),
        l = t.tagName.toLowerCase() === `svg`,
        u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
        d = 100,
        f = i === `px`,
        p = i === `%`,
        m,
        h,
        g,
        _;
      if (i === o || !a || so[i] || so[o]) return a;
      if (
        (o !== `px` && !f && (a = e(t, n, r, `px`)),
        (_ = t.getCTM && io(t)),
        (p || o === `%`) && (Sa[n] || ~n.indexOf(`adius`)))
      )
        return (
          (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
          Ln(p ? (a / m) * d : (a / 100) * m)
        );
      if (
        ((s[c ? `width` : `height`] = d + (f ? o : i)),
        (h = ~n.indexOf(`adius`) || (i === `em` && t.appendChild && !l) ? t : t.parentNode),
        _ && (h = (t.ownerSVGElement || {}).parentNode),
        (!h || h === ha || !h.appendChild) && (h = ha.body),
        (g = h._gsap),
        g && p && g.width && c && g.time === ci.time && !g.uncache)
      )
        return Ln((a / g.width) * d);
      if (p && (n === `height` || n === `width`)) {
        var v = t.style[n];
        ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : ao(t, n));
      } else
        ((p || o === `%`) && !co[Za(h, `display`)] && (s.position = Za(t, `position`)),
          h === t && (s.position = `static`),
          h.appendChild(va),
          (m = va[u]),
          h.removeChild(va),
          (s.position = `absolute`));
      return (
        c && p && ((g = Pn(h)), (g.time = ci.time), (g.width = h[u])),
        Ln(f ? (m * a) / d : m && a ? (d / m) * a : 0)
      );
    }),
    (uo = function (e, t, n, r) {
      var i;
      return (
        _a || eo(),
        t in Aa && t !== `transform` && ((t = Aa[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
        Sa[t] && t !== `transform`
          ? ((i = Co(e, r)),
            (i =
              t === `transformOrigin`
                ? i.svg
                  ? i.origin
                  : wo(Za(e, Wa)) + ` ` + i.zOrigin + `px`
                : i[t]))
          : ((i = e.style[t]),
            (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
              (i = (go[t] && go[t](e, t, n)) || Za(e, t) || Fn(e, t) || +(t === `opacity`))),
        n && !~(i + ``).trim().indexOf(` `) ? lo(e, t, i, n) + n : i
      );
    }),
    (fo = function (e, t, n, r) {
      if (!n || n === `none`) {
        var i = $a(t, e, 1),
          a = i && Za(e, i, 1);
        a && a !== n ? ((t = i), (n = a)) : t === `borderColor` && (n = Za(e, `borderTopColor`));
      }
      var o = new $i(this._pt, e.style, t, 0, 1, qi),
        s = 0,
        c = 0,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b;
      if (
        ((o.b = n),
        (o.e = r),
        (n += ``),
        (r += ``),
        r === `auto` &&
          ((m = e.style[t]),
          (e.style[t] = r),
          (r = Za(e, t) || r),
          m ? (e.style[t] = m) : ao(e, t)),
        (l = [n, r]),
        oi(l),
        (n = l[0]),
        (r = l[1]),
        (d = n.match(rn) || []),
        (b = r.match(rn) || []),
        b.length)
      ) {
        for (; (u = rn.exec(r)); )
          ((h = u[0]),
            (_ = r.substring(s, u.index)),
            p
              ? (p = (p + 1) % 5)
              : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
            h !== (m = d[c++] || ``) &&
              ((f = parseFloat(m) || 0),
              (y = m.substr((f + ``).length)),
              h.charAt(1) === `=` && (h = zn(f, h) + y),
              (g = parseFloat(h)),
              (v = h.substr((g + ``).length)),
              (s = rn.lastIndex - v.length),
              v || ((v = v || Mt.units[t] || y), s === r.length && ((r += v), (o.e += v))),
              y !== v && (f = lo(e, t, m, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: _ || c === 1 ? _ : `,`,
                s: f,
                c: g - f,
                m: (p && p < 4) || t === `zIndex` ? Math.round : 0,
              })));
        o.c = s < r.length ? r.substring(s, r.length) : ``;
      } else o.r = t === `display` && r === `none` ? Ia : Fa;
      return (on.test(r) && (o.e = 0), (this._pt = o), o);
    }),
    (po = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` }),
    (mo = function (e) {
      var t = e.split(` `),
        n = t[0],
        r = t[1] || `50%`;
      return (
        (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
          ((e = n), (n = r), (r = e)),
        (t[0] = po[n] || n),
        (t[1] = po[r] || r),
        t.join(` `)
      );
    }),
    (ho = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var n = t.t,
          r = n.style,
          i = t.u,
          a = n._gsap,
          o,
          s,
          c;
        if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
        else
          for (i = i.split(`,`), c = i.length; --c > -1; )
            ((o = i[c]), Sa[o] && ((s = 1), (o = o === `transformOrigin` ? Wa : Ua)), ao(n, o));
        s &&
          (ao(n, Ua),
          a && (a.svg && n.removeAttribute(`transform`), Co(n, 1), (a.uncache = 1), Ka(r)));
      }
    }),
    (go = {
      clearProps: function (e, t, n, r, i) {
        if (i.data !== `isFromStart`) {
          var a = (e._pt = new $i(e._pt, t, n, 0, 0, ho));
          return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
        }
      },
    }),
    (_o = [1, 0, 0, 1, 0, 0]),
    (vo = {}),
    (yo = function (e) {
      return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
    }),
    (bo = function (e) {
      var t = Za(e, Ua);
      return yo(t) ? _o : t.substr(7).match(nn).map(Ln);
    }),
    (xo = function (e, t) {
      var n = e._gsap || Pn(e),
        r = e.style,
        i = bo(e),
        a,
        o,
        s,
        c;
      return n.svg && e.getAttribute(`transform`)
        ? ((s = e.transform.baseVal.consolidate().matrix),
          (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
          i.join(`,`) === `1,0,0,1,0,0` ? _o : i)
        : (i === _o &&
            !e.offsetParent &&
            e !== ga &&
            !n.svg &&
            ((s = r.display),
            (r.display = `block`),
            (a = e.parentNode),
            (!a || !e.offsetParent) && ((c = 1), (o = e.nextElementSibling), ga.appendChild(e)),
            (i = bo(e)),
            s ? (r.display = s) : ao(e, `display`),
            c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : ga.removeChild(e))),
          t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
    }),
    (So = function (e, t, n, r, i, a) {
      var o = e._gsap,
        s = i || xo(e, !0),
        c = o.xOrigin || 0,
        l = o.yOrigin || 0,
        u = o.xOffset || 0,
        d = o.yOffset || 0,
        f = s[0],
        p = s[1],
        m = s[2],
        h = s[3],
        g = s[4],
        _ = s[5],
        v = t.split(` `),
        y = parseFloat(v[0]) || 0,
        b = parseFloat(v[1]) || 0,
        x,
        S,
        C,
        w;
      (n
        ? s !== _o &&
          (S = f * h - p * m) &&
          ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
          (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
          (y = C),
          (b = w))
        : ((x = ro(e)),
          (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
          (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
        r || (r !== !1 && o.smooth)
          ? ((g = y - c),
            (_ = b - l),
            (o.xOffset = u + (g * f + _ * m) - g),
            (o.yOffset = d + (g * p + _ * h) - _))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = y),
        (o.yOrigin = b),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!n),
        (e.style[Wa] = `0px 0px`),
        a &&
          (oo(a, o, `xOrigin`, c, y),
          oo(a, o, `yOrigin`, l, b),
          oo(a, o, `xOffset`, u, o.xOffset),
          oo(a, o, `yOffset`, d, o.yOffset)),
        e.setAttribute(`data-svg-origin`, y + ` ` + b));
    }),
    (Co = function (e, t) {
      var n = e._gsap || new Ci(e);
      if (`x` in n && !t && !n.uncache) return n;
      var r = e.style,
        i = n.scaleX < 0,
        a = `px`,
        o = `deg`,
        s = getComputedStyle(e),
        c = Za(e, Wa) || `0`,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        j,
        M,
        N,
        P,
        ee,
        te,
        F,
        I,
        L,
        R;
      return (
        (l = u = d = m = h = g = _ = v = y = 0),
        (f = p = 1),
        (n.svg = !!(e.getCTM && io(e))),
        s.translate &&
          ((s.translate !== `none` || s.scale !== `none` || s.rotate !== `none`) &&
            (r[Ua] =
              (s.translate === `none`
                ? ``
                : `translate3d(` +
                  (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                  `) `) +
              (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) +
              (s.scale === `none` ? `` : `scale(` + s.scale.split(` `).join(`,`) + `) `) +
              (s[Ua] === `none` ? `` : s[Ua])),
          (r.scale = r.rotate = r.translate = `none`)),
        (S = xo(e, n.svg)),
        n.svg &&
          (n.uncache
            ? ((N = e.getBBox()),
              (c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`),
              (M = ``))
            : (M = !t && e.getAttribute(`data-svg-origin`)),
          So(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
        (b = n.xOrigin || 0),
        (x = n.yOrigin || 0),
        S !== _o &&
          ((E = S[0]),
          (D = S[1]),
          (O = S[2]),
          (k = S[3]),
          (l = A = S[4]),
          (u = j = S[5]),
          S.length === 6
            ? ((f = Math.sqrt(E * E + D * D)),
              (p = Math.sqrt(k * k + O * O)),
              (m = E || D ? Ta(D, E) * Ca : 0),
              (_ = O || k ? Ta(O, k) * Ca + m : 0),
              _ && (p *= Math.abs(Math.cos(_ * wa))),
              n.svg && ((l -= b - (b * E + x * O)), (u -= x - (b * D + x * k))))
            : ((R = S[6]),
              (I = S[7]),
              (ee = S[8]),
              (te = S[9]),
              (F = S[10]),
              (L = S[11]),
              (l = S[12]),
              (u = S[13]),
              (d = S[14]),
              (C = Ta(R, F)),
              (h = C * Ca),
              C &&
                ((w = Math.cos(-C)),
                (T = Math.sin(-C)),
                (M = A * w + ee * T),
                (N = j * w + te * T),
                (P = R * w + F * T),
                (ee = A * -T + ee * w),
                (te = j * -T + te * w),
                (F = R * -T + F * w),
                (L = I * -T + L * w),
                (A = M),
                (j = N),
                (R = P)),
              (C = Ta(-O, F)),
              (g = C * Ca),
              C &&
                ((w = Math.cos(-C)),
                (T = Math.sin(-C)),
                (M = E * w - ee * T),
                (N = D * w - te * T),
                (P = O * w - F * T),
                (L = k * T + L * w),
                (E = M),
                (D = N),
                (O = P)),
              (C = Ta(D, E)),
              (m = C * Ca),
              C &&
                ((w = Math.cos(C)),
                (T = Math.sin(C)),
                (M = E * w + D * T),
                (N = A * w + j * T),
                (D = D * w - E * T),
                (j = j * w - A * T),
                (E = M),
                (A = N)),
              h && Math.abs(h) + Math.abs(m) > 359.9 && ((h = m = 0), (g = 180 - g)),
              (f = Ln(Math.sqrt(E * E + D * D + O * O))),
              (p = Ln(Math.sqrt(j * j + R * R))),
              (C = Ta(A, j)),
              (_ = Math.abs(C) > 2e-4 ? C * Ca : 0),
              (y = L ? 1 / (L < 0 ? -L : L) : 0)),
          n.svg &&
            ((M = e.getAttribute(`transform`)),
            (n.forceCSS = e.setAttribute(`transform`, ``) || !yo(Za(e, Ua))),
            M && e.setAttribute(`transform`, M))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (i
            ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
            : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
        (t ||= n.uncache),
        (n.x =
          l -
          ((n.xPercent =
            l &&
            ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
            ? (e.offsetWidth * n.xPercent) / 100
            : 0) +
          a),
        (n.y =
          u -
          ((n.yPercent =
            u &&
            ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetHeight * n.yPercent) / 100
            : 0) +
          a),
        (n.z = d + a),
        (n.scaleX = Ln(f)),
        (n.scaleY = Ln(p)),
        (n.rotation = Ln(m) + o),
        (n.rotationX = Ln(h) + o),
        (n.rotationY = Ln(g) + o),
        (n.skewX = _ + o),
        (n.skewY = v + o),
        (n.transformPerspective = y + a),
        (n.zOrigin = parseFloat(c.split(` `)[2]) || (!t && n.zOrigin) || 0) && (r[Wa] = wo(c)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = Mt.force3D),
        (n.renderTransform = n.svg ? jo : Ya ? Ao : Eo),
        (n.uncache = 0),
        n
      );
    }),
    (wo = function (e) {
      return (e = e.split(` `))[0] + ` ` + e[1];
    }),
    (To = function (e, t, n) {
      var r = Tr(t);
      return Ln(parseFloat(t) + parseFloat(lo(e, `x`, n + `px`, r))) + r;
    }),
    (Eo = function (e, t) {
      ((t.z = `0px`), (t.rotationY = t.rotationX = `0deg`), (t.force3D = 0), Ao(e, t));
    }),
    (Do = `0deg`),
    (Oo = `0px`),
    (ko = `) `),
    (Ao = function (e, t) {
      var n = t || this,
        r = n.xPercent,
        i = n.yPercent,
        a = n.x,
        o = n.y,
        s = n.z,
        c = n.rotation,
        l = n.rotationY,
        u = n.rotationX,
        d = n.skewX,
        f = n.skewY,
        p = n.scaleX,
        m = n.scaleY,
        h = n.transformPerspective,
        g = n.force3D,
        _ = n.target,
        v = n.zOrigin,
        y = ``,
        b = (g === `auto` && e && e !== 1) || g === !0;
      if (v && (u !== Do || l !== Do)) {
        var x = parseFloat(l) * wa,
          S = Math.sin(x),
          C = Math.cos(x),
          w;
        ((x = parseFloat(u) * wa),
          (w = Math.cos(x)),
          (a = To(_, a, S * w * -v)),
          (o = To(_, o, -Math.sin(x) * -v)),
          (s = To(_, s, C * w * -v + v)));
      }
      (h !== Oo && (y += `perspective(` + h + ko),
        (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
        (b || a !== Oo || o !== Oo || s !== Oo) &&
          (y +=
            s !== Oo || b
              ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
              : `translate(` + a + `, ` + o + ko),
        c !== Do && (y += `rotate(` + c + ko),
        l !== Do && (y += `rotateY(` + l + ko),
        u !== Do && (y += `rotateX(` + u + ko),
        (d !== Do || f !== Do) && (y += `skew(` + d + `, ` + f + ko),
        (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + ko),
        (_.style[Ua] = y || `translate(0, 0)`));
    }),
    (jo = function (e, t) {
      var n = t || this,
        r = n.xPercent,
        i = n.yPercent,
        a = n.x,
        o = n.y,
        s = n.rotation,
        c = n.skewX,
        l = n.skewY,
        u = n.scaleX,
        d = n.scaleY,
        f = n.target,
        p = n.xOrigin,
        m = n.yOrigin,
        h = n.xOffset,
        g = n.yOffset,
        _ = n.forceCSS,
        v = parseFloat(a),
        y = parseFloat(o),
        b,
        x,
        S,
        C,
        w;
      ((s = parseFloat(s)),
        (c = parseFloat(c)),
        (l = parseFloat(l)),
        l && ((l = parseFloat(l)), (c += l), (s += l)),
        s || c
          ? ((s *= wa),
            (c *= wa),
            (b = Math.cos(s) * u),
            (x = Math.sin(s) * u),
            (S = Math.sin(s - c) * -d),
            (C = Math.cos(s - c) * d),
            c &&
              ((l *= wa),
              (w = Math.tan(c - l)),
              (w = Math.sqrt(1 + w * w)),
              (S *= w),
              (C *= w),
              l && ((w = Math.tan(l)), (w = Math.sqrt(1 + w * w)), (b *= w), (x *= w))),
            (b = Ln(b)),
            (x = Ln(x)),
            (S = Ln(S)),
            (C = Ln(C)))
          : ((b = u), (C = d), (x = S = 0)),
        ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
          ((v = lo(f, `x`, a, `px`)), (y = lo(f, `y`, o, `px`))),
        (p || m || h || g) &&
          ((v = Ln(v + p - (p * b + m * S) + h)), (y = Ln(y + m - (p * x + m * C) + g))),
        (r || i) &&
          ((w = f.getBBox()),
          (v = Ln(v + (r / 100) * w.width)),
          (y = Ln(y + (i / 100) * w.height))),
        (w = `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
        f.setAttribute(`transform`, w),
        _ && (f.style[Ua] = w));
    }),
    (Mo = function (e, t, n, r, i) {
      var a = 360,
        o = Gt(i),
        s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Ca : 1) - r,
        c = r + s + `deg`,
        l,
        u;
      return (
        o &&
          ((l = i.split(`_`)[1]),
          l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
          l === `cw` && s < 0
            ? (s = ((s + a * Ea) % a) - ~~(s / a) * a)
            : l === `ccw` && s > 0 && (s = ((s - a * Ea) % a) - ~~(s / a) * a)),
        (e._pt = u = new $i(e._pt, t, n, r, s, Ma)),
        (u.e = c),
        (u.u = `deg`),
        e._props.push(n),
        u
      );
    }),
    (No = function (e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }),
    (Po = function (e, t, n) {
      var r = No({}, n._gsap),
        i = `perspective,force3D,transformOrigin,svgOrigin`,
        a = n.style,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      for (s in (r.svg
        ? ((c = n.getAttribute(`transform`)),
          n.setAttribute(`transform`, ``),
          (a[Ua] = t),
          (o = Co(n, 1)),
          ao(n, Ua),
          n.setAttribute(`transform`, c))
        : ((c = getComputedStyle(n)[Ua]), (a[Ua] = t), (o = Co(n, 1)), (a[Ua] = c)),
      Sa))
        ((c = r[s]),
          (l = o[s]),
          c !== l &&
            i.indexOf(s) < 0 &&
            ((f = Tr(c)),
            (p = Tr(l)),
            (u = f === p ? parseFloat(c) : lo(n, s, c, p)),
            (d = parseFloat(l)),
            (e._pt = new $i(e._pt, o, s, u, d - u, ja)),
            (e._pt.u = p || 0),
            e._props.push(s)));
      No(o, r);
    }),
    In(`padding,margin,Width,Radius`, function (e, t) {
      var n = `Top`,
        r = `Right`,
        i = `Bottom`,
        a = `Left`,
        o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
          return t < 2 ? e + n : `border` + n + e;
        });
      go[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
        var a, s;
        if (arguments.length < 4)
          return (
            (a = o.map(function (t) {
              return uo(e, t, n);
            })),
            (s = a.join(` `)),
            s.split(a[0]).length === 5 ? a[0] : s
          );
        ((a = (r + ``).split(` `)),
          (s = {}),
          o.forEach(function (e, t) {
            return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
          }),
          e.init(t, s, i));
      };
    }),
    (Fo = {
      name: `css`,
      register: eo,
      targetTest: function (e) {
        return e.style && e.nodeType;
      },
      init: function (e, t, n, r, i) {
        var a = this._props,
          o = e.style,
          s = n.vars.startAt,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C;
        for (m in (_a || eo(),
        (this.styles = this.styles || Ja(e)),
        (C = this.styles.props),
        (this.tween = n),
        t))
          if (m !== `autoRound` && ((l = t[m]), !(On[m] && ki(m, t, n, r, e, i)))) {
            if (
              ((f = typeof l),
              (p = go[m]),
              f === `function` && ((l = l.call(n, r, e, i)), (f = typeof l)),
              f === `string` && ~l.indexOf(`random(`) && (l = Ur(l)),
              p)
            )
              p(this, e, m, l, n) && (S = 1);
            else if (m.substr(0, 2) === `--`)
              ((c = (getComputedStyle(e).getPropertyValue(m) + ``).trim()),
                (l += ``),
                (ii.lastIndex = 0),
                ii.test(c) || ((h = Tr(c)), (g = Tr(l))),
                g ? h !== g && (c = lo(e, m, c, g) + g) : h && (l += h),
                this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
                a.push(m),
                C.push(m, 0, o[m]));
            else if (f !== `undefined`) {
              if (
                (s && m in s
                  ? ((c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m]),
                    Gt(c) && ~c.indexOf(`random(`) && (c = Ur(c)),
                    Tr(c + ``) || c === `auto` || (c += Mt.units[m] || Tr(uo(e, m)) || ``),
                    (c + ``).charAt(1) === `=` && (c = uo(e, m)))
                  : (c = uo(e, m)),
                (d = parseFloat(c)),
                (_ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2)),
                _ && (l = l.substr(2)),
                (u = parseFloat(l)),
                m in Aa &&
                  (m === `autoAlpha` &&
                    (d === 1 && uo(e, `visibility`) === `hidden` && u && (d = 0),
                    C.push(`visibility`, 0, o.visibility),
                    oo(
                      this,
                      o,
                      `visibility`,
                      d ? `inherit` : `hidden`,
                      u ? `inherit` : `hidden`,
                      !u
                    )),
                  m !== `scale` &&
                    m !== `transform` &&
                    ((m = Aa[m]), ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
                (v = m in Sa),
                v)
              ) {
                if (
                  (this.styles.save(m),
                  y ||
                    ((b = e._gsap),
                    (b.renderTransform && !t.parseTransform) || Co(e, t.parseTransform),
                    (x = t.smoothOrigin !== !1 && b.smooth),
                    (y = this._pt = new $i(this._pt, o, Ua, 0, 1, b.renderTransform, b, 0, -1)),
                    (y.dep = 1)),
                  m === `scale`)
                )
                  ((this._pt = new $i(
                    this._pt,
                    b,
                    `scaleY`,
                    b.scaleY,
                    (_ ? zn(b.scaleY, _ + u) : u) - b.scaleY || 0,
                    ja
                  )),
                    (this._pt.u = 0),
                    a.push(`scaleY`, m),
                    (m += `X`));
                else if (m === `transformOrigin`) {
                  (C.push(Wa, 0, o[Wa]),
                    (l = mo(l)),
                    b.svg
                      ? So(e, l, 0, x, 0, this)
                      : ((g = parseFloat(l.split(` `)[2]) || 0),
                        g !== b.zOrigin && oo(this, b, `zOrigin`, b.zOrigin, g),
                        oo(this, o, m, wo(c), wo(l))));
                  continue;
                } else if (m === `svgOrigin`) {
                  So(e, l, 1, x, 0, this);
                  continue;
                } else if (m in vo) {
                  Mo(this, b, m, d, _ ? zn(d, _ + l) : l);
                  continue;
                } else if (m === `smoothOrigin`) {
                  oo(this, b, `smooth`, b.smooth, l);
                  continue;
                } else if (m === `force3D`) {
                  b[m] = l;
                  continue;
                } else if (m === `transform`) {
                  Po(this, l, e);
                  continue;
                }
              } else m in o || (m = $a(m) || m);
              if (v || ((u || u === 0) && (d || d === 0) && !ka.test(l) && m in o))
                ((h = (c + ``).substr((d + ``).length)),
                  (u ||= 0),
                  (g = Tr(l) || (m in Mt.units ? Mt.units[m] : h)),
                  h !== g && (d = lo(e, m, c, g)),
                  (this._pt = new $i(
                    this._pt,
                    v ? b : o,
                    m,
                    d,
                    (_ ? zn(d, _ + u) : u) - d,
                    !v && (g === `px` || m === `zIndex`) && t.autoRound !== !1 ? Pa : ja
                  )),
                  (this._pt.u = g || 0),
                  h !== g && g !== `%` && ((this._pt.b = c), (this._pt.r = Na)));
              else if (m in o) fo.call(this, e, m, c, _ ? _ + l : l);
              else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
              else if (m !== `parseTransform`) {
                _n(m, l);
                continue;
              }
              (v || (m in o ? C.push(m, 0, o[m]) : C.push(m, 1, c || e[m])), a.push(m));
            }
          }
        S && Qi(this);
      },
      render: function (e, t) {
        if (t.tween._time || !ba()) for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next));
        else t.styles.revert();
      },
      get: uo,
      aliases: Aa,
      getSetter: function (e, t, n) {
        var r = Aa[t];
        return (
          r && r.indexOf(`,`) < 0 && (t = r),
          t in Sa && t !== Wa && (e._gsap.x || uo(e, `x`))
            ? n && ya === n
              ? t === `scale`
                ? Ba
                : za
              : (ya = n || {}) && (t === `scale` ? Va : Ha)
            : e.style && !Jt(e.style[t])
              ? La
              : ~t.indexOf(`-`)
                ? Ra
                : Wi(e, t)
        );
      },
      core: { _removeProperty: ao, _getMatrix: xo },
    }),
    (pa.utils.checkPrefix = $a),
    (pa.core.getStyleSaver = Ja),
    (function (e, t, n, r) {
      var i = In(e + `,` + t + `,` + n, function (e) {
        Sa[e] = 1;
      });
      (In(t, function (e) {
        ((Mt.units[e] = `deg`), (vo[e] = 1));
      }),
        (Aa[i[13]] = e + `,` + t),
        In(r, function (e) {
          var t = e.split(`:`);
          Aa[t[1]] = i[t[0]];
        }));
    })(
      `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
      `rotation,rotationX,rotationY,skewX,skewY`,
      `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
      `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`
    ),
    In(
      `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
      function (e) {
        Mt.units[e] = `px`;
      }
    ),
    pa.registerPlugin(Fo),
    (Io = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    (Lo = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    (Ro = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi),
    (zo = /(^[#\.][a-z]|[a-y][a-z])/i),
    (Bo = Math.PI / 180),
    (Vo = 180 / Math.PI),
    (Ho = Math.sin),
    (Uo = Math.cos),
    (Wo = Math.abs),
    (Go = Math.sqrt),
    (Ko = Math.atan2),
    (qo = 1e8),
    (Jo = function (e) {
      return typeof e == `string`;
    }),
    (Yo = function (e) {
      return typeof e == `number`;
    }),
    (Xo = function (e) {
      return typeof e > `u`;
    }),
    (Zo = {}),
    (Qo = {}),
    ($o = 1e5),
    (es = function (e) {
      return Math.round(((e + qo) % 1) * $o) / $o || (e < 0 ? 0 : 1);
    }),
    (ts = function (e) {
      return Math.round(e * $o) / $o || 0;
    }),
    (ns = function (e) {
      return Math.round(e * 1e10) / 1e10 || 0;
    }),
    (rs = function (e, t, n, r) {
      var i = e[t],
        a = r === 1 ? 6 : ht(i, n, r);
      if ((a || !r) && a + n + 2 < i.length)
        return (e.splice(t, 0, i.slice(0, n + a + 2)), i.splice(0, n + a), 1);
    }),
    (is = function (e, t, n) {
      var r = e.length,
        i = ~~(n * r);
      if (e[i] > t) {
        for (; --i && e[i] > t; );
        i < 0 && (i = 0);
      } else for (; e[++i] < t && i < r; );
      return i < r ? i : r - 1;
    }),
    (as = function (e, t) {
      var n = e.length;
      for (t || e.reverse(); n--; ) e[n].reversed || lt(e[n]);
    }),
    (os = function (e, t) {
      return (
        (t.totalLength = e.totalLength),
        e.samples
          ? ((t.samples = e.samples.slice(0)),
            (t.lookup = e.lookup.slice(0)),
            (t.minLength = e.minLength),
            (t.resolution = e.resolution))
          : e.totalPoints && (t.totalPoints = e.totalPoints),
        t
      );
    }),
    (ss = function (e, t) {
      var n = e.length,
        r = e[n - 1] || [],
        i = r.length;
      (n && t[0] === r[i - 2] && t[1] === r[i - 1] && ((t = r.concat(t.slice(2))), n--),
        (e[n] = t));
    }),
    (cs = function (e, t) {
      var n = document.createElementNS(`http://www.w3.org/2000/svg`, `path`),
        r = [].slice.call(e.attributes),
        i = r.length,
        a;
      for (t = `,` + t + `,`; --i > -1; )
        ((a = r[i].nodeName.toLowerCase()),
          t.indexOf(`,` + a + `,`) < 0 && n.setAttributeNS(null, a, r[i].nodeValue));
      return n;
    }),
    (ls = {
      rect: `rx,ry,x,y,width,height`,
      circle: `r,cx,cy`,
      ellipse: `rx,ry,cx,cy`,
      line: `x1,x2,y1,y2`,
    }),
    (us = function (e, t) {
      for (var n = t ? t.split(`,`) : [], r = {}, i = n.length; --i > -1; )
        r[n[i]] = +e.getAttribute(n[i]) || 0;
      return r;
    }),
    (ps = function () {
      return ds || (typeof t < `u` && (ds = t.gsap) && ds.registerPlugin && ds);
    }),
    (ms = function () {
      ((ds = ps()),
        ds
          ? (ds.registerEase(`_CE`, Cs.create), (fs = 1))
          : console.warn(`Please gsap.registerPlugin(CustomEase)`));
    }),
    (hs = 0x56bc75e2d63100000),
    (gs = function (e) {
      return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
    }),
    (_s = 1),
    (vs = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi),
    (ys = /[cLlsSaAhHvVtTqQ]/g),
    (bs = function (e) {
      var t = e.length,
        n = hs,
        r;
      for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
      return n;
    }),
    (xs = function (e, t, n) {
      !n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
      var r = e[0] * -1,
        i = -n,
        a = e.length,
        o = 1 / (+e[a - 2] + r),
        s =
          -t ||
          (Math.abs(e[a - 1] - +e[1]) < 0.01 * (e[a - 2] - +e[0]) ? bs(e) + i : +e[a - 1] + i),
        c;
      for (s = s ? 1 / s : -o, c = 0; c < a; c += 2)
        ((e[c] = (+e[c] + r) * o), (e[c + 1] = (+e[c + 1] + i) * s));
    }),
    (Ss = function e(t, n, r, i, a, o, s, c, l, u, d) {
      var f = (t + r) / 2,
        p = (n + i) / 2,
        m = (r + a) / 2,
        h = (i + o) / 2,
        g = (a + s) / 2,
        _ = (o + c) / 2,
        v = (f + m) / 2,
        y = (p + h) / 2,
        b = (m + g) / 2,
        x = (h + _) / 2,
        S = (v + b) / 2,
        C = (y + x) / 2,
        w = s - t,
        T = c - n,
        E = Math.abs((r - s) * T - (i - c) * w),
        D = Math.abs((a - s) * T - (o - c) * w),
        O;
      return (
        u ||
          ((u = [
            { x: t, y: n },
            { x: s, y: c },
          ]),
          (d = 1)),
        u.splice(d || u.length - 1, 0, { x: S, y: C }),
        (E + D) * (E + D) > l * (w * w + T * T) &&
          ((O = u.length),
          e(t, n, f, p, v, y, S, C, l, u, d),
          e(S, C, b, x, g, _, s, c, l, u, d + 1 + (u.length - O))),
        u
      );
    }),
    (Cs = (function () {
      function e(e, t, n) {
        (fs || ms(), (this.id = e), _s && this.setData(t, n));
      }
      var t = e.prototype;
      return (
        (t.setData = function (e, t) {
          ((t ||= {}), (e ||= `0,0,1,1`));
          var n = e.match(vs),
            r = 1,
            i = [],
            a = [],
            o = t.precision || 1,
            s = o <= 1,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g;
          if (
            ((this.data = e),
            (ys.test(e) || (~e.indexOf(`M`) && e.indexOf(`C`) < 0)) && (n = bt(e)[0]),
            (c = n.length),
            c === 4)
          )
            (n.unshift(0, 0), n.push(1, 1), (c = 8));
          else if ((c - 2) % 6) throw `Invalid CustomEase`;
          for (
            (+n[0] != 0 || +n[c - 2] != 1) && xs(n, t.height, t.originY), this.segment = n, d = 2;
            d < c;
            d += 6
          )
            ((l = { x: +n[d - 2], y: +n[d - 1] }),
              (u = { x: +n[d + 4], y: +n[d + 5] }),
              i.push(l, u),
              Ss(
                l.x,
                l.y,
                +n[d],
                +n[d + 1],
                +n[d + 2],
                +n[d + 3],
                u.x,
                u.y,
                1 / (o * 2e5),
                i,
                i.length - 1
              ));
          for (c = i.length, d = 0; d < c; d++)
            ((m = i[d]),
              (h = i[d - 1] || m),
              (m.x > h.x || (h.y !== m.y && h.x === m.x) || m === h) && m.x <= 1
                ? ((h.cx = m.x - h.x),
                  (h.cy = m.y - h.y),
                  (h.n = m),
                  (h.nx = m.x),
                  s && d > 1 && Math.abs(h.cy / h.cx - i[d - 2].cy / i[d - 2].cx) > 2 && (s = 0),
                  h.cx < r &&
                    (h.cx
                      ? (r = h.cx)
                      : ((h.cx = 0.001),
                        d === c - 1 && ((h.x -= 0.001), (r = Math.min(r, 0.001)), (s = 0)))))
                : (i.splice(d--, 1), c--));
          if (((c = (1 / r + 1) | 0), (f = 1 / c), (p = 0), (m = i[0]), s)) {
            for (d = 0; d < c; d++)
              ((g = d * f),
                m.nx < g && (m = i[++p]),
                (l = m.y + ((g - m.x) / m.cx) * m.cy),
                (a[d] = { x: g, cx: f, y: l, cy: 0, nx: 9 }),
                d && (a[d - 1].cy = l - a[d - 1].y));
            a[c - 1].cy = i[i.length - 1].y - l;
          } else {
            for (d = 0; d < c; d++) (m.nx < d * f && (m = i[++p]), (a[d] = m));
            p < i.length - 1 && (a[d - 1] = i[i.length - 2]);
          }
          return (
            (this.ease = function (e) {
              var t = a[(e * c) | 0] || a[c - 1];
              return (t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy);
            }),
            (this.ease.custom = this),
            this.id && ds && ds.registerEase(this.id, this.ease),
            this
          );
        }),
        (t.getSVGData = function (t) {
          return e.getSVGData(this, t);
        }),
        (e.create = function (t, n, r) {
          return new e(t, n, r).ease;
        }),
        (e.register = function (e) {
          ((ds = e), ms());
        }),
        (e.get = function (e) {
          return ds.parseEase(e);
        }),
        (e.getSVGData = function (t, n) {
          n ||= {};
          var r = n.width || 100,
            i = n.height || 100,
            a = n.x || 0,
            o = (n.y || 0) + i,
            s = ds.utils.toArray(n.path)[0],
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            h,
            g,
            _;
          if (
            (n.invert && ((i = -i), (o = 0)),
            typeof t == `string` && (t = ds.parseEase(t)),
            t.custom && (t = t.custom),
            t instanceof e)
          )
            c = Ct(vt([t.segment], r, 0, 0, -i, a, o));
          else {
            for (
              c = [a, o],
                m = Math.max(5, (n.precision || 1) * 200),
                d = 1 / m,
                m += 2,
                h = 5 / m,
                g = gs(a + d * r),
                _ = gs(o + t(d) * -i),
                l = (_ - o) / (g - a),
                u = 2;
              u < m;
              u++
            )
              ((f = gs(a + u * d * r)),
                (p = gs(o + t(u * d) * -i)),
                (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) &&
                  (c.push(g, _), (l = (p - _) / (f - g))),
                (g = f),
                (_ = p));
            c = `M` + c.join(`,`);
          }
          return (s && s.setAttribute(`d`, c), c);
        }),
        e
      );
    })()),
    ps() && ds.registerPlugin(Cs),
    (Cs.version = `3.12.5`),
    (Ms = `transform`),
    (Ns = Ms + `Origin`),
    (Fs = function (e) {
      var n = e.ownerDocument || e;
      for (
        !(Ms in e.style) &&
        (`msTransform` in e.style) &&
        ((Ms = `msTransform`), (Ns = Ms + `Origin`));
        n.parentNode && (n = n.parentNode);
      );
      if (((Ts = t), (As = new Js()), n)) {
        ((ws = n),
          (Es = n.documentElement),
          (Ds = n.body),
          (js = ws.createElementNS(`http://www.w3.org/2000/svg`, `g`)),
          (js.style.transform = `none`));
        var r = n.createElement(`div`),
          i = n.createElement(`div`),
          a = n && (n.body || n.firstElementChild);
        a &&
          a.appendChild &&
          (a.appendChild(r),
          r.appendChild(i),
          r.setAttribute(`style`, `position:static;transform:translate3d(0,0,1px)`),
          (Ps = i.offsetParent !== r),
          a.removeChild(r));
      }
      return n;
    }),
    (Is = function (e) {
      for (var t, n; e && e !== Ds; )
        ((n = e._gsap),
          n && n.uncache && n.get(e, `x`),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), t ? t.push(n) : (t = [n])),
          (e = e.parentNode));
      return t;
    }),
    (Ls = []),
    (Rs = []),
    (zs = function () {
      return Ts.pageYOffset || ws.scrollTop || Es.scrollTop || Ds.scrollTop || 0;
    }),
    (Bs = function () {
      return Ts.pageXOffset || ws.scrollLeft || Es.scrollLeft || Ds.scrollLeft || 0;
    }),
    (Vs = function (e) {
      return e.ownerSVGElement || ((e.tagName + ``).toLowerCase() === `svg` ? e : null);
    }),
    (Hs = function e(t) {
      if (Ts.getComputedStyle(t).position === `fixed`) return !0;
      if (((t = t.parentNode), t && t.nodeType === 1)) return e(t);
    }),
    (Us = function e(t, n) {
      if (t.parentNode && (ws || Fs(t))) {
        var r = Vs(t),
          i = r
            ? r.getAttribute(`xmlns`) || `http://www.w3.org/2000/svg`
            : `http://www.w3.org/1999/xhtml`,
          a = r ? (n ? `rect` : `g`) : `div`,
          o = n === 2 ? 100 : 0,
          s = n === 3 ? 100 : 0,
          c = `position:absolute;display:block;pointer-events:none;margin:0;padding:0;`,
          l = ws.createElementNS
            ? ws.createElementNS(i.replace(/^https/, `http`), a)
            : ws.createElement(a);
        return (
          n &&
            (r
              ? ((ks ||= e(t)),
                l.setAttribute(`width`, 0.01),
                l.setAttribute(`height`, 0.01),
                l.setAttribute(`transform`, `translate(` + o + `,` + s + `)`),
                ks.appendChild(l))
              : (Os || ((Os = e(t)), (Os.style.cssText = c)),
                (l.style.cssText = c + `width:0.1px;height:0.1px;top:` + s + `px;left:` + o + `px`),
                Os.appendChild(l))),
          l
        );
      }
      throw `Need document and parent.`;
    }),
    (Ws = function (e) {
      for (var t = new Js(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
      return t;
    }),
    (Gs = function (e) {
      var t = e.getCTM(),
        n;
      return (
        t ||
          ((n = e.style[Ms]),
          (e.style[Ms] = `none`),
          e.appendChild(js),
          (t = js.getCTM()),
          e.removeChild(js),
          n
            ? (e.style[Ms] = n)
            : e.style.removeProperty(Ms.replace(/([A-Z])/g, `-$1`).toLowerCase())),
        t || As.clone()
      );
    }),
    (Ks = function (e, t) {
      var n = Vs(e),
        r = e === n,
        i = n ? Ls : Rs,
        a = e.parentNode,
        o,
        s,
        c,
        l,
        u,
        d;
      if (e === Ts) return e;
      if ((i.length || i.push(Us(e, 1), Us(e, 2), Us(e, 3)), (o = n ? ks : Os), n))
        (r
          ? ((c = Gs(e)), (l = -c.e / c.a), (u = -c.f / c.d), (s = As))
          : e.getBBox
            ? ((c = e.getBBox()),
              (s = e.transform ? e.transform.baseVal : {}),
              (s = s.numberOfItems ? (s.numberOfItems > 1 ? Ws(s) : s.getItem(0).matrix) : As),
              (l = s.a * c.x + s.c * c.y),
              (u = s.b * c.x + s.d * c.y))
            : ((s = new Js()), (l = u = 0)),
          t && e.tagName.toLowerCase() === `g` && (l = u = 0),
          (r ? n : a).appendChild(o),
          o.setAttribute(
            `transform`,
            `matrix(` +
              s.a +
              `,` +
              s.b +
              `,` +
              s.c +
              `,` +
              s.d +
              `,` +
              (s.e + l) +
              `,` +
              (s.f + u) +
              `)`
          ));
      else {
        if (((l = u = 0), Ps))
          for (s = e.offsetParent, c = e; (c &&= c.parentNode) && c !== s && c.parentNode; )
            (Ts.getComputedStyle(c)[Ms] + ``).length > 4 &&
              ((l = c.offsetLeft), (u = c.offsetTop), (c = 0));
        if (((d = Ts.getComputedStyle(e)), d.position !== `absolute` && d.position !== `fixed`))
          for (s = e.offsetParent; a && a !== s; )
            ((l += a.scrollLeft || 0), (u += a.scrollTop || 0), (a = a.parentNode));
        ((c = o.style),
          (c.top = e.offsetTop - u + `px`),
          (c.left = e.offsetLeft - l + `px`),
          (c[Ms] = d[Ms]),
          (c[Ns] = d[Ns]),
          (c.position = d.position === `fixed` ? `fixed` : `absolute`),
          e.parentNode.appendChild(o));
      }
      return o;
    }),
    (qs = function (e, t, n, r, i, a, o) {
      return ((e.a = t), (e.b = n), (e.c = r), (e.d = i), (e.e = a), (e.f = o), e);
    }),
    (Js = (function () {
      function e(e, t, n, r, i, a) {
        (e === void 0 && (e = 1),
          t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          r === void 0 && (r = 1),
          i === void 0 && (i = 0),
          a === void 0 && (a = 0),
          qs(this, e, t, n, r, i, a));
      }
      var t = e.prototype;
      return (
        (t.inverse = function () {
          var e = this.a,
            t = this.b,
            n = this.c,
            r = this.d,
            i = this.e,
            a = this.f,
            o = e * r - t * n || 1e-10;
          return qs(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
        }),
        (t.multiply = function (e) {
          var t = this.a,
            n = this.b,
            r = this.c,
            i = this.d,
            a = this.e,
            o = this.f,
            s = e.a,
            c = e.c,
            l = e.b,
            u = e.d,
            d = e.e,
            f = e.f;
          return qs(
            this,
            s * t + l * r,
            s * n + l * i,
            c * t + u * r,
            c * n + u * i,
            a + d * t + f * r,
            o + d * n + f * i
          );
        }),
        (t.clone = function () {
          return new e(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (t.equals = function (e) {
          var t = this.a,
            n = this.b,
            r = this.c,
            i = this.d,
            a = this.e,
            o = this.f;
          return t === e.a && n === e.b && r === e.c && i === e.d && a === e.e && o === e.f;
        }),
        (t.apply = function (e, t) {
          t === void 0 && (t = {});
          var n = e.x,
            r = e.y,
            i = this.a,
            a = this.b,
            o = this.c,
            s = this.d,
            c = this.e,
            l = this.f;
          return ((t.x = n * i + r * o + c || 0), (t.y = n * a + r * s + l || 0), t);
        }),
        e
      );
    })()),
    (hc = 0),
    (gc = function () {
      return typeof t < `u`;
    }),
    (_c = function () {
      return Ys || (gc() && (Ys = t.gsap) && Ys.registerPlugin && Ys);
    }),
    (vc = function (e) {
      return typeof e == `function`;
    }),
    (yc = function (e) {
      return typeof e == `object`;
    }),
    (bc = function (e) {
      return typeof e > `u`;
    }),
    (xc = function () {
      return !1;
    }),
    (Sc = `transform`),
    (Cc = `transformOrigin`),
    (wc = function (e) {
      return Math.round(e * 1e4) / 1e4;
    }),
    (Tc = Array.isArray),
    (Ec = function (e, t) {
      var n = Zs.createElementNS
        ? Zs.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
        : Zs.createElement(e);
      return n.style ? n : Zs.createElement(e);
    }),
    (Dc = 180 / Math.PI),
    (Oc = 0x56bc75e2d63100000),
    (kc = new Js()),
    (Ac =
      Date.now ||
      function () {
        return new Date().getTime();
      }),
    (jc = []),
    (Mc = {}),
    (Nc = 0),
    (Pc = /^(?:a|input|textarea|button|select)$/i),
    (Fc = 0),
    (Ic = {}),
    (Lc = {}),
    (Rc = function (e, t) {
      var n = {},
        r;
      for (r in e) n[r] = t ? e[r] * t : e[r];
      return n;
    }),
    (zc = function (e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e;
    }),
    (Bc = function e(t, n) {
      for (var r = t.length, i; r--; )
        (n ? (t[r].style.touchAction = n) : t[r].style.removeProperty(`touch-action`),
          (i = t[r].children),
          i && i.length && e(i, n));
    }),
    (Vc = function () {
      return jc.forEach(function (e) {
        return e();
      });
    }),
    (Hc = function (e) {
      (jc.push(e), jc.length === 1 && Ys.ticker.add(Vc));
    }),
    (Uc = function () {
      return !jc.length && Ys.ticker.remove(Vc);
    }),
    (Wc = function (e) {
      for (var t = jc.length; t--; ) jc[t] === e && jc.splice(t, 1);
      Ys.to(Uc, { overwrite: !0, delay: 15, duration: 0, onComplete: Uc, data: `_draggable` });
    }),
    (Gc = function (e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e;
    }),
    (Kc = function (e, t, n, r) {
      if (e.addEventListener) {
        var i = sc[t];
        ((r ||= ac ? { passive: !1 } : null),
          e.addEventListener(i || t, n, r),
          i && t !== i && e.addEventListener(t, n, r));
      }
    }),
    (qc = function (e, t, n, r) {
      if (e.removeEventListener) {
        var i = sc[t];
        (e.removeEventListener(i || t, n, r), i && t !== i && e.removeEventListener(t, n, r));
      }
    }),
    (Jc = function (e) {
      (e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation());
    }),
    (Yc = function (e, t) {
      for (var n = e.length; n--; ) if (e[n].identifier === t) return !0;
    }),
    (Xc = function e(t) {
      ((cc = t.touches && hc < t.touches.length), qc(t.target, `touchend`, e));
    }),
    (Zc = function (e) {
      ((cc = e.touches && hc < e.touches.length), Kc(e.target, `touchend`, Xc));
    }),
    (Qc = function (e) {
      return Xs.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0;
    }),
    ($c = function (e) {
      return (
        Xs.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
      );
    }),
    (el = function e(t, n) {
      (Kc(t, `scroll`, n), nl(t.parentNode) || e(t.parentNode, n));
    }),
    (tl = function e(t, n) {
      (qc(t, `scroll`, n), nl(t.parentNode) || e(t.parentNode, n));
    }),
    (nl = function (e) {
      return (
        !e ||
        e === Qs ||
        e.nodeType === 9 ||
        e === Zs.body ||
        e === Xs ||
        !e.nodeType ||
        !e.parentNode
      );
    }),
    (rl = function (e, t) {
      var n = t === `x` ? `Width` : `Height`,
        r = `scroll` + n,
        i = `client` + n;
      return Math.max(
        0,
        nl(e) ? Math.max(Qs[r], $s[r]) - (Xs[`inner` + n] || Qs[i] || $s[i]) : e[r] - e[i]
      );
    }),
    (il = function e(t, n) {
      var r = rl(t, `x`),
        i = rl(t, `y`);
      (nl(t) ? (t = Lc) : e(t.parentNode, n),
        (t._gsMaxScrollX = r),
        (t._gsMaxScrollY = i),
        n || ((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0)));
    }),
    (al = function (e, t, n) {
      var r = e.style;
      r &&
        (bc(r[t]) && (t = rc(t, e) || t),
        n == null
          ? r.removeProperty && r.removeProperty(t.replace(/([A-Z])/g, `-$1`).toLowerCase())
          : (r[t] = n));
    }),
    (ol = function (e) {
      return Xs.getComputedStyle(
        e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
      );
    }),
    (sl = {}),
    (cl = function (e) {
      if (e === Xs)
        return (
          (sl.left = sl.top = 0),
          (sl.width = sl.right = Qs.clientWidth || e.innerWidth || $s.clientWidth || 0),
          (sl.height = sl.bottom =
            (e.innerHeight || 0) - 20 < Qs.clientHeight
              ? Qs.clientHeight
              : e.innerHeight || $s.clientHeight || 0),
          sl
        );
      var t = e.ownerDocument || Zs,
        n = bc(e.pageX)
          ? !e.nodeType && !bc(e.left) && !bc(e.top)
            ? e
            : ic(e)[0].getBoundingClientRect()
          : {
              left: e.pageX - $c(t),
              top: e.pageY - Qc(t),
              right: e.pageX - $c(t) + 1,
              bottom: e.pageY - Qc(t) + 1,
            };
      return (
        bc(n.right) && !bc(n.width)
          ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
          : bc(n.width) &&
            (n = {
              width: n.right - n.left,
              height: n.bottom - n.top,
              right: n.right,
              left: n.left,
              bottom: n.bottom,
              top: n.top,
            }),
        n
      );
    }),
    (ll = function (e, t, n) {
      var r = e.vars,
        i = r[n],
        a = e._listeners[t],
        o;
      return (
        vc(i) && (o = i.apply(r.callbackScope || e, r[n + `Params`] || [e.pointerEvent])),
        a && e.dispatchEvent(t) === !1 && (o = !1),
        o
      );
    }),
    (ul = function (e, t) {
      var n = ic(e)[0],
        r,
        i,
        a;
      return !n.nodeType && n !== Xs
        ? bc(e.left)
          ? ((i = e.min || e.minX || e.minRotation || 0),
            (r = e.min || e.minY || 0),
            {
              left: i,
              top: r,
              width: (e.max || e.maxX || e.maxRotation || 0) - i,
              height: (e.max || e.maxY || 0) - r,
            })
          : ((a = { x: 0, y: 0 }),
            { left: e.left - a.x, top: e.top - a.y, width: e.width, height: e.height })
        : fl(n, t);
    }),
    (dl = {}),
    (fl = function (e, t) {
      t = ic(t)[0];
      var n = e.getBBox && e.ownerSVGElement,
        r = e.ownerDocument || Zs,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g;
      if (e === Xs)
        ((o = Qc(r)),
          (i = $c(r)),
          (a = i + (r.documentElement.clientWidth || e.innerWidth || r.body.clientWidth || 0)),
          (s =
            o +
            ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight
              ? r.documentElement.clientHeight
              : e.innerHeight || r.body.clientHeight || 0)));
      else {
        if (t === Xs || bc(t)) return e.getBoundingClientRect();
        ((i = o = 0),
          n
            ? ((p = e.getBBox()), (m = p.width), (h = p.height))
            : (e.viewBox &&
                (p = e.viewBox.baseVal) &&
                ((i = p.x || 0), (o = p.y || 0), (m = p.width), (h = p.height)),
              m ||
                ((g = ol(e)),
                (p = g.boxSizing === `border-box`),
                (m =
                  (parseFloat(g.width) || e.clientWidth || 0) +
                  (p ? 0 : parseFloat(g.borderLeftWidth) + parseFloat(g.borderRightWidth))),
                (h =
                  (parseFloat(g.height) || e.clientHeight || 0) +
                  (p ? 0 : parseFloat(g.borderTopWidth) + parseFloat(g.borderBottomWidth))))),
          (a = m),
          (s = h));
      }
      return e === t
        ? { left: i, top: o, width: a - i, height: s - o }
        : ((c = wt(t, !0).multiply(wt(e))),
          (l = c.apply({ x: i, y: o })),
          (u = c.apply({ x: a, y: o })),
          (d = c.apply({ x: a, y: s })),
          (f = c.apply({ x: i, y: s })),
          (i = Math.min(l.x, u.x, d.x, f.x)),
          (o = Math.min(l.y, u.y, d.y, f.y)),
          {
            left: i,
            top: o,
            width: Math.max(l.x, u.x, d.x, f.x) - i,
            height: Math.max(l.y, u.y, d.y, f.y) - o,
          });
    }),
    (pl = function (e, t, n, r, i, a) {
      var o = {},
        s,
        c,
        l;
      if (t)
        if (i !== 1 && t instanceof Array) {
          if (((o.end = s = []), (l = t.length), yc(t[0])))
            for (c = 0; c < l; c++) s[c] = Rc(t[c], i);
          else for (c = 0; c < l; c++) s[c] = t[c] * i;
          ((n += 1.1), (r -= 1.1));
        } else
          vc(t)
            ? (o.end = function (n) {
                var r = t.call(e, n),
                  a,
                  o;
                if (i !== 1)
                  if (yc(r)) {
                    for (o in ((a = {}), r)) a[o] = r[o] * i;
                    r = a;
                  } else r *= i;
                return r;
              })
            : (o.end = t);
      return (
        (n || n === 0) && (o.max = n),
        (r || r === 0) && (o.min = r),
        a && (o.velocity = 0),
        o
      );
    }),
    (ml = function e(t) {
      var n;
      return !t || !t.getAttribute || t === $s
        ? !1
        : (n = t.getAttribute(`data-clickable`)) === `true` ||
            (n !== `false` &&
              (Pc.test(t.nodeName + ``) || t.getAttribute(`contentEditable`) === `true`))
          ? !0
          : e(t.parentNode);
    }),
    (hl = function (e, t) {
      for (var n = e.length, r; n--; )
        ((r = e[n]),
          (r.ondragstart = r.onselectstart = t ? null : xc),
          Ys.set(r, { lazy: !0, userSelect: t ? `text` : `none` }));
    }),
    (gl = function e(t) {
      if (ol(t).position === `fixed`) return !0;
      if (((t = t.parentNode), t && t.nodeType === 1)) return e(t);
    }),
    (yl = function (e, t) {
      ((e = Ys.utils.toArray(e)[0]), (t ||= {}));
      var n = document.createElement(`div`),
        r = n.style,
        i = e.firstChild,
        a = 0,
        o = 0,
        s = e.scrollTop,
        c = e.scrollLeft,
        l = e.scrollWidth,
        u = e.scrollHeight,
        d = 0,
        f = 0,
        p = 0,
        m,
        h,
        g,
        _,
        v,
        y;
      (_l && t.force3D !== !1
        ? ((v = `translate3d(`), (y = `px,0px)`))
        : Sc && ((v = `translate(`), (y = `px)`)),
        (this.scrollTop = function (e, t) {
          if (!arguments.length) return -this.top();
          this.top(-e, t);
        }),
        (this.scrollLeft = function (e, t) {
          if (!arguments.length) return -this.left();
          this.left(-e, t);
        }),
        (this.left = function (n, i) {
          if (!arguments.length) return -(e.scrollLeft + o);
          var s = e.scrollLeft - c,
            l = o;
          if ((s > 2 || s < -2) && !i) {
            ((c = e.scrollLeft),
              Ys.killTweensOf(this, { left: 1, scrollLeft: 1 }),
              this.left(-c),
              t.onKill && t.onKill());
            return;
          }
          ((n = -n),
            n < 0 ? ((o = (n - 0.5) | 0), (n = 0)) : n > f ? ((o = (n - f) | 0), (n = f)) : (o = 0),
            (o || l) &&
              (this._skip || (r[Sc] = v + -o + `px,` + -a + y),
              o + d >= 0 && (r.paddingRight = o + d + `px`)),
            (e.scrollLeft = n | 0),
            (c = e.scrollLeft));
        }),
        (this.top = function (n, i) {
          if (!arguments.length) return -(e.scrollTop + a);
          var c = e.scrollTop - s,
            l = a;
          if ((c > 2 || c < -2) && !i) {
            ((s = e.scrollTop),
              Ys.killTweensOf(this, { top: 1, scrollTop: 1 }),
              this.top(-s),
              t.onKill && t.onKill());
            return;
          }
          ((n = -n),
            n < 0 ? ((a = (n - 0.5) | 0), (n = 0)) : n > p ? ((a = (n - p) | 0), (n = p)) : (a = 0),
            (a || l) && (this._skip || (r[Sc] = v + -o + `px,` + -a + y)),
            (e.scrollTop = n | 0),
            (s = e.scrollTop));
        }),
        (this.maxScrollTop = function () {
          return p;
        }),
        (this.maxScrollLeft = function () {
          return f;
        }),
        (this.disable = function () {
          for (i = n.firstChild; i; ) ((_ = i.nextSibling), e.appendChild(i), (i = _));
          e === n.parentNode && e.removeChild(n);
        }),
        (this.enable = function () {
          if (((i = e.firstChild), i !== n)) {
            for (; i; ) ((_ = i.nextSibling), n.appendChild(i), (i = _));
            (e.appendChild(n), this.calibrate());
          }
        }),
        (this.calibrate = function (t) {
          var i = e.clientWidth === m,
            _,
            v,
            y;
          ((s = e.scrollTop),
            (c = e.scrollLeft),
            !(
              i &&
              e.clientHeight === h &&
              n.offsetHeight === g &&
              l === e.scrollWidth &&
              u === e.scrollHeight &&
              !t
            ) &&
              ((a || o) &&
                ((v = this.left()),
                (y = this.top()),
                this.left(-e.scrollLeft),
                this.top(-e.scrollTop)),
              (_ = ol(e)),
              (!i || t) &&
                ((r.display = `block`),
                (r.width = `auto`),
                (r.paddingRight = `0px`),
                (d = Math.max(0, e.scrollWidth - e.clientWidth)),
                d && (d += parseFloat(_.paddingLeft) + (vl ? parseFloat(_.paddingRight) : 0))),
              (r.display = `inline-block`),
              (r.position = `relative`),
              (r.overflow = `visible`),
              (r.verticalAlign = `top`),
              (r.boxSizing = `content-box`),
              (r.width = `100%`),
              (r.paddingRight = d + `px`),
              vl && (r.paddingBottom = _.paddingBottom),
              (m = e.clientWidth),
              (h = e.clientHeight),
              (l = e.scrollWidth),
              (u = e.scrollHeight),
              (f = e.scrollWidth - m),
              (p = e.scrollHeight - h),
              (g = n.offsetHeight),
              (r.display = `block`),
              (v || y) && (this.left(v), this.top(y))));
        }),
        (this.content = n),
        (this.element = e),
        (this._skip = !1),
        this.enable());
    }),
    (bl = function (e) {
      if (gc() && document.body) {
        var n = t && t.navigator;
        ((Xs = t),
          (Zs = document),
          (Qs = Zs.documentElement),
          ($s = Zs.body),
          (ec = Ec(`div`)),
          (fc = !!t.PointerEvent),
          (tc = Ec(`div`)),
          (tc.style.cssText = `visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab`),
          (dc = tc.style.cursor === `grab` ? `grab` : `move`),
          (lc = n && n.userAgent.toLowerCase().indexOf(`android`) !== -1),
          (oc =
            (`ontouchstart` in Qs && `orientation` in Xs) ||
            (n && (n.MaxTouchPoints > 0 || n.msMaxTouchPoints > 0))),
          (vl = (function () {
            var e = Ec(`div`),
              t = Ec(`div`),
              n = t.style,
              r = $s,
              i;
            return (
              (n.display = `inline-block`),
              (n.position = `relative`),
              (e.style.cssText = `width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden`),
              e.appendChild(t),
              r.appendChild(e),
              (i = t.offsetHeight + 18 > e.scrollHeight),
              r.removeChild(e),
              i
            );
          })()),
          (sc = (function (e) {
            for (
              var t = e.split(`,`),
                n = (
                  (`onpointerdown` in ec)
                    ? `pointerdown,pointermove,pointerup,pointercancel`
                    : (`onmspointerdown` in ec)
                      ? `MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel`
                      : e
                ).split(`,`),
                r = {},
                i = 4;
              --i > -1;
            )
              ((r[t[i]] = n[i]), (r[n[i]] = t[i]));
            try {
              Qs.addEventListener(
                `test`,
                null,
                Object.defineProperty({}, "passive", {
                  get: function () {
                    ac = 1;
                  },
                })
              );
            } catch {}
            return r;
          })(`touchstart,touchmove,touchend,touchcancel`)),
          Kc(Zs, `touchcancel`, xc),
          Kc(Xs, `touchmove`, xc),
          $s && $s.addEventListener(`touchstart`, xc),
          Kc(Zs, `contextmenu`, function () {
            for (var e in Mc) Mc[e].isPressed && Mc[e].endDrag();
          }),
          (Ys = nc = _c()));
      }
      Ys
        ? ((uc = Ys.plugins.inertia),
          (pc = Ys.core.context || function () {}),
          (rc = Ys.utils.checkPrefix),
          (Sc = rc(Sc)),
          (Cc = rc(Cc)),
          (ic = Ys.utils.toArray),
          (mc = Ys.core.getStyleSaver),
          (_l = !!rc(`perspective`)))
        : e && console.warn(`Please gsap.registerPlugin(Draggable)`);
    }),
    (xl = (function (e) {
      Et(t, e);
      function t(n, r) {
        var i = e.call(this) || this;
        (nc || bl(1),
          (n = ic(n)[0]),
          (i.styles = mc && mc(n, `transform,left,top`)),
          (uc ||= Ys.plugins.inertia),
          (i.vars = r = Rc(r || {})),
          (i.target = n),
          (i.x = i.y = i.rotation = 0),
          (i.dragResistance = parseFloat(r.dragResistance) || 0),
          (i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0),
          (i.lockAxis = r.lockAxis),
          (i.autoScroll = r.autoScroll || 0),
          (i.lockedAxis = null),
          (i.allowEventDefault = !!r.allowEventDefault),
          Ys.getProperty(n, `x`));
        var a = (r.type || `x,y`).toLowerCase(),
          o = ~a.indexOf(`x`) || ~a.indexOf(`y`),
          s = a.indexOf(`rotation`) !== -1,
          c = s ? `rotation` : o ? `x` : `left`,
          l = o ? `y` : `top`,
          u = !!(~a.indexOf(`x`) || ~a.indexOf(`left`) || a === `scroll`),
          d = !!(~a.indexOf(`y`) || ~a.indexOf(`top`) || a === `scroll`),
          f = r.minimumMovement || 2,
          p = Tt(i),
          m = ic(r.trigger || r.handle || n),
          h = {},
          g = 0,
          _ = !1,
          v = r.autoScrollMarginTop || 40,
          y = r.autoScrollMarginRight || 40,
          b = r.autoScrollMarginBottom || 40,
          x = r.autoScrollMarginLeft || 40,
          S = r.clickableTest || ml,
          C = 0,
          w = n._gsap || Ys.core.getCache(n),
          T = gl(n),
          E = function (e, t) {
            return parseFloat(w.get(n, e, t));
          },
          D = n.ownerDocument || Zs,
          O,
          k,
          A,
          j,
          M,
          N,
          P,
          ee,
          te,
          F,
          I,
          L,
          R,
          z,
          ne,
          B,
          V,
          re,
          H,
          U,
          W,
          G,
          K,
          q,
          ie,
          ae,
          oe,
          se,
          ce,
          le,
          ue,
          de,
          J,
          fe = function (e) {
            return (Jc(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1);
          },
          Y = function e(t) {
            if (p.autoScroll && p.isDragging && (_ || V)) {
              var r = n,
                i = p.autoScroll * 15,
                a,
                c,
                l,
                f,
                m,
                h,
                g,
                S;
              for (
                _ = !1,
                  Lc.scrollTop =
                    Xs.pageYOffset == null
                      ? D.documentElement.scrollTop == null
                        ? D.body.scrollTop
                        : D.documentElement.scrollTop
                      : Xs.pageYOffset,
                  Lc.scrollLeft =
                    Xs.pageXOffset == null
                      ? D.documentElement.scrollLeft == null
                        ? D.body.scrollLeft
                        : D.documentElement.scrollLeft
                      : Xs.pageXOffset,
                  f = p.pointerX - Lc.scrollLeft,
                  m = p.pointerY - Lc.scrollTop;
                r && !c;
              )
                ((c = nl(r.parentNode)),
                  (a = c ? Lc : r.parentNode),
                  (l = c
                    ? {
                        bottom: Math.max(Qs.clientHeight, Xs.innerHeight || 0),
                        right: Math.max(Qs.clientWidth, Xs.innerWidth || 0),
                        left: 0,
                        top: 0,
                      }
                    : a.getBoundingClientRect()),
                  (h = g = 0),
                  d &&
                    ((S = a._gsMaxScrollY - a.scrollTop),
                    S < 0
                      ? (g = S)
                      : m > l.bottom - b && S
                        ? ((_ = !0),
                          (g = Math.min(S, (i * (1 - Math.max(0, l.bottom - m) / b)) | 0)))
                        : m < l.top + v &&
                          a.scrollTop &&
                          ((_ = !0),
                          (g = -Math.min(a.scrollTop, (i * (1 - Math.max(0, m - l.top) / v)) | 0))),
                    g && (a.scrollTop += g)),
                  u &&
                    ((S = a._gsMaxScrollX - a.scrollLeft),
                    S < 0
                      ? (h = S)
                      : f > l.right - y && S
                        ? ((_ = !0),
                          (h = Math.min(S, (i * (1 - Math.max(0, l.right - f) / y)) | 0)))
                        : f < l.left + x &&
                          a.scrollLeft &&
                          ((_ = !0),
                          (h = -Math.min(
                            a.scrollLeft,
                            (i * (1 - Math.max(0, f - l.left) / x)) | 0
                          ))),
                    h && (a.scrollLeft += h)),
                  c &&
                    (h || g) &&
                    (Xs.scrollTo(a.scrollLeft, a.scrollTop), Ee(p.pointerX + h, p.pointerY + g)),
                  (r = a));
            }
            if (V) {
              var C = p.x,
                T = p.y;
              (s
                ? ((p.deltaX = C - parseFloat(w.rotation)),
                  (p.rotation = C),
                  (w.rotation = C + `deg`),
                  w.renderTransform(1, w))
                : k
                  ? (d && ((p.deltaY = T - k.top()), k.top(T)),
                    u && ((p.deltaX = C - k.left()), k.left(C)))
                  : o
                    ? (d && ((p.deltaY = T - parseFloat(w.y)), (w.y = T + `px`)),
                      u && ((p.deltaX = C - parseFloat(w.x)), (w.x = C + `px`)),
                      w.renderTransform(1, w))
                    : (d &&
                        ((p.deltaY = T - parseFloat(n.style.top || 0)), (n.style.top = T + `px`)),
                      u &&
                        ((p.deltaX = C - parseFloat(n.style.left || 0)),
                        (n.style.left = C + `px`))),
                ee &&
                  !t &&
                  !se &&
                  ((se = !0),
                  ll(p, `drag`, `onDrag`) === !1 &&
                    (u && (p.x -= p.deltaX), d && (p.y -= p.deltaY), e(!0)),
                  (se = !1)));
            }
            V = !1;
          },
          pe = function (e, t) {
            var r = p.x,
              i = p.y,
              a,
              c;
            (n._gsap || (w = Ys.core.getCache(n)),
              w.uncache && Ys.getProperty(n, `x`),
              o
                ? ((p.x = parseFloat(w.x)), (p.y = parseFloat(w.y)))
                : s
                  ? (p.x = p.rotation = parseFloat(w.rotation))
                  : k
                    ? ((p.y = k.top()), (p.x = k.left()))
                    : ((p.y = parseFloat(n.style.top || ((c = ol(n)) && c.top)) || 0),
                      (p.x = parseFloat(n.style.left || (c || {}).left) || 0)),
              (H || U || W) &&
                !t &&
                (p.isDragging || p.isThrowing) &&
                (W &&
                  ((Ic.x = p.x),
                  (Ic.y = p.y),
                  (a = W(Ic)),
                  a.x !== p.x && ((p.x = a.x), (V = !0)),
                  a.y !== p.y && ((p.y = a.y), (V = !0))),
                H && ((a = H(p.x)), a !== p.x && ((p.x = a), s && (p.rotation = a), (V = !0))),
                U && ((a = U(p.y)), a !== p.y && (p.y = a), (V = !0))),
              V && Y(!0),
              e ||
                ((p.deltaX = p.x - r),
                (p.deltaY = p.y - i),
                ll(p, `throwupdate`, `onThrowUpdate`)));
          },
          me = function (e, t, n, r) {
            return (
              (t ??= -Oc),
              (n ??= Oc),
              vc(e)
                ? function (i) {
                    var a = p.isPressed ? 1 - p.edgeResistance : 1;
                    return (
                      e.call(p, (i > n ? n + (i - n) * a : i < t ? t + (i - t) * a : i) * r) * r
                    );
                  }
                : Tc(e)
                  ? function (r) {
                      for (var i = e.length, a = 0, o = Oc, s, c; --i > -1; )
                        ((s = e[i]),
                          (c = s - r),
                          c < 0 && (c = -c),
                          c < o && s >= t && s <= n && ((a = i), (o = c)));
                      return e[a];
                    }
                  : isNaN(e)
                    ? function (e) {
                        return e;
                      }
                    : function () {
                        return e * r;
                      }
            );
          },
          he = function (e, t, n, r, i, a, o) {
            return (
              (a = a && a < Oc ? a * a : Oc),
              vc(e)
                ? function (s) {
                    var c = p.isPressed ? 1 - p.edgeResistance : 1,
                      l = s.x,
                      u = s.y,
                      d,
                      f,
                      m;
                    return (
                      (s.x = l = l > n ? n + (l - n) * c : l < t ? t + (l - t) * c : l),
                      (s.y = u = u > i ? i + (u - i) * c : u < r ? r + (u - r) * c : u),
                      (d = e.call(p, s)),
                      d !== s && ((s.x = d.x), (s.y = d.y)),
                      o !== 1 && ((s.x *= o), (s.y *= o)),
                      a < Oc &&
                        ((f = s.x - l), (m = s.y - u), f * f + m * m > a && ((s.x = l), (s.y = u))),
                      s
                    );
                  }
                : Tc(e)
                  ? function (t) {
                      for (var n = e.length, r = 0, i = Oc, o, s, c, l; --n > -1; )
                        ((c = e[n]),
                          (o = c.x - t.x),
                          (s = c.y - t.y),
                          (l = o * o + s * s),
                          l < i && ((r = n), (i = l)));
                      return i <= a ? e[r] : t;
                    }
                  : function (e) {
                      return e;
                    }
            );
          },
          ge = function () {
            var e, t, i, a;
            ((P = !1),
              k
                ? (k.calibrate(),
                  (p.minX = I = -k.maxScrollLeft()),
                  (p.minY = R = -k.maxScrollTop()),
                  (p.maxX = F = p.maxY = L = 0),
                  (P = !0))
                : r.bounds &&
                  ((e = ul(r.bounds, n.parentNode)),
                  s
                    ? ((p.minX = I = e.left),
                      (p.maxX = F = e.left + e.width),
                      (p.minY = R = p.maxY = L = 0))
                    : !bc(r.bounds.maxX) || !bc(r.bounds.maxY)
                      ? ((e = r.bounds),
                        (p.minX = I = e.minX),
                        (p.minY = R = e.minY),
                        (p.maxX = F = e.maxX),
                        (p.maxY = L = e.maxY))
                      : ((t = ul(n, n.parentNode)),
                        (p.minX = I = Math.round(E(c, `px`) + e.left - t.left)),
                        (p.minY = R = Math.round(E(l, `px`) + e.top - t.top)),
                        (p.maxX = F = Math.round(I + (e.width - t.width))),
                        (p.maxY = L = Math.round(R + (e.height - t.height)))),
                  I > F && ((p.minX = F), (p.maxX = F = I), (I = p.minX)),
                  R > L && ((p.minY = L), (p.maxY = L = R), (R = p.minY)),
                  s && ((p.minRotation = I), (p.maxRotation = F)),
                  (P = !0)),
              r.liveSnap &&
                ((i = r.liveSnap === !0 ? r.snap || {} : r.liveSnap),
                (a = Tc(i) || vc(i)),
                s
                  ? ((H = me(a ? i : i.rotation, I, F, 1)), (U = null))
                  : i.points
                    ? (W = he(a ? i : i.points, I, F, R, L, i.radius, k ? -1 : 1))
                    : (u && (H = me(a ? i : i.x || i.left || i.scrollLeft, I, F, k ? -1 : 1)),
                      d && (U = me(a ? i : i.y || i.top || i.scrollTop, R, L, k ? -1 : 1)))));
          },
          _e = function () {
            ((p.isThrowing = !1), ll(p, `throwcomplete`, `onThrowComplete`));
          },
          ve = function () {
            p.isThrowing = !1;
          },
          ye = function (e, t) {
            var i, a, o, f;
            e && uc
              ? (e === !0 &&
                  ((i = r.snap || r.liveSnap || {}),
                  (a = Tc(i) || vc(i)),
                  (e = { resistance: (r.throwResistance || r.resistance || 1e3) / (s ? 10 : 1) }),
                  s
                    ? (e.rotation = pl(p, a ? i : i.rotation, F, I, 1, t))
                    : (u &&
                        (e[c] = pl(
                          p,
                          a ? i : i.points || i.x || i.left,
                          F,
                          I,
                          k ? -1 : 1,
                          t || p.lockedAxis === `x`
                        )),
                      d &&
                        (e[l] = pl(
                          p,
                          a ? i : i.points || i.y || i.top,
                          L,
                          R,
                          k ? -1 : 1,
                          t || p.lockedAxis === `y`
                        )),
                      (i.points || (Tc(i) && yc(i[0]))) &&
                        ((e.linkedProps = c + `,` + l), (e.radius = i.radius)))),
                (p.isThrowing = !0),
                (f = isNaN(r.overshootTolerance)
                  ? r.edgeResistance === 1
                    ? 0
                    : 1 - p.edgeResistance + 0.2
                  : r.overshootTolerance),
                (e.duration ||= {
                  max: Math.max(r.minDuration || 0, `maxDuration` in r ? r.maxDuration : 2),
                  min: isNaN(r.minDuration)
                    ? f === 0 || (yc(e) && e.resistance > 1e3)
                      ? 0
                      : 0.5
                    : r.minDuration,
                  overshoot: f,
                }),
                (p.tween = o =
                  Ys.to(k || n, {
                    inertia: e,
                    data: `_draggable`,
                    inherit: !1,
                    onComplete: _e,
                    onInterrupt: ve,
                    onUpdate: r.fastMode ? ll : pe,
                    onUpdateParams: r.fastMode
                      ? [p, `onthrowupdate`, `onThrowUpdate`]
                      : i && i.radius
                        ? [!1, !0]
                        : [],
                  })),
                r.fastMode ||
                  (k && (k._skip = !0),
                  o.render(1e9, !0, !0),
                  pe(!0, !0),
                  (p.endX = p.x),
                  (p.endY = p.y),
                  s && (p.endRotation = p.x),
                  o.play(0),
                  pe(!0, !0),
                  k && (k._skip = !1)))
              : P && p.applyBounds();
          },
          be = function (e) {
            var t = q,
              r;
            ((q = wt(n.parentNode, !0)),
              e &&
                p.isPressed &&
                !q.equals(t || new Js()) &&
                ((r = t.inverse().apply({ x: A, y: j })), q.apply(r, r), (A = r.x), (j = r.y)),
              q.equals(kc) && (q = null));
          },
          xe = function () {
            var e = 1 - p.edgeResistance,
              t = T ? $c(D) : 0,
              r = T ? Qc(D) : 0,
              i,
              a,
              u;
            (o && ((w.x = E(c, `px`) + `px`), (w.y = E(l, `px`) + `px`), w.renderTransform()),
              be(!1),
              (dl.x = p.pointerX - t),
              (dl.y = p.pointerY - r),
              q && q.apply(dl, dl),
              (A = dl.x),
              (j = dl.y),
              V && (Ee(p.pointerX, p.pointerY), Y(!0)),
              (de = wt(n)),
              k
                ? (ge(), (N = k.top()), (M = k.left()))
                : (Se() ? (pe(!0, !0), ge()) : p.applyBounds(),
                  s
                    ? ((i = n.ownerSVGElement
                        ? [w.xOrigin - n.getBBox().x, w.yOrigin - n.getBBox().y]
                        : (ol(n)[Cc] || `0 0`).split(` `)),
                      (B = p.rotationOrigin =
                        wt(n).apply({ x: parseFloat(i[0]) || 0, y: parseFloat(i[1]) || 0 })),
                      pe(!0, !0),
                      (a = p.pointerX - B.x - t),
                      (u = B.y - p.pointerY + r),
                      (M = p.x),
                      (N = p.y = Math.atan2(u, a) * Dc))
                    : ((N = E(l, `px`)), (M = E(c, `px`)))),
              P &&
                e &&
                (M > F ? (M = F + (M - F) / e) : M < I && (M = I - (I - M) / e),
                s || (N > L ? (N = L + (N - L) / e) : N < R && (N = R - (R - N) / e))),
              (p.startX = M = wc(M)),
              (p.startY = N = wc(N)));
          },
          Se = function () {
            return p.tween && p.tween.isActive();
          },
          Ce = function () {
            tc.parentNode && !Se() && !p.isDragging && tc.parentNode.removeChild(tc);
          },
          we = function (e, i) {
            var a;
            if (
              !O ||
              p.isPressed ||
              !e ||
              ((e.type === `mousedown` || e.type === `pointerdown`) &&
                !i &&
                Ac() - C < 30 &&
                sc[p.pointerEvent.type])
            ) {
              ue && e && O && Jc(e);
              return;
            }
            if (
              ((ie = Se()),
              (J = !1),
              (p.pointerEvent = e),
              sc[e.type]
                ? ((K = ~e.type.indexOf(`touch`) ? e.currentTarget || e.target : D),
                  Kc(K, `touchend`, De),
                  Kc(K, `touchmove`, Te),
                  Kc(K, `touchcancel`, De),
                  Kc(D, `touchstart`, Zc))
                : ((K = null), Kc(D, `mousemove`, Te)),
              (oe = null),
              (!fc || !K) && (Kc(D, `mouseup`, De), e && e.target && Kc(e.target, `mouseup`, De)),
              (G = S.call(p, e.target) && r.dragClickables === !1 && !i),
              G)
            ) {
              (Kc(e.target, `change`, De),
                ll(p, `pressInit`, `onPressInit`),
                ll(p, `press`, `onPress`),
                hl(m, !0),
                (ue = !1));
              return;
            }
            if (
              ((ae =
                !K ||
                u === d ||
                p.vars.allowNativeTouchScrolling === !1 ||
                (p.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2))
                  ? !1
                  : u
                    ? `y`
                    : `x`),
              (ue = !ae && !p.allowEventDefault),
              ue && (Jc(e), Kc(Xs, `touchforcechange`, Jc)),
              e.changedTouches
                ? ((e = z = e.changedTouches[0]), (ne = e.identifier))
                : e.pointerId
                  ? (ne = e.pointerId)
                  : (z = ne = null),
              hc++,
              Hc(Y),
              (j = p.pointerY = e.pageY),
              (A = p.pointerX = e.pageX),
              ll(p, `pressInit`, `onPressInit`),
              (ae || p.autoScroll) && il(n.parentNode),
              n.parentNode &&
                p.autoScroll &&
                !k &&
                !s &&
                n.parentNode._gsMaxScrollX &&
                !tc.parentNode &&
                !n.getBBox &&
                ((tc.style.width = n.parentNode.scrollWidth + `px`), n.parentNode.appendChild(tc)),
              xe(),
              p.tween && p.tween.kill(),
              (p.isThrowing = !1),
              Ys.killTweensOf(k || n, h, !0),
              k && Ys.killTweensOf(n, { scrollTo: 1 }, !0),
              (p.tween = p.lockedAxis = null),
              (r.zIndexBoost || (!s && !k && r.zIndexBoost !== !1)) &&
                (n.style.zIndex = t.zIndex++),
              (p.isPressed = !0),
              (ee = !!(r.onDrag || p._listeners.drag)),
              (te = !!(r.onMove || p._listeners.move)),
              r.cursor !== !1 || r.activeCursor)
            )
              for (a = m.length; --a > -1; )
                Ys.set(m[a], {
                  cursor: r.activeCursor || r.cursor || (dc === `grab` ? `grabbing` : dc),
                });
            ll(p, `press`, `onPress`);
          },
          Te = function (e) {
            var t = e,
              r,
              i,
              a,
              o,
              s,
              c;
            if (!O || cc || !p.isPressed || !e) {
              ue && e && O && Jc(e);
              return;
            }
            if (((p.pointerEvent = e), (r = e.changedTouches), r)) {
              if (((e = r[0]), e !== z && e.identifier !== ne)) {
                for (o = r.length; --o > -1 && (e = r[o]).identifier !== ne && e.target !== n; );
                if (o < 0) return;
              }
            } else if (e.pointerId && ne && e.pointerId !== ne) return;
            if (
              K &&
              ae &&
              !oe &&
              ((dl.x = e.pageX - (T ? $c(D) : 0)),
              (dl.y = e.pageY - (T ? Qc(D) : 0)),
              q && q.apply(dl, dl),
              (i = dl.x),
              (a = dl.y),
              (s = Math.abs(i - A)),
              (c = Math.abs(a - j)),
              ((s !== c && (s > f || c > f)) || (lc && ae === oe)) &&
                ((oe = s > c && u ? `x` : `y`),
                ae && oe !== ae && Kc(Xs, `touchforcechange`, Jc),
                p.vars.lockAxisOnTouchScroll !== !1 &&
                  u &&
                  d &&
                  ((p.lockedAxis = oe === `x` ? `y` : `x`),
                  vc(p.vars.onLockAxis) && p.vars.onLockAxis.call(p, t)),
                lc && ae === oe))
            ) {
              De(t);
              return;
            }
            (!p.allowEventDefault && (!ae || (oe && ae !== oe)) && t.cancelable !== !1
              ? (Jc(t), (ue = !0))
              : (ue &&= !1),
              p.autoScroll && (_ = !0),
              Ee(e.pageX, e.pageY, te));
          },
          Ee = function (e, t, n) {
            var r = 1 - p.dragResistance,
              i = 1 - p.edgeResistance,
              a = p.pointerX,
              o = p.pointerY,
              c = N,
              l = p.x,
              m = p.y,
              h = p.endX,
              g = p.endY,
              _ = p.endRotation,
              v = V,
              y,
              b,
              x,
              S,
              C,
              w;
            ((p.pointerX = e),
              (p.pointerY = t),
              T && ((e -= $c(D)), (t -= Qc(D))),
              s
                ? ((S = Math.atan2(B.y - t, e - B.x) * Dc),
                  (C = p.y - S),
                  C > 180 ? ((N -= 360), (p.y = S)) : C < -180 && ((N += 360), (p.y = S)),
                  p.x !== M || Math.abs(N - S) > f ? ((p.y = S), (x = M + (N - S) * r)) : (x = M))
                : (q && ((w = e * q.a + t * q.c + q.e), (t = e * q.b + t * q.d + q.f), (e = w)),
                  (b = t - j),
                  (y = e - A),
                  b < f && b > -f && (b = 0),
                  y < f && y > -f && (y = 0),
                  (p.lockAxis || p.lockedAxis) &&
                    (y || b) &&
                    ((w = p.lockedAxis),
                    w ||
                      ((p.lockedAxis = w = u && Math.abs(y) > Math.abs(b) ? `y` : d ? `x` : null),
                      w && vc(p.vars.onLockAxis) && p.vars.onLockAxis.call(p, p.pointerEvent)),
                    w === `y` ? (b = 0) : w === `x` && (y = 0)),
                  (x = wc(M + y * r)),
                  (S = wc(N + b * r))),
              (H || U || W) &&
                (p.x !== x || (p.y !== S && !s)) &&
                (W && ((Ic.x = x), (Ic.y = S), (w = W(Ic)), (x = wc(w.x)), (S = wc(w.y))),
                H && (x = wc(H(x))),
                U && (S = wc(U(S)))),
              P &&
                (x > F
                  ? (x = F + Math.round((x - F) * i))
                  : x < I && (x = I + Math.round((x - I) * i)),
                s ||
                  (S > L
                    ? (S = Math.round(L + (S - L) * i))
                    : S < R && (S = Math.round(R + (S - R) * i)))),
              (p.x !== x || (p.y !== S && !s)) &&
                (s
                  ? ((p.endRotation = p.x = p.endX = x), (V = !0))
                  : (d && ((p.y = p.endY = S), (V = !0)), u && ((p.x = p.endX = x), (V = !0))),
                !n || ll(p, `move`, `onMove`) !== !1
                  ? !p.isDragging &&
                    p.isPressed &&
                    ((p.isDragging = J = !0), ll(p, `dragstart`, `onDragStart`))
                  : ((p.pointerX = a),
                    (p.pointerY = o),
                    (N = c),
                    (p.x = l),
                    (p.y = m),
                    (p.endX = h),
                    (p.endY = g),
                    (p.endRotation = _),
                    (V = v))));
          },
          De = function e(t, i) {
            if (
              !O ||
              !p.isPressed ||
              (t &&
                ne != null &&
                !i &&
                ((t.pointerId && t.pointerId !== ne && t.target !== n) ||
                  (t.changedTouches && !Yc(t.changedTouches, ne))))
            ) {
              ue && t && O && Jc(t);
              return;
            }
            p.isPressed = !1;
            var a = t,
              o = p.isDragging,
              s = p.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2),
              c = Ys.delayedCall(0.001, Ce),
              l,
              u,
              d,
              f,
              h;
            if (
              (K
                ? (qc(K, `touchend`, e),
                  qc(K, `touchmove`, Te),
                  qc(K, `touchcancel`, e),
                  qc(D, `touchstart`, Zc))
                : qc(D, `mousemove`, Te),
              qc(Xs, `touchforcechange`, Jc),
              (!fc || !K) && (qc(D, `mouseup`, e), t && t.target && qc(t.target, `mouseup`, e)),
              (V = !1),
              o && ((g = Fc = Ac()), (p.isDragging = !1)),
              Wc(Y),
              G && !s)
            ) {
              (t && (qc(t.target, `change`, e), (p.pointerEvent = a)),
                hl(m, !1),
                ll(p, `release`, `onRelease`),
                ll(p, `click`, `onClick`),
                (G = !1));
              return;
            }
            for (u = m.length; --u > -1; )
              al(m[u], `cursor`, r.cursor || (r.cursor === !1 ? null : dc));
            if ((hc--, t)) {
              if (((l = t.changedTouches), l && ((t = l[0]), t !== z && t.identifier !== ne))) {
                for (u = l.length; --u > -1 && (t = l[u]).identifier !== ne && t.target !== n; );
                if (u < 0 && !i) return;
              }
              ((p.pointerEvent = a), (p.pointerX = t.pageX), (p.pointerY = t.pageY));
            }
            return (
              s && a
                ? (Jc(a), (ue = !0), ll(p, `release`, `onRelease`))
                : a && !o
                  ? ((ue = !1),
                    ie && (r.snap || r.bounds) && ye(r.inertia || r.throwProps),
                    ll(p, `release`, `onRelease`),
                    (!lc || a.type !== `touchmove`) &&
                      a.type.indexOf(`cancel`) === -1 &&
                      (ll(p, `click`, `onClick`),
                      Ac() - C < 300 && ll(p, `doubleclick`, `onDoubleClick`),
                      (f = a.target || n),
                      (C = Ac()),
                      (h = function () {
                        C !== ce &&
                          p.enabled() &&
                          !p.isPressed &&
                          !a.defaultPrevented &&
                          (f.click
                            ? f.click()
                            : D.createEvent &&
                              ((d = D.createEvent(`MouseEvents`)),
                              d.initMouseEvent(
                                `click`,
                                !0,
                                !0,
                                Xs,
                                1,
                                p.pointerEvent.screenX,
                                p.pointerEvent.screenY,
                                p.pointerX,
                                p.pointerY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                              f.dispatchEvent(d)));
                      }),
                      !lc && !a.defaultPrevented && Ys.delayedCall(0.05, h)))
                  : (ye(r.inertia || r.throwProps),
                    !p.allowEventDefault &&
                    a &&
                    (r.dragClickables !== !1 || !S.call(p, a.target)) &&
                    o &&
                    (!ae || (oe && ae === oe)) &&
                    a.cancelable !== !1
                      ? ((ue = !0), Jc(a))
                      : (ue = !1),
                    ll(p, `release`, `onRelease`)),
              Se() && c.duration(p.tween.duration()),
              o && ll(p, `dragend`, `onDragEnd`),
              !0
            );
          },
          Oe = function (e) {
            if (e && p.isDragging && !k) {
              var t = e.target || n.parentNode,
                r = t.scrollLeft - t._gsScrollX,
                i = t.scrollTop - t._gsScrollY;
              (r || i) &&
                (q ? ((A -= r * q.a + i * q.c), (j -= i * q.d + r * q.b)) : ((A -= r), (j -= i)),
                (t._gsScrollX += r),
                (t._gsScrollY += i),
                Ee(p.pointerX, p.pointerY));
            }
          },
          ke = function (e) {
            var t = Ac(),
              n = t - C < 100,
              r = t - g < 50,
              i = n && ce === C,
              a = p.pointerEvent && p.pointerEvent.defaultPrevented,
              o = n && le === C,
              s = e.isTrusted || (e.isTrusted == null && n && i);
            if (
              ((i || (r && p.vars.suppressClickOnDrag !== !1)) &&
                e.stopImmediatePropagation &&
                e.stopImmediatePropagation(),
              n && !(p.pointerEvent && p.pointerEvent.defaultPrevented) && (!i || (s && !o)))
            ) {
              (s && i && (le = C), (ce = C));
              return;
            }
            ((p.isPressed || r || n) && (!s || !e.detail || !n || a) && Jc(e),
              !n && !r && !J && (e && e.target && (p.pointerEvent = e), ll(p, `click`, `onClick`)));
          },
          Ae = function (e) {
            return q
              ? { x: e.x * q.a + e.y * q.c + q.e, y: e.x * q.b + e.y * q.d + q.f }
              : { x: e.x, y: e.y };
          };
        return (
          (re = t.get(n)),
          re && re.kill(),
          (i.startDrag = function (e, t) {
            var r, i, a, o;
            (we(e || p.pointerEvent, !0),
              t &&
                !p.hitTest(e || p.pointerEvent) &&
                ((r = cl(e || p.pointerEvent)),
                (i = cl(n)),
                (a = Ae({ x: r.left + r.width / 2, y: r.top + r.height / 2 })),
                (o = Ae({ x: i.left + i.width / 2, y: i.top + i.height / 2 })),
                (A -= a.x - o.x),
                (j -= a.y - o.y)),
              p.isDragging || ((p.isDragging = J = !0), ll(p, `dragstart`, `onDragStart`)));
          }),
          (i.drag = Te),
          (i.endDrag = function (e) {
            return De(e || p.pointerEvent, !0);
          }),
          (i.timeSinceDrag = function () {
            return p.isDragging ? 0 : (Ac() - g) / 1e3;
          }),
          (i.timeSinceClick = function () {
            return (Ac() - C) / 1e3;
          }),
          (i.hitTest = function (e, n) {
            return t.hitTest(p.target, e, n);
          }),
          (i.getDirection = function (e, t) {
            var r = e === `velocity` && uc ? e : yc(e) && !s ? `element` : `start`,
              i,
              a,
              o,
              u,
              d,
              f;
            return (
              r === `element` && ((d = cl(p.target)), (f = cl(e))),
              (i =
                r === `start`
                  ? p.x - M
                  : r === `velocity`
                    ? uc.getVelocity(n, c)
                    : d.left + d.width / 2 - (f.left + f.width / 2)),
              s
                ? i < 0
                  ? `counter-clockwise`
                  : `clockwise`
                : ((t ||= 2),
                  (a =
                    r === `start`
                      ? p.y - N
                      : r === `velocity`
                        ? uc.getVelocity(n, l)
                        : d.top + d.height / 2 - (f.top + f.height / 2)),
                  (o = Math.abs(i / a)),
                  (u = o < 1 / t ? `` : i < 0 ? `left` : `right`),
                  o < t && (u !== `` && (u += `-`), (u += a < 0 ? `up` : `down`)),
                  u)
            );
          }),
          (i.applyBounds = function (e, t) {
            var i, a, o, c, l, f;
            if (e && r.bounds !== e) return ((r.bounds = e), p.update(!0, t));
            if ((pe(!0), ge(), P && !Se())) {
              if (
                ((i = p.x),
                (a = p.y),
                i > F ? (i = F) : i < I && (i = I),
                a > L ? (a = L) : a < R && (a = R),
                (p.x !== i || p.y !== a) &&
                  ((o = !0),
                  (p.x = p.endX = i),
                  s ? (p.endRotation = i) : (p.y = p.endY = a),
                  (V = !0),
                  Y(!0),
                  p.autoScroll && !p.isDragging))
              )
                for (
                  il(n.parentNode),
                    c = n,
                    Lc.scrollTop =
                      Xs.pageYOffset == null
                        ? D.documentElement.scrollTop == null
                          ? D.body.scrollTop
                          : D.documentElement.scrollTop
                        : Xs.pageYOffset,
                    Lc.scrollLeft =
                      Xs.pageXOffset == null
                        ? D.documentElement.scrollLeft == null
                          ? D.body.scrollLeft
                          : D.documentElement.scrollLeft
                        : Xs.pageXOffset;
                  c && !f;
                )
                  ((f = nl(c.parentNode)),
                    (l = f ? Lc : c.parentNode),
                    d && l.scrollTop > l._gsMaxScrollY && (l.scrollTop = l._gsMaxScrollY),
                    u && l.scrollLeft > l._gsMaxScrollX && (l.scrollLeft = l._gsMaxScrollX),
                    (c = l));
              p.isThrowing &&
                (o || p.endX > F || p.endX < I || p.endY > L || p.endY < R) &&
                ye(r.inertia || r.throwProps, o);
            }
            return p;
          }),
          (i.update = function (e, t, r) {
            if (t && p.isPressed) {
              var i = wt(n),
                a = de.apply({ x: p.x - M, y: p.y - N }),
                o = wt(n.parentNode, !0);
              (o.apply({ x: i.e - a.x, y: i.f - a.y }, a),
                (p.x -= a.x - o.e),
                (p.y -= a.y - o.f),
                Y(!0),
                xe());
            }
            var c = p.x,
              l = p.y;
            return (
              be(!t),
              e ? p.applyBounds() : (V && r && Y(!0), pe(!0)),
              t && (Ee(p.pointerX, p.pointerY), V && Y(!0)),
              p.isPressed &&
                !t &&
                ((u && Math.abs(c - p.x) > 0.01) || (d && Math.abs(l - p.y) > 0.01 && !s)) &&
                xe(),
              p.autoScroll &&
                (il(n.parentNode, p.isDragging), (_ = p.isDragging), Y(!0), tl(n, Oe), el(n, Oe)),
              p
            );
          }),
          (i.enable = function (e) {
            var t = { lazy: !0 },
              i,
              a,
              c;
            if (
              (r.cursor !== !1 && (t.cursor = r.cursor || dc),
              Ys.utils.checkPrefix(`touchCallout`) && (t.touchCallout = `none`),
              e !== `soft`)
            ) {
              for (
                Bc(
                  m,
                  u === d
                    ? `none`
                    : (r.allowNativeTouchScrolling &&
                          (n.scrollHeight === n.clientHeight) ==
                            (n.scrollWidth === n.clientHeight)) ||
                        r.allowEventDefault
                      ? `manipulation`
                      : u
                        ? `pan-y`
                        : `pan-x`
                ),
                  a = m.length;
                --a > -1;
              )
                ((c = m[a]),
                  fc || Kc(c, `mousedown`, we),
                  Kc(c, `touchstart`, we),
                  Kc(c, `click`, ke, !0),
                  Ys.set(c, t),
                  c.getBBox &&
                    c.ownerSVGElement &&
                    u !== d &&
                    Ys.set(c.ownerSVGElement, {
                      touchAction:
                        r.allowNativeTouchScrolling || r.allowEventDefault
                          ? `manipulation`
                          : u
                            ? `pan-y`
                            : `pan-x`,
                    }),
                  r.allowContextMenu || Kc(c, `contextmenu`, fe));
              hl(m, !1);
            }
            return (
              el(n, Oe),
              (O = !0),
              uc && e !== `soft` && uc.track(k || n, o ? `x,y` : s ? `rotation` : `top,left`),
              (n._gsDragID = i = `d` + Nc++),
              (Mc[i] = p),
              k && (k.enable(), (k.element._gsDragID = i)),
              (r.bounds || s) && xe(),
              r.bounds && p.applyBounds(),
              p
            );
          }),
          (i.disable = function (e) {
            for (var t = p.isDragging, r = m.length, i; --r > -1; ) al(m[r], `cursor`, null);
            if (e !== `soft`) {
              for (Bc(m, null), r = m.length; --r > -1; )
                ((i = m[r]),
                  al(i, `touchCallout`, null),
                  qc(i, `mousedown`, we),
                  qc(i, `touchstart`, we),
                  qc(i, `click`, ke, !0),
                  qc(i, `contextmenu`, fe));
              (hl(m, !0),
                K && (qc(K, `touchcancel`, De), qc(K, `touchend`, De), qc(K, `touchmove`, Te)),
                qc(D, `mouseup`, De),
                qc(D, `mousemove`, Te));
            }
            return (
              tl(n, Oe),
              (O = !1),
              uc &&
                e !== `soft` &&
                (uc.untrack(k || n, o ? `x,y` : s ? `rotation` : `top,left`),
                p.tween && p.tween.kill()),
              k && k.disable(),
              Wc(Y),
              (p.isDragging = p.isPressed = G = !1),
              t && ll(p, `dragend`, `onDragEnd`),
              p
            );
          }),
          (i.enabled = function (e, t) {
            return arguments.length ? (e ? p.enable(t) : p.disable(t)) : O;
          }),
          (i.kill = function () {
            return (
              (p.isThrowing = !1),
              p.tween && p.tween.kill(),
              p.disable(),
              Ys.set(m, { clearProps: `userSelect` }),
              delete Mc[n._gsDragID],
              p
            );
          }),
          (i.revert = function () {
            (this.kill(), this.styles && this.styles.revert());
          }),
          ~a.indexOf(`scroll`) &&
            ((k = i.scrollProxy =
              new yl(
                n,
                zc(
                  {
                    onKill: function () {
                      p.isPressed && De(null);
                    },
                  },
                  r
                )
              )),
            (n.style.overflowY = d && !oc ? `auto` : `hidden`),
            (n.style.overflowX = u && !oc ? `auto` : `hidden`),
            (n = k.content)),
          s ? (h.rotation = 1) : (u && (h[c] = 1), d && (h[l] = 1)),
          (w.force3D = `force3D` in r ? r.force3D : !0),
          pc(Tt(i)),
          i.enable(),
          i
        );
      }
      return (
        (t.register = function (e) {
          ((Ys = e), bl());
        }),
        (t.create = function (e, n) {
          return (
            nc || bl(!0),
            ic(e).map(function (e) {
              return new t(e, n);
            })
          );
        }),
        (t.get = function (e) {
          return Mc[(ic(e)[0] || {})._gsDragID];
        }),
        (t.timeSinceDrag = function () {
          return (Ac() - Fc) / 1e3;
        }),
        (t.hitTest = function (e, t, n) {
          if (e === t) return !1;
          var r = cl(e),
            i = cl(t),
            a = r.top,
            o = r.left,
            s = r.right,
            c = r.bottom,
            l = r.width,
            u = r.height,
            d = i.left > s || i.right < o || i.top > c || i.bottom < a,
            f,
            p,
            m;
          return d || !n
            ? !d
            : ((m = (n + ``).indexOf(`%`) !== -1),
              (n = parseFloat(n) || 0),
              (f = { left: Math.max(o, i.left), top: Math.max(a, i.top) }),
              (f.width = Math.min(s, i.right) - f.left),
              (f.height = Math.min(c, i.bottom) - f.top),
              f.width < 0 || f.height < 0
                ? !1
                : m
                  ? ((n *= 0.01),
                    (p = f.width * f.height),
                    p >= l * u * n || p >= i.width * i.height * n)
                  : f.width > n && f.height > n);
        }),
        t
      );
    })(
      (function () {
        function e(e) {
          ((this._listeners = {}), (this.target = e || this));
        }
        var t = e.prototype;
        return (
          (t.addEventListener = function (e, t) {
            var n = this._listeners[e] || (this._listeners[e] = []);
            ~n.indexOf(t) || n.push(t);
          }),
          (t.removeEventListener = function (e, t) {
            var n = this._listeners[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          }),
          (t.dispatchEvent = function (e) {
            var t = this,
              n;
            return (
              (this._listeners[e] || []).forEach(function (r) {
                return r.call(t, { type: e, target: t.target }) === !1 && (n = !1);
              }),
              n
            );
          }),
          e
        );
      })()
    )),
    Gc(xl.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1,
    }),
    (xl.zIndex = 1e3),
    (xl.version = `3.12.5`),
    _c() && Ys.registerPlugin(xl),
    (El = function () {
      return typeof t < `u`;
    }),
    (Dl = function () {
      return Sl || (El() && (Sl = t.gsap) && Sl.registerPlugin && Sl);
    }),
    (Ol = function () {
      return (
        Cl || (kl(), Tl || console.warn(`Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)`)),
        Cl
      );
    }),
    (kl = function (e) {
      ((Sl = e || Dl()), El() && (wl = document), Sl && ((Tl = Sl.plugins.css), Tl && (Cl = 1)));
    }),
    (Al = {
      version: `3.12.5`,
      name: `cssRule`,
      init: function (e, t, n, r, i) {
        if (!Ol() || typeof e.cssText > `u`) return !1;
        var a = (e._gsProxy = e._gsProxy || wl.createElement(`div`));
        ((this.ss = e),
          (this.style = a.style),
          (a.style.cssText = e.cssText),
          Tl.prototype.init.call(this, a, t, n, r, i));
      },
      render: function (e, t) {
        for (var n = t._pt, r = t.style, i = t.ss, a; n; ) (n.r(e, n.d), (n = n._next));
        for (a = r.length; --a > -1; ) i[r[a]] = r[r[a]];
      },
      getRule: function (e) {
        Ol();
        var t = wl.all ? `rules` : `cssRules`,
          n = wl.styleSheets,
          r = n.length,
          i = e.charAt(0) === `:`,
          a,
          o,
          s,
          c;
        for (
          e = (i ? `` : `,`) + e.split(`::`).join(`:`).toLowerCase() + `,`, i && (c = []);
          r--;
        ) {
          try {
            if (((o = n[r][t]), !o)) continue;
            a = o.length;
          } catch (e) {
            console.warn(e);
            continue;
          }
          for (; --a > -1; )
            if (
              ((s = o[a]),
              s.selectorText &&
                (`,` + s.selectorText.split(`::`).join(`:`).toLowerCase() + `,`).indexOf(e) !== -1)
            )
              if (i) c.push(s.style);
              else return s.style;
        }
        return c;
      },
      register: kl,
    }),
    Dl() && Sl.registerPlugin(Al),
    (Ll =
      `redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset`.split(
        `,`
      )),
    (Rl = function () {
      return typeof t < `u`;
    }),
    (zl = function () {
      return jl || (Rl() && (jl = t.gsap) && jl.registerPlugin && jl);
    }),
    (Bl = function () {
      return Pl || (Nl && Nl.createjs) || Nl || {};
    }),
    (Vl = function (e) {
      return console.warn(e);
    }),
    (Hl = function (e) {
      var t = e.getBounds && e.getBounds();
      (t ||
        ((t = e.nominalBounds || { x: 0, y: 0, width: 100, height: 100 }),
        e.setBounds && e.setBounds(t.x, t.y, t.width, t.height)),
        e.cache && e.cache(t.x, t.y, t.width, t.height),
        Vl(
          `EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. ` +
            e
        ));
    }),
    (Ul = function (e, t, n) {
      Fl ||
        ((Fl = Bl().ColorFilter),
        Fl || Vl(`EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.`));
      for (var r = e.filters || [], i = r.length, a, o, s, c, l, u; i--; )
        if (r[i] instanceof Fl) {
          o = r[i];
          break;
        }
      if ((o || ((o = new Fl()), r.push(o), (e.filters = r)), (s = o.clone()), t.tint != null))
        ((a = jl.utils.splitColor(t.tint)),
          (c = t.tintAmount == null ? 1 : +t.tintAmount),
          (s.redOffset = +a[0] * c),
          (s.greenOffset = +a[1] * c),
          (s.blueOffset = +a[2] * c),
          (s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - c));
      else for (l in t) l !== `exposure` && l !== `brightness` && (s[l] = +t[l]);
      for (
        t.exposure == null
          ? t.brightness != null &&
            ((c = t.brightness - 1),
            (s.redOffset = s.greenOffset = s.blueOffset = c > 0 ? c * 255 : 0),
            (s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - Math.abs(c)))
          : ((s.redOffset = s.greenOffset = s.blueOffset = 255 * (t.exposure - 1)),
            (s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1)),
          i = 8;
        i--;
      )
        ((l = Ll[i]),
          o[l] !== s[l] &&
            ((u = n.add(o, l, o[l], s[l], 0, 0, 0, 0, 0, 1)), u && (u.op = `easel_colorFilter`)));
      (n._props.push(`easel_colorFilter`), e.cacheID || Hl(e));
    }),
    (Wl = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
    (Gl = 0.212671),
    (Kl = 0.71516),
    (ql = 0.072169),
    (Jl = function (e, t) {
      if (!(e instanceof Array) || !(t instanceof Array)) return t;
      var n = [],
        r = 0,
        i = 0,
        a,
        o;
      for (a = 0; a < 4; a++) {
        for (o = 0; o < 5; o++)
          ((i = o === 4 ? e[r + 4] : 0),
            (n[r + o] =
              e[r] * t[o] + e[r + 1] * t[o + 5] + e[r + 2] * t[o + 10] + e[r + 3] * t[o + 15] + i));
        r += 5;
      }
      return n;
    }),
    (Yl = function (e, t) {
      if (isNaN(t)) return e;
      var n = 1 - t,
        r = n * Gl,
        i = n * Kl,
        a = n * ql;
      return Jl([r + t, i, a, 0, 0, r, i + t, a, 0, 0, r, i, a + t, 0, 0, 0, 0, 0, 1, 0], e);
    }),
    (Xl = function (e, t, n) {
      isNaN(n) && (n = 1);
      var r = jl.utils.splitColor(t),
        i = r[0] / 255,
        a = r[1] / 255,
        o = r[2] / 255,
        s = 1 - n;
      return Jl(
        [
          s + n * i * Gl,
          n * i * Kl,
          n * i * ql,
          0,
          0,
          n * a * Gl,
          s + n * a * Kl,
          n * a * ql,
          0,
          0,
          n * o * Gl,
          n * o * Kl,
          s + n * o * ql,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ],
        e
      );
    }),
    (Zl = function (e, t) {
      if (isNaN(t)) return e;
      t *= Math.PI / 180;
      var n = Math.cos(t),
        r = Math.sin(t);
      return Jl(
        [
          Gl + n * (1 - Gl) + r * -Gl,
          Kl + n * -Kl + r * -Kl,
          ql + n * -ql + r * (1 - ql),
          0,
          0,
          Gl + n * -Gl + r * 0.143,
          Kl + n * (1 - Kl) + r * 0.14,
          ql + n * -ql + r * -0.283,
          0,
          0,
          Gl + n * -Gl + r * -(1 - Gl),
          Kl + n * -Kl + r * Kl,
          ql + n * (1 - ql) + r * ql,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
        ],
        e
      );
    }),
    (Ql = function (e, t) {
      return isNaN(t)
        ? e
        : ((t += 0.01),
          Jl(
            [
              t,
              0,
              0,
              0,
              128 * (1 - t),
              0,
              t,
              0,
              0,
              128 * (1 - t),
              0,
              0,
              t,
              0,
              128 * (1 - t),
              0,
              0,
              0,
              1,
              0,
            ],
            e
          ));
    }),
    ($l = function (e, t, n) {
      Il ||
        ((Il = Bl().ColorMatrixFilter),
        Il || Vl(`EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.`));
      for (var r = e.filters || [], i = r.length, a, o, s, c; --i > -1; )
        if (r[i] instanceof Il) {
          s = r[i];
          break;
        }
      for (
        s || ((s = new Il(Wl.slice())), r.push(s), (e.filters = r)),
          o = s.matrix,
          a = Wl.slice(),
          t.colorize != null && (a = Xl(a, t.colorize, Number(t.colorizeAmount))),
          t.contrast != null && (a = Ql(a, Number(t.contrast))),
          t.hue != null && (a = Zl(a, Number(t.hue))),
          t.saturation != null && (a = Yl(a, Number(t.saturation))),
          i = a.length;
        --i > -1;
      )
        a[i] !== o[i] &&
          ((c = n.add(o, i, o[i], a[i], 0, 0, 0, 0, 0, 1)),
          c && (c.op = `easel_colorMatrixFilter`));
      (n._props.push(`easel_colorMatrixFilter`), e.cacheID || Hl(), (n._matrix = o));
    }),
    (eu = function (e) {
      ((jl = e || zl()), Rl() && (Nl = t), jl && (Ml = 1));
    }),
    (tu = {
      version: `3.12.5`,
      name: `easel`,
      init: function (e, t, n, r, i) {
        (Ml || (eu(), jl || Vl(`Please gsap.registerPlugin(EaselPlugin)`)), (this.target = e));
        var a, o, s, c, l, u, d;
        for (a in t)
          if (
            ((l = t[a]),
            a === `colorFilter` ||
              a === `tint` ||
              a === `tintAmount` ||
              a === `exposure` ||
              a === `brightness`)
          )
            s ||= (Ul(e, t.colorFilter || t, this), !0);
          else if (
            a === `saturation` ||
            a === `contrast` ||
            a === `hue` ||
            a === `colorize` ||
            a === `colorizeAmount`
          )
            c ||= ($l(e, t.colorMatrixFilter || t, this), !0);
          else if (a === `frame`) {
            if (typeof l == `string` && l.charAt(1) !== `=` && (u = e.labels))
              for (d = 0; d < u.length; d++) u[d].label === l && (l = u[d].position);
            ((o = this.add(e, `gotoAndStop`, e.currentFrame, l, r, i, Math.round, 0, 0, 1)),
              o && (o.op = a));
          } else e[a] != null && this.add(e, a, `get`, l);
      },
      render: function (e, t) {
        for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next));
        t.target.cacheID && t.target.updateCache();
      },
      register: eu,
    }),
    (tu.registerCreateJS = function (e) {
      Pl = e;
    }),
    zl() && jl.registerPlugin(tu),
    (iu = function () {
      return nu || (typeof t < `u` && (nu = t.gsap) && nu.registerPlugin && nu);
    }),
    (au = function (e, t) {
      return !!(typeof e > `u` ? t : e && !~(e + ``).indexOf(`false`));
    }),
    (ou = function (e) {
      if (((nu = e || iu()), nu)) {
        ru = nu.registerEase;
        var t = nu.parseEase(),
          n;
        for (n in t) t[n].config || t[n];
        for (n in (ru(`slow`, du), ru(`expoScale`, fu), ru(`rough`, pu), mu))
          n !== `version` && nu.core.globals(n, mu[n]);
      }
    }),
    (su = function (e, t, n) {
      e = Math.min(1, e || 0.7);
      var r = e < 1 ? (t || t === 0 ? t : 0.7) : 0,
        i = (1 - e) / 2,
        a = i + e,
        o = au(n);
      return function (e) {
        var t = e + (0.5 - e) * r;
        return e < i
          ? o
            ? 1 - (e = 1 - e / i) * e
            : t - (e = 1 - e / i) * e * e * e * t
          : e > a
            ? o
              ? e === 1
                ? 0
                : 1 - (e = (e - a) / i) * e
              : t + (e - t) * (e = (e - a) / i) * e * e * e
            : o
              ? 1
              : t;
      };
    }),
    (cu = function (e, t, n) {
      var r = Math.log(t / e),
        i = t - e;
      return (
        (n &&= nu.parseEase(n)),
        function (t) {
          return (e * Math.exp(r * (n ? n(t) : t)) - e) / i;
        }
      );
    }),
    (lu = function (e, t, n) {
      ((this.t = e),
        (this.v = t),
        n && ((this.next = n), (n.prev = this), (this.c = n.v - t), (this.gap = n.t - e)));
    }),
    (uu = function (e) {
      typeof e != `object` && (e = { points: +e || 20 });
      for (
        var t = e.taper || `none`,
          n = [],
          r = 0,
          i = (+e.points || 20) | 0,
          a = i,
          o = au(e.randomize, !0),
          s = au(e.clamp),
          c = nu ? nu.parseEase(e.template) : 0,
          l = (+e.strength || 1) * 0.4,
          u,
          d,
          f,
          p,
          m,
          h,
          g;
        --a > -1;
      )
        ((u = o ? Math.random() : (1 / i) * a),
          (d = c ? c(u) : u),
          t === `none`
            ? (f = l)
            : t === `out`
              ? ((p = 1 - u), (f = p * p * l))
              : t === `in`
                ? (f = u * u * l)
                : u < 0.5
                  ? ((p = u * 2), (f = p * p * 0.5 * l))
                  : ((p = (1 - u) * 2), (f = p * p * 0.5 * l)),
          o ? (d += Math.random() * f - f * 0.5) : a % 2 ? (d += f * 0.5) : (d -= f * 0.5),
          s && (d > 1 ? (d = 1) : d < 0 && (d = 0)),
          (n[r++] = { x: u, y: d }));
      for (
        n.sort(function (e, t) {
          return e.x - t.x;
        }),
          h = new lu(1, 1, null),
          a = i;
        a--;
      )
        ((m = n[a]), (h = new lu(m.x, m.y, h)));
      return (
        (g = new lu(0, 0, h.t ? h : h.next)),
        function (e) {
          var t = g;
          if (e > t.t) {
            for (; t.next && e >= t.t; ) t = t.next;
            t = t.prev;
          } else for (; t.prev && e <= t.t; ) t = t.prev;
          return ((g = t), t.v + ((e - t.t) / t.gap) * t.c);
        }
      );
    }),
    (du = su(0.7)),
    (du.ease = du),
    (du.config = su),
    (fu = cu(1, 2)),
    (fu.config = cu),
    (pu = uu()),
    (pu.ease = pu),
    (pu.config = uu),
    (mu = { SlowMo: du, RoughEase: pu, ExpoScaleEase: fu }),
    mu))
      ((mu[hu].register = ou), (mu[hu].version = `3.12.5`));
    for (
      iu() && nu.registerPlugin(du),
        gu = 1,
        wu = function (e, t) {
          return e.actions.forEach(function (e) {
            return e.vars[t] && e.vars[t](e);
          });
        },
        Tu = {},
        Eu = 180 / Math.PI,
        Du = Math.PI / 180,
        Ou = {},
        ku = {},
        Au = {},
        ju = function (e) {
          return typeof e == `string` ? e.split(` `).join(``).split(`,`) : e;
        },
        Mu = ju(`onStart,onUpdate,onComplete,onReverseComplete,onInterrupt`),
        Nu = ju(
          `transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight`
        ),
        Pu = function (e) {
          return _u(e)[0] || console.warn(`Element not found:`, e);
        },
        Fu = function (e) {
          return Math.round(e * 1e4) / 1e4 || 0;
        },
        Iu = function (e, t, n) {
          return e.forEach(function (e) {
            return e.classList[n](t);
          });
        },
        Lu = {
          zIndex: 1,
          kill: 1,
          simple: 1,
          spin: 1,
          clearProps: 1,
          targets: 1,
          toggleClass: 1,
          onComplete: 1,
          onUpdate: 1,
          onInterrupt: 1,
          onStart: 1,
          delay: 1,
          repeat: 1,
          repeatDelay: 1,
          yoyo: 1,
          scale: 1,
          fade: 1,
          absolute: 1,
          props: 1,
          onEnter: 1,
          onLeave: 1,
          custom: 1,
          paused: 1,
          nested: 1,
          prune: 1,
          absoluteOnLeave: 1,
        },
        Ru = {
          zIndex: 1,
          simple: 1,
          clearProps: 1,
          scale: 1,
          absolute: 1,
          fitChild: 1,
          getVars: 1,
          props: 1,
        },
        zu = function (e) {
          return e.replace(/([A-Z])/g, `-$1`).toLowerCase();
        },
        Bu = function (e, t) {
          var n = {},
            r;
          for (r in e) t[r] || (n[r] = e[r]);
          return n;
        },
        Vu = {},
        Hu = function (e) {
          var t = (Vu[e] = ju(e));
          return ((Au[e] = t.concat(Nu)), t);
        },
        Uu = function (e) {
          var t = e._gsap || vu.core.getCache(e);
          return t.gmCache === vu.ticker.frame
            ? t.gMatrix
            : ((t.gmCache = vu.ticker.frame), (t.gMatrix = wt(e, !0, !1, !0)));
        },
        Wu = function e(t, n, r) {
          r === void 0 && (r = 0);
          for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t; )
            ((o += a), (t = t.previousSibling));
          return i ? o + e(i, n, r + 1) : o;
        },
        Gu = function (e, t, n) {
          return (
            e.forEach(function (e) {
              return (e.d = Wu(n ? e.element : e.t, t));
            }),
            e.sort(function (e, t) {
              return e.d - t.d;
            }),
            e
          );
        },
        Ku = function (e, t) {
          for (var n = e.element.style, r = (e.css = e.css || []), i = t.length, a, o; i--; )
            ((a = t[i]),
              (o = n[a] || n.getPropertyValue(a)),
              r.push(o ? a : ku[a] || (ku[a] = zu(a)), o));
          return n;
        },
        qu = function (e) {
          var t = e.css,
            n = e.element.style,
            r = 0;
          for (e.cache.uncache = 1; r < t.length; r += 2)
            t[r + 1] ? (n[t[r]] = t[r + 1]) : n.removeProperty(t[r]);
          !t[t.indexOf(`transform`) + 1] &&
            n.translate &&
            (n.removeProperty(`translate`), n.removeProperty(`scale`), n.removeProperty(`rotate`));
        },
        Ju = function (e, t) {
          (e.forEach(function (e) {
            return (e.a.cache.uncache = 1);
          }),
            t || e.finalStates.forEach(qu));
        },
        Yu = `paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition`.split(`,`),
        Xu = function (e, n, r) {
          var i = e.element,
            a = e.width,
            o = e.height,
            s = e.uncache,
            c = e.getProp,
            l = i.style,
            u = 4,
            d,
            f,
            p;
          if ((typeof n != `object` && (n = e), yu && r !== 1))
            return (
              yu._abs.push({ t: i, b: e, a: e, sd: 0 }),
              yu._final.push(function () {
                return (e.cache.uncache = 1) && qu(e);
              }),
              i
            );
          for (
            f = c(`display`) === `none`,
              (!e.isVisible || f) &&
                (f && (Ku(e, [`display`]).display = n.display),
                (e.matrix = n.matrix),
                (e.width = a = e.width || n.width),
                (e.height = o = e.height || n.height)),
              Ku(e, Yu),
              p = t.getComputedStyle(i);
            u--;
          )
            l[Yu[u]] = p[Yu[u]];
          if (
            ((l.gridArea = `1 / 1 / 1 / 1`),
            (l.transition = `none`),
            (l.position = `absolute`),
            (l.width = a + `px`),
            (l.height = o + `px`),
            (l.top ||= `0px`),
            (l.left ||= `0px`),
            s)
          )
            d = new vd(i);
          else if (((d = Bu(e, Ou)), (d.position = `absolute`), e.simple)) {
            var m = i.getBoundingClientRect();
            d.matrix = new Js(1, 0, 0, 1, m.left + Bs(), m.top + zs());
          } else d.matrix = wt(i, !1, !1, !0);
          return ((d = od(d, e, !0)), (e.x = Su(d.x, 0.01)), (e.y = Su(d.y, 0.01)), i);
        },
        Zu = function (e, t) {
          return (
            t !== !0 &&
              ((t = _u(t)),
              (e = e.filter(function (e) {
                if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
                (e.t._gsap.renderTransform(1),
                  e.b.isVisible &&
                    ((e.t.style.width = e.b.width + `px`), (e.t.style.height = e.b.height + `px`)));
              }))),
            e
          );
        },
        Qu = function (e) {
          return Gu(e, !0).forEach(function (e) {
            return (e.a.isVisible || e.b.isVisible) && Xu(e.sd < 0 ? e.b : e.a, e.b, 1);
          });
        },
        $u = function (e, t) {
          return (t && e.idLookup[ed(t).id]) || e.elementStates[0];
        },
        ed = function (e, t, n, r) {
          return e instanceof vd
            ? e
            : e instanceof _d
              ? $u(e, r)
              : new vd(typeof e == `string` ? Pu(e) || console.warn(e + ` not found`) : e, t, n);
        },
        td = function (e, t) {
          for (
            var n = vu.getProperty(e.element, null, `native`), r = (e.props = {}), i = t.length;
            i--;
          )
            r[t[i]] = (n(t[i]) + ``).trim();
          return ((r.zIndex &&= parseFloat(r.zIndex) || 0), e);
        },
        nd = function (e, t) {
          var n = e.style || e,
            r;
          for (r in t) n[r] = t[r];
        },
        rd = function (e) {
          var t = e.getAttribute(`data-flip-id`);
          return (t || e.setAttribute(`data-flip-id`, (t = `auto-` + gu++)), t);
        },
        id = function (e) {
          return e.map(function (e) {
            return e.element;
          });
        },
        ad = function (e, t, n) {
          return e && t.length && n.add(e(id(t), n, new _d(t, 0, !0)), 0);
        },
        od = function (e, t, n, r, i, a) {
          var o = e.element,
            s = e.cache,
            c = e.parent,
            l = e.x,
            u = e.y,
            d = t.width,
            f = t.height,
            p = t.scaleX,
            m = t.scaleY,
            h = t.rotation,
            g = t.bounds,
            _ = a && Cu && Cu(o, `transform`),
            v = e,
            y = t.matrix,
            b = y.e,
            x = y.f,
            S =
              e.bounds.width !== g.width ||
              e.bounds.height !== g.height ||
              e.scaleX !== p ||
              e.scaleY !== m ||
              e.rotation !== h,
            C = !S && e.simple && t.simple && !i,
            w,
            T,
            E,
            D,
            O,
            k,
            A;
          return (
            C || !c
              ? ((p = m = 1), (h = w = 0))
              : ((O = Uu(c)),
                (k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix)),
                (h = Fu(Math.atan2(k.b, k.a) * Eu)),
                (w = Fu(Math.atan2(k.c, k.d) * Eu + h) % 360),
                (p = Math.sqrt(k.a ** 2 + k.b ** 2)),
                (m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * Du)),
                i &&
                  ((i = _u(i)[0]),
                  (D = vu.getProperty(i)),
                  (A = i.getBBox && typeof i.getBBox == `function` && i.getBBox()),
                  (v = {
                    scaleX: D(`scaleX`),
                    scaleY: D(`scaleY`),
                    width: A ? A.width : Math.ceil(parseFloat(D(`width`, `px`))),
                    height: A ? A.height : parseFloat(D(`height`, `px`)),
                  })),
                (s.rotation = h + `deg`),
                (s.skewX = w + `deg`)),
            n
              ? ((p *= d === v.width || !v.width ? 1 : d / v.width),
                (m *= f === v.height || !v.height ? 1 : f / v.height),
                (s.scaleX = p),
                (s.scaleY = m))
              : ((d = Su((d * p) / v.scaleX, 0)),
                (f = Su((f * m) / v.scaleY, 0)),
                (o.style.width = d + `px`),
                (o.style.height = f + `px`)),
            r && nd(o, t.props),
            C || !c
              ? ((l += b - e.matrix.e), (u += x - e.matrix.f))
              : S || c !== t.parent
                ? (s.renderTransform(1, s),
                  (k = wt(i || o, !1, !1, !0)),
                  (T = O.apply({ x: k.e, y: k.f })),
                  (E = O.apply({ x: b, y: x })),
                  (l += E.x - T.x),
                  (u += E.y - T.y))
                : ((O.e = O.f = 0),
                  (E = O.apply({ x: b - e.matrix.e, y: x - e.matrix.f })),
                  (l += E.x),
                  (u += E.y)),
            (l = Su(l, 0.02)),
            (u = Su(u, 0.02)),
            a && !(a instanceof vd)
              ? _ && _.revert()
              : ((s.x = l + `px`), (s.y = u + `px`), s.renderTransform(1, s)),
            a &&
              ((a.x = l),
              (a.y = u),
              (a.rotation = h),
              (a.skewX = w),
              n ? ((a.scaleX = p), (a.scaleY = m)) : ((a.width = d), (a.height = f))),
            a || s
          );
        },
        sd = function (e, t) {
          return e instanceof _d ? e : new _d(e, t);
        },
        cd = function (e, t, n) {
          var r = e.idLookup[n],
            i = e.alt[n];
          return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible)
            ? i
            : r;
        },
        ld = [],
        ud = `width,height,overflowX,overflowY`.split(`,`),
        fd = function (e) {
          if (e !== dd) {
            var n = xu.style,
              r = xu.clientWidth === t.outerWidth,
              i = xu.clientHeight === t.outerHeight,
              a = 4;
            if (e && (r || i)) {
              for (; a--; ) ld[a] = n[ud[a]];
              (r && ((n.width = xu.clientWidth + `px`), (n.overflowY = `hidden`)),
                i && ((n.height = xu.clientHeight + `px`), (n.overflowX = `hidden`)),
                (dd = e));
            } else if (dd) {
              for (; a--; ) ld[a] ? (n[ud[a]] = ld[a]) : n.removeProperty(zu(ud[a]));
              dd = e;
            }
          }
        },
        pd = function (e, t, n, r) {
          ((e instanceof _d && t instanceof _d) || console.warn(`Not a valid state object.`),
            (n ||= {}));
          var i = n,
            a = i.clearProps,
            o = i.onEnter,
            s = i.onLeave,
            c = i.absolute,
            l = i.absoluteOnLeave,
            u = i.custom,
            d = i.delay,
            f = i.paused,
            p = i.repeat,
            m = i.repeatDelay,
            h = i.yoyo,
            g = i.toggleClass,
            _ = i.nested,
            v = i.zIndex,
            y = i.scale,
            b = i.fade,
            x = i.stagger,
            S = i.spin,
            C = i.prune,
            w = ((`props` in n) ? n : e).props,
            T = Bu(n, Lu),
            E = vu.timeline({
              delay: d,
              paused: f,
              repeat: p,
              repeatDelay: m,
              yoyo: h,
              data: `isFlip`,
            }),
            D = T,
            O = [],
            k = [],
            A = [],
            j = [],
            M = S === !0 ? 1 : S || 0,
            N =
              typeof S == `function`
                ? S
                : function () {
                    return M;
                  },
            P = e.interrupted || t.interrupted,
            ee = E[r === 1 ? `from` : `to`],
            te,
            F,
            I,
            L,
            R,
            z,
            ne,
            B,
            V,
            re,
            H,
            U,
            W,
            G;
          for (F in t.idLookup)
            ((H = t.alt[F] ? cd(t, e, F) : t.idLookup[F]),
              (R = H.element),
              (re = e.idLookup[F]),
              e.alt[F] &&
                R === re.element &&
                (e.alt[F].isVisible || !H.isVisible) &&
                (re = e.alt[F]),
              re
                ? ((z = { t: R, b: re, a: H, sd: re.element === R ? 0 : H.isVisible ? 1 : -1 }),
                  A.push(z),
                  z.sd &&
                    (z.sd < 0 && ((z.b = H), (z.a = re)),
                    P && Ku(z.b, w ? Au[w] : Nu),
                    b && A.push((z.swap = { t: re.element, b: z.b, a: z.a, sd: -z.sd, swap: z }))),
                  (R._flip = re.element._flip = yu ? yu.timeline : E))
                : H.isVisible &&
                  (A.push({ t: R, b: Bu(H, { isVisible: 1 }), a: H, sd: 0, entering: 1 }),
                  (R._flip = yu ? yu.timeline : E)));
          if (
            (w &&
              (Vu[w] || Hu(w)).forEach(function (e) {
                return (T[e] = function (t) {
                  return A[t].a.props[e];
                });
              }),
            (A.finalStates = V = []),
            (U = function () {
              for (Gu(A), fd(!0), L = 0; L < A.length; L++)
                ((z = A[L]),
                  (W = z.a),
                  (G = z.b),
                  C && !W.isDifferent(G) && !z.entering
                    ? A.splice(L--, 1)
                    : ((R = z.t),
                      _ && !(z.sd < 0) && L && (W.matrix = wt(R, !1, !1, !0)),
                      G.isVisible && W.isVisible
                        ? (z.sd < 0
                            ? ((ne = new vd(R, w, e.simple)),
                              od(ne, W, y, 0, 0, ne),
                              (ne.matrix = wt(R, !1, !1, !0)),
                              (ne.css = z.b.css),
                              (z.a = W = ne),
                              b && (R.style.opacity = P ? G.opacity : W.opacity),
                              x && j.push(R))
                            : z.sd > 0 && b && (R.style.opacity = P ? W.opacity - G.opacity : `0`),
                          od(W, G, y, w))
                        : G.isVisible !== W.isVisible &&
                          (G.isVisible
                            ? W.isVisible ||
                              ((G.css = W.css),
                              k.push(G),
                              A.splice(L--, 1),
                              c && _ && od(W, G, y, w))
                            : (W.isVisible && O.push(W), A.splice(L--, 1))),
                      y ||
                        ((R.style.maxWidth = Math.max(W.width, G.width) + `px`),
                        (R.style.maxHeight = Math.max(W.height, G.height) + `px`),
                        (R.style.minWidth = Math.min(W.width, G.width) + `px`),
                        (R.style.minHeight = Math.min(W.height, G.height) + `px`)),
                      _ && g && R.classList.add(g)),
                  V.push(W));
              var t;
              if (
                (g &&
                  ((t = V.map(function (e) {
                    return e.element;
                  })),
                  _ &&
                    t.forEach(function (e) {
                      return e.classList.remove(g);
                    })),
                fd(!1),
                y
                  ? ((T.scaleX = function (e) {
                      return A[e].a.scaleX;
                    }),
                    (T.scaleY = function (e) {
                      return A[e].a.scaleY;
                    }))
                  : ((T.width = function (e) {
                      return A[e].a.width + `px`;
                    }),
                    (T.height = function (e) {
                      return A[e].a.height + `px`;
                    }),
                    (T.autoRound = n.autoRound || !1)),
                (T.x = function (e) {
                  return A[e].a.x + `px`;
                }),
                (T.y = function (e) {
                  return A[e].a.y + `px`;
                }),
                (T.rotation = function (e) {
                  return A[e].a.rotation + (S ? N(e, B[e], B) * 360 : 0);
                }),
                (T.skewX = function (e) {
                  return A[e].a.skewX;
                }),
                (B = A.map(function (e) {
                  return e.t;
                })),
                (v || v === 0) &&
                  ((T.modifiers = {
                    zIndex: function () {
                      return v;
                    },
                  }),
                  (T.zIndex = v),
                  (T.immediateRender = n.immediateRender !== !1)),
                b &&
                  (T.opacity = function (e) {
                    return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : `+=0`;
                  }),
                j.length)
              ) {
                x = vu.utils.distribute(x);
                var r = B.slice(j.length);
                T.stagger = function (e, t) {
                  return x(~j.indexOf(t) ? B.indexOf(A[e].swap.t) : e, t, r);
                };
              }
              if (
                (Mu.forEach(function (e) {
                  return n[e] && E.eventCallback(e, n[e], n[e + `Params`]);
                }),
                u && B.length)
              )
                for (F in ((D = Bu(T, Lu)),
                (`scale` in u) && ((u.scaleX = u.scaleY = u.scale), delete u.scale),
                u))
                  ((te = Bu(u[F], Ru)),
                    (te[F] = T[F]),
                    !(`duration` in te) && (`duration` in T) && (te.duration = T.duration),
                    (te.stagger = T.stagger),
                    ee.call(E, B, te, 0),
                    delete D[F]);
              ((B.length || k.length || O.length) &&
                (g &&
                  E.add(function () {
                    return Iu(t, g, E._zTime < 0 ? `remove` : `add`);
                  }, 0) &&
                  !f &&
                  Iu(t, g, `add`),
                B.length && ee.call(E, B, D, 0)),
                ad(o, O, E),
                ad(s, k, E));
              var i = yu && yu.timeline;
              (i &&
                (i.add(E, 0),
                yu._final.push(function () {
                  return Ju(A, !a);
                })),
                (I = E.duration()),
                E.call(function () {
                  var e = E.time() >= I;
                  (e && !i && Ju(A, !a), g && Iu(t, g, e ? `remove` : `add`));
                }));
            }),
            l &&
              (c = A.filter(function (e) {
                return !e.sd && !e.a.isVisible && e.b.isVisible;
              }).map(function (e) {
                return e.a.element;
              })),
            yu)
          ) {
            var K;
            (c && (K = yu._abs).push.apply(K, Zu(A, c)), yu._run.push(U));
          } else (c && Qu(Zu(A, c)), U());
          var q = yu ? yu.timeline : E;
          return (
            (q.revert = function () {
              return hd(q, 1, 1);
            }),
            q
          );
        },
        md = function e(t) {
          (t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []),
            t.getChildren(!0, !1, !0).forEach(e));
        },
        hd = function (e, t, n) {
          if (e && e.progress() < 1 && (!e.paused() || n))
            return (t && (md(e), t < 2 && e.progress(1), e.kill()), !0);
        },
        gd = function (e) {
          for (
            var t = (e.idLookup = {}), n = (e.alt = {}), r = e.elementStates, i = r.length, a;
            i--;
          )
            ((a = r[i]), t[a.id] ? (n[a.id] = a) : (t[a.id] = a));
        },
        _d = (function () {
          function e(e, t, n) {
            if (((this.props = t && t.props), (this.simple = !!(t && t.simple)), n))
              ((this.targets = id(e)), (this.elementStates = e), gd(this));
            else {
              this.targets = _u(e);
              var r = t && (t.kill === !1 || (t.batch && !t.kill));
              (yu && !r && yu._kill.push(this), this.update(r || !!yu));
            }
          }
          var t = e.prototype;
          return (
            (t.update = function (e) {
              var t = this;
              return (
                (this.elementStates = this.targets.map(function (e) {
                  return new vd(e, t.props, t.simple);
                })),
                gd(this),
                this.interrupt(e),
                this.recordInlineStyles(),
                this
              );
            }),
            (t.clear = function () {
              return ((this.targets.length = this.elementStates.length = 0), gd(this), this);
            }),
            (t.fit = function (e, t, n) {
              for (
                var r = Gu(this.elementStates.slice(0), !1, !0),
                  i = (e || this).idLookup,
                  a = 0,
                  o,
                  s;
                a < r.length;
                a++
              )
                ((o = r[a]),
                  n && (o.matrix = wt(o.element, !1, !1, !0)),
                  (s = i[o.id]),
                  s && od(o, s, t, !0, 0, o),
                  (o.matrix = wt(o.element, !1, !1, !0)));
              return this;
            }),
            (t.getProperty = function (e, t) {
              var n = this.getElementState(e) || Ou;
              return ((t in n) ? n : n.props || Ou)[t];
            }),
            (t.add = function (e) {
              for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--; )
                ((a = e.elementStates[t]),
                  (o = n[a.id]),
                  o && (a.element === o.element || (r[a.id] && r[a.id].element === a.element))
                    ? ((i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id])),
                      this.targets.splice(i, 1, e.targets[t]),
                      this.elementStates.splice(i, 1, a))
                    : (this.targets.push(e.targets[t]), this.elementStates.push(a)));
              return (
                e.interrupted && (this.interrupted = !0),
                e.simple || (this.simple = !1),
                gd(this),
                this
              );
            }),
            (t.compare = function (e) {
              var t = e.idLookup,
                n = this.idLookup,
                r = [],
                i = [],
                a = [],
                o = [],
                s = [],
                c = e.alt,
                l = this.alt,
                u = function (e, t, n) {
                  return (
                    (e.isVisible === t.isVisible
                      ? e.isVisible
                        ? i
                        : r
                      : e.isVisible
                        ? a
                        : o
                    ).push(n) && s.push(n)
                  );
                },
                d = function (e, t, n) {
                  return s.indexOf(n) < 0 && u(e, t, n);
                },
                f,
                p,
                m,
                h,
                g,
                _,
                v,
                y;
              for (m in t)
                ((g = c[m]),
                  (_ = l[m]),
                  (f = g ? cd(e, this, m) : t[m]),
                  (h = f.element),
                  (p = n[m]),
                  _
                    ? ((y = p.isVisible || (!_.isVisible && h === p.element) ? p : _),
                      (v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f),
                      v.isVisible && y.isVisible && v.element !== y.element
                        ? ((v.isDifferent(y) ? i : r).push(v.element, y.element),
                          s.push(v.element, y.element))
                        : u(v, y, v.element),
                      g && v.element === g.element && (g = t[m]),
                      d(v.element !== p.element && g ? g : v, p, p.element),
                      d(g && g.element === _.element ? g : v, _, _.element),
                      g && d(g, _.element === g.element ? _ : p, g.element))
                    : (p ? (p.isDifferent(f) ? u(f, p, h) : r.push(h)) : a.push(h),
                      g && d(g, p, g.element)));
              for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
              return { changed: i, unchanged: r, enter: a, leave: o };
            }),
            (t.recordInlineStyles = function () {
              for (var e = Au[this.props] || Nu, t = this.elementStates.length; t--; )
                Ku(this.elementStates[t], e);
            }),
            (t.interrupt = function (e) {
              var t = this,
                n = [];
              (this.targets.forEach(function (r) {
                var i = r._flip,
                  a = hd(i, +!e);
                (e &&
                  a &&
                  n.indexOf(i) < 0 &&
                  i.add(function () {
                    return t.updateVisibility();
                  }),
                  a && n.push(i));
              }),
                !e && n.length && this.updateVisibility(),
                (this.interrupted ||= !!n.length));
            }),
            (t.updateVisibility = function () {
              this.elementStates.forEach(function (e) {
                var t = e.element.getBoundingClientRect();
                ((e.isVisible = !!(t.width || t.height || t.top || t.left)), (e.uncache = 1));
              });
            }),
            (t.getElementState = function (e) {
              return this.elementStates[this.targets.indexOf(Pu(e))];
            }),
            (t.makeAbsolute = function () {
              return Gu(this.elementStates.slice(0), !0, !0).map(Xu);
            }),
            e
          );
        })(),
        vd = (function () {
          function e(e, t, n) {
            ((this.element = e), this.update(t, n));
          }
          var t = e.prototype;
          return (
            (t.isDifferent = function (e) {
              var t = this.bounds,
                n = e.bounds;
              return (
                t.top !== n.top ||
                t.left !== n.left ||
                t.width !== n.width ||
                t.height !== n.height ||
                !this.matrix.equals(e.matrix) ||
                this.opacity !== e.opacity ||
                (this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props))
              );
            }),
            (t.update = function (e, t) {
              var n = this,
                r = n.element,
                i = vu.getProperty(r),
                a = vu.core.getCache(r),
                o = r.getBoundingClientRect(),
                s =
                  r.getBBox &&
                  typeof r.getBBox == `function` &&
                  r.nodeName.toLowerCase() !== `svg` &&
                  r.getBBox(),
                c = t ? new Js(1, 0, 0, 1, o.left + Bs(), o.top + zs()) : wt(r, !1, !1, !0);
              ((n.getProp = i),
                (n.element = r),
                (n.id = rd(r)),
                (n.matrix = c),
                (n.cache = a),
                (n.bounds = o),
                (n.isVisible = !!(o.width || o.height || o.left || o.top)),
                (n.display = i(`display`)),
                (n.position = i(`position`)),
                (n.parent = r.parentNode),
                (n.x = i(`x`)),
                (n.y = i(`y`)),
                (n.scaleX = a.scaleX),
                (n.scaleY = a.scaleY),
                (n.rotation = i(`rotation`)),
                (n.skewX = i(`skewX`)),
                (n.opacity = i(`opacity`)),
                (n.width = s ? s.width : Su(i(`width`, `px`), 0.04)),
                (n.height = s ? s.height : Su(i(`height`, `px`), 0.04)),
                e && td(n, Vu[e] || Hu(e)),
                (n.ctm = r.getCTM && r.nodeName.toLowerCase() === `svg` && Gs(r).inverse()),
                (n.simple = t || (Fu(c.a) === 1 && !Fu(c.b) && !Fu(c.c) && Fu(c.d) === 1)),
                (n.uncache = 0));
            }),
            e
          );
        })(),
        yd = (function () {
          function e(e, t) {
            ((this.vars = e), (this.batch = t), (this.states = []), (this.timeline = t.timeline));
          }
          var t = e.prototype;
          return (
            (t.getStateById = function (e) {
              for (var t = this.states.length; t--; )
                if (this.states[t].idLookup[e]) return this.states[t];
            }),
            (t.kill = function () {
              this.batch.remove(this);
            }),
            e
          );
        })(),
        bd = (function () {
          function e(e) {
            ((this.id = e),
              (this.actions = []),
              (this._kill = []),
              (this._final = []),
              (this._abs = []),
              (this._run = []),
              (this.data = {}),
              (this.state = new _d()),
              (this.timeline = vu.timeline()));
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this.actions.filter(function (t) {
                return t.vars === e;
              });
              return t.length
                ? t[0]
                : ((t = new yd(typeof e == `function` ? { animate: e } : e, this)),
                  this.actions.push(t),
                  t);
            }),
            (t.remove = function (e) {
              var t = this.actions.indexOf(e);
              return (t >= 0 && this.actions.splice(t, 1), this);
            }),
            (t.getState = function (e) {
              var t = this,
                n = yu,
                r = bu;
              return (
                (yu = this),
                this.state.clear(),
                (this._kill.length = 0),
                this.actions.forEach(function (n) {
                  (n.vars.getState &&
                    ((n.states.length = 0), (bu = n), (n.state = n.vars.getState(n))),
                    e &&
                      n.states.forEach(function (e) {
                        return t.state.add(e);
                      }));
                }),
                (bu = r),
                (yu = n),
                this.killConflicts(),
                this
              );
            }),
            (t.animate = function () {
              var e = this,
                t = yu,
                n = this.timeline,
                r = this.actions.length,
                i,
                a;
              for (
                yu = this,
                  n.clear(),
                  this._abs.length = this._final.length = this._run.length = 0,
                  this.actions.forEach(function (e) {
                    e.vars.animate && e.vars.animate(e);
                    var t = e.vars.onEnter,
                      n = e.vars.onLeave,
                      r = e.targets,
                      i,
                      a;
                    r &&
                      r.length &&
                      (t || n) &&
                      ((i = new _d()),
                      e.states.forEach(function (e) {
                        return i.add(e);
                      }),
                      (a = i.compare(xd.getState(r))),
                      a.enter.length && t && t(a.enter),
                      a.leave.length && n && n(a.leave));
                  }),
                  Qu(this._abs),
                  this._run.forEach(function (e) {
                    return e();
                  }),
                  a = n.duration(),
                  i = this._final.slice(0),
                  n.add(function () {
                    a <= n.time() &&
                      (i.forEach(function (e) {
                        return e();
                      }),
                      wu(e, `onComplete`));
                  }),
                  yu = t;
                r--;
              )
                this.actions[r].vars.once && this.actions[r].kill();
              return (wu(this, `onStart`), n.restart(), this);
            }),
            (t.loadState = function (e) {
              e ||= function () {
                return 0;
              };
              var t = [];
              return (
                this.actions.forEach(function (n) {
                  if (n.vars.loadState) {
                    var r,
                      i = function i(a) {
                        (a && (n.targets = a),
                          (r = t.indexOf(i)),
                          ~r && (t.splice(r, 1), t.length || e()));
                      };
                    (t.push(i), n.vars.loadState(i));
                  }
                }),
                t.length || e(),
                this
              );
            }),
            (t.setState = function () {
              return (
                this.actions.forEach(function (e) {
                  return (e.targets = e.vars.setState && e.vars.setState(e));
                }),
                this
              );
            }),
            (t.killConflicts = function (e) {
              return (
                this.state.interrupt(e),
                this._kill.forEach(function (t) {
                  return t.interrupt(e);
                }),
                this
              );
            }),
            (t.run = function (e, t) {
              var n = this;
              return (
                this !== yu &&
                  (e || this.getState(t),
                  this.loadState(function () {
                    n._killed || (n.setState(), n.animate());
                  })),
                this
              );
            }),
            (t.clear = function (e) {
              (this.state.clear(), e || (this.actions.length = 0));
            }),
            (t.getStateById = function (e) {
              for (var t = this.actions.length, n; t--; )
                if (((n = this.actions[t].getStateById(e)), n)) return n;
              return this.state.idLookup[e] && this.state;
            }),
            (t.kill = function () {
              ((this._killed = 1), this.clear(), delete Tu[this.id]);
            }),
            e
          );
        })(),
        xd = (function () {
          function e() {}
          return (
            (e.getState = function (t, n) {
              var r = sd(t, n);
              return (bu && bu.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r);
            }),
            (e.from = function (e, t) {
              return (
                (t ||= {}),
                (`clearProps` in t) || (t.clearProps = !0),
                pd(
                  e,
                  sd(t.targets || e.targets, {
                    props: t.props || e.props,
                    simple: t.simple,
                    kill: !!t.kill,
                  }),
                  t,
                  -1
                )
              );
            }),
            (e.to = function (e, t) {
              return pd(
                e,
                sd(t.targets || e.targets, {
                  props: t.props || e.props,
                  simple: t.simple,
                  kill: !!t.kill,
                }),
                t,
                1
              );
            }),
            (e.fromTo = function (e, t, n) {
              return pd(e, t, n);
            }),
            (e.fit = function (e, t, n) {
              var r = n ? Bu(n, Ru) : {},
                i = n || r,
                a = i.absolute,
                o = i.scale,
                s = i.getVars,
                c = i.props,
                l = i.runBackwards,
                u = i.onComplete,
                d = i.simple,
                f = n && n.fitChild && Pu(n.fitChild),
                p = ed(t, c, d, e),
                m = ed(e, 0, d, p),
                h = c ? Au[c] : Nu,
                g = vu.context();
              return (
                c && nd(r, p.props),
                Ku(m, h),
                l &&
                  ((`immediateRender` in r) || (r.immediateRender = !0),
                  (r.onComplete = function () {
                    (qu(m), u && u.apply(this, arguments));
                  })),
                a && Xu(m, p),
                (r = od(m, p, o || f, c, f, r.duration || s ? r : 0)),
                g &&
                  !s &&
                  g.add(function () {
                    return function () {
                      return qu(m);
                    };
                  }),
                s ? r : r.duration ? vu.to(m.element, r) : null
              );
            }),
            (e.makeAbsolute = function (e, t) {
              return (e instanceof _d ? e : new _d(e, t)).makeAbsolute();
            }),
            (e.batch = function (e) {
              return ((e ||= `default`), Tu[e] || (Tu[e] = new bd(e)));
            }),
            (e.killFlipsOf = function (e, t) {
              (e instanceof _d ? e.targets : _u(e)).forEach(function (e) {
                return e && hd(e._flip, t === !1 ? 2 : 1);
              });
            }),
            (e.isFlipping = function (t) {
              var n = e.getByTarget(t);
              return !!n && n.isActive();
            }),
            (e.getByTarget = function (e) {
              return (Pu(e) || Ou)._flip;
            }),
            (e.getElementState = function (e, t) {
              return new vd(Pu(e), t);
            }),
            (e.convertCoordinates = function (e, t, n) {
              var r = wt(t, !0, !0).multiply(wt(e));
              return n ? r.apply(n) : r;
            }),
            (e.register = function (e) {
              if (((xu = typeof document < `u` && document.body), xu)) {
                ((vu = e), Fs(xu), (_u = vu.utils.toArray), (Cu = vu.core.getStyleSaver));
                var t = vu.utils.snap(0.1);
                Su = function (e, n) {
                  return t(parseFloat(e) + n);
                };
              }
            }),
            e
          );
        })(),
        xd.version = `3.12.5`,
        typeof t < `u` && t.gsap && t.gsap.registerPlugin(xd),
        Sd = `x,translateX,left,marginLeft,xPercent`.split(`,`),
        Cd = `y,translateY,top,marginTop,yPercent`.split(`,`),
        wd = Math.PI / 180,
        jd = function () {
          return Td || (typeof t < `u` && (Td = t.gsap) && Td.registerPlugin && Td);
        },
        Md = function (e, t, n, r) {
          for (var i = t.length, a = r === 2 ? 0 : r, o = 0; o < i; o++)
            ((e[a] = parseFloat(t[o][n])), r === 2 && (e[a + 1] = 0), (a += 2));
          return e;
        },
        Nd = function (e, t, n) {
          return parseFloat(e._gsap.get(e, t, n || `px`)) || 0;
        },
        Pd = function (e) {
          var t = e[0],
            n = e[1],
            r;
          for (r = 2; r < e.length; r += 2) ((t = e[r] += t), (n = e[r + 1] += n));
        },
        Fd = function (e, t, n, r, i, a, o, s, c) {
          return (
            o.type === `cubic`
              ? (t = [t])
              : (o.fromCurrent !== !1 && t.unshift(Nd(n, r, s), i ? Nd(n, i, c) : 0),
                o.relative && Pd(t),
                (t = [(i ? St : xt)(t, o.curviness)])),
            (t = a(Bd(t, n, o))),
            Vd(e, n, r, t, `x`, s),
            i && Vd(e, n, i, t, `y`, c),
            mt(t, o.resolution || (o.curviness === 0 ? 20 : 12))
          );
        },
        Id = function (e) {
          return e;
        },
        Ld = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
        Rd = function (e, t, n) {
          var r = wt(e),
            i = 0,
            a = 0,
            o;
          return (
            (e.tagName + ``).toLowerCase() === `svg`
              ? ((o = e.viewBox.baseVal),
                o.width ||
                  (o = { width: +e.getAttribute(`width`), height: +e.getAttribute(`height`) }))
              : (o = t && e.getBBox && e.getBBox()),
            t &&
              t !== `auto` &&
              ((i = t.push ? t[0] * (o ? o.width : e.offsetWidth || 0) : t.x),
              (a = t.push ? t[1] * (o ? o.height : e.offsetHeight || 0) : t.y)),
            n.apply(i || a ? r.apply({ x: i, y: a }) : { x: r.e, y: r.f })
          );
        },
        zd = function (e, t, n, r) {
          var i = wt(e.parentNode, !0, !0),
            a = i.clone().multiply(wt(t)),
            o = Rd(e, n, i),
            s = Rd(t, r, i),
            c = s.x,
            l = s.y,
            u;
          return (
            (a.e = a.f = 0),
            r === `auto` &&
              t.getTotalLength &&
              t.tagName.toLowerCase() === `path` &&
              ((u = t.getAttribute(`d`).match(Ld) || []),
              (u = a.apply({ x: +u[0], y: +u[1] })),
              (c += u.x),
              (l += u.y)),
            u && ((u = a.apply(t.getBBox())), (c -= u.x), (l -= u.y)),
            (a.e = c - o.x),
            (a.f = l - o.y),
            a
          );
        },
        Bd = function (e, t, n) {
          var r = n.align,
            i = n.matrix,
            a = n.offsetX,
            o = n.offsetY,
            s = n.alignOrigin,
            c = e[0][0],
            l = e[0][1],
            u = Nd(t, `x`),
            d = Nd(t, `y`),
            f,
            p,
            m;
          return !e || !e.length
            ? st(`M0,0L0,0`)
            : (r &&
                (r === `self` || (f = Od(r)[0] || t) === t
                  ? vt(e, 1, 0, 0, 1, u - c, d - l)
                  : (s && s[2] !== !1
                      ? Td.set(t, { transformOrigin: s[0] * 100 + `% ` + s[1] * 100 + `%` })
                      : (s = [Nd(t, `xPercent`) / -100, Nd(t, `yPercent`) / -100]),
                    (p = zd(t, f, s, `auto`)),
                    (m = p.apply({ x: c, y: l })),
                    vt(e, p.a, p.b, p.c, p.d, u + p.e - (m.x - p.e), d + p.f - (m.y - p.f)))),
              i
                ? vt(e, i.a, i.b, i.c, i.d, i.e, i.f)
                : (a || o) && vt(e, 1, 0, 0, 1, a || 0, o || 0),
              e);
        },
        Vd = function (e, t, n, r, i, a) {
          var o = t._gsap,
            s = o.harness,
            c = s && s.aliases && s.aliases[n],
            l = c && c.indexOf(`,`) < 0 ? c : n,
            u = (e._pt = new Ed(e._pt, t, l, 0, 0, Id, 0, o.set(t, l, e)));
          ((u.u = Dd(o.get(t, l, a)) || 0), (u.path = r), (u.pp = i), e._props.push(l));
        },
        Hd = function (e, t) {
          return function (n) {
            return e || t !== 1 ? ft(n, e, t) : n;
          };
        },
        Ud = {
          version: `3.12.5`,
          name: `motionPath`,
          register: function (e, t, n) {
            ((Td = e),
              (Dd = Td.utils.getUnit),
              (Od = Td.utils.toArray),
              (kd = Td.core.getStyleSaver),
              (Ad = Td.core.reverting || function () {}),
              (Ed = n));
          },
          init: function (e, t, n) {
            if (!Td) return (console.warn(`Please gsap.registerPlugin(MotionPathPlugin)`), !1);
            (!(typeof t == `object` && !t.style) || !t.path) && (t = { path: t });
            var r = [],
              i = t,
              a = i.path,
              o = i.autoRotate,
              s = i.unitX,
              c = i.unitY,
              l = i.x,
              u = i.y,
              d = a[0],
              f = Hd(t.start, (`end` in t) ? t.end : 1),
              p,
              m;
            if (
              ((this.rawPaths = r),
              (this.target = e),
              (this.tween = n),
              (this.styles = kd && kd(e, `transform`)),
              (this.rotate = o || o === 0) &&
                ((this.rOffset = parseFloat(o) || 0),
                (this.radians = !!t.useRadians),
                (this.rProp = t.rotation || `rotation`),
                (this.rSet = e._gsap.set(e, this.rProp, this)),
                (this.ru = Dd(e._gsap.get(e, this.rProp)) || 0)),
              Array.isArray(a) && !(`closed` in a) && typeof d != `number`)
            ) {
              for (m in d) !l && ~Sd.indexOf(m) ? (l = m) : !u && ~Cd.indexOf(m) && (u = m);
              for (m in (l && u
                ? r.push(
                    Fd(
                      this,
                      Md(Md([], a, l, 0), a, u, 1),
                      e,
                      l,
                      u,
                      f,
                      t,
                      s || Dd(a[0][l]),
                      c || Dd(a[0][u])
                    )
                  )
                : (l = u = 0),
              d))
                m !== l && m !== u && r.push(Fd(this, Md([], a, m, 2), e, m, 0, f, t, Dd(a[0][m])));
            } else
              ((p = f(Bd(st(t.path), e, t))),
                mt(p, t.resolution),
                r.push(p),
                Vd(this, e, t.x || `x`, p, `x`, t.unitX || `px`),
                Vd(this, e, t.y || `y`, p, `y`, t.unitY || `px`));
          },
          render: function (e, t) {
            var n = t.rawPaths,
              r = n.length,
              i = t._pt;
            if (t.tween._time || !Ad()) {
              for (e > 1 ? (e = 1) : e < 0 && (e = 0); r--; ) _t(n[r], e, !r && t.rotate, n[r]);
              for (; i; ) (i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, e), (i = i._next));
              t.rotate &&
                t.rSet(
                  t.target,
                  t.rProp,
                  n[0].angle * (t.radians ? wd : 1) + t.rOffset + t.ru,
                  t,
                  e
                );
            } else t.styles.revert();
          },
          getLength: function (e) {
            return mt(st(e)).totalLength;
          },
          sliceRawPath: ft,
          getRawPath: st,
          pointsToSegment: St,
          stringToRawPath: bt,
          rawPathToString: Ct,
          transformRawPath: vt,
          getGlobalMatrix: wt,
          getPositionOnPath: _t,
          cacheRawPathMeasurements: mt,
          convertToPath: function (e, t) {
            return Od(e).map(function (e) {
              return ut(e, t !== !1);
            });
          },
          convertCoordinates: function (e, t, n) {
            var r = wt(t, !0, !0).multiply(wt(e));
            return n ? r.apply(n) : r;
          },
          getAlignMatrix: zd,
          getRelativePosition: function (e, t, n, r) {
            var i = zd(e, t, n, r);
            return { x: i.e, y: i.f };
          },
          arrayToRawPath: function (e, t) {
            t ||= {};
            var n = Md(Md([], e, t.x || `x`, 0), e, t.y || `y`, 1);
            return (t.relative && Pd(n), [t.type === `cubic` ? n : St(n, t.curviness)]);
          },
        },
        jd() && Td.registerPlugin(Ud),
        rf = function () {
          return Wd || (typeof t < `u` && (Wd = t.gsap) && Wd.registerPlugin && Wd);
        },
        af = 1,
        of = [],
        X = [],
        sf = [],
        cf = Date.now,
        lf = function (e, t) {
          return t;
        },
        uf = function () {
          var e = Qd.core,
            t = e.bridge || {},
            n = e._scrollers,
            r = e._proxies;
          (n.push.apply(n, X),
            r.push.apply(r, sf),
            (X = n),
            (sf = r),
            (lf = function (e, n) {
              return t[e](n);
            }));
        },
        df = function (e, t) {
          return ~sf.indexOf(e) && sf[sf.indexOf(e) + 1][t];
        },
        ff = function (e) {
          return !!~$d.indexOf(e);
        },
        pf = function (e, t, n, r, i) {
          return e.addEventListener(t, n, { passive: r !== !1, capture: !!i });
        },
        mf = function (e, t, n, r) {
          return e.removeEventListener(t, n, !!r);
        },
        hf = `scrollLeft`,
        gf = `scrollTop`,
        _f = function () {
          return (ef && ef.isPressed) || X.cache++;
        },
        vf = function (e, t) {
          var n = function n(r) {
            if (r || r === 0) {
              af && (Kd.history.scrollRestoration = `manual`);
              var i = ef && ef.isPressed;
              ((r = n.v = Math.round(r) || (ef && ef.iOS ? 1 : 0)),
                e(r),
                (n.cacheID = X.cache),
                i && lf(`ss`, r));
            } else
              (t || X.cache !== n.cacheID || lf(`ref`)) && ((n.cacheID = X.cache), (n.v = e()));
            return n.v + n.offset;
          };
          return ((n.offset = 0), e && n);
        },
        yf = {
          s: hf,
          p: `left`,
          p2: `Left`,
          os: `right`,
          os2: `Right`,
          d: `width`,
          d2: `Width`,
          a: `x`,
          sc: vf(function (e) {
            return arguments.length
              ? Kd.scrollTo(e, bf.sc())
              : Kd.pageXOffset || qd[hf] || Jd[hf] || Yd[hf] || 0;
          }),
        },
        bf = {
          s: gf,
          p: `top`,
          p2: `Top`,
          os: `bottom`,
          os2: `Bottom`,
          d: `height`,
          d2: `Height`,
          a: `y`,
          op: yf,
          sc: vf(function (e) {
            return arguments.length
              ? Kd.scrollTo(yf.sc(), e)
              : Kd.pageYOffset || qd[gf] || Jd[gf] || Yd[gf] || 0;
          }),
        },
        xf = function (e, t) {
          return (
            ((t && t._ctx && t._ctx.selector) || Wd.utils.toArray)(e)[0] ||
            (typeof e == `string` && Wd.config().nullTargetWarn !== !1
              ? console.warn(`Element not found:`, e)
              : null)
          );
        },
        Sf = function (e, t) {
          var n = t.s,
            r = t.sc;
          ff(e) && (e = qd.scrollingElement || Jd);
          var i = X.indexOf(e),
            a = r === bf.sc ? 1 : 2;
          (!~i && (i = X.push(e) - 1), X[i + a] || pf(e, `scroll`, _f));
          var o = X[i + a],
            s =
              o ||
              (X[i + a] =
                vf(df(e, n), !0) ||
                (ff(e)
                  ? r
                  : vf(function (t) {
                      return arguments.length ? (e[n] = t) : e[n];
                    })));
          return (
            (s.target = e),
            o || (s.smooth = Wd.getProperty(e, `scrollBehavior`) === `smooth`),
            s
          );
        },
        Cf = function (e, t, n) {
          var r = e,
            i = e,
            a = cf(),
            o = a,
            s = t || 50,
            c = Math.max(500, s * 3),
            l = function (e, t) {
              var c = cf();
              t || c - a > s
                ? ((i = r), (r = e), (o = a), (a = c))
                : n
                  ? (r += e)
                  : (r = i + ((e - i) / (c - o)) * (a - o));
            };
          return {
            update: l,
            reset: function () {
              ((i = r = n ? 0 : r), (o = a = 0));
            },
            getVelocity: function (e) {
              var t = o,
                s = i,
                u = cf();
              return (
                (e || e === 0) && e !== r && l(e),
                a === o || u - o > c ? 0 : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
              );
            },
          };
        },
        wf = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        },
        Tf = function (e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n;
        },
        Ef = function () {
          ((Qd = Wd.core.globals().ScrollTrigger), Qd && Qd.core && uf());
        },
        Df = function (e) {
          return (
            (Wd = e || rf()),
            !Gd &&
              Wd &&
              typeof document < `u` &&
              document.body &&
              ((Kd = t),
              (qd = document),
              (Jd = qd.documentElement),
              (Yd = qd.body),
              ($d = [Kd, qd, Jd, Yd]),
              Wd.utils.clamp,
              (nf = Wd.core.context || function () {}),
              (Zd = (`onpointerenter` in Yd) ? `pointer` : `mouse`),
              (Xd = Of.isTouch =
                Kd.matchMedia && Kd.matchMedia(`(hover: none), (pointer: coarse)`).matches
                  ? 1
                  : (`ontouchstart` in Kd) || T.maxTouchPoints > 0 || T.msMaxTouchPoints > 0
                    ? 2
                    : 0),
              (tf = Of.eventTypes =
                (
                  (`ontouchstart` in Jd)
                    ? `touchstart,touchmove,touchcancel,touchend`
                    : (`onpointerdown` in Jd)
                      ? `pointerdown,pointermove,pointercancel,pointerup`
                      : `mousedown,mousemove,mouseup,mouseup`
                ).split(`,`)),
              setTimeout(function () {
                return (af = 0);
              }, 500),
              Ef(),
              (Gd = 1)),
            Gd
          );
        },
        yf.op = bf,
        X.cache = 0,
        Of = (function () {
          function e(e) {
            this.init(e);
          }
          var t = e.prototype;
          return (
            (t.init = function (e) {
              (Gd || Df(Wd) || console.warn(`Please gsap.registerPlugin(Observer)`), Qd || Ef());
              var t = e.tolerance,
                n = e.dragMinimum,
                r = e.type,
                i = e.target,
                a = e.lineHeight,
                o = e.debounce,
                s = e.preventDefault,
                c = e.onStop,
                l = e.onStopDelay,
                u = e.ignore,
                d = e.wheelSpeed,
                f = e.event,
                p = e.onDragStart,
                m = e.onDragEnd,
                h = e.onDrag,
                g = e.onPress,
                _ = e.onRelease,
                v = e.onRight,
                y = e.onLeft,
                b = e.onUp,
                x = e.onDown,
                S = e.onChangeX,
                C = e.onChangeY,
                w = e.onChange,
                T = e.onToggleX,
                E = e.onToggleY,
                D = e.onHover,
                O = e.onHoverEnd,
                k = e.onMove,
                A = e.ignoreCheck,
                j = e.isNormalizer,
                M = e.onGestureStart,
                N = e.onGestureEnd,
                P = e.onWheel,
                ee = e.onEnable,
                te = e.onDisable,
                F = e.onClick,
                I = e.scrollSpeed,
                L = e.capture,
                R = e.allowClicks,
                z = e.lockAxis,
                ne = e.onLockAxis;
              ((this.target = i = xf(i) || Jd),
                (this.vars = e),
                (u &&= Wd.utils.toArray(u)),
                (t ||= 1e-9),
                (n ||= 0),
                (d ||= 1),
                (I ||= 1),
                (r ||= `wheel,touch,pointer`),
                (o = o !== !1),
                (a ||= parseFloat(Kd.getComputedStyle(Yd).lineHeight) || 22));
              var B,
                V,
                re,
                H,
                U,
                W,
                G,
                K = this,
                q = 0,
                ie = 0,
                ae = e.passive || !s,
                oe = Sf(i, yf),
                se = Sf(i, bf),
                ce = oe(),
                le = se(),
                ue = ~r.indexOf(`touch`) && !~r.indexOf(`pointer`) && tf[0] === `pointerdown`,
                de = ff(i),
                J = i.ownerDocument || qd,
                fe = [0, 0, 0],
                Y = [0, 0, 0],
                pe = 0,
                me = function () {
                  return (pe = cf());
                },
                he = function (e, t) {
                  return (
                    ((K.event = e) && u && ~u.indexOf(e.target)) ||
                    (t && ue && e.pointerType !== `touch`) ||
                    (A && A(e, t))
                  );
                },
                ge = function () {
                  (K._vx.reset(), K._vy.reset(), V.pause(), c && c(K));
                },
                _e = function () {
                  var e = (K.deltaX = Tf(fe)),
                    n = (K.deltaY = Tf(Y)),
                    r = Math.abs(e) >= t,
                    i = Math.abs(n) >= t;
                  (w && (r || i) && w(K, e, n, fe, Y),
                    r &&
                      (v && K.deltaX > 0 && v(K),
                      y && K.deltaX < 0 && y(K),
                      S && S(K),
                      T && K.deltaX < 0 != q < 0 && T(K),
                      (q = K.deltaX),
                      (fe[0] = fe[1] = fe[2] = 0)),
                    i &&
                      (x && K.deltaY > 0 && x(K),
                      b && K.deltaY < 0 && b(K),
                      C && C(K),
                      E && K.deltaY < 0 != ie < 0 && E(K),
                      (ie = K.deltaY),
                      (Y[0] = Y[1] = Y[2] = 0)),
                    (H || re) && (k && k(K), (re &&= (h(K), !1)), (H = !1)),
                    W && !(W = !1) && ne && ne(K),
                    (U &&= (P(K), !1)),
                    (B = 0));
                },
                ve = function (e, t, n) {
                  ((fe[n] += e),
                    (Y[n] += t),
                    K._vx.update(e),
                    K._vy.update(t),
                    o ? (B ||= requestAnimationFrame(_e)) : _e());
                },
                ye = function (e, t) {
                  (z && !G && ((K.axis = G = Math.abs(e) > Math.abs(t) ? `x` : `y`), (W = !0)),
                    G !== `y` && ((fe[2] += e), K._vx.update(e, !0)),
                    G !== `x` && ((Y[2] += t), K._vy.update(t, !0)),
                    o ? (B ||= requestAnimationFrame(_e)) : _e());
                },
                be = function (e) {
                  if (!he(e, 1)) {
                    e = wf(e, s);
                    var t = e.clientX,
                      r = e.clientY,
                      i = t - K.x,
                      a = r - K.y,
                      o = K.isDragging;
                    ((K.x = t),
                      (K.y = r),
                      (o || Math.abs(K.startX - t) >= n || Math.abs(K.startY - r) >= n) &&
                        (h && (re = !0), o || (K.isDragging = !0), ye(i, a), o || (p && p(K))));
                  }
                },
                xe = (K.onPress = function (e) {
                  he(e, 1) ||
                    (e && e.button) ||
                    ((K.axis = G = null),
                    V.pause(),
                    (K.isPressed = !0),
                    (e = wf(e)),
                    (q = ie = 0),
                    (K.startX = K.x = e.clientX),
                    (K.startY = K.y = e.clientY),
                    K._vx.reset(),
                    K._vy.reset(),
                    pf(j ? i : J, tf[1], be, ae, !0),
                    (K.deltaX = K.deltaY = 0),
                    g && g(K));
                }),
                Se = (K.onRelease = function (e) {
                  if (!he(e, 1)) {
                    mf(j ? i : J, tf[1], be, !0);
                    var t = !isNaN(K.y - K.startY),
                      n = K.isDragging,
                      r = n && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                      a = wf(e);
                    (!r &&
                      t &&
                      (K._vx.reset(),
                      K._vy.reset(),
                      s &&
                        R &&
                        Wd.delayedCall(0.08, function () {
                          if (cf() - pe > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (J.createEvent) {
                              var t = J.createEvent(`MouseEvents`);
                              (t.initMouseEvent(
                                `click`,
                                !0,
                                !0,
                                Kd,
                                1,
                                a.screenX,
                                a.screenY,
                                a.clientX,
                                a.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t));
                            }
                          }
                        })),
                      (K.isDragging = K.isGesturing = K.isPressed = !1),
                      c && n && !j && V.restart(!0),
                      m && n && m(K),
                      _ && _(K, r));
                  }
                }),
                Ce = function (e) {
                  return (
                    e.touches && e.touches.length > 1 && (K.isGesturing = !0) && M(e, K.isDragging)
                  );
                },
                we = function () {
                  return (K.isGesturing = !1) || N(K);
                },
                Te = function (e) {
                  if (!he(e)) {
                    var t = oe(),
                      n = se();
                    (ve((t - ce) * I, (n - le) * I, 1), (ce = t), (le = n), c && V.restart(!0));
                  }
                },
                Ee = function (e) {
                  if (!he(e)) {
                    ((e = wf(e, s)), P && (U = !0));
                    var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Kd.innerHeight : 1) * d;
                    (ve(e.deltaX * t, e.deltaY * t, 0), c && !j && V.restart(!0));
                  }
                },
                De = function (e) {
                  if (!he(e)) {
                    var t = e.clientX,
                      n = e.clientY,
                      r = t - K.x,
                      i = n - K.y;
                    ((K.x = t), (K.y = n), (H = !0), c && V.restart(!0), (r || i) && ye(r, i));
                  }
                },
                Oe = function (e) {
                  ((K.event = e), D(K));
                },
                ke = function (e) {
                  ((K.event = e), O(K));
                },
                Ae = function (e) {
                  return he(e) || (wf(e, s) && F(K));
                };
              ((V = K._dc = Wd.delayedCall(l || 0.25, ge).pause()),
                (K.deltaX = K.deltaY = 0),
                (K._vx = Cf(0, 50, !0)),
                (K._vy = Cf(0, 50, !0)),
                (K.scrollX = oe),
                (K.scrollY = se),
                (K.isDragging = K.isGesturing = K.isPressed = !1),
                nf(this),
                (K.enable = function (e) {
                  return (
                    K.isEnabled ||
                      (pf(de ? J : i, `scroll`, _f),
                      r.indexOf(`scroll`) >= 0 && pf(de ? J : i, `scroll`, Te, ae, L),
                      r.indexOf(`wheel`) >= 0 && pf(i, `wheel`, Ee, ae, L),
                      ((r.indexOf(`touch`) >= 0 && Xd) || r.indexOf(`pointer`) >= 0) &&
                        (pf(i, tf[0], xe, ae, L),
                        pf(J, tf[2], Se),
                        pf(J, tf[3], Se),
                        R && pf(i, `click`, me, !0, !0),
                        F && pf(i, `click`, Ae),
                        M && pf(J, `gesturestart`, Ce),
                        N && pf(J, `gestureend`, we),
                        D && pf(i, Zd + `enter`, Oe),
                        O && pf(i, Zd + `leave`, ke),
                        k && pf(i, Zd + `move`, De)),
                      (K.isEnabled = !0),
                      e && e.type && xe(e),
                      ee && ee(K)),
                    K
                  );
                }),
                (K.disable = function () {
                  K.isEnabled &&
                    (of.filter(function (e) {
                      return e !== K && ff(e.target);
                    }).length || mf(de ? J : i, `scroll`, _f),
                    K.isPressed && (K._vx.reset(), K._vy.reset(), mf(j ? i : J, tf[1], be, !0)),
                    mf(de ? J : i, `scroll`, Te, L),
                    mf(i, `wheel`, Ee, L),
                    mf(i, tf[0], xe, L),
                    mf(J, tf[2], Se),
                    mf(J, tf[3], Se),
                    mf(i, `click`, me, !0),
                    mf(i, `click`, Ae),
                    mf(J, `gesturestart`, Ce),
                    mf(J, `gestureend`, we),
                    mf(i, Zd + `enter`, Oe),
                    mf(i, Zd + `leave`, ke),
                    mf(i, Zd + `move`, De),
                    (K.isEnabled = K.isPressed = K.isDragging = !1),
                    te && te(K));
                }),
                (K.kill = K.revert =
                  function () {
                    K.disable();
                    var e = of.indexOf(K);
                    (e >= 0 && of.splice(e, 1), ef === K && (ef = 0));
                  }),
                of.push(K),
                j && ff(i) && (ef = K),
                K.enable(f));
            }),
            Ot(e, [
              {
                key: `velocityX`,
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: `velocityY`,
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })(),
        Of.version = `3.12.5`,
        Of.create = function (e) {
          return new Of(e);
        },
        Of.register = Df,
        Of.getAll = function () {
          return of.slice();
        },
        Of.getById = function (e) {
          return of.filter(function (t) {
            return t.vars.id === e;
          })[0];
        },
        rf() && Wd.registerPlugin(Of),
        If = function () {
          return typeof t < `u`;
        },
        Lf = function () {
          return kf || (If() && (kf = t.gsap) && kf.registerPlugin && kf);
        },
        Rf = function (e) {
          return typeof e == `function`;
        },
        zf = function (e) {
          return console.warn(e);
        },
        Bf = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        Vf = 0.212671,
        Hf = 0.71516,
        Uf = 0.072169,
        Wf = function (e) {
          return Rf(Mf[e]) ? Mf[e] : Mf.filters[e];
        },
        Gf = function (e, t) {
          var n = [],
            r = 0,
            i = 0,
            a,
            o;
          for (a = 0; a < 4; a++) {
            for (o = 0; o < 5; o++)
              ((i = o === 4 ? e[r + 4] : 0),
                (n[r + o] =
                  e[r] * t[o] +
                  e[r + 1] * t[o + 5] +
                  e[r + 2] * t[o + 10] +
                  e[r + 3] * t[o + 15] +
                  i));
            r += 5;
          }
          return n;
        },
        Kf = function (e, t) {
          var n = 1 - t,
            r = n * Vf,
            i = n * Hf,
            a = n * Uf;
          return Gf([r + t, i, a, 0, 0, r, i + t, a, 0, 0, r, i, a + t, 0, 0, 0, 0, 0, 1, 0], e);
        },
        qf = function (e, t, n) {
          var r = Af(t),
            i = r[0] / 255,
            a = r[1] / 255,
            o = r[2] / 255,
            s = 1 - n;
          return Gf(
            [
              s + n * i * Vf,
              n * i * Hf,
              n * i * Uf,
              0,
              0,
              n * a * Vf,
              s + n * a * Hf,
              n * a * Uf,
              0,
              0,
              n * o * Vf,
              n * o * Hf,
              s + n * o * Uf,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
            ],
            e
          );
        },
        Jf = function (e, t) {
          t *= Math.PI / 180;
          var n = Math.cos(t),
            r = Math.sin(t);
          return Gf(
            [
              Vf + n * (1 - Vf) + r * -Vf,
              Hf + n * -Hf + r * -Hf,
              Uf + n * -Uf + r * (1 - Uf),
              0,
              0,
              Vf + n * -Vf + r * 0.143,
              Hf + n * (1 - Hf) + r * 0.14,
              Uf + n * -Uf + r * -0.283,
              0,
              0,
              Vf + n * -Vf + r * -(1 - Vf),
              Hf + n * -Hf + r * Hf,
              Uf + n * (1 - Uf) + r * Uf,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ],
            e
          );
        },
        Yf = function (e, t) {
          return Gf(
            [
              t,
              0,
              0,
              0,
              0.5 * (1 - t),
              0,
              t,
              0,
              0,
              0.5 * (1 - t),
              0,
              0,
              t,
              0,
              0.5 * (1 - t),
              0,
              0,
              0,
              1,
              0,
            ],
            e
          );
        },
        Xf = function (e, t) {
          var n = Wf(t),
            r = e.filters || [],
            i = r.length,
            a;
          for (n || zf(t + ` not found. PixiPlugin.registerPIXI(PIXI)`); --i > -1; )
            if (r[i] instanceof n) return r[i];
          return ((a = new n()), t === `BlurFilter` && (a.blur = 0), r.push(a), (e.filters = r), a);
        },
        Zf = function (e, t, n, r) {
          (t.add(n, e, n[e], r[e]), t._props.push(e));
        },
        Qf = function (e, t) {
          var n = new (Wf(`ColorMatrixFilter`))();
          return ((n.matrix = t), n.brightness(e, !0), n.matrix);
        },
        $f = function (e) {
          var t = {},
            n;
          for (n in e) t[n] = e[n];
          return t;
        },
        ep = {
          contrast: 1,
          saturation: 1,
          colorizeAmount: 0,
          colorize: `rgb(255,255,255)`,
          hue: 0,
          brightness: 1,
        },
        tp = function (e, t, n) {
          var r = Xf(e, `ColorMatrixFilter`),
            i = (e._gsColorMatrixFilter = e._gsColorMatrixFilter || $f(ep)),
            a = t.combineCMF && !((`colorMatrixFilter` in t) && !t.colorMatrixFilter),
            o,
            s,
            c;
          for (
            c = r.matrix,
              t.resolution && (r.resolution = t.resolution),
              t.matrix && t.matrix.length === c.length
                ? ((s = t.matrix),
                  i.contrast !== 1 && Zf(`contrast`, n, i, ep),
                  i.hue && Zf(`hue`, n, i, ep),
                  i.brightness !== 1 && Zf(`brightness`, n, i, ep),
                  i.colorizeAmount && (Zf(`colorize`, n, i, ep), Zf(`colorizeAmount`, n, i, ep)),
                  i.saturation !== 1 && Zf(`saturation`, n, i, ep))
                : ((s = Bf.slice()),
                  t.contrast == null
                    ? i.contrast !== 1 && (a ? (s = Yf(s, i.contrast)) : Zf(`contrast`, n, i, ep))
                    : ((s = Yf(s, +t.contrast)), Zf(`contrast`, n, i, t)),
                  t.hue == null
                    ? i.hue && (a ? (s = Jf(s, i.hue)) : Zf(`hue`, n, i, ep))
                    : ((s = Jf(s, +t.hue)), Zf(`hue`, n, i, t)),
                  t.brightness == null
                    ? i.brightness !== 1 &&
                      (a ? (s = Qf(i.brightness, s)) : Zf(`brightness`, n, i, ep))
                    : ((s = Qf(+t.brightness, s)), Zf(`brightness`, n, i, t)),
                  t.colorize == null
                    ? i.colorizeAmount &&
                      (a
                        ? (s = qf(s, i.colorize, i.colorizeAmount))
                        : (Zf(`colorize`, n, i, ep), Zf(`colorizeAmount`, n, i, ep)))
                    : ((t.colorizeAmount = (`colorizeAmount` in t) ? +t.colorizeAmount : 1),
                      (s = qf(s, t.colorize, t.colorizeAmount)),
                      Zf(`colorize`, n, i, t),
                      Zf(`colorizeAmount`, n, i, t)),
                  t.saturation == null
                    ? i.saturation !== 1 &&
                      (a ? (s = Kf(s, i.saturation)) : Zf(`saturation`, n, i, ep))
                    : ((s = Kf(s, +t.saturation)), Zf(`saturation`, n, i, t))),
              o = s.length;
            --o > -1;
          )
            s[o] !== c[o] && n.add(c, o, c[o], s[o], `colorMatrixFilter`);
          n._props.push(`colorMatrixFilter`);
        },
        np = function (e, t) {
          var n = t.t,
            r = t.p,
            i = t.color,
            a = t.set;
          a(n, r, (i[0] << 16) | (i[1] << 8) | i[2]);
        },
        rp = function (e, t) {
          var n = t.g;
          n && (n.dirty++, n.clearDirty++);
        },
        ip = function (e, t) {
          t.t.visible = !!t.t.alpha;
        },
        ap = function (e, t, n, r) {
          var i = e[t],
            a = Af(
              Rf(i)
                ? e[t.indexOf(`set`) || !Rf(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)]()
                : i
            ),
            o = Af(n);
          ((r._pt = new Nf(r._pt, e, t, 0, 0, np, { t: e, p: t, color: a, set: Pf(e, t) })),
            r.add(a, 0, a[0], o[0]),
            r.add(a, 1, a[1], o[1]),
            r.add(a, 2, a[2], o[2]));
        },
        op = { tint: 1, lineColor: 1, fillColor: 1 },
        sp = `position,scale,skew,pivot,anchor,tilePosition,tileScale`.split(`,`),
        cp = { x: `position`, y: `position`, tileX: `tilePosition`, tileY: `tilePosition` },
        lp = {
          colorMatrixFilter: 1,
          saturation: 1,
          contrast: 1,
          hue: 1,
          colorize: 1,
          colorizeAmount: 1,
          brightness: 1,
          combineCMF: 1,
        },
        up = Math.PI / 180,
        dp = function (e) {
          return typeof e == `string`;
        },
        fp = function (e) {
          return dp(e) && e.charAt(1) === `=`
            ? e.substr(0, 2) + parseFloat(e.substr(2)) * up
            : e * up;
        },
        pp = function (e, t) {
          return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e5) / 1e5, t);
        },
        mp = function (e, t, n, r, i, a) {
          var o = 360 * (a ? up : 1),
            s = dp(i),
            c = s && i.charAt(1) === `=` ? +(i.charAt(0) + `1`) : 0,
            l = parseFloat(c ? i.substr(2) : i) * (a ? up : 1),
            u = c ? l * c : l - r,
            d = r + u,
            f,
            p;
          return (
            s &&
              ((f = i.split(`_`)[1]),
              f === `short` && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
              f === `cw` && u < 0
                ? (u = ((u + o * 1e10) % o) - ~~(u / o) * o)
                : f === `ccw` && u > 0 && (u = ((u - o * 1e10) % o) - ~~(u / o) * o)),
            (e._pt = p = new Nf(e._pt, t, n, r, u, pp)),
            (p.e = d),
            p
          );
        },
        hp = function () {
          jf ||
            ((kf = Lf()),
            (Mf = jf = Mf || (If() && t.PIXI)),
            (Ff = Mf && Mf.VERSION && Mf.VERSION.charAt(0) === `4`),
            (Af = function (e) {
              return kf.utils.splitColor((e + ``).substr(0, 2) === `0x` ? `#` + e.substr(2) : e);
            }));
        },
        gp = 0;
      gp < sp.length;
      gp++
    )
      ((_p = sp[gp]), (cp[_p + `X`] = _p), (cp[_p + `Y`] = _p));
    ((vp = {
      version: `3.12.5`,
      name: `pixi`,
      register: function (e, t, n) {
        ((kf = e), (Nf = n), (Pf = t.getSetter), hp());
      },
      headless: !0,
      registerPIXI: function (e) {
        Mf = e;
      },
      init: function (e, t, n, r, i) {
        if ((Mf || hp(), !Mf))
          return (zf(`PIXI was not found. PixiPlugin.registerPIXI(PIXI);`), !1);
        var a, o, s, c, l, u, d, f, p;
        for (u in t) {
          if (((a = cp[u]), (s = t[u]), a))
            ((o = ~u
              .charAt(u.length - 1)
              .toLowerCase()
              .indexOf(`x`)
              ? `x`
              : `y`),
              this.add(e[a], o, e[a][o], a === `skew` ? fp(s) : s, 0, 0, 0, 0, 0, 1));
          else if (u === `scale` || u === `anchor` || u === `pivot` || u === `tileScale`)
            (this.add(e[u], `x`, e[u].x, s), this.add(e[u], `y`, e[u].y, s));
          else if (u === `rotation` || u === `angle`) mp(this, e, u, e[u], s, u === `rotation`);
          else if (lp[u]) c ||= (tp(e, t.colorMatrixFilter || t, this), !0);
          else if (u === `blur` || u === `blurX` || u === `blurY` || u === `blurPadding`) {
            if (((l = Xf(e, `BlurFilter`)), this.add(l, u, l[u], s), t.blurPadding !== 0))
              for (d = t.blurPadding || Math.max(l[u], s) * 2, f = e.filters.length; --f > -1; )
                e.filters[f].padding = Math.max(e.filters[f].padding, d);
          } else if (op[u])
            if ((u === `lineColor` || u === `fillColor`) && e instanceof Mf.Graphics)
              for (
                p = (e.geometry || e).graphicsData,
                  this._pt = new Nf(this._pt, e, u, 0, 0, rp, { g: e.geometry || e }),
                  f = p.length;
                --f > -1;
              )
                ap(Ff ? p[f] : p[f][u.substr(0, 4) + `Style`], Ff ? u : `color`, s, this);
            else ap(e, u, s, this);
          else
            u === `autoAlpha`
              ? ((this._pt = new Nf(this._pt, e, `visible`, 0, 0, ip)),
                this.add(e, `alpha`, e.alpha, s),
                this._props.push(`alpha`, `visible`))
              : u !== `resolution` && this.add(e, u, `get`, s);
          this._props.push(u);
        }
      },
    }),
      Lf() && kf.registerPlugin(vp),
      (Dp = function () {
        return typeof t < `u`;
      }),
      (Op = function () {
        return yp || (Dp() && (yp = t.gsap) && yp.registerPlugin && yp);
      }),
      (kp = function (e) {
        return typeof e == `string`;
      }),
      (Ap = function (e) {
        return typeof e == `function`;
      }),
      (jp = function (e, t) {
        var n = t === `x` ? `Width` : `Height`,
          r = `scroll` + n,
          i = `client` + n;
        return e === xp || e === Sp || e === Cp
          ? Math.max(Sp[r], Cp[r]) - (xp[`inner` + n] || Sp[i] || Cp[i])
          : e[r] - e[`offset` + n];
      }),
      (Mp = function (e, t) {
        var n = `scroll` + (t === `x` ? `Left` : `Top`);
        return (
          e === xp &&
            (e.pageXOffset == null
              ? (e = Sp[n] == null ? Cp : Sp)
              : (n = `page` + t.toUpperCase() + `Offset`)),
          function () {
            return e[n];
          }
        );
      }),
      (Np = function (e, t, n, r) {
        if ((Ap(e) && (e = e(t, n, r)), typeof e != `object`))
          return kp(e) && e !== `max` && e.charAt(1) !== `=` ? { x: e, y: e } : { y: e };
        if (e.nodeType) return { y: e, x: e };
        var i = {},
          a;
        for (a in e) i[a] = a !== `onAutoKill` && Ap(e[a]) ? e[a](t, n, r) : e[a];
        return i;
      }),
      (Pp = function (e, t) {
        if (((e = wp(e)[0]), !e || !e.getBoundingClientRect))
          return console.warn(`scrollTo target doesn't exist. Using 0`) || { x: 0, y: 0 };
        var n = e.getBoundingClientRect(),
          r = !t || t === xp || t === Cp,
          i = r
            ? {
                top: Sp.clientTop - (xp.pageYOffset || Sp.scrollTop || Cp.scrollTop || 0),
                left: Sp.clientLeft - (xp.pageXOffset || Sp.scrollLeft || Cp.scrollLeft || 0),
              }
            : t.getBoundingClientRect(),
          a = { x: n.left - i.left, y: n.top - i.top };
        return (!r && t && ((a.x += Mp(t, `x`)()), (a.y += Mp(t, `y`)())), a);
      }),
      (Fp = function (e, t, n, r, i) {
        return !isNaN(e) && typeof e != `object`
          ? parseFloat(e) - i
          : kp(e) && e.charAt(1) === `=`
            ? parseFloat(e.substr(2)) * (e.charAt(0) === `-` ? -1 : 1) + r - i
            : e === `max`
              ? jp(t, n) - i
              : Math.min(jp(t, n), Pp(e, t)[n] - i);
      }),
      (Ip = function () {
        ((yp = Op()),
          Dp() &&
            yp &&
            typeof document < `u` &&
            document.body &&
            ((xp = t),
            (Cp = document.body),
            (Sp = document.documentElement),
            (wp = yp.utils.toArray),
            yp.config({ autoKillThreshold: 7 }),
            (Tp = yp.config()),
            (bp = 1)));
      }),
      (Lp = {
        version: `3.12.5`,
        name: `scrollTo`,
        rawVars: 1,
        register: function (e) {
          ((yp = e), Ip());
        },
        init: function (e, t, n, r, i) {
          bp || Ip();
          var a = this,
            o = yp.getProperty(e, `scrollSnapType`);
          ((a.isWin = e === xp),
            (a.target = e),
            (a.tween = n),
            (t = Np(t, r, e, i)),
            (a.vars = t),
            (a.autoKill = !!t.autoKill),
            (a.getX = Mp(e, `x`)),
            (a.getY = Mp(e, `y`)),
            (a.x = a.xPrev = a.getX()),
            (a.y = a.yPrev = a.getY()),
            (Ep ||= yp.core.globals().ScrollTrigger),
            yp.getProperty(e, `scrollBehavior`) === `smooth` &&
              yp.set(e, { scrollBehavior: `auto` }),
            o &&
              o !== `none` &&
              ((a.snap = 1),
              (a.snapInline = e.style.scrollSnapType),
              (e.style.scrollSnapType = `none`)),
            t.x == null
              ? (a.skipX = 1)
              : (a.add(a, `x`, a.x, Fp(t.x, e, `x`, a.x, t.offsetX || 0), r, i),
                a._props.push(`scrollTo_x`)),
            t.y == null
              ? (a.skipY = 1)
              : (a.add(a, `y`, a.y, Fp(t.y, e, `y`, a.y, t.offsetY || 0), r, i),
                a._props.push(`scrollTo_y`)));
        },
        render: function (e, t) {
          for (
            var n = t._pt,
              r = t.target,
              i = t.tween,
              a = t.autoKill,
              o = t.xPrev,
              s = t.yPrev,
              c = t.isWin,
              l = t.snap,
              u = t.snapInline,
              d,
              f,
              p,
              m,
              h;
            n;
          )
            (n.r(e, n.d), (n = n._next));
          ((d = c || !t.skipX ? t.getX() : o),
            (f = c || !t.skipY ? t.getY() : s),
            (p = f - s),
            (m = d - o),
            (h = Tp.autoKillThreshold),
            t.x < 0 && (t.x = 0),
            t.y < 0 && (t.y = 0),
            a &&
              (!t.skipX && (m > h || m < -h) && d < jp(r, `x`) && (t.skipX = 1),
              !t.skipY && (p > h || p < -h) && f < jp(r, `y`) && (t.skipY = 1),
              t.skipX &&
                t.skipY &&
                (i.kill(),
                t.vars.onAutoKill && t.vars.onAutoKill.apply(i, t.vars.onAutoKillParams || []))),
            c
              ? xp.scrollTo(t.skipX ? d : t.x, t.skipY ? f : t.y)
              : (t.skipY || (r.scrollTop = t.y), t.skipX || (r.scrollLeft = t.x)),
            l &&
              (e === 1 || e === 0) &&
              ((f = r.scrollTop),
              (d = r.scrollLeft),
              u ? (r.style.scrollSnapType = u) : r.style.removeProperty(`scroll-snap-type`),
              (r.scrollTop = f + 1),
              (r.scrollLeft = d + 1),
              (r.scrollTop = f),
              (r.scrollLeft = d)),
            (t.xPrev = t.x),
            (t.yPrev = t.y),
            Ep && Ep.update());
        },
        kill: function (e) {
          var t = e === `scrollTo`,
            n = this._props.indexOf(e);
          return (
            (t || e === `scrollTo_x`) && (this.skipX = 1),
            (t || e === `scrollTo_y`) && (this.skipY = 1),
            n > -1 && this._props.splice(n, 1),
            !this._props.length
          );
        },
      }),
      (Lp.max = jp),
      (Lp.getOffset = Pp),
      (Lp.buildGetter = Mp),
      Op() && yp.registerPlugin(Lp),
      (_m = 1),
      (vm = Date.now),
      (ym = vm()),
      (bm = 0),
      (xm = 0),
      (Sm = function (e, t, n) {
        var r = Rm(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
        return ((n[`_` + t + `Clamp`] = r), r ? e.substr(6, e.length - 7) : e);
      }),
      (Cm = function (e, t) {
        return t && (!Rm(e) || e.substr(0, 6) !== `clamp(`) ? `clamp(` + e + `)` : e;
      }),
      (wm = function e() {
        return xm && requestAnimationFrame(e);
      }),
      (Tm = function () {
        return (Xp = 1);
      }),
      (Em = function () {
        return (Xp = 0);
      }),
      (Dm = function (e) {
        return e;
      }),
      (Om = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      }),
      (km = function () {
        return typeof t < `u`;
      }),
      (Am = function () {
        return Z || (km() && (Z = t.gsap) && Z.registerPlugin && Z);
      }),
      (jm = function (e) {
        return !!~Up.indexOf(e);
      }),
      (Mm = function (e) {
        return (e === `Height` ? pm : zp[`inner` + e]) || Vp[`client` + e] || Hp[`client` + e];
      }),
      (Nm = function (e) {
        return (
          df(e, `getBoundingClientRect`) ||
          (jm(e)
            ? function () {
                return ((ig.width = zp.innerWidth), (ig.height = pm), ig);
              }
            : function () {
                return lh(e);
              })
        );
      }),
      (Pm = function (e, t, n) {
        var r = n.d,
          i = n.d2,
          a = n.a;
        return (a = df(e, `getBoundingClientRect`))
          ? function () {
              return a()[r];
            }
          : function () {
              return (t ? Mm(i) : e[`client` + i]) || 0;
            };
      }),
      (Fm = function (e, t) {
        return !t || ~sf.indexOf(e)
          ? Nm(e)
          : function () {
              return ig;
            };
      }),
      (Im = function (e, t) {
        var n = t.s,
          r = t.d2,
          i = t.d,
          a = t.a;
        return Math.max(
          0,
          (n = `scroll` + r) && (a = df(e, n))
            ? a() - Nm(e)()[i]
            : jm(e)
              ? (Vp[n] || Hp[n]) - Mm(r)
              : e[n] - e[`offset` + r]
        );
      }),
      (Lm = function (e, t) {
        for (var n = 0; n < tm.length; n += 3)
          (!t || ~t.indexOf(tm[n + 1])) && e(tm[n], tm[n + 1], tm[n + 2]);
      }),
      (Rm = function (e) {
        return typeof e == `string`;
      }),
      (zm = function (e) {
        return typeof e == `function`;
      }),
      (Bm = function (e) {
        return typeof e == `number`;
      }),
      (Vm = function (e) {
        return typeof e == `object`;
      }),
      (Hm = function (e, t, n) {
        return e && e.progress(+!t) && n && e.pause();
      }),
      (Um = function (e, t) {
        if (e.enabled) {
          var n = e._ctx
            ? e._ctx.add(function () {
                return t(e);
              })
            : t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      }),
      (Wm = Math.abs),
      (Gm = `left`),
      (Km = `top`),
      (qm = `right`),
      (Jm = `bottom`),
      (Ym = `width`),
      (Xm = `height`),
      (Zm = `Right`),
      (Qm = `Left`),
      ($m = `Top`),
      (eh = `Bottom`),
      (th = `padding`),
      (nh = `margin`),
      (rh = `Width`),
      (ih = `Height`),
      (ah = `px`),
      (oh = function (e) {
        return zp.getComputedStyle(e);
      }),
      (sh = function (e) {
        var t = oh(e).position;
        e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
      }),
      (ch = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      }),
      (lh = function (e, t) {
        var n =
            t &&
            oh(e)[Zp] !== `matrix(1, 0, 0, 1, 0, 0)` &&
            Z.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          r = e.getBoundingClientRect();
        return (n && n.progress(0).kill(), r);
      }),
      (uh = function (e, t) {
        var n = t.d2;
        return e[`offset` + n] || e[`client` + n] || 0;
      }),
      (dh = function (e) {
        var t = [],
          n = e.labels,
          r = e.duration(),
          i;
        for (i in n) t.push(n[i] / r);
        return t;
      }),
      (fh = function (e) {
        return function (t) {
          return Z.utils.snap(dh(e), t);
        };
      }),
      (ph = function (e) {
        var t = Z.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return n
          ? function (e, r, i) {
              i === void 0 && (i = 0.001);
              var a;
              if (!r) return t(e);
              if (r > 0) {
                for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
                return n[a - 1];
              } else for (a = n.length, e += i; a--; ) if (n[a] <= e) return n[a];
              return n[0];
            }
          : function (n, r, i) {
              i === void 0 && (i = 0.001);
              var a = t(n);
              return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
            };
      }),
      (mh = function (e) {
        return function (t, n) {
          return ph(dh(e))(t, n.direction);
        };
      }),
      (hh = function (e, t, n, r) {
        return n.split(`,`).forEach(function (n) {
          return e(t, n, r);
        });
      }),
      (gh = function (e, t, n, r, i) {
        return e.addEventListener(t, n, { passive: !r, capture: !!i });
      }),
      (_h = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r);
      }),
      (vh = function (e, t, n) {
        ((n &&= n.wheelHandler), n && (e(t, `wheel`, n), e(t, `touchmove`, n)));
      }),
      (yh = {
        startColor: `green`,
        endColor: `red`,
        indent: 0,
        fontSize: `16px`,
        fontWeight: `normal`,
      }),
      (bh = { toggleActions: `play`, anticipatePin: 0 }),
      (xh = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }),
      (Sh = function (e, t) {
        if (Rm(e)) {
          var n = e.indexOf(`=`),
            r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          (~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              r +
              (e in xh
                ? xh[e] * t
                : ~e.indexOf(`%`)
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0)));
        }
        return e;
      }),
      (Ch = function (e, t, n, r, i, a, o, s) {
        var c = i.startColor,
          l = i.endColor,
          u = i.fontSize,
          d = i.indent,
          f = i.fontWeight,
          p = Bp.createElement(`div`),
          m = jm(n) || df(n, `pinType`) === `fixed`,
          h = e.indexOf(`scroller`) !== -1,
          g = m ? Hp : n,
          _ = e.indexOf(`start`) !== -1,
          v = _ ? c : l,
          y =
            `border-color:` +
            v +
            `;font-size:` +
            u +
            `;color:` +
            v +
            `;font-weight:` +
            f +
            `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
        return (
          (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
          (h || s || !m) && (y += (r === bf ? qm : Jm) + `:` + (a + parseFloat(d)) + `px;`),
          o && (y += `box-sizing:border-box;text-align:left;width:` + o.offsetWidth + `px;`),
          (p._isStart = _),
          p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
          (p.style.cssText = y),
          (p.innerText = t || t === 0 ? e + `-` + t : e),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p[`offset` + r.op.d2]),
          wh(p, 0, r, _),
          p
        );
      }),
      (wh = function (e, t, n, r) {
        var i = { display: `block` },
          a = n[r ? `os2` : `p2`],
          o = n[r ? `p2` : `os2`];
        ((e._isFlipped = r),
          (i[n.a + `Percent`] = r ? -100 : 0),
          (i[n.a] = r ? `1px` : 0),
          (i[`border` + a + rh] = 1),
          (i[`border` + o + rh] = 0),
          (i[n.p] = t + `px`),
          Z.set(e, i));
      }),
      (Q = []),
      (Th = {}),
      (Dh = function () {
        return vm() - bm > 34 && (Eh ||= requestAnimationFrame(Yh));
      }),
      (Oh = function () {
        (!am || !am.isPressed || am.startX > Hp.clientWidth) &&
          (X.cache++,
          am ? (Eh ||= requestAnimationFrame(Yh)) : Yh(),
          bm || Ph(`scrollStart`),
          (bm = vm()));
      }),
      (kh = function () {
        ((cm = zp.innerWidth), (sm = zp.innerHeight));
      }),
      (Ah = function () {
        (X.cache++,
          !Yp &&
            !im &&
            !Bp.fullscreenElement &&
            !Bp.webkitFullscreenElement &&
            (!om ||
              cm !== zp.innerWidth ||
              Math.abs(zp.innerHeight - sm) > zp.innerHeight * 0.25) &&
            Wp.restart(!0));
      }),
      (jh = {}),
      (Mh = []),
      (Nh = function e() {
        return _h($, `scrollEnd`, e) || Gh(!0);
      }),
      (Ph = function (e) {
        return (
          (jh[e] &&
            jh[e].map(function (e) {
              return e();
            })) ||
          Mh
        );
      }),
      (Fh = []),
      (Ih = function (e) {
        for (var t = 0; t < Fh.length; t += 5)
          (!e || (Fh[t + 4] && Fh[t + 4].query === e)) &&
            ((Fh[t].style.cssText = Fh[t + 1]),
            Fh[t].getBBox && Fh[t].setAttribute(`transform`, Fh[t + 2] || ``),
            (Fh[t + 3].uncache = 1));
      }),
      (Lh = function (e, t) {
        var n;
        for (Qp = 0; Qp < Q.length; Qp++)
          ((n = Q[Qp]), n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0)));
        ((mm = !0), t && Ih(t), t || Ph(`revert`));
      }),
      (Rh = function (e, t) {
        (X.cache++,
          (t || !zh) &&
            X.forEach(function (e) {
              return zm(e) && e.cacheID++ && (e.rec = 0);
            }),
          Rm(e) && (zp.history.scrollRestoration = dm = e));
      }),
      (Bh = 0),
      (Hh = function () {
        if (Vh !== Bh) {
          var e = (Vh = Bh);
          requestAnimationFrame(function () {
            return e === Bh && Gh(!0);
          });
        }
      }),
      (Uh = function () {
        (Hp.appendChild(fm), (pm = (!am && fm.offsetHeight) || zp.innerHeight), Hp.removeChild(fm));
      }),
      (Wh = function (e) {
        return Gp(
          `.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`
        ).forEach(function (t) {
          return (t.style.display = e ? `none` : `block`);
        });
      }),
      (Gh = function (e, t) {
        if (bm && !e && !mm) {
          gh($, `scrollEnd`, Nh);
          return;
        }
        (Uh(),
          (zh = $.isRefreshing = !0),
          X.forEach(function (e) {
            return zm(e) && ++e.cacheID && (e.rec = e());
          }));
        var n = Ph(`refreshInit`);
        (nm && $.sort(),
          t || Lh(),
          X.forEach(function (e) {
            zm(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
          }),
          Q.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (mm = !1),
          Q.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
                n = e.pin[t];
              (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh());
            }
          }),
          (hm = 1),
          Wh(!0),
          Q.forEach(function (e) {
            var t = Im(e.scroller, e._dir),
              n = e.vars.end === `max` || (e._endClamp && e.end > t),
              r = e._startClamp && e.start >= t;
            (n || r) &&
              e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
          }),
          Wh(!1),
          (hm = 0),
          n.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          X.forEach(function (e) {
            zm(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = `smooth`);
                }),
              e.rec && e(e.rec));
          }),
          Rh(dm, 1),
          Wp.pause(),
          Bh++,
          (zh = 2),
          Yh(2),
          Q.forEach(function (e) {
            return zm(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (zh = $.isRefreshing = !1),
          Ph(`refresh`));
      }),
      (Kh = 0),
      (qh = 1),
      (Yh = function (e) {
        if (e === 2 || (!zh && !mm)) {
          (($.isUpdating = !0), Jh && Jh.update(0));
          var t = Q.length,
            n = vm(),
            r = n - ym >= 50,
            i = t && Q[0].scroll();
          if (
            ((qh = Kh > i ? -1 : 1),
            zh || (Kh = i),
            r && (bm && !Xp && n - bm > 200 && ((bm = 0), Ph(`scrollEnd`)), (qp = ym), (ym = n)),
            qh < 0)
          ) {
            for (Qp = t; Qp-- > 0; ) Q[Qp] && Q[Qp].update(0, r);
            qh = 1;
          } else for (Qp = 0; Qp < t; Qp++) Q[Qp] && Q[Qp].update(0, r);
          $.isUpdating = !1;
        }
        Eh = 0;
      }),
      (Xh = [
        Gm,
        Km,
        Jm,
        qm,
        nh + eh,
        nh + Zm,
        nh + $m,
        nh + Qm,
        `display`,
        `flexShrink`,
        `float`,
        `zIndex`,
        `gridColumnStart`,
        `gridColumnEnd`,
        `gridRowStart`,
        `gridRowEnd`,
        `gridArea`,
        `justifySelf`,
        `alignSelf`,
        `placeSelf`,
        `order`,
      ]),
      (Zh = Xh.concat([
        Ym,
        Xm,
        `boxSizing`,
        `max` + rh,
        `max` + ih,
        `position`,
        nh,
        th,
        th + $m,
        th + Zm,
        th + eh,
        th + Qm,
      ])),
      (Qh = function (e, t, n) {
        tg(n);
        var r = e._gsap;
        if (r.spacerIsNative) tg(r.spacerState);
        else if (e._gsap.swappedIn) {
          var i = t.parentNode;
          i && (i.insertBefore(e, t), i.removeChild(t));
        }
        e._gsap.swappedIn = !1;
      }),
      ($h = function (e, t, n, r) {
        if (!e._gsap.swappedIn) {
          for (var i = Xh.length, a = t.style, o = e.style, s; i--; ) ((s = Xh[i]), (a[s] = n[s]));
          ((a.position = n.position === `absolute` ? `absolute` : `relative`),
            n.display === `inline` && (a.display = `inline-block`),
            (o[Jm] = o[qm] = `auto`),
            (a.flexBasis = n.flexBasis || `auto`),
            (a.overflow = `visible`),
            (a.boxSizing = `border-box`),
            (a[Ym] = uh(e, yf) + ah),
            (a[Xm] = uh(e, bf) + ah),
            (a[th] = o[nh] = o[Km] = o[Gm] = `0`),
            tg(r),
            (o[Ym] = o[`max` + rh] = n[Ym]),
            (o[Xm] = o[`max` + ih] = n[Xm]),
            (o[th] = n[th]),
            e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0));
        }
      }),
      (eg = /([A-Z])/g),
      (tg = function (e) {
        if (e) {
          var t = e.t.style,
            n = e.length,
            r = 0,
            i,
            a;
          for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; r < n; r += 2)
            ((a = e[r + 1]),
              (i = e[r]),
              a ? (t[i] = a) : t[i] && t.removeProperty(i.replace(eg, `-$1`).toLowerCase()));
        }
      }),
      (ng = function (e) {
        for (var t = Zh.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Zh[i], n[Zh[i]]);
        return ((r.t = e), r);
      }),
      (rg = function (e, t, n) {
        for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
          ((o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]));
        return ((r.t = e.t), r);
      }),
      (ig = { left: 0, top: 0 }),
      (ag = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
        (zm(e) && (e = e(s)),
          Rm(e) &&
            e.substr(0, 3) === `max` &&
            (e = d + (e.charAt(4) === `=` ? Sh(`0` + e.substr(3), n) : 0)));
        var m = f ? f.time() : 0,
          h,
          g,
          _;
        if ((f && f.seek(0), isNaN(e) || (e = +e), Bm(e)))
          (f && (e = Z.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)),
            o && wh(o, n, r, !0));
        else {
          zm(t) && (t = t(s));
          var v = (e || `0`).split(` `),
            y,
            b,
            x,
            S;
          ((_ = xf(t, s) || Hp),
            (y = lh(_) || {}),
            (!y || (!y.left && !y.top)) &&
              oh(_).display === `none` &&
              ((S = _.style.display),
              (_.style.display = `block`),
              (y = lh(_)),
              S ? (_.style.display = S) : _.style.removeProperty(`display`)),
            (b = Sh(v[0], y[r.d])),
            (x = Sh(v[1] || `0`, n)),
            (e = y[r.p] - c[r.p] - l + b + i - x),
            o && wh(o, x, r, n - x < 20 || (o._isStart && x > 20)),
            (n -= n - x));
        }
        if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), a)) {
          var C = e + n,
            w = a._isStart;
          ((h = `scroll` + r.d2),
            wh(
              a,
              C,
              r,
              (w && C > 20) || (!w && (u ? Math.max(Hp[h], Vp[h]) : a.parentNode[h]) <= C + 1)
            ),
            u && ((c = lh(o)), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + ah)));
        }
        return (
          f &&
            _ &&
            ((h = lh(_)),
            f.seek(d),
            (g = lh(_)),
            (f._caScrollDist = h[r.p] - g[r.p]),
            (e = (e / f._caScrollDist) * d)),
          f && f.seek(m),
          f ? e : Math.round(e)
        );
      }),
      (og = /(webkit|moz|length|cssText|inset)/i),
      (sg = function (e, t, n, r) {
        if (e.parentNode !== t) {
          var i = e.style,
            a,
            o;
          if (t === Hp) {
            for (a in ((e._stOrig = i.cssText), (o = oh(e)), o))
              !+a && !og.test(a) && o[a] && typeof i[a] == `string` && a !== `0` && (i[a] = o[a]);
            ((i.top = n), (i.left = r));
          } else i.cssText = e._stOrig;
          ((Z.core.getCache(e).uncache = 1), t.appendChild(e));
        }
      }),
      (cg = function (e, t, n) {
        var r = t,
          i = r;
        return function (t) {
          var a = Math.round(e());
          return (
            a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && ((t = a), n && n()),
            (i = r),
            (r = t),
            t
          );
        };
      }),
      (lg = function (e, t, n) {
        var r = {};
        ((r[t.p] = `+=` + n), Z.set(e, r));
      }),
      (ug = function (e, t) {
        var n = Sf(e, t),
          r = `_scroll` + t.p2,
          i = function t(i, a, o, s, c) {
            var l = t.tween,
              u = a.onComplete,
              d = {};
            o ||= n();
            var f = cg(n, o, function () {
              (l.kill(), (t.tween = 0));
            });
            return (
              (c = (s && c) || 0),
              (s ||= i - o),
              l && l.kill(),
              (a[r] = i),
              (a.inherit = !1),
              (a.modifiers = d),
              (d[r] = function () {
                return f(o + s * l.ratio + c * l.ratio * l.ratio);
              }),
              (a.onUpdate = function () {
                (X.cache++, t.tween && Yh());
              }),
              (a.onComplete = function () {
                ((t.tween = 0), u && u.call(l));
              }),
              (l = t.tween = Z.to(e, a)),
              l
            );
          };
        return (
          (e[r] = n),
          (n.wheelHandler = function () {
            return i.tween && i.tween.kill() && (i.tween = 0);
          }),
          gh(e, `wheel`, n.wheelHandler),
          $.isTouch && gh(e, `touchmove`, n.wheelHandler),
          i
        );
      }),
      ($ = (function () {
        function e(t, n) {
          (Rp || e.register(Z) || console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
            um(this),
            this.init(t, n));
        }
        var n = e.prototype;
        return (
          (n.init = function (t, n) {
            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !xm)) {
              this.update = this.refresh = this.kill = Dm;
              return;
            }
            t = ch(Rm(t) || Bm(t) || t.nodeType ? { trigger: t } : t, bh);
            var r = t,
              i = r.onUpdate,
              a = r.toggleClass,
              o = r.id,
              s = r.onToggle,
              c = r.onRefresh,
              l = r.scrub,
              u = r.trigger,
              d = r.pin,
              f = r.pinSpacing,
              p = r.invalidateOnRefresh,
              m = r.anticipatePin,
              h = r.onScrubComplete,
              g = r.onSnapComplete,
              _ = r.once,
              v = r.snap,
              y = r.pinReparent,
              b = r.pinSpacer,
              x = r.containerAnimation,
              S = r.fastScrollEnd,
              C = r.preventOverlaps,
              w = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? yf : bf,
              T = !l && l !== 0,
              E = xf(t.scroller || zp),
              D = Z.core.getCache(E),
              O = jm(E),
              k = (`pinType` in t ? t.pinType : df(E, `pinType`) || (O && `fixed`)) === `fixed`,
              A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              j = T && t.toggleActions.split(` `),
              M = `markers` in t ? t.markers : bh.markers,
              N = O ? 0 : parseFloat(oh(E)[`border` + w.p2 + rh]) || 0,
              P = this,
              ee =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(P);
                },
              te = Pm(E, O, w),
              F = Fm(E, O),
              I = 0,
              L = 0,
              R = 0,
              z = Sf(E, w),
              ne,
              B,
              V,
              re,
              H,
              U,
              W,
              G,
              K,
              q,
              ie,
              ae,
              oe,
              se,
              ce,
              le,
              ue,
              de,
              J,
              fe,
              Y,
              pe,
              me,
              he,
              ge,
              _e,
              ve,
              ye,
              be,
              xe,
              Se,
              Ce,
              we,
              Te,
              Ee,
              De,
              Oe,
              ke,
              Ae;
            if (
              ((P._startClamp = P._endClamp = !1),
              (P._dir = w),
              (m *= 45),
              (P.scroller = E),
              (P.scroll = x ? x.time.bind(x) : z),
              (re = z()),
              (P.vars = t),
              (n ||= t.animation),
              `refreshPriority` in t && ((nm = 1), t.refreshPriority === -9999 && (Jh = P)),
              (D.tweenScroll = D.tweenScroll || { top: ug(E, bf), left: ug(E, yf) }),
              (P.tweenTo = ne = D.tweenScroll[w.p]),
              (P.scrubDuration = function (e) {
                ((we = Bm(e) && e),
                  we
                    ? Ce
                      ? Ce.duration(e)
                      : (Ce = Z.to(n, {
                          ease: `expo`,
                          totalProgress: `+=0`,
                          inherit: !1,
                          duration: we,
                          paused: !0,
                          onComplete: function () {
                            return h && h(P);
                          },
                        }))
                    : (Ce && Ce.progress(1).kill(), (Ce = 0)));
              }),
              n &&
                ((n.vars.lazy = !1),
                (n._initted && !P.isReverted) ||
                  (n.vars.immediateRender !== !1 &&
                    t.immediateRender !== !1 &&
                    n.duration() &&
                    n.render(0, !0, !0)),
                (P.animation = n.pause()),
                (n.scrollTrigger = P),
                P.scrubDuration(l),
                (xe = 0),
                (o ||= n.vars.id)),
              v &&
                ((!Vm(v) || v.push) && (v = { snapTo: v }),
                `scrollBehavior` in Hp.style && Z.set(O ? [Hp, Vp] : E, { scrollBehavior: `auto` }),
                X.forEach(function (e) {
                  return (
                    zm(e) && e.target === (O ? Bp.scrollingElement || Vp : E) && (e.smooth = !1)
                  );
                }),
                (V = zm(v.snapTo)
                  ? v.snapTo
                  : v.snapTo === `labels`
                    ? fh(n)
                    : v.snapTo === `labelsDirectional`
                      ? mh(n)
                      : v.directional === !1
                        ? Z.utils.snap(v.snapTo)
                        : function (e, t) {
                            return ph(v.snapTo)(e, vm() - L < 500 ? 0 : t.direction);
                          }),
                (Te = v.duration || { min: 0.1, max: 2 }),
                (Te = Vm(Te) ? Kp(Te.min, Te.max) : Kp(Te, Te)),
                (Ee = Z.delayedCall(v.delay || we / 2 || 0.1, function () {
                  var e = z(),
                    t = vm() - L < 500,
                    r = ne.tween;
                  if ((t || Math.abs(P.getVelocity()) < 10) && !r && !Xp && I !== e) {
                    var i = (e - U) / se,
                      a = n && !T ? n.totalProgress() : i,
                      o = t ? 0 : ((a - Se) / (vm() - qp)) * 1e3 || 0,
                      s = Z.utils.clamp(-i, 1 - i, (Wm(o / 2) * o) / 0.185),
                      c = i + (v.inertia === !1 ? 0 : s),
                      l,
                      u,
                      d = v,
                      f = d.onStart,
                      p = d.onInterrupt,
                      m = d.onComplete;
                    if (
                      ((l = V(c, P)),
                      Bm(l) || (l = c),
                      (u = Math.round(U + l * se)),
                      e <= W && e >= U && u !== e)
                    ) {
                      if (r && !r._initted && r.data <= Wm(u - e)) return;
                      (v.inertia === !1 && (s = l - i),
                        ne(
                          u,
                          {
                            duration: Te(
                              Wm((Math.max(Wm(c - a), Wm(l - a)) * 0.185) / o / 0.05 || 0)
                            ),
                            ease: v.ease || `power3`,
                            data: Wm(u - e),
                            onInterrupt: function () {
                              return Ee.restart(!0) && p && p(P);
                            },
                            onComplete: function () {
                              (P.update(),
                                (I = z()),
                                n &&
                                  (Ce
                                    ? Ce.resetTo(`totalProgress`, l, n._tTime / n._tDur)
                                    : n.progress(l)),
                                (xe = Se = n && !T ? n.totalProgress() : P.progress),
                                g && g(P),
                                m && m(P));
                            },
                          },
                          e,
                          s * se,
                          u - e - s * se
                        ),
                        f && f(P, ne.tween));
                    }
                  } else P.isActive && I !== e && Ee.restart(!0);
                }).pause())),
              o && (Th[o] = P),
              (u = P.trigger = xf(u || (d !== !0 && d))),
              (Ae = u && u._gsap && u._gsap.stRevert),
              (Ae &&= Ae(P)),
              (d = d === !0 ? u : xf(d)),
              Rm(a) && (a = { targets: u, className: a }),
              d &&
                (f === !1 ||
                  f === nh ||
                  (f =
                    !f && d.parentNode && d.parentNode.style && oh(d.parentNode).display === `flex`
                      ? !1
                      : th),
                (P.pin = d),
                (B = Z.core.getCache(d)),
                B.spacer
                  ? (ce = B.pinState)
                  : (b &&
                      ((b = xf(b)),
                      b && !b.nodeType && (b = b.current || b.nativeElement),
                      (B.spacerIsNative = !!b),
                      b && (B.spacerState = ng(b))),
                    (B.spacer = de = b || Bp.createElement(`div`)),
                    de.classList.add(`pin-spacer`),
                    o && de.classList.add(`pin-spacer-` + o),
                    (B.pinState = ce = ng(d))),
                t.force3D !== !1 && Z.set(d, { force3D: !0 }),
                (P.spacer = de = B.spacer),
                (be = oh(d)),
                (he = be[f + w.os2]),
                (fe = Z.getProperty(d)),
                (Y = Z.quickSetter(d, w.a, ah)),
                $h(d, de, be),
                (ue = ng(d))),
              M)
            ) {
              ((ae = Vm(M) ? ch(M, yh) : yh),
                (q = Ch(`scroller-start`, o, E, w, ae, 0)),
                (ie = Ch(`scroller-end`, o, E, w, ae, 0, q)),
                (J = q[`offset` + w.op.d2]));
              var je = xf(df(E, `content`) || E);
              ((G = this.markerStart = Ch(`start`, o, je, w, ae, J, 0, x)),
                (K = this.markerEnd = Ch(`end`, o, je, w, ae, J, 0, x)),
                x && (ke = Z.quickSetter([G, K], w.a, ah)),
                !k &&
                  !(sf.length && df(E, `fixedMarkers`) === !0) &&
                  (sh(O ? Hp : E),
                  Z.set([q, ie], { force3D: !0 }),
                  (_e = Z.quickSetter(q, w.a, ah)),
                  (ye = Z.quickSetter(ie, w.a, ah))));
            }
            if (x) {
              var Me = x.vars.onUpdate,
                Ne = x.vars.onUpdateParams;
              x.eventCallback(`onUpdate`, function () {
                (P.update(0, 0, 1), Me && Me.apply(x, Ne || []));
              });
            }
            if (
              ((P.previous = function () {
                return Q[Q.indexOf(P) - 1];
              }),
              (P.next = function () {
                return Q[Q.indexOf(P) + 1];
              }),
              (P.revert = function (e, t) {
                if (!t) return P.kill(!0);
                var r = e !== !1 || !P.enabled,
                  i = Yp;
                r !== P.isReverted &&
                  (r &&
                    ((De = Math.max(z(), P.scroll.rec || 0)),
                    (R = P.progress),
                    (Oe = n && n.progress())),
                  G &&
                    [G, K, q, ie].forEach(function (e) {
                      return (e.style.display = r ? `none` : `block`);
                    }),
                  r && ((Yp = P), P.update(r)),
                  d && (!y || !P.isActive) && (r ? Qh(d, de, ce) : $h(d, de, oh(d), ge)),
                  r || P.update(r),
                  (Yp = i),
                  (P.isReverted = r));
              }),
              (P.refresh = function (r, i, a, o) {
                if (!((Yp || !P.enabled) && !i)) {
                  if (d && r && bm) {
                    gh(e, `scrollEnd`, Nh);
                    return;
                  }
                  (!zh && ee && ee(P),
                    (Yp = P),
                    ne.tween && !a && (ne.tween.kill(), (ne.tween = 0)),
                    Ce && Ce.pause(),
                    p && n && n.revert({ kill: !1 }).invalidate(),
                    P.isReverted || P.revert(!0, !0),
                    (P._subPinOffset = !1));
                  var s = te(),
                    l = F(),
                    m = x ? x.duration() : Im(E, w),
                    h = se <= 0.01,
                    g = 0,
                    _ = o || 0,
                    v = Vm(a) ? a.end : t.end,
                    b = t.endTrigger || u,
                    S = Vm(a)
                      ? a.start
                      : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`),
                    C = (P.pinnedContainer = t.pinnedContainer && xf(t.pinnedContainer, P)),
                    D = (u && Math.max(0, Q.indexOf(P))) || 0,
                    A = D,
                    j,
                    B,
                    V,
                    ae,
                    J,
                    Y,
                    he,
                    _e,
                    ye,
                    be,
                    xe,
                    Se,
                    we;
                  for (
                    M && Vm(a) && ((Se = Z.getProperty(q, w.p)), (we = Z.getProperty(ie, w.p)));
                    A--;
                  )
                    ((Y = Q[A]),
                      Y.end || Y.refresh(0, 1) || (Yp = P),
                      (he = Y.pin),
                      he &&
                        (he === u || he === d || he === C) &&
                        !Y.isReverted &&
                        ((be ||= []), be.unshift(Y), Y.revert(!0, !0)),
                      Y !== Q[A] && (D--, A--));
                  for (
                    zm(S) && (S = S(P)),
                      S = Sm(S, `start`, P),
                      U =
                        ag(
                          S,
                          u,
                          s,
                          w,
                          z(),
                          G,
                          q,
                          P,
                          l,
                          N,
                          k,
                          m,
                          x,
                          P._startClamp && `_startClamp`
                        ) || (d ? -0.001 : 0),
                      zm(v) && (v = v(P)),
                      Rm(v) &&
                        !v.indexOf(`+=`) &&
                        (~v.indexOf(` `)
                          ? (v = (Rm(S) ? S.split(` `)[0] : ``) + v)
                          : ((g = Sh(v.substr(2), s)),
                            (v = Rm(S)
                              ? S
                              : (x
                                  ? Z.utils.mapRange(
                                      0,
                                      x.duration(),
                                      x.scrollTrigger.start,
                                      x.scrollTrigger.end,
                                      U
                                    )
                                  : U) + g),
                            (b = u))),
                      v = Sm(v, `end`, P),
                      W =
                        Math.max(
                          U,
                          ag(
                            v || (b ? `100% 0` : m),
                            b,
                            s,
                            w,
                            z() + g,
                            K,
                            ie,
                            P,
                            l,
                            N,
                            k,
                            m,
                            x,
                            P._endClamp && `_endClamp`
                          )
                        ) || -0.001,
                      g = 0,
                      A = D;
                    A--;
                  )
                    ((Y = Q[A]),
                      (he = Y.pin),
                      he &&
                        Y.start - Y._pinPush <= U &&
                        !x &&
                        Y.end > 0 &&
                        ((j = Y.end - (P._startClamp ? Math.max(0, Y.start) : Y.start)),
                        ((he === u && Y.start - Y._pinPush < U) || he === C) &&
                          isNaN(S) &&
                          (g += j * (1 - Y.progress)),
                        he === d && (_ += j)));
                  if (
                    ((U += g),
                    (W += g),
                    P._startClamp && (P._startClamp += g),
                    P._endClamp &&
                      !zh &&
                      ((P._endClamp = W || -0.001), (W = Math.min(W, Im(E, w)))),
                    (se = W - U || ((U -= 0.01) && 0.001)),
                    h && (R = Z.utils.clamp(0, 1, Z.utils.normalize(U, W, De))),
                    (P._pinPush = _),
                    G &&
                      g &&
                      ((j = {}), (j[w.a] = `+=` + g), C && (j[w.p] = `-=` + z()), Z.set([G, K], j)),
                    d && !(hm && P.end >= Im(E, w)))
                  )
                    ((j = oh(d)),
                      (ae = w === bf),
                      (V = z()),
                      (pe = parseFloat(fe(w.a)) + _),
                      !m &&
                        W > 1 &&
                        ((xe = (O ? Bp.scrollingElement || Vp : E).style),
                        (xe = { style: xe, value: xe[`overflow` + w.a.toUpperCase()] }),
                        O &&
                          oh(Hp)[`overflow` + w.a.toUpperCase()] !== `scroll` &&
                          (xe.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                      $h(d, de, j),
                      (ue = ng(d)),
                      (B = lh(d, !0)),
                      (_e = k && Sf(E, ae ? yf : bf)()),
                      f
                        ? ((ge = [f + w.os2, se + _ + ah]),
                          (ge.t = de),
                          (A = f === th ? uh(d, w) + se + _ : 0),
                          A &&
                            (ge.push(w.d, A + ah),
                            de.style.flexBasis !== `auto` && (de.style.flexBasis = A + ah)),
                          tg(ge),
                          C &&
                            Q.forEach(function (e) {
                              e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
                            }),
                          k && z(De))
                        : ((A = uh(d, w)),
                          A && de.style.flexBasis !== `auto` && (de.style.flexBasis = A + ah)),
                      k &&
                        ((J = {
                          top: B.top + (ae ? V - U : _e) + ah,
                          left: B.left + (ae ? _e : V - U) + ah,
                          boxSizing: `border-box`,
                          position: `fixed`,
                        }),
                        (J[Ym] = J[`max` + rh] = Math.ceil(B.width) + ah),
                        (J[Xm] = J[`max` + ih] = Math.ceil(B.height) + ah),
                        (J[nh] = J[nh + $m] = J[nh + Zm] = J[nh + eh] = J[nh + Qm] = `0`),
                        (J[th] = j[th]),
                        (J[th + $m] = j[th + $m]),
                        (J[th + Zm] = j[th + Zm]),
                        (J[th + eh] = j[th + eh]),
                        (J[th + Qm] = j[th + Qm]),
                        (le = rg(ce, J, y)),
                        zh && z(0)),
                      n
                        ? ((ye = n._initted),
                          rm(1),
                          n.render(n.duration(), !0, !0),
                          (me = fe(w.a) - pe + se + _),
                          (ve = Math.abs(se - me) > 1),
                          k && ve && le.splice(le.length - 2, 2),
                          n.render(0, !0, !0),
                          ye || n.invalidate(!0),
                          n.parent || n.totalTime(n.totalTime()),
                          rm(0))
                        : (me = se),
                      xe &&
                        (xe.value
                          ? (xe.style[`overflow` + w.a.toUpperCase()] = xe.value)
                          : xe.style.removeProperty(`overflow-` + w.a)));
                  else if (u && z() && !x)
                    for (B = u.parentNode; B && B !== Hp; )
                      (B._pinOffset && ((U -= B._pinOffset), (W -= B._pinOffset)),
                        (B = B.parentNode));
                  (be &&
                    be.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (P.start = U),
                    (P.end = W),
                    (re = H = zh ? De : z()),
                    !x && !zh && (re < De && z(De), (P.scroll.rec = 0)),
                    P.revert(!1, !0),
                    (L = vm()),
                    Ee && ((I = -1), Ee.restart(!0)),
                    (Yp = 0),
                    n &&
                      T &&
                      (n._initted || Oe) &&
                      n.progress() !== Oe &&
                      n.progress(Oe || 0, !0).render(n.time(), !0, !0),
                    (h || R !== P.progress || x || p) &&
                      (n &&
                        !T &&
                        n.totalProgress(x && U < -0.001 && !R ? Z.utils.normalize(U, W, 0) : R, !0),
                      (P.progress = h || (re - U) / se === R ? 0 : R)),
                    d && f && (de._pinOffset = Math.round(P.progress * me)),
                    Ce && Ce.invalidate(),
                    isNaN(Se) ||
                      ((Se -= Z.getProperty(q, w.p)),
                      (we -= Z.getProperty(ie, w.p)),
                      lg(q, w, Se),
                      lg(G, w, Se - (o || 0)),
                      lg(ie, w, we),
                      lg(K, w, we - (o || 0))),
                    h && !zh && P.update(),
                    c && !zh && !oe && ((oe = !0), c(P), (oe = !1)));
                }
              }),
              (P.getVelocity = function () {
                return ((z() - H) / (vm() - qp)) * 1e3 || 0;
              }),
              (P.endAnimation = function () {
                (Hm(P.callbackAnimation),
                  n &&
                    (Ce
                      ? Ce.progress(1)
                      : n.paused()
                        ? T || Hm(n, P.direction < 0, 1)
                        : Hm(n, n.reversed())));
              }),
              (P.labelToScroll = function (e) {
                return (
                  (n && n.labels && (U || P.refresh() || U) + (n.labels[e] / n.duration()) * se) ||
                  0
                );
              }),
              (P.getTrailing = function (e) {
                var t = Q.indexOf(P),
                  n = P.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
                return (
                  Rm(e)
                    ? n.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : n
                ).filter(function (e) {
                  return P.direction > 0 ? e.end <= U : e.start >= W;
                });
              }),
              (P.update = function (e, t, r) {
                if (!(x && !r && !e)) {
                  var o = zh === !0 ? De : P.scroll(),
                    c = e ? 0 : (o - U) / se,
                    u = c < 0 ? 0 : c > 1 ? 1 : c || 0,
                    p = P.progress,
                    h,
                    g,
                    b,
                    D,
                    O,
                    M,
                    N,
                    ee;
                  if (
                    (t &&
                      ((H = re),
                      (re = x ? z() : o),
                      v && ((Se = xe), (xe = n && !T ? n.totalProgress() : u))),
                    m &&
                      d &&
                      !Yp &&
                      !_m &&
                      bm &&
                      (!u && U < o + ((o - H) / (vm() - qp)) * m
                        ? (u = 1e-4)
                        : u === 1 && W > o + ((o - H) / (vm() - qp)) * m && (u = 0.9999)),
                    u !== p && P.enabled)
                  ) {
                    if (
                      ((h = P.isActive = !!u && u < 1),
                      (g = !!p && p < 1),
                      (M = h !== g),
                      (O = M || !!u != !!p),
                      (P.direction = u > p ? 1 : -1),
                      (P.progress = u),
                      O &&
                        !Yp &&
                        ((b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3),
                        T &&
                          ((D = (!M && j[b + 1] !== `none` && j[b + 1]) || j[b]),
                          (ee = n && (D === `complete` || D === `reset` || D in n)))),
                      C &&
                        (M || ee) &&
                        (ee || l || !n) &&
                        (zm(C)
                          ? C(P)
                          : P.getTrailing(C).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      T ||
                        (Ce && !Yp && !_m
                          ? (Ce._dp._time - Ce._start !== Ce._time &&
                              Ce.render(Ce._dp._time - Ce._start),
                            Ce.resetTo
                              ? Ce.resetTo(`totalProgress`, u, n._tTime / n._tDur)
                              : ((Ce.vars.totalProgress = u), Ce.invalidate().restart()))
                          : n && n.totalProgress(u, !!(Yp && (L || e)))),
                      d)
                    ) {
                      if ((e && f && (de.style[f + w.os2] = he), !k)) Y(Om(pe + me * u));
                      else if (O) {
                        if (((N = !e && u > p && W + 1 > o && o + 1 >= Im(E, w)), y))
                          if (!e && (h || N)) {
                            var te = lh(d, !0),
                              F = o - U;
                            sg(
                              d,
                              Hp,
                              te.top + (w === bf ? F : 0) + ah,
                              te.left + (w === bf ? 0 : F) + ah
                            );
                          } else sg(d, de);
                        (tg(h || N ? le : ue),
                          (ve && u < 1 && h) || Y(pe + (u === 1 && !N ? me : 0)));
                      }
                    }
                    (v && !ne.tween && !Yp && !_m && Ee.restart(!0),
                      a &&
                        (M || (_ && u && (u < 1 || !gm))) &&
                        Gp(a.targets).forEach(function (e) {
                          return e.classList[h || _ ? `add` : `remove`](a.className);
                        }),
                      i && !T && !e && i(P),
                      O && !Yp
                        ? (T &&
                            (ee &&
                              (D === `complete`
                                ? n.pause().totalProgress(1)
                                : D === `reset`
                                  ? n.restart(!0).pause()
                                  : D === `restart`
                                    ? n.restart(!0)
                                    : n[D]()),
                            i && i(P)),
                          (M || !gm) &&
                            (s && M && Um(P, s),
                            A[b] && Um(P, A[b]),
                            _ && (u === 1 ? P.kill(!1, 1) : (A[b] = 0)),
                            M || ((b = u === 1 ? 1 : 3), A[b] && Um(P, A[b]))),
                          S &&
                            !h &&
                            Math.abs(P.getVelocity()) > (Bm(S) ? S : 2500) &&
                            (Hm(P.callbackAnimation),
                            Ce ? Ce.progress(1) : Hm(n, D === `reverse` ? 1 : !u, 1)))
                        : T && i && !Yp && i(P));
                  }
                  if (ye) {
                    var I = x ? (o / x.duration()) * (x._caScrollDist || 0) : o;
                    (_e(I + +!!q._isFlipped), ye(I));
                  }
                  ke && ke((-o / x.duration()) * (x._caScrollDist || 0));
                }
              }),
              (P.enable = function (t, n) {
                P.enabled ||
                  ((P.enabled = !0),
                  gh(E, `resize`, Ah),
                  O || gh(E, `scroll`, Oh),
                  ee && gh(e, `refreshInit`, ee),
                  t !== !1 && ((P.progress = R = 0), (re = H = I = z())),
                  n !== !1 && P.refresh());
              }),
              (P.getTween = function (e) {
                return e && ne ? ne.tween : Ce;
              }),
              (P.setPositions = function (e, t, n, r) {
                if (x) {
                  var i = x.scrollTrigger,
                    a = x.duration(),
                    o = i.end - i.start;
                  ((e = i.start + (o * e) / a), (t = i.start + (o * t) / a));
                }
                (P.refresh(
                  !1,
                  !1,
                  { start: Cm(e, n && !!P._startClamp), end: Cm(t, n && !!P._endClamp) },
                  r
                ),
                  P.update());
              }),
              (P.adjustPinSpacing = function (e) {
                if (ge && e) {
                  var t = ge.indexOf(w.d) + 1;
                  ((ge[t] = parseFloat(ge[t]) + e + ah),
                    (ge[1] = parseFloat(ge[1]) + e + ah),
                    tg(ge));
                }
              }),
              (P.disable = function (t, n) {
                if (
                  P.enabled &&
                  (t !== !1 && P.revert(!0, !0),
                  (P.enabled = P.isActive = !1),
                  n || (Ce && Ce.pause()),
                  (De = 0),
                  B && (B.uncache = 1),
                  ee && _h(e, `refreshInit`, ee),
                  Ee && (Ee.pause(), ne.tween && ne.tween.kill() && (ne.tween = 0)),
                  !O)
                ) {
                  for (var r = Q.length; r--; ) if (Q[r].scroller === E && Q[r] !== P) return;
                  (_h(E, `resize`, Ah), O || _h(E, `scroll`, Oh));
                }
              }),
              (P.kill = function (e, r) {
                (P.disable(e, r), Ce && !r && Ce.kill(), o && delete Th[o]);
                var i = Q.indexOf(P);
                (i >= 0 && Q.splice(i, 1),
                  i === Qp && qh > 0 && Qp--,
                  (i = 0),
                  Q.forEach(function (e) {
                    return e.scroller === P.scroller && (i = 1);
                  }),
                  i || zh || (P.scroll.rec = 0),
                  n && ((n.scrollTrigger = null), e && n.revert({ kill: !1 }), r || n.kill()),
                  G &&
                    [G, K, q, ie].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  Jh === P && (Jh = 0),
                  d &&
                    (B && (B.uncache = 1),
                    (i = 0),
                    Q.forEach(function (e) {
                      return e.pin === d && i++;
                    }),
                    i || (B.spacer = 0)),
                  t.onKill && t.onKill(P));
              }),
              Q.push(P),
              P.enable(!1, !1),
              Ae && Ae(P),
              n && n.add && !se)
            ) {
              var Pe = P.update;
              ((P.update = function () {
                ((P.update = Pe), U || W || P.refresh());
              }),
                Z.delayedCall(0.01, P.update),
                (se = 0.01),
                (U = W = 0));
            } else P.refresh();
            d && Hh();
          }),
          (e.register = function (n) {
            return ((Rp ||= ((Z = n || Am()), km() && t.document && e.enable(), xm)), Rp);
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) bh[t] = e[t];
            return bh;
          }),
          (e.disable = function (e, t) {
            ((xm = 0),
              Q.forEach(function (n) {
                return n[t ? `kill` : `disable`](e);
              }),
              _h(zp, `wheel`, Oh),
              _h(Bp, `scroll`, Oh),
              clearInterval(Jp),
              _h(Bp, `touchcancel`, Dm),
              _h(Hp, `touchstart`, Dm),
              hh(_h, Bp, `pointerdown,touchstart,mousedown`, Tm),
              hh(_h, Bp, `pointerup,touchend,mouseup`, Em),
              Wp.kill(),
              Lm(_h));
            for (var n = 0; n < X.length; n += 3) (vh(_h, X[n], X[n + 1]), vh(_h, X[n], X[n + 2]));
          }),
          (e.enable = function () {
            if (
              ((zp = t),
              (Bp = document),
              (Vp = Bp.documentElement),
              (Hp = Bp.body),
              Z &&
                ((Gp = Z.utils.toArray),
                (Kp = Z.utils.clamp),
                (um = Z.core.context || Dm),
                (rm = Z.core.suppressOverwrites || Dm),
                (dm = zp.history.scrollRestoration || `auto`),
                (Kh = zp.pageYOffset),
                Z.core.globals(`ScrollTrigger`, e),
                Hp))
            ) {
              ((xm = 1),
                (fm = document.createElement(`div`)),
                (fm.style.height = `100vh`),
                (fm.style.position = `absolute`),
                Uh(),
                wm(),
                Of.register(Z),
                (e.isTouch = Of.isTouch),
                (lm = Of.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(T.userAgent)),
                (om = Of.isTouch === 1),
                gh(zp, `wheel`, Oh),
                (Up = [zp, Bp, Vp, Hp]),
                Z.matchMedia
                  ? ((e.matchMedia = function (e) {
                      var t = Z.matchMedia(),
                        n;
                      for (n in e) t.add(n, e[n]);
                      return t;
                    }),
                    Z.addEventListener(`matchMediaInit`, function () {
                      return Lh();
                    }),
                    Z.addEventListener(`matchMediaRevert`, function () {
                      return Ih();
                    }),
                    Z.addEventListener(`matchMedia`, function () {
                      (Gh(0, 1), Ph(`matchMedia`));
                    }),
                    Z.matchMedia(`(orientation: portrait)`, function () {
                      return (kh(), kh);
                    }))
                  : console.warn(`Requires GSAP 3.11.0 or later`),
                kh(),
                gh(Bp, `scroll`, Oh));
              var n = Hp.style,
                r = n.borderTopStyle,
                i = Z.core.Animation.prototype,
                a,
                o;
              for (
                i.revert ||
                  Object.defineProperty(i, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  n.borderTopStyle = `solid`,
                  a = lh(Hp),
                  bf.m = Math.round(a.top + bf.sc()) || 0,
                  yf.m = Math.round(a.left + yf.sc()) || 0,
                  r ? (n.borderTopStyle = r) : n.removeProperty(`border-top-style`),
                  Jp = setInterval(Dh, 250),
                  Z.delayedCall(0.5, function () {
                    return (_m = 0);
                  }),
                  gh(Bp, `touchcancel`, Dm),
                  gh(Hp, `touchstart`, Dm),
                  hh(gh, Bp, `pointerdown,touchstart,mousedown`, Tm),
                  hh(gh, Bp, `pointerup,touchend,mouseup`, Em),
                  Zp = Z.utils.checkPrefix(`transform`),
                  Zh.push(Zp),
                  Rp = vm(),
                  Wp = Z.delayedCall(0.2, Gh).pause(),
                  tm = [
                    Bp,
                    `visibilitychange`,
                    function () {
                      var e = zp.innerWidth,
                        t = zp.innerHeight;
                      Bp.hidden ? (($p = e), (em = t)) : ($p !== e || em !== t) && Ah();
                    },
                    Bp,
                    `DOMContentLoaded`,
                    Gh,
                    zp,
                    `load`,
                    Gh,
                    zp,
                    `resize`,
                    Ah,
                  ],
                  Lm(gh),
                  Q.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  o = 0;
                o < X.length;
                o += 3
              )
                (vh(_h, X[o], X[o + 1]), vh(_h, X[o], X[o + 2]));
            }
          }),
          (e.config = function (t) {
            `limitCallbacks` in t && (gm = !!t.limitCallbacks);
            var n = t.syncInterval;
            ((n && clearInterval(Jp)) || ((Jp = n) && setInterval(Dh, n)),
              `ignoreMobileResize` in t && (om = e.isTouch === 1 && t.ignoreMobileResize),
              `autoRefreshEvents` in t &&
                (Lm(_h) || Lm(gh, t.autoRefreshEvents || `none`),
                (im = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)));
          }),
          (e.scrollerProxy = function (e, t) {
            var n = xf(e),
              r = X.indexOf(n),
              i = jm(n);
            (~r && X.splice(r, i ? 6 : 2),
              t && (i ? sf.unshift(zp, t, Hp, t, Vp, t) : sf.unshift(n, t)));
          }),
          (e.clearMatchMedia = function (e) {
            Q.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, n) {
            var r = (Rm(e) ? xf(e) : e).getBoundingClientRect(),
              i = r[n ? Ym : Xm] * t || 0;
            return n
              ? r.right - i > 0 && r.left + i < zp.innerWidth
              : r.bottom - i > 0 && r.top + i < zp.innerHeight;
          }),
          (e.positionInViewport = function (e, t, n) {
            Rm(e) && (e = xf(e));
            var r = e.getBoundingClientRect(),
              i = r[n ? Ym : Xm],
              a =
                t == null
                  ? i / 2
                  : t in xh
                    ? xh[t] * i
                    : ~t.indexOf(`%`)
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
            return n ? (r.left + a) / zp.innerWidth : (r.top + a) / zp.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (Q.slice(0).forEach(function (e) {
                return e.vars.id !== `ScrollSmoother` && e.kill();
              }),
              e !== !0)
            ) {
              var t = jh.killAll || [];
              ((jh = {}),
                t.forEach(function (e) {
                  return e();
                }));
            }
          }),
          e
        );
      })()),
      ($.version = `3.12.5`),
      ($.saveStyles = function (e) {
        return e
          ? Gp(e).forEach(function (e) {
              if (e && e.style) {
                var t = Fh.indexOf(e);
                (t >= 0 && Fh.splice(t, 5),
                  Fh.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute(`transform`),
                    Z.core.getCache(e),
                    um()
                  ));
              }
            })
          : Fh;
      }),
      ($.revert = function (e, t) {
        return Lh(!e, t);
      }),
      ($.create = function (e, t) {
        return new $(e, t);
      }),
      ($.refresh = function (e) {
        return e ? Ah() : (Rp || $.register()) && Gh(!0);
      }),
      ($.update = function (e) {
        return ++X.cache && Yh(e === !0 ? 2 : 0);
      }),
      ($.clearScrollMemory = Rh),
      ($.maxScroll = function (e, t) {
        return Im(e, t ? yf : bf);
      }),
      ($.getScrollFunc = function (e, t) {
        return Sf(xf(e), t ? yf : bf);
      }),
      ($.getById = function (e) {
        return Th[e];
      }),
      ($.getAll = function () {
        return Q.filter(function (e) {
          return e.vars.id !== `ScrollSmoother`;
        });
      }),
      ($.isScrolling = function () {
        return !!bm;
      }),
      ($.snapDirectional = ph),
      ($.addEventListener = function (e, t) {
        var n = jh[e] || (jh[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      ($.removeEventListener = function (e, t) {
        var n = jh[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }),
      ($.batch = function (e, t) {
        var n = [],
          r = {},
          i = t.interval || 0.016,
          a = t.batchMax || 1e9,
          o = function (e, t) {
            var n = [],
              r = [],
              o = Z.delayedCall(i, function () {
                (t(n, r), (n = []), (r = []));
              }).pause();
            return function (e) {
              (n.length || o.restart(!0),
                n.push(e.trigger),
                r.push(e),
                a <= n.length && o.progress(1));
            };
          },
          s;
        for (s in t)
          r[s] = s.substr(0, 2) === `on` && zm(t[s]) && s !== `onRefreshInit` ? o(s, t[s]) : t[s];
        return (
          zm(a) &&
            ((a = a()),
            gh($, `refresh`, function () {
              return (a = t.batchMax());
            })),
          Gp(e).forEach(function (e) {
            var t = {};
            for (s in r) t[s] = r[s];
            ((t.trigger = e), n.push($.create(t)));
          }),
          n
        );
      }),
      (dg = function (e, t, n, r) {
        return (t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1);
      }),
      (fg = function e(t, n) {
        (n === !0
          ? t.style.removeProperty(`touch-action`)
          : (t.style.touchAction =
              n === !0 ? `auto` : n ? `pan-` + n + (Of.isTouch ? ` pinch-zoom` : ``) : `none`),
          t === Vp && e(Hp, n));
      }),
      (pg = { auto: 1, scroll: 1 }),
      (mg = function (e) {
        var t = e.event,
          n = e.target,
          r = e.axis,
          i = (t.changedTouches ? t.changedTouches[0] : t).target,
          a = i._gsap || Z.core.getCache(i),
          o = vm(),
          s;
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
          for (
            ;
            i &&
            i !== Hp &&
            ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
              !(pg[(s = oh(i)).overflowY] || pg[s.overflowX]));
          )
            i = i.parentNode;
          ((a._isScroll = i && i !== n && !jm(i) && (pg[(s = oh(i)).overflowY] || pg[s.overflowX])),
            (a._isScrollT = o));
        }
        (a._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
      }),
      (hg = function (e, t, n, r) {
        return Of.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (r &&= mg),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return n && gh(Bp, Of.eventTypes[0], vg, !1, !0);
          },
          onDisable: function () {
            return _h(Bp, Of.eventTypes[0], vg, !0);
          },
        });
      }),
      (gg = /(input|label|select|textarea)/i),
      (vg = function (e) {
        var t = gg.test(e.target.tagName);
        (t || _g) && ((e._gsapAllow = !0), (_g = t));
      }),
      (yg = function (e) {
        (Vm(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          (e.type ||= `wheel,touch`),
          (e.debounce = !!e.debounce),
          (e.id = e.id || `normalizer`));
        var t = e,
          n = t.normalizeScrollX,
          r = t.momentum,
          i = t.allowNestedScroll,
          a = t.onRelease,
          o,
          s,
          c = xf(e.target) || Vp,
          l = Z.core.globals().ScrollSmoother,
          u = l && l.get(),
          d =
            lm &&
            ((e.content && xf(e.content)) || (u && e.content !== !1 && !u.smooth() && u.content())),
          f = Sf(c, bf),
          p = Sf(c, yf),
          m = 1,
          h =
            (Of.isTouch && zp.visualViewport
              ? zp.visualViewport.scale * zp.visualViewport.width
              : zp.outerWidth) / zp.innerWidth,
          g = 0,
          _ = zm(r)
            ? function () {
                return r(o);
              }
            : function () {
                return r || 2.8;
              },
          v,
          y,
          b = hg(c, e.type, !0, i),
          x = function () {
            return (y = !1);
          },
          S = Dm,
          C = Dm,
          w = function () {
            ((s = Im(c, bf)), (C = Kp(+!!lm, s)), n && (S = Kp(0, Im(c, yf))), (v = Bh));
          },
          T = function () {
            ((d._gsap.y = Om(parseFloat(d._gsap.y) + f.offset) + `px`),
              (d.style.transform =
                `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
                parseFloat(d._gsap.y) +
                `, 0, 1)`),
              (f.offset = f.cacheID = 0));
          },
          E = function () {
            if (y) {
              requestAnimationFrame(x);
              var e = Om(o.deltaY / 2),
                t = C(f.v - e);
              if (d && t !== f.v + f.offset) {
                f.offset = t - f.v;
                var n = Om((parseFloat(d && d._gsap.y) || 0) - f.offset);
                ((d.style.transform =
                  `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + n + `, 0, 1)`),
                  (d._gsap.y = n + `px`),
                  (f.cacheID = X.cache),
                  Yh());
              }
              return !0;
            }
            (f.offset && T(), (y = !0));
          },
          D,
          O,
          k,
          A,
          j = function () {
            (w(),
              D.isActive() &&
                D.vars.scrollY > s &&
                (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s)));
          };
        return (
          d && Z.set(d, { y: `+=0` }),
          (e.ignoreCheck = function (e) {
            return (
              (lm && e.type === `touchmove` && E(e)) ||
              (m > 1.05 && e.type !== `touchstart`) ||
              o.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            y = !1;
            var e = m;
            ((m = Om(((zp.visualViewport && zp.visualViewport.scale) || 1) / h)),
              D.pause(),
              e !== m && fg(c, m > 1.01 || (!n && `x`)),
              (O = p()),
              (k = f()),
              w(),
              (v = Bh));
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if ((f.offset && T(), !t)) A.restart(!0);
              else {
                X.cache++;
                var r = _(),
                  i,
                  o;
                (n &&
                  ((i = p()),
                  (o = i + (r * 0.05 * -e.velocityX) / 0.227),
                  (r *= dg(p, i, o, Im(c, yf))),
                  (D.vars.scrollX = S(o))),
                  (i = f()),
                  (o = i + (r * 0.05 * -e.velocityY) / 0.227),
                  (r *= dg(f, i, o, Im(c, bf))),
                  (D.vars.scrollY = C(o)),
                  D.invalidate().duration(r).play(0.01),
                  ((lm && D.vars.scrollY >= s) || i >= s - 1) &&
                    Z.to({}, { onUpdate: j, duration: r }));
              }
              a && a(e);
            }),
          (e.onWheel = function () {
            (D._ts && D.pause(), vm() - g > 1e3 && ((v = 0), (g = vm())));
          }),
          (e.onChange = function (e, t, r, i, a) {
            if (
              (Bh !== v && w(),
              t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
              r)
            ) {
              f.offset && T();
              var o = a[2] === r,
                s = o ? k + e.startY - e.y : f() + r - a[1],
                c = C(s);
              (o && s !== c && (k += c - s), f(c));
            }
            (r || t) && Yh();
          }),
          (e.onEnable = function () {
            (fg(c, !n && `x`),
              $.addEventListener(`refresh`, j),
              gh(zp, `resize`, j),
              (f.smooth &&= ((f.target.style.scrollBehavior = `auto`), (p.smooth = !1))),
              b.enable());
          }),
          (e.onDisable = function () {
            (fg(c, !0), _h(zp, `resize`, j), $.removeEventListener(`refresh`, j), b.kill());
          }),
          (e.lockAxis = e.lockAxis !== !1),
          (o = new Of(e)),
          (o.iOS = lm),
          lm && !f() && f(1),
          lm && Z.ticker.add(Dm),
          (A = o._dc),
          (D = Z.to(o, {
            ease: `power4`,
            paused: !0,
            inherit: !1,
            scrollX: n ? `+=0.1` : `+=0`,
            scrollY: `+=0.1`,
            modifiers: {
              scrollY: cg(f, f(), function () {
                return D.pause();
              }),
            },
            onUpdate: Yh,
            onComplete: A.vars.onComplete,
          })),
          o
        );
      }),
      ($.sort = function (e) {
        return Q.sort(
          e ||
            function (e, t) {
              return (
                (e.vars.refreshPriority || 0) * -1e6 +
                e.start -
                (t.start + (t.vars.refreshPriority || 0) * -1e6)
              );
            }
        );
      }),
      ($.observe = function (e) {
        return new Of(e);
      }),
      ($.normalizeScroll = function (e) {
        if (typeof e > `u`) return am;
        if (e === !0 && am) return am.enable();
        if (e === !1) {
          (am && am.kill(), (am = e));
          return;
        }
        var t = e instanceof Of ? e : yg(e);
        return (am && am.target === t.target && am.kill(), jm(t.target) && (am = t), t);
      }),
      ($.core = {
        _getVelocityProp: Cf,
        _inputObserver: hg,
        _scrollers: X,
        _proxies: sf,
        bridge: {
          ss: function () {
            (bm || Ph(`scrollStart`), (bm = vm()));
          },
          ref: function () {
            return Yp;
          },
        },
      }),
      Am() && Z.registerPlugin($),
      (bg = /(?:^\s+|\s+$)/g),
      (xg =
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/),
      (wg = function () {
        return Sg || (typeof t < `u` && (Sg = t.gsap) && Sg.registerPlugin && Sg);
      }),
      (Tg = {
        version: `3.12.5`,
        name: `text`,
        init: function (e, t, n) {
          typeof t != `object` && (t = { value: t });
          var r = e.nodeName.toUpperCase(),
            i = this,
            a = t,
            o = a.newClass,
            s = a.oldClass,
            c = a.preserveSpaces,
            l = a.rtl,
            u = (i.delimiter = t.delimiter || ``),
            d = (i.fillChar = t.fillChar || (t.padSpace ? `&nbsp;` : ``)),
            f,
            p,
            m,
            h,
            g,
            _,
            v,
            y;
          if (
            ((i.svg = e.getBBox && (r === `TEXT` || r === `TSPAN`)), !(`innerHTML` in e) && !i.svg)
          )
            return !1;
          if (((i.target = e), !(`value` in t))) {
            i.text = i.original = [``];
            return;
          }
          for (
            m = At(e, u, !1, c),
              Cg ||= document.createElement(`div`),
              Cg.innerHTML = t.value,
              p = At(Cg, u, !1, c),
              i.from = n._from,
              (i.from || l) && !(l && i.from) && ((r = m), (m = p), (p = r)),
              i.hasClass = !!(o || s),
              i.newClass = l ? s : o,
              i.oldClass = l ? o : s,
              r = m.length - p.length,
              f = r < 0 ? m : p,
              r < 0 && (r = -r);
            --r > -1;
          )
            f.push(d);
          if (t.type === `diff`) {
            for (h = 0, g = [], _ = [], v = ``, r = 0; r < p.length; r++)
              ((y = p[r]), y === m[r] ? (v += y) : ((g[h] = v + y), (_[h++] = v + m[r]), (v = ``)));
            ((p = g), (m = _), v && (p.push(v), m.push(v)));
          }
          (t.speed && n.duration(Math.min((0.05 / t.speed) * f.length, t.maxDuration || 9999)),
            (i.rtl = l),
            (i.original = m),
            (i.text = p),
            i._props.push(`text`));
        },
        render: function (e, t) {
          (e > 1 ? (e = 1) : e < 0 && (e = 0), t.from && (e = 1 - e));
          var n = t.text,
            r = t.hasClass,
            i = t.newClass,
            a = t.oldClass,
            o = t.delimiter,
            s = t.target,
            c = t.fillChar,
            l = t.original,
            u = t.rtl,
            d = n.length,
            f = ((u ? 1 - e : e) * d + 0.5) | 0,
            p,
            m,
            h;
          (r && e
            ? ((p = i && f),
              (m = a && f !== d),
              (h =
                (p ? `<span class='` + i + `'>` : ``) +
                n.slice(0, f).join(o) +
                (p ? `</span>` : ``) +
                (m ? `<span class='` + a + `'>` : ``) +
                o +
                l.slice(f).join(o) +
                (m ? `</span>` : ``)))
            : (h = n.slice(0, f).join(o) + o + l.slice(f).join(o)),
            t.svg
              ? (s.textContent = h)
              : (s.innerHTML =
                  c === `&nbsp;` && ~h.indexOf(`  `) ? h.split(`  `).join(`&nbsp;&nbsp;`) : h));
        },
      }),
      (Tg.splitInnerHTML = At),
      (Tg.emojiSafeSplit = jt),
      (Tg.getText = kt),
      wg() && Sg.registerPlugin(Tg),
      (Eg = pa.registerPlugin(Fo) || pa),
      Eg.core.Tween);
  }),
  Og = e(() => {
    /*! Bundled license information:

gsap/gsap-core.js:
(*!
* GSAP 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/CSSPlugin.js:
(*!
* CSSPlugin 3.12.5
* https://gsap.com
*
* Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/utils/paths.js:
(*!
* paths 3.12.5
* https://gsap.com
*
* Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/CustomEase.js:
(*!
* CustomEase 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/utils/matrix.js:
(*!
* matrix 3.12.5
* https://gsap.com
*
* Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/Draggable.js:
(*!
* Draggable 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/CSSRulePlugin.js:
(*!
* CSSRulePlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/EaselPlugin.js:
(*!
* EaselPlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/EasePack.js:
(*!
* EasePack 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/Flip.js:
(*!
* Flip 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/MotionPathPlugin.js:
(*!
* MotionPathPlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/Observer.js:
(*!
* Observer 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/PixiPlugin.js:
(*!
* PixiPlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/ScrollToPlugin.js:
(*!
* ScrollToPlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/ScrollTrigger.js:
(*!
* ScrollTrigger 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/utils/strings.js:
(*!
* strings: 3.12.5
* https://gsap.com
*
* Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)

gsap/TextPlugin.js:
(*!
* TextPlugin 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*)
*/
    (Dg(), Dg());
  });
function kg(e) {
  let {
      svgFile: n,
      duration: r,
      delay: i,
      start: a,
      once: o,
      loop: s,
      loopDelay: c,
      color: l,
      strokeWidth: d,
      scaleStroke: f,
    } = e,
    p = w(null),
    m = w(null),
    [h, g] = S(``),
    _ = w([]),
    v = w(!1);
  return (
    u(() => {
      if (!n) {
        g(``);
        return;
      }
      let e = !1;
      return (
        fetch(n)
          .then((e) => e.text())
          .then((t) => {
            if (e) return;
            let n = t;
            if (
              ((n = n.replace(/<style[\s\S]*?<\/style>/gi, ``)),
              (n = n.replace(/\sstroke-width="[^"]*"/gi, ``)),
              (n = n.replace(/\svector-effect="[^"]*"/gi, ``)),
              (n = n.replace(/width="[\d\.]+(px)?"/g, ``).replace(/height="[\d\.]+(px)?"/g, ``)),
              !n.includes(`viewBox`))
            ) {
              let e = t.match(/width="([\d\.]+)/),
                r = t.match(/height="([\d\.]+)/);
              e && r && (n = n.replace(`<svg`, `<svg viewBox="0 0 ${e[1]} ${r[1]}"`));
            }
            ((n = n.replace(
              `<svg`,
              `<svg style="width:100%;height:100%;display:block;overflow:visible;" preserveAspectRatio="xMidYMid meet"`
            )),
              g(n));
          })
          .catch((t) => {
            e || console.error(`[SVGScrollAnimator] fetch`, t);
          }),
        () => {
          e = !0;
        }
      );
    }, [n]),
    u(() => {
      if (!m.current || !h) return;
      let e,
        n,
        u = 0,
        g = () => {
          let h = m.current;
          if (!h) return;
          let y = Array.from(
            h.querySelectorAll(`path, circle, rect, polyline, ellipse, polygon, line`)
          ).filter((e) => typeof e.getTotalLength == `function`);
          if (!(y.length > 0 && y.some((e) => e.getTotalLength() > 0))) {
            u++ < 60 && (n = requestAnimationFrame(g));
            return;
          }
          e = Eg.context(() => {
            let e = [];
            (y.forEach((t) => {
              let n = t.getTotalLength();
              if (!n) return;
              (f
                ? t.removeAttribute(`vector-effect`)
                : t.setAttribute(`vector-effect`, `non-scaling-stroke`),
                t.setAttribute(`stroke`, l),
                t.setAttribute(`stroke-width`, String(d)),
                t.setAttribute(`fill`, `transparent`),
                Eg.set(t, { strokeDasharray: n, strokeDashoffset: n }));
              let a = Eg.timeline({
                paused: !0,
                onComplete: () => {
                  s &&
                    Eg.delayedCall(c, () => {
                      v.current && (Eg.set(t, { strokeDashoffset: n }), a.restart());
                    });
                },
              });
              (a.to(t, { strokeDashoffset: 0, duration: r, delay: i, ease: `power2.out` }),
                e.push(a));
            }),
              (_.current = e));
            let n = document.querySelector(`[data-framer-scroll-container]`) || t;
            ($.create({
              trigger: p.current,
              scroller: n,
              start: a,
              once: o && !s,
              onEnter: () => {
                ((v.current = !0), e.forEach((e) => e.play()));
              },
              onEnterBack: () => {
                ((v.current = !0), e.forEach((e) => e.play()));
              },
              onLeave: () => {
                v.current = !1;
              },
              onLeaveBack: () => {
                v.current = !1;
              },
            }),
              $.refresh());
          }, p);
        };
      g();
      let y = () => $.refresh();
      return (
        t.addEventListener(`load`, y),
        () => {
          (n && cancelAnimationFrame(n), t.removeEventListener(`load`, y), e && e.revert());
        }
      );
    }, [h, r, i, a, o, s, c, l, d, f]),
    y(`div`, {
      ref: p,
      style: Ag,
      children: h
        ? y(`div`, {
            ref: m,
            style: { width: `100%`, height: `100%` },
            dangerouslySetInnerHTML: { __html: h },
          })
        : y(`div`, { style: { color: `#999`, fontSize: 12 } }),
    })
  );
}
var Ag,
  jg = e(() => {
    (o(),
      d(),
      s(),
      P(),
      Og(),
      Eg.registerPlugin($),
      le(kg, {
        svgFile: { type: J.File, title: `SVG File`, allowedFileTypes: [`svg`] },
        start: { type: J.String, title: `Start`, defaultValue: `top 80%` },
        delay: { type: J.Number, title: `Delay`, defaultValue: 0, min: 0, max: 10, step: 0.1 },
        duration: {
          type: J.Number,
          title: `Duration`,
          min: 0.1,
          max: 10,
          step: 0.1,
          defaultValue: 1.5,
        },
        once: { type: J.Boolean, title: `Once`, defaultValue: !0 },
        loop: {
          type: J.Boolean,
          title: `Loop`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        loopDelay: {
          type: J.Number,
          title: `Reset Delay`,
          defaultValue: 2,
          min: 0,
          max: 20,
          step: 0.1,
          hidden(e) {
            return e.loop === !1;
          },
        },
        color: { type: J.Color, title: `Stroke`, defaultValue: `#ffffff` },
        strokeWidth: { type: J.Number, title: `Thickness`, defaultValue: 2, min: 0.5, max: 1e3 },
        scaleStroke: {
          type: J.Boolean,
          title: `Scale Stroke`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
      }),
      (Ag = { width: `100%`, height: `100%`, overflow: `visible` }));
  }),
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __ = e(() => {
    (d(),
      P(),
      O(),
      s(),
      it(),
      jg(),
      ke(),
      Be(),
      He(),
      Ve(),
      Qe(),
      Ke(),
      Me(),
      Ce(),
      Pe(),
      Se(),
      Je(),
      Ie(),
      (Mg = j(Ne)),
      (Ng = j(Ge)),
      (Pg = j(Fe)),
      (Fg = ne(E.div, { nodeId: `pbZrih1RM`, override: je, scopeId: `XYq2OWhaQ` })),
      (Ig = N(E.div)),
      (Lg = ne(E.div, { nodeId: `kBqkxBiCd`, override: Ae, scopeId: `XYq2OWhaQ` })),
      (Rg = j(kg)),
      (zg = j(We)),
      (Bg = N(W)),
      (Vg = j(qe)),
      (Hg = j(Ee)),
      (Ug = j(et)),
      (Wg = B(Ue)),
      (Gg = j($e)),
      (Kg = {
        dK7H8sjGC: `(max-width: 809.98px)`,
        ssLAEIxaE: `(min-width: 1200px)`,
        SYic1sA4k: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (qg = `framer-Ub91r`),
      (Jg = {
        dK7H8sjGC: `framer-v-vb5p67`,
        ssLAEIxaE: `framer-v-7f13km`,
        SYic1sA4k: `framer-v-17tolvd`,
      }),
      (Yg = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Xg = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: `tween` }),
      (Zg = {
        opacity: 1,
        rotate: -10,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Qg = (e, t) => `translate(-50%, -50%) ${t}`),
      ($g = {
        effect: { opacity: 0.001, rotate: 0, scale: 0.9, skewX: 0, skewY: 0, x: 40, y: 0 },
        repeat: !1,
        startDelay: 0,
        threshold: 0.5,
        tokenization: `character`,
        transition: { damping: 40, delay: 0.03, mass: 4, stiffness: 400, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (e_ = { damping: 30, delay: 0, mass: 7.3, stiffness: 693, type: `spring` }),
      (t_ = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (n_ = { damping: 30, delay: 0, mass: 3, stiffness: 400, type: `spring` }),
      (r_ = {
        dK7H8sjGC: [
          `.framer-Ub91r.framer-7f13km { gap: 100px; }`,
          `.framer-Ub91r .framer-1smnmk7, [data-layout-template="true"] > #overlay { margin-bottom: -100px; }`,
          `.framer-Ub91r .framer-juqzm { gap: 56px; }`,
          `.framer-Ub91r .framer-1i9p4au { gap: 32px; padding: 0px 16px 0px 16px; }`,
          `.framer-Ub91r .framer-1arg1x { flex-direction: column; gap: 32px; }`,
          `.framer-Ub91r .framer-asrmxz { flex: none; order: 1; width: 100%; }`,
          `.framer-Ub91r .framer-1fl8711 { flex: none; gap: 8px; order: 0; width: 100%; }`,
          `.framer-Ub91r .framer-fbqfrp { height: 700px; overflow: var(--overflow-clip-fallback, clip); will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Ub91r .framer-esbcc0 { left: 16px; right: 16px; top: 16px; width: unset; }`,
        ],
        SYic1sA4k: [
          `.framer-Ub91r.framer-7f13km { gap: 150px; }`,
          `.framer-Ub91r .framer-1smnmk7, [data-layout-template="true"] > #overlay { margin-bottom: -150px; }`,
          `.framer-Ub91r .framer-juqzm { gap: 56px; }`,
          `.framer-Ub91r .framer-1i9p4au { padding: 0px 40px 0px 40px; }`,
          `.framer-Ub91r .framer-1arg1x { gap: 0px 16px; }`,
          `.framer-Ub91r .framer-1fl8711 { gap: 8px; }`,
        ],
      }),
      (i_ = Object.keys(r_)),
      (a_ = { dK7H8sjGC: `.framer-vb5p67-override`, SYic1sA4k: `.framer-17tolvd-override` }),
      (o_ = [
        `.framer-Ub91r.framer-16ys7e3, .framer-Ub91r .framer-16ys7e3 { display: block; }`,
        `.framer-Ub91r.framer-7f13km { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 250px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-b1hv7o-container { flex: none; height: 100%; left: 0px; order: -1000; position: absolute; right: 0px; top: calc(49.9819559725731% - 100% / 2); z-index: 0; }`,
        `.framer-Ub91r .framer-1smnmk7 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -250px; position: relative; width: 0px; }`,
        `.framer-Ub91r .framer-1a8y1ly { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; order: 1002; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 10; }`,
        `.framer-Ub91r .framer-129ezxz-container { flex: none; height: auto; position: relative; width: 100%; z-index: 9; }`,
        `.framer-Ub91r .framer-1f3j184 { background-color: var(--token-0aa568ec-3cf9-436c-a43a-7190c1309ca5, #c6c6c7); flex: none; height: 1px; overflow: visible; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ub91r .framer-juqzm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 150px; height: min-content; justify-content: center; order: 1003; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-1i9p4au { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 150px; height: min-content; justify-content: center; overflow: visible; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-1arg1x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px 24px; height: min-content; justify-content: center; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-asrmxz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ub91r .framer-r2x21 { aspect-ratio: 1 / 1; flex: none; height: auto; max-width: 800px; overflow: visible; position: relative; width: 60%; }`,
        `.framer-Ub91r .framer-rlx4yx { bottom: -24px; flex: none; left: -24px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -24px; top: -24px; }`,
        `.framer-Ub91r .framer-18lov11-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 92%; z-index: 0; }`,
        `.framer-Ub91r .framer-14ljxoe { aspect-ratio: 1.1568627450980393 / 1; flex: none; height: auto; left: 63%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 35%; width: 19%; }`,
        `.framer-Ub91r .framer-1ardh93 { aspect-ratio: 0.44554455445544555 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: auto; left: 19%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 38%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ub91r .framer-1a9g2y { aspect-ratio: 0.44554455445544555 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: auto; left: 81%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 38%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ub91r .framer-1fl8711 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ub91r .framer-7nz22a { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ub91r .framer-1xqu2yd { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ub91r .framer-4s0jc9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-fbqfrp { background-color: var(--token-35988afc-fafd-4260-9962-57ff14cb1fea, #522e29); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; flex: 1 0 0px; height: 90vh; overflow: visible; position: relative; width: 1px; }`,
        `.framer-Ub91r .framer-19jj8vj { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }`,
        `.framer-Ub91r .framer-1eu8vtl-container { bottom: -326px; flex: none; left: -422px; position: absolute; right: -445px; top: -215px; z-index: 0; }`,
        `.framer-Ub91r .framer-1hkwp2h-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }`,
        `.framer-Ub91r .framer-esbcc0 { align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0px -10px 40px 0px rgba(0, 0, 0, 0.1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 100px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: absolute; top: -64px; width: 350px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ub91r .framer-1n3mzrv, .framer-Ub91r .framer-10tih48, .framer-Ub91r .framer-akl5t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ub91r .framer-v9ox4y { background-color: var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, #e2e2e2); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-1dlc9z6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-1k7u3id { border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; flex: none; height: 48px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ub91r .framer-1c04xee-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-Ub91r .framer-1xihdmg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ub91r .framer-1s3tqzb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-1ppqlg2 { --border-bottom-width: 2px; --border-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #005ed9); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ub91r .framer-2q1kpk { background-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #005ed9); bottom: 0px; flex: none; left: 0px; opacity: 0.15; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-Ub91r .framer-pd74tc-container { flex: none; height: 18px; position: relative; width: 18px; }`,
        `.framer-Ub91r .framer-1x9wcay { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ub91r .framer-xso6nc-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Ub91r .framer-187vpa3 { flex: none; height: calc(min(var(--framer-viewport-height, 100vh), 100%) * 1); left: calc(50.00000000000002% - 100% / 2); order: 1004; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-Ub91r .framer-tg9meo-container { bottom: 16px; flex: none; height: auto; position: absolute; right: 16px; width: 150px; z-index: 10; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -250px; }`,
        ...Le,
        ...Ye,
        ...Te,
        `.framer-Ub91r[data-border="true"]::after, .framer-Ub91r [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (s_ = {
        dK7H8sjGC: `(max-width: 809.98px)`,
        ssLAEIxaE: `(min-width: 1200px)`,
        SYic1sA4k: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (c_ = { Desktop: `ssLAEIxaE`, Phone: `dK7H8sjGC`, Tablet: `SYic1sA4k` }),
      (l_ = ({ value: e }) =>
        ue()
          ? null
          : y(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (u_ = { "desktop--active": `yqU47cpyn`, "desktop--inactive": `Kk1gIUTyx` }),
      (d_ = ({
        about: e,
        caseStudy: t,
        height: n,
        home: r,
        id: i,
        journal: a,
        playAround: o,
        services: s,
        showFooter: c,
        width: l,
        ...u
      }) => ({
        ...u,
        AjmUp2YsB: u_[r] ?? r ?? u.AjmUp2YsB ?? `yqU47cpyn`,
        akLm1m7JI: u_[o] ?? o ?? u.akLm1m7JI ?? `Kk1gIUTyx`,
        bYrdEHRK2: u_[e] ?? e ?? u.bYrdEHRK2 ?? `Kk1gIUTyx`,
        eFZYDc7ep: c ?? u.eFZYDc7ep ?? !0,
        ETpuDRXpS: u_[a] ?? a ?? u.ETpuDRXpS ?? `Kk1gIUTyx`,
        srPIqlq49: u_[s] ?? s ?? u.srPIqlq49 ?? `Kk1gIUTyx`,
        T4NqAbFg9: u_[t] ?? t ?? u.T4NqAbFg9 ?? `Kk1gIUTyx`,
        variant: c_[u.variant] ?? u.variant ?? `ssLAEIxaE`,
      })),
      (f_ = {
        alignment: `center`,
        component: $e,
        offset: { x: 0, y: -8 },
        placement: `bottom`,
        variant: `PsKAjAkcv`,
      }),
      (p_ = { component: $e, variant: `CjMjwGjne` }),
      (m_ = h(function (e, t) {
        let n = w(null),
          r = t ?? n,
          a = C(),
          { activeLocale: o, setLocale: s } = U(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            AjmUp2YsB: f,
            bYrdEHRK2: p,
            T4NqAbFg9: m,
            srPIqlq49: h,
            ETpuDRXpS: g,
            akLm1m7JI: _,
            eFZYDc7ep: v,
            children: b,
            ...S
          } = d_(e),
          [T, O] = Y(d, Kg, !1),
          k = te(qg, ze, Ze, xe);
        return (
          R(),
          ae({ "10lja5m": f_, "11fq7c3": p_ }),
          y(ie.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: c_,
              isLayoutTemplate: !0,
              primaryVariantId: `ssLAEIxaE`,
              variantClassNames: Jg,
            },
            children: x(D, {
              id: u ?? a,
              children: [
                y(l_, {
                  value: `:root body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`,
                }),
                x(E.div, {
                  ...S,
                  className: te(k, `framer-7f13km`, l),
                  "data-framer-cursor": `10lja5m`,
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    y(se, {
                      children: y(W, {
                        className: `framer-b1hv7o-container`,
                        "data-code-component-plugin-id": `84d4c1`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `xCXatsBpL`,
                        rendersWithMotion: !0,
                        scopeId: `XYq2OWhaQ`,
                        style: { originY: 0 },
                        children: y(Ne, {
                          background: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                          border: {
                            borderColor: `rgba(242, 242, 242, 0)`,
                            borderStyle: `solid`,
                            borderWidth: 1,
                          },
                          height: `100%`,
                          id: `xCXatsBpL`,
                          layoutId: `xCXatsBpL`,
                          lineColor: `var(--token-eee4728f-06ef-4d99-9d02-ac8944e7f6dd, rgb(226, 226, 226))`,
                          lineSpacing: 100,
                          lineWidth: 1,
                          noise: !1,
                          noiseIntensity: 20,
                          opacity: 1,
                          paperTexture: !1,
                          paperType: `grid`,
                          shadow: !1,
                          style: { height: `100%`, width: `100%` },
                          textureIntensity: 30,
                          textureStyle: `vintage`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    b,
                    y(`div`, { className: `framer-1smnmk7` }),
                    x(E.div, {
                      className: `framer-1a8y1ly`,
                      "data-framer-name": `Header + Line`,
                      children: [
                        y(se, {
                          height: 48,
                          width: `100vw`,
                          y: 0,
                          children: y(W, {
                            className: `framer-129ezxz-container`,
                            nodeId: `XW_hgvYYs`,
                            scopeId: `XYq2OWhaQ`,
                            children: y(ye, {
                              breakpoint: T,
                              overrides: {
                                dK7H8sjGC: { variant: Yg(`YyUvbynv5`) },
                                SYic1sA4k: { variant: Yg(`YyUvbynv5`) },
                              },
                              children: y(Ge, {
                                HbYglppp7: f,
                                height: `100%`,
                                id: `XW_hgvYYs`,
                                irwC6AhLd: g,
                                layoutId: `XW_hgvYYs`,
                                nQZdrLnnV: m,
                                NTJvsdeop: h,
                                style: { width: `100%` },
                                variant: Yg(`NGcJSwgb3`),
                                vGbeqFGq8: _,
                                width: `100%`,
                                WY7dqlcv7: p,
                              }),
                            }),
                          }),
                        }),
                        y(`div`, { className: `framer-1f3j184`, "data-framer-name": `Line` }),
                      ],
                    }),
                    v !== !1 &&
                      x(E.footer, {
                        className: `framer-juqzm`,
                        "data-framer-name": `CTA`,
                        children: [
                          x(`div`, {
                            className: `framer-1i9p4au`,
                            "data-framer-name": `Contain`,
                            children: [
                              x(`div`, {
                                className: `framer-1arg1x`,
                                "data-framer-name": `Heading`,
                                children: [
                                  y(`div`, {
                                    className: `framer-asrmxz`,
                                    "data-framer-name": `Img`,
                                    children: y(Lg, {
                                      className: `framer-r2x21`,
                                      "data-framer-name": `Rotate`,
                                      children: x(Ig, {
                                        __framer__loop: Zg,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `mirror`,
                                        __framer__loopTransition: Xg,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-rlx4yx`,
                                        "data-framer-cursor": `11fq7c3`,
                                        "data-framer-name": `ICON`,
                                        children: [
                                          y(se, {
                                            children: y(W, {
                                              className: `framer-18lov11-container`,
                                              "data-code-component-plugin-id": `84d4c1`,
                                              isAuthoredByUser: !0,
                                              nodeId: `ywU_T3uR_`,
                                              rendersWithMotion: !0,
                                              scopeId: `XYq2OWhaQ`,
                                              style: { rotate: 5 },
                                              transformTemplate: Qg,
                                              children: y(Fe, {
                                                color: `var(--token-5572d352-4df4-4ec3-ad7e-a66a084483f0, rgb(46, 182, 125))`,
                                                height: `100%`,
                                                id: `ywU_T3uR_`,
                                                layoutId: `ywU_T3uR_`,
                                                stroke: !0,
                                                strokeColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                style: { height: `100%`, width: `100%` },
                                                svgCode: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.9995 168.564C29.6713 227.335 -27.3348 170.329 31.4359 100C-27.3348 29.6718 29.6713 -27.3343 99.9995 31.4363C170.314 -27.3343 227.334 29.6718 168.563 100C227.334 170.275 170.314 227.335 99.9995 168.564Z" fill="#3D3D3D"/>
</svg>
`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          x(Fg, {
                                            className: `framer-14ljxoe`,
                                            transformTemplate: Qg,
                                            children: [
                                              y(E.div, {
                                                className: `framer-1ardh93`,
                                                transformTemplate: Qg,
                                              }),
                                              y(E.div, {
                                                className: `framer-1a9g2y`,
                                                transformTemplate: Qg,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  x(`div`, {
                                    className: `framer-1fl8711`,
                                    "data-framer-name": `Text`,
                                    children: [
                                      y(z, {
                                        __fromCanvasComponent: !0,
                                        children: y(i, {
                                          children: y(`h2`, {
                                            className: `framer-styles-preset-k31no2`,
                                            "data-styles-preset": `to1tng0Qo`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                            },
                                            children: `Let's Talk`,
                                          }),
                                        }),
                                        className: `framer-7nz22a`,
                                        effect: $g,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      y(z, {
                                        __fromCanvasComponent: !0,
                                        children: y(i, {
                                          children: y(`p`, {
                                            className: `framer-styles-preset-163ovsm`,
                                            "data-styles-preset": `ptQSvPZIk`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                            },
                                            children: `I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day. `,
                                          }),
                                        }),
                                        className: `framer-1xqu2yd`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              y(`div`, {
                                className: `framer-4s0jc9`,
                                "data-framer-name": `CTA`,
                                children: x(`div`, {
                                  className: `framer-fbqfrp`,
                                  "data-framer-name": `CTA`,
                                  children: [
                                    x(`div`, {
                                      className: `framer-19jj8vj`,
                                      "data-framer-name": `CTA Content`,
                                      children: [
                                        y(se, {
                                          children: y(W, {
                                            className: `framer-1eu8vtl-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `J6_QumNOY`,
                                            rendersWithMotion: !0,
                                            scopeId: `XYq2OWhaQ`,
                                            style: { rotate: -360 },
                                            children: y(kg, {
                                              color: `var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, rgb(254, 161, 37))`,
                                              delay: 0.1,
                                              duration: 2,
                                              height: `100%`,
                                              id: `J6_QumNOY`,
                                              layoutId: `J6_QumNOY`,
                                              loop: !1,
                                              loopDelay: 2,
                                              once: !0,
                                              scaleStroke: !0,
                                              start: `top 65%`,
                                              strokeWidth: 780.5,
                                              style: { height: `100%`, width: `100%` },
                                              svgFile: `../../assets/misc/X7ObdaUoO6Arqb86HTQaaPGFtFM.svg`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        y(_e, {
                                          links: [
                                            {
                                              href: { webPageId: `rsFYOsZlS` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `rsFYOsZlS` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `rsFYOsZlS` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            y(ye, {
                                              breakpoint: T,
                                              overrides: { dK7H8sjGC: { y: 1974 } },
                                              children: y(se, {
                                                height: 128,
                                                y: 1944,
                                                children: y(Bg, {
                                                  __framer__animate: { transition: e_ },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: Zg,
                                                  __framer__styleAppearEffectEnabled: !0,
                                                  __framer__threshold: 0.5,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1hkwp2h-container`,
                                                  nodeId: `KV1fANcVD`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `XYq2OWhaQ`,
                                                  transformTemplate: Qg,
                                                  children: y(ye, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      dK7H8sjGC: {
                                                        kkVzAa99b: !1,
                                                        variant: Yg(`Oyrq_rMAB`),
                                                        Vie4DI4gZ: e[2],
                                                      },
                                                      SYic1sA4k: {
                                                        variant: Yg(`PiwKqOEJV`),
                                                        Vie4DI4gZ: e[1],
                                                      },
                                                    },
                                                    children: y(We, {
                                                      aW6QrgJSD: `Contact`,
                                                      height: `100%`,
                                                      id: `KV1fANcVD`,
                                                      kkVzAa99b: !0,
                                                      layoutId: `KV1fANcVD`,
                                                      variant: Yg(`PXjFj_3GC`),
                                                      Vie4DI4gZ: e[0],
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                    x(Ig, {
                                      __framer__animate: { transition: n_ },
                                      __framer__animateOnce: !0,
                                      __framer__enter: t_,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-esbcc0`,
                                      "data-framer-name": `Comment`,
                                      children: [
                                        y(z, {
                                          __fromCanvasComponent: !0,
                                          children: y(i, {
                                            children: y(`p`, {
                                              className: `framer-styles-preset-163ovsm`,
                                              "data-styles-preset": `ptQSvPZIk`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-94d217a4-b19e-496f-a9f0-41c83f611b07, rgb(118, 119, 119))`,
                                              },
                                              children: `Comment`,
                                            }),
                                          }),
                                          className: `framer-1n3mzrv`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        y(`div`, {
                                          className: `framer-v9ox4y`,
                                          "data-framer-name": `Line`,
                                        }),
                                        x(`div`, {
                                          className: `framer-1dlc9z6`,
                                          "data-framer-name": `Content`,
                                          children: [
                                            y(`div`, {
                                              className: `framer-1k7u3id`,
                                              children: y(ye, {
                                                breakpoint: T,
                                                overrides: { dK7H8sjGC: { y: 1853 } },
                                                children: y(se, {
                                                  height: 48,
                                                  width: `48px`,
                                                  y: 1643,
                                                  children: y(W, {
                                                    className: `framer-1c04xee-container`,
                                                    nodeId: `ycWP9DgcP`,
                                                    scopeId: `XYq2OWhaQ`,
                                                    children: y(qe, {
                                                      height: `100%`,
                                                      id: `ycWP9DgcP`,
                                                      layoutId: `ycWP9DgcP`,
                                                      style: { height: `100%`, width: `100%` },
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            x(`div`, {
                                              className: `framer-1xihdmg`,
                                              "data-framer-name": `Text + Icon`,
                                              children: [
                                                x(`div`, {
                                                  className: `framer-1s3tqzb`,
                                                  "data-framer-name": `Text`,
                                                  children: [
                                                    y(z, {
                                                      __fromCanvasComponent: !0,
                                                      children: y(i, {
                                                        children: y(`p`, {
                                                          className: `framer-styles-preset-163ovsm`,
                                                          "data-styles-preset": `ptQSvPZIk`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                          },
                                                          children: `Bejaman`,
                                                        }),
                                                      }),
                                                      className: `framer-10tih48`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    y(z, {
                                                      __fromCanvasComponent: !0,
                                                      children: y(i, {
                                                        children: y(`p`, {
                                                          className: `framer-styles-preset-163ovsm`,
                                                          "data-styles-preset": `ptQSvPZIk`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                          },
                                                          children: `Open to contract work, full-time roles, and interesting conversations about hard design problems. `,
                                                        }),
                                                      }),
                                                      className: `framer-akl5t`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                x(`div`, {
                                                  className: `framer-1ppqlg2`,
                                                  "data-border": !0,
                                                  "data-framer-name": `React`,
                                                  children: [
                                                    y(`div`, {
                                                      className: `framer-2q1kpk`,
                                                      "data-framer-name": `BG Color`,
                                                    }),
                                                    y(se, {
                                                      children: y(W, {
                                                        className: `framer-pd74tc-container`,
                                                        "data-code-component-plugin-id": `84d4c1`,
                                                        isAuthoredByUser: !0,
                                                        nodeId: `t6YeqkeAP`,
                                                        scopeId: `XYq2OWhaQ`,
                                                        children: y(Fe, {
                                                          color: `var(--token-1892785e-8581-4826-b411-015017430ad3, rgb(54, 197, 240))`,
                                                          height: `100%`,
                                                          id: `t6YeqkeAP`,
                                                          layoutId: `t6YeqkeAP`,
                                                          stroke: !1,
                                                          strokeColor: `rgb(0, 0, 0)`,
                                                          style: { height: `100%`, width: `100%` },
                                                          svgCode: `<svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.287 0H279.807L203.041 101.593H346.847L91.972 355.528L169.695 184.3H26.7266L161.287 0Z" fill="#2F2965"/>
</svg>
`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                    y(z, {
                                                      __fromCanvasComponent: !0,
                                                      children: y(i, {
                                                        children: y(`p`, {
                                                          className: `framer-styles-preset-1833qg6`,
                                                          "data-styles-preset": `jB2nPzqr7`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                                                          },
                                                          children: `1`,
                                                        }),
                                                      }),
                                                      className: `framer-1x9wcay`,
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
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          y(se, {
                            children: y(W, {
                              className: `framer-xso6nc-container`,
                              isAuthoredByUser: !0,
                              nodeId: `TbgdWIbUw`,
                              scopeId: `XYq2OWhaQ`,
                              children: y(Ee, {
                                color: `var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,
                                height: `100%`,
                                id: `TbgdWIbUw`,
                                layoutId: `TbgdWIbUw`,
                                majorStep: 100,
                                speed: 0.2,
                                style: { width: `100%` },
                                subdivisions: 2,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    y(E.div, {
                      className: `framer-187vpa3`,
                      "data-framer-name": `button`,
                      children: y(se, {
                        children: y(W, {
                          className: `framer-tg9meo-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `Qgww4kdT1`,
                          scopeId: `XYq2OWhaQ`,
                          children: y(et, {
                            bottom: {
                              bg: `rgb(255, 255, 255)`,
                              blendTextColor: `rgb(255, 255, 255)`,
                              circleBg: `rgb(255, 255, 255)`,
                              circleSize: 150,
                              font: {
                                fontFamily: `"Geist Mono", "Geist Mono Placeholder", monospace`,
                                fontSize: `13px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `0em`,
                                lineHeight: `1em`,
                              },
                              height: 40,
                              hoverBg: `rgb(227, 227, 227)`,
                              hoverShadow: ``,
                              hoverTextColor: `rgb(0, 0, 0)`,
                              link: `https://huehaus.supply/`,
                              newTab: !0,
                              radius: 10,
                              ringColor1: `rgb(4, 67, 181)`,
                              ringColor2: `rgb(189, 0, 0)`,
                              ringColor3: `rgb(251, 184, 51)`,
                              ringDuration: 2.95,
                              ringEase: `power3.out`,
                              ringLoopDelay: 1,
                              rings: !1,
                              ringStagger: 0.15,
                              ringStartDelay: 0,
                              shadow: `0px 0px 0px 1px rgba(7, 65, 181, 0.2)`,
                              text: `MORE TEMPLATES`,
                              textColor: `rgb(0, 0, 0)`,
                              visible: !1,
                            },
                            gap: 12,
                            height: `100%`,
                            id: `Qgww4kdT1`,
                            layoutId: `Qgww4kdT1`,
                            style: { width: `100%` },
                            top: {
                              bg: `var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,
                              blendTextColor: `rgb(255, 255, 255)`,
                              blinkDuration: 0.5,
                              circleBg: `rgb(255, 255, 255)`,
                              circleSize: 150,
                              font: {
                                fontFamily: `"Geist Mono", "Geist Mono Placeholder", monospace`,
                                fontSize: `13px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `0em`,
                                lineHeight: `1em`,
                              },
                              height: 40,
                              hoverBg: `rgb(0, 0, 0)`,
                              hoverShadow: ``,
                              hoverTextColor: `rgb(255, 255, 255)`,
                              link: `https://buy.polar.sh/polar_cl_9a5vgJf76xch9cThQ1yzFU4r218QMmvCzyUiR0YxC4R`,
                              loopDelay: 2,
                              newTab: !0,
                              radius: 10,
                              ringColor1: `rgb(4, 67, 181)`,
                              ringColor2: `rgb(189, 0, 0)`,
                              ringColor3: `rgb(251, 184, 51)`,
                              ringDuration: 2.95,
                              ringEase: `power3.out`,
                              ringLoopDelay: 1,
                              rings: !0,
                              ringStagger: 0.15,
                              ringStartDelay: 0,
                              shadow: `0px 0.6021873017743928px 2.770061588162207px -1.25px rgba(0, 0, 0, 0.07), 0px 2.288533303243457px 10.527253194919902px -2.5px rgba(0, 0, 0, 0.06), 0px 10px 46px -3.75px rgba(0, 0, 0, 0.03)`,
                              stagger: 0.05,
                              startDelay: 0,
                              text: `BUY NUDGE`,
                              textColor: `var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,
                              visible: !0,
                            },
                            width: `100%`,
                            zIndex: 9999999999,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                y(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (h_ = (e) =>
        e === M.canvas || e === M.export
          ? [
              ...o_,
              ...i_.flatMap((e) => {
                let t = a_[e];
                return r_[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...o_, ...i_.map((e) => `@media ${s_[e]} { ${r_[e].join(` `)} }`)]),
      (g_ = ve(m_, h_, `framer-Ub91r`)),
      (g_.displayName = `Template`),
      (g_.defaultProps = { height: 2771, width: 1200 }),
      le(g_, {
        AjmUp2YsB: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `yqU47cpyn`,
          description: void 0,
          hidden: void 0,
          title: `Home`,
        },
        bYrdEHRK2: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          title: `About`,
        },
        T4NqAbFg9: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          title: `Case Study`,
        },
        srPIqlq49: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          title: `Services`,
        },
        ETpuDRXpS: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          title: `Journal`,
        },
        akLm1m7JI: Wg?.variant && {
          ...Wg.variant,
          defaultValue: `Kk1gIUTyx`,
          description: void 0,
          hidden: void 0,
          title: `Play Around`,
        },
        eFZYDc7ep: { defaultValue: !0, title: `Show-Footer`, type: J.Boolean },
      }),
      F(
        g_,
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
                cssFamilyName: `Geist Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist Mono`,
                url: `https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Mg,
          ...Ng,
          ...Pg,
          ...Rg,
          ...zg,
          ...Vg,
          ...Hg,
          ...Ug,
          ...Gg,
          ...V(Re),
          ...V(Xe),
          ...V(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (g_.loader = {
        load: (e, t) => de([() => L(Ge, {}, t), () => L(We, {}, t), () => L(qe, {}, t)], t),
      }));
  });
function v_({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      AjmUp2YsB: `yqU47cpyn`,
      akLm1m7JI: `Kk1gIUTyx`,
      bYrdEHRK2: `Kk1gIUTyx`,
      eFZYDc7ep: !0,
      ETpuDRXpS: `Kk1gIUTyx`,
      srPIqlq49: `Kk1gIUTyx`,
      T4NqAbFg9: `Kk1gIUTyx`,
    },
    a = { ...i, AjmUp2YsB: `Kk1gIUTyx`, bYrdEHRK2: `yqU47cpyn` },
    o = { ...i, AjmUp2YsB: `Kk1gIUTyx`, T4NqAbFg9: `yqU47cpyn` },
    s = { ...i, AjmUp2YsB: `Kk1gIUTyx`, ETpuDRXpS: `yqU47cpyn` },
    c = { ...i, AjmUp2YsB: `Kk1gIUTyx`, srPIqlq49: `yqU47cpyn` },
    l = { ...i, AjmUp2YsB: `Kk1gIUTyx`, akLm1m7JI: `yqU47cpyn`, eFZYDc7ep: !1 },
    u = { ...i, AjmUp2YsB: `Kk1gIUTyx`, eFZYDc7ep: !1 },
    d =
      {
        EeLSoBNEB: i,
        IMzwiuEeL: i,
        lBEorPn2H: c,
        NFldwpxHM: a,
        Ngf4PP48U: s,
        ooP4yMWDH: { ...i, AjmUp2YsB: `Kk1gIUTyx` },
        OZ8sqXvDF: l,
        rsFYOsZlS: u,
        xZeukHXrK: o,
        Y9ThhD4vW: s,
      }[e] ?? {};
  switch (e) {
    case `IMzwiuEeL`:
    case `NFldwpxHM`:
    case `xZeukHXrK`:
    case `Ngf4PP48U`:
    case `lBEorPn2H`:
    case `OZ8sqXvDF`:
    case `rsFYOsZlS`:
    case `EeLSoBNEB`:
    case `ooP4yMWDH`:
    case `Y9ThhD4vW`:
      return f(g_, { ...d, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function y_(e) {
  switch (e) {
    case `IMzwiuEeL`:
    case `NFldwpxHM`:
    case `xZeukHXrK`:
    case `Ngf4PP48U`:
    case `lBEorPn2H`:
    case `OZ8sqXvDF`:
    case `rsFYOsZlS`:
    case `EeLSoBNEB`:
    case `ooP4yMWDH`:
    case `Y9ThhD4vW`:
      return [
        { hash: `7f13km`, mediaQuery: `(min-width: 1200px)` },
        { hash: `17tolvd`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `vb5p67`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function b_({
  routeId: e,
  pathVariables: a,
  canonicalPathVariables: o,
  localeId: s,
  collectionItemId: c,
  contentLocaleId: d,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let h = C_[e].page.preload();
  (G({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    ce(D_));
  let g = f(ge, {
    children: f(fe, {
      children: f(be, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: a,
        canonicalPathVariables: o,
        routes: C_,
        collectionUtils: T_,
        serverDatabaseClient: E_,
        framerSiteId: D_,
        notFoundPage: re(() => import(`./SitesNotFoundPage.js@1.4.DwPl7NO5.mjs`)),
        isReducedMotion: void 0,
        localeId: s,
        locales: w_,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://nudge-folio.framer.website`,
        EditorBar:
          t === void 0
            ? void 0
            : (() => {
                if (k_) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return re(async () => {
                  t.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: q, useLocaleInfo: U, useRouter: R },
                    react: {
                      createElement: f,
                      Fragment: i,
                      memo: n,
                      useCallback: m,
                      useEffect: u,
                      useRef: w,
                      useState: S,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: l },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: v_,
        loadSnippetsModule: new oe(
          () => import("./pK4rwuoJkYEOzSE4CDxeTGTl0HHtC4_fCDBjk5kiJ7A.dObCGW41.mjs")
        ),
        initialCollectionItemId: c,
        initialContentLocaleIdOverride: d,
      }),
    }),
    value: { routes: {} },
  });
  return (await h, g);
}
function x_() {
  O_ && t.__framer_events.push(arguments);
}
async function S_(e, n) {
  function r(e, n, r = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let i = n?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i
      );
    x_(r ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: i,
      stack: i ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, o, s, c, l, u, d;
    if (e)
      ((d = JSON.parse(n.dataset.framerHydrateV2)),
        (i = d.routeId),
        (o = d.localeId),
        (s = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (i = k(C_, i)));
    else {
      k(C_, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (o = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!i || !o) {
        let e = ee(C_, decodeURIComponent(location.pathname), !0, w_);
        ((i = e.routeId), (o = e.localeId), (c = e.pathVariables));
      }
    }
    let f = b_({
      routeId: i,
      localeId: o,
      contentLocaleId: s,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    t !== void 0 &&
      (async () => {
        let e = C_[i],
          n = w_.find(({ id: e }) => (o ? e === o : e === "default")).code,
          r = d?.collectionItemId ?? null;
        if (r === null && e?.collectionId && T_) {
          let t = await T_[e.collectionId]?.(),
            [i] = Object.values(c);
          t && typeof i == `string` && (r = (await t.getRecordIdBySlug(i, n || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          l = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          t.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: D_,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await A({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: n || null } })
          ));
      })();
    let p = await f;
    e
      ? (I(`framer-rewrite-breakpoints`, () => {
          (he(u), t.__framer_onRewriteBreakpoints?.(u));
        }),
        (k_ ? (e) => e() : a)(() => {
          (H(), me(), b(n, p, { onRecoverableError: r }));
        }))
      : v(n, { onRecoverableError: r }).render(p);
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var C_, w_, T_, E_, D_, O_, k_;
e(() => {
  if (
    (o(),
    P(),
    s(),
    _(),
    g(),
    __(),
    (C_ = {
      IMzwiuEeL: {
        elements: {
          pfkJe6OJA: `pj3`,
          uKdYzdIus: `about`,
          WCxskHMcL: `pj4`,
          XAnADD1fs: `pj2`,
          Ynvfhqqqd: `pj1`,
          Z2sRPWbsf: `ruler`,
        },
        page: re(() => import("./HnCPznE0W0xKFZRGrmXCuc-Y9vzpxdGeyYKUt_EnuOw.DtU_aU64.mjs")),
        path: `/`,
      },
      NFldwpxHM: {
        elements: { dkrKqQyE0: `mainbio`, Jdwi6XhE4: `my-story`, OlJBi42Qf: `work` },
        page: re(() => import("./ghhEsyYxG8eUgj2UtsL7CebRSjTz-oryPG1KtddxVUI.oDRsCbMf.mjs")),
        path: `/about`,
      },
      xZeukHXrK: {
        elements: {},
        page: re(() => import("./dCzIeJ1zOtbadg7gAZ8tOWvZXEVwMIluwXwJJn_9J9A.B7Mzcfs7.mjs")),
        path: `/case-study`,
      },
      Ngf4PP48U: {
        elements: {},
        page: re(() => import("./kd-FW56wd0V9rLE3Y4hhIuVki2CdNPBGmh8S0c1oK20.JFizWWbN.mjs")),
        path: `/blog`,
      },
      lBEorPn2H: {
        elements: { GWPr1Htmz: `service-hero`, Pl41xtLso: `service-1` },
        page: re(() => import("./VIGVWIlQjzb1djAyRJmH49B9oW6pb13oxHnQJngdpOE.CDQdRsqF.mjs")),
        path: `/services`,
      },
      OZ8sqXvDF: {
        elements: {},
        page: re(() => import("./j_-9UOQg2T5Mg7ylaFcQM2FcQs9cI0r7te9LDoin8wY.C1amZGIn.mjs")),
        path: `/play-ground`,
      },
      rsFYOsZlS: {
        elements: {},
        page: re(() => import("./BtP3pvF_fYTo_Pg8rSB-HB_aaFqbK-TxzQyB0k7Exy4.9TbPansf.mjs")),
        path: `/contact`,
      },
      tUzXEhVpS: {
        elements: {},
        page: re(() => import("./NSmPFk0dV_s1yNX8aI2e-WGDcN8w_qAcLDb0lBNydOE.YWtrngMv.mjs")),
        path: `/design-system`,
      },
      EeLSoBNEB: {
        elements: {},
        page: re(() => import("./-aDMgO5ydrAE4XOKXGF_tmJxZpNhiXulVHnOWM96Gr0.J5lyCEgm.mjs")),
        path: `/test/careers`,
      },
      ooP4yMWDH: {
        collectionId: `hu3yniggG`,
        elements: {},
        page: re(() => import("./jFDzg-Fq9D8SbFZq_IRIC-M9TBUP4nfs0oE7GAAyVUI.C4fNYU3y.mjs")),
        path: `/case-study/:KVCXsWDZS`,
      },
      Y9ThhD4vW: {
        collectionId: `D8jD2HbSE`,
        elements: {},
        page: re(() => import("./rhTGDhZWd1nB19TBv5c5i6552VbH9S-D86YvMUa0fKw.CUglT9tk.mjs")),
        path: `/blog/:yWi7i16Vm`,
      },
    }),
    (w_ = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (T_ = {
      D8jD2HbSE: async () =>
        (await import("./wksJXSb2YRpY1f9knadTrCxX2xY97BGz0BYmW14M5Ns.-kut53-J.mjs"))?.utils,
      hu3yniggG: async () =>
        (await import("./XdMhjK1QzX8POnF3oex_whzWly-DvwABXLURzcdk9aI.PMBGtfWi.mjs"))?.utils,
    }),
    (E_ = void 0),
    (D_ = `c133967bd55abf2d101ed16af7e61903934ccd064f255ab0ef7995d15e038995`),
    (O_ = typeof document < `u`),
    (k_ = O_ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(T.userAgent)),
    O_)
  ) {
    ((t.__framer_importFromPackage = (e, t) => () =>
      f(K, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (t.__framer_events = t.__framer_events || []),
      pe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? S_(!0, e) : S_(!1, e);
  }
})();
export { y_ as getLayoutTemplateBreakpoints, b_ as getPageRoot };
//# sourceMappingURL=script_main.BLLh-a7z.mjs.map
