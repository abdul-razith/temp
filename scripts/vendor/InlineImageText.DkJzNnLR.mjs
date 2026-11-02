import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  F as n,
  M as r,
  R as i,
  T as a,
  b as o,
  c as s,
  s as c,
  u as l,
  x as u,
} from "./react.BDb-TZZO.mjs";
import { E as d, t as f } from "./motion.DUnltMVz.mjs";
import { J as p, k as m, o as h } from "./framer.Bi3K3xOo.mjs";
import { l as g, u as _ } from "./shared-lib.DAxb9xg1.mjs";
import { n as v, t as y } from "./ScrollTrigger.BhtCyBpC.mjs";
function ee(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function b(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function x(e, t, n) {
  return (t && b(e.prototype, t), n && b(e, n), e);
}
function S(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? C(Object(n), !0).forEach(function (t) {
          S(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : C(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function T(e, t) {
  return ne(e) || ie(e, t) || ae(e, t) || se();
}
function E(e) {
  return te(e) || re(e) || ae(e) || oe();
}
function te(e) {
  if (Array.isArray(e)) return D(e);
}
function ne(e) {
  if (Array.isArray(e)) return e;
}
function re(e) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) return Array.from(e);
}
function ie(e, t) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o, s = e[Symbol.iterator]();
        !(r = (o = s.next()).done) && (n.push(o.value), !(t && n.length === t));
        r = !0
      );
    } catch (e) {
      ((i = !0), (a = e));
    } finally {
      try {
        r || s.return == null || s.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function ae(e, t) {
  if (e) {
    if (typeof e == `string`) return D(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? D(e, t)
          : void 0
    );
  }
}
function D(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function oe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O(e, t) {
  return Object.getOwnPropertyNames(Object(e)).reduce(function (n, r) {
    var i = Object.getOwnPropertyDescriptor(Object(e), r),
      a = Object.getOwnPropertyDescriptor(Object(t), r);
    return Object.defineProperty(n, r, a || i);
  }, {});
}
function k(e) {
  return typeof e == `string`;
}
function A(e) {
  return Array.isArray(e);
}
function j() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = O(e),
    n;
  return (
    t.types === void 0 ? t.split !== void 0 && (n = t.split) : (n = t.types),
    n !== void 0 &&
      (t.types = (k(n) || A(n) ? String(n) : ``)
        .split(`,`)
        .map(function (e) {
          return String(e).trim();
        })
        .filter(function (e) {
          return /((line)|(word)|(char))/i.test(e);
        })),
    (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(e.position)),
    t
  );
}
function M(e) {
  var t = k(e) || A(e) ? String(e) : ``;
  return { none: !t, lines: /line/i.test(t), words: /word/i.test(t), chars: /char/i.test(t) };
}
function N(e) {
  return typeof e == `object` && !!e;
}
function ce(e) {
  return N(e) && /^(1|3|11)$/.test(e.nodeType);
}
function le(e) {
  return typeof e == `number` && e > -1 && e % 1 == 0;
}
function ue(e) {
  return N(e) && le(e.length);
}
function P(e) {
  return A(e) ? e : e == null ? [] : ue(e) ? Array.prototype.slice.call(e) : [e];
}
function de(e) {
  var t = e;
  return (
    k(e) &&
      (t = /^(#[a-z]\w+)$/.test(e.trim())
        ? document.getElementById(e.trim().slice(1))
        : document.querySelectorAll(e)),
    P(t).reduce(function (e, t) {
      return [].concat(E(e), E(P(t).filter(ce)));
    }, [])
  );
}
function F(e, t, n) {
  if (!N(e)) return (console.warn(`[data.set] owner is not an object`), null);
  var r = e[R] || (e[R] = ++Oe),
    i = z[r] || (z[r] = {});
  return (
    n === void 0
      ? !t || Object.getPrototypeOf(t) !== Object.prototype || (z[r] = w(w({}, i), t))
      : t !== void 0 && (i[t] = n),
    n
  );
}
function I(e, t) {
  var n = N(e) ? e[R] : null,
    r = (n && z[n]) || {};
  return t === void 0 ? r : r[t];
}
function fe(e) {
  var t = e && e[R];
  t && (delete e[t], delete z[t]);
}
function pe() {
  Object.keys(z).forEach(function (e) {
    delete z[e];
  });
}
function me() {
  De(z).forEach(function (e) {
    var t = T(e, 2),
      n = t[0],
      r = t[1],
      i = r.isRoot,
      a = r.isSplit;
    (!i || !a) && ((z[n] = null), delete z[n]);
  });
}
function he(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ` `;
  return (e ? String(e) : ``).trim().replace(/\s+/g, ` `).split(t);
}
function ge(e) {
  return e.split(``);
}
function _e(e) {
  return Ie.test(e);
}
function ve(e) {
  return e.match(Pe) || [];
}
function ye(e) {
  return _e(e) ? ve(e) : ge(e);
}
function be(e) {
  return e == null ? `` : String(e);
}
function xe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ``;
  return ((e = be(e)), e && k(e) && !t && _e(e) ? ye(e) : e.split(t));
}
function L(e, t) {
  var n = document.createElement(e);
  return (
    t &&
      Object.keys(t).forEach(function (e) {
        var r = t[e],
          i = k(r) ? r.trim() : r;
        i !== null &&
          i !== `` &&
          (e === `children` ? n.append.apply(n, E(P(i))) : n.setAttribute(e, i));
      }),
    n
  );
}
function Se(e, t) {
  t = O(Q, t);
  var n = M(t.types),
    r = t.tagName,
    i = e.nodeValue,
    a = document.createDocumentFragment(),
    o = [],
    s = [];
  return (
    /^\s/.test(i) && a.append(` `),
    (o = he(i).reduce(function (e, i, o, c) {
      var l, u;
      return (
        n.chars &&
          (u = xe(i).map(function (e) {
            var n = L(r, {
              class: `${t.splitClass} ${t.charClass}`,
              style: `display: inline-block;`,
              children: e,
            });
            return (F(n, `isChar`, !0), (s = [].concat(E(s), [n])), n);
          })),
        n.words || n.lines
          ? ((l = L(r, {
              class: `${t.wordClass} ${t.splitClass}`,
              style: `display: inline-block; ${n.words && t.absolute ? `position: relative;` : ``}`,
              children: n.chars ? u : i,
            })),
            F(l, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            a.appendChild(l))
          : u.forEach(function (e) {
              a.appendChild(e);
            }),
        o < c.length - 1 && a.append(` `),
        n.words ? e.concat(l) : e
      );
    }, [])),
    /\s$/.test(i) && a.append(` `),
    e.replaceWith(a),
    { words: o, chars: s }
  );
}
function Ce(e, t) {
  var n = e.nodeType,
    r = { words: [], chars: [] };
  if (!/(1|3|11)/.test(n)) return r;
  if (n === 3 && /\S/.test(e.nodeValue)) return Se(e, t);
  var i = P(e.childNodes);
  if (i.length && (F(e, `isSplit`, !0), !I(e).isRoot)) {
    ((e.style.display = `inline-block`), (e.style.position = `relative`));
    var a = e.nextSibling,
      o = e.previousSibling,
      s = e.textContent || ``,
      c = a ? a.textContent : ` `,
      l = o ? o.textContent : ` `;
    F(e, {
      isWordEnd: /\s$/.test(s) || /^\s/.test(c),
      isWordStart: /^\s/.test(s) || /\s$/.test(l),
    });
  }
  return i.reduce(function (e, n) {
    var r = Ce(n, t),
      i = r.words,
      a = r.chars;
    return { words: [].concat(E(e.words), E(i)), chars: [].concat(E(e.chars), E(a)) };
  }, r);
}
function we(e, t, n, r) {
  if (!n.absolute) return { top: t ? e.offsetTop : null };
  var i = e.offsetParent,
    a = T(r, 2),
    o = a[0],
    s = a[1],
    c = 0,
    l = 0;
  if (i && i !== document.body) {
    var u = i.getBoundingClientRect();
    ((c = u.x + o), (l = u.y + s));
  }
  var d = e.getBoundingClientRect(),
    f = d.width,
    p = d.height,
    m = d.x;
  return { width: f, height: p, top: d.y + s - l, left: m + o - c };
}
function Te(e) {
  I(e).isWord
    ? (fe(e), e.replaceWith.apply(e, E(e.childNodes)))
    : P(e.children).forEach(function (e) {
        return Te(e);
      });
}
function Ee(e, n, r) {
  var i = M(n.types),
    a = n.tagName,
    o = e.getElementsByTagName(`*`),
    s = [],
    c = [],
    l = null,
    u,
    d,
    f,
    p = [],
    m = e.parentElement,
    h = e.nextElementSibling,
    g = Le(),
    _ = t.getComputedStyle(e),
    v = _.textAlign,
    y = 0.2 * parseFloat(_.fontSize);
  return (
    n.absolute &&
      ((f = { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth }),
      (d = e.offsetWidth),
      (u = e.offsetHeight),
      F(e, { cssWidth: e.style.width, cssHeight: e.style.height })),
    P(o).forEach(function (t) {
      var a = t.parentElement === e,
        o = we(t, a, n, r),
        u = o.width,
        d = o.height,
        f = o.top,
        p = o.left;
      /^br$/i.test(t.nodeName) ||
        (i.lines && a && ((l === null || f - l >= y) && ((l = f), s.push((c = []))), c.push(t)),
        n.absolute && F(t, { top: f, left: p, width: u, height: d }));
    }),
    m && m.removeChild(e),
    i.lines &&
      ((p = s.map(function (e) {
        var t = L(a, {
          class: `${n.splitClass} ${n.lineClass}`,
          style: `display: block; text-align: ${v}; width: 100%;`,
        });
        F(t, `isLine`, !0);
        var r = { height: 0, top: 1e4 };
        return (
          g.appendChild(t),
          e.forEach(function (e, n, i) {
            var a = I(e),
              o = a.isWordEnd,
              s = a.top,
              c = a.height,
              l = i[n + 1];
            ((r.height = Math.max(r.height, c)),
              (r.top = Math.min(r.top, s)),
              t.appendChild(e),
              o && I(l).isWordStart && t.append(` `));
          }),
          n.absolute && F(t, { height: r.height, top: r.top }),
          t
        );
      })),
      i.words || Te(g),
      e.replaceChildren(g)),
    n.absolute &&
      ((e.style.width = `${e.style.width || d}px`),
      (e.style.height = `${u}px`),
      P(o).forEach(function (e) {
        var t = I(e),
          n = t.isLine,
          r = t.top,
          i = t.left,
          a = t.width,
          o = t.height,
          s = I(e.parentElement),
          c = !n && s.isLine;
        ((e.style.top = `${c ? r - s.top : r}px`),
          (e.style.left = n ? `${f.left}px` : `${i - (c ? f.left : 0)}px`),
          (e.style.height = `${o}px`),
          (e.style.width = n ? `${f.width}px` : `${a}px`),
          (e.style.position = `absolute`));
      })),
    m && (h ? m.insertBefore(e, h) : m.appendChild(e)),
    p
  );
}
var De,
  R,
  z,
  Oe,
  B,
  V,
  H,
  U,
  ke,
  W,
  G,
  Ae,
  K,
  q,
  J,
  Y,
  X,
  Z,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Q,
  Le,
  $,
  Re,
  ze = e(() => {
    (i(),
      (function () {
        function e() {
          for (var e = arguments.length, t = 0; t < e; t++) {
            var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            n.nodeType === 1 || n.nodeType === 11
              ? this.appendChild(n)
              : this.appendChild(document.createTextNode(String(n)));
          }
        }
        function t() {
          for (; this.lastChild; ) this.removeChild(this.lastChild);
          arguments.length && this.append.apply(this, arguments);
        }
        function n() {
          var e = this.parentNode,
            t = [...arguments],
            n = t.length;
          if (e)
            for (n || e.removeChild(this); n--; ) {
              var r = t[n];
              (typeof r == `object`
                ? r.parentNode && r.parentNode.removeChild(r)
                : (r = this.ownerDocument.createTextNode(r)),
                n ? e.insertBefore(this.previousSibling, r) : e.replaceChild(r, this));
            }
        }
        typeof Element < `u` &&
          (Element.prototype.append ||
            ((Element.prototype.append = e), (DocumentFragment.prototype.append = e)),
          Element.prototype.replaceChildren ||
            ((Element.prototype.replaceChildren = t),
            (DocumentFragment.prototype.replaceChildren = t)),
          Element.prototype.replaceWith ||
            ((Element.prototype.replaceWith = n), (DocumentFragment.prototype.replaceWith = n)));
      })(),
      (De = Object.entries),
      (R = `_splittype`),
      (z = {}),
      (Oe = 0),
      (B = `\\ud800-\\udfff`),
      (V = `\\u0300-\\u036f\\ufe20-\\ufe23`),
      (H = `\\u20d0-\\u20f0`),
      (U = `\\ufe0e\\ufe0f`),
      (ke = `[${B}]`),
      (W = `[${V}${H}]`),
      (G = `\\ud83c[\\udffb-\\udfff]`),
      (Ae = `(?:${W}|${G})`),
      (K = `[^${B}]`),
      (q = `(?:\\ud83c[\\udde6-\\uddff]){2}`),
      (J = `[\\ud800-\\udbff][\\udc00-\\udfff]`),
      (Y = `\\u200d`),
      (X = `${Ae}?`),
      (Z = `[${U}]?`),
      (je = `(?:` + Y + `(?:` + [K, q, J].join(`|`) + `)` + Z + X + `)*`),
      (Me = Z + X + je),
      (Ne = `(?:${[`${K}${W}?`, W, q, J, ke].join(`|`)}
)`),
      (Pe = RegExp(`${G}(?=${G})|${Ne}${Me}`, `g`)),
      (Fe = [Y, B, V, H, U]),
      (Ie = RegExp(`[${Fe.join(``)}]`)),
      (Q = {
        splitClass: ``,
        lineClass: `line`,
        wordClass: `word`,
        charClass: `char`,
        types: [`lines`, `words`, `chars`],
        absolute: !1,
        tagName: `div`,
      }),
      (Le = function () {
        return document.createDocumentFragment();
      }),
      ($ = O(Q, {})),
      (Re = (function () {
        x(e, null, [
          {
            key: `clearData`,
            value: function () {
              pe();
            },
          },
          {
            key: `setDefaults`,
            value: function (e) {
              return (($ = O($, j(e))), Q);
            },
          },
          {
            key: `revert`,
            value: function (e) {
              de(e).forEach(function (e) {
                var t = I(e),
                  n = t.isSplit,
                  r = t.html,
                  i = t.cssWidth,
                  a = t.cssHeight;
                n &&
                  ((e.innerHTML = r), (e.style.width = i || ``), (e.style.height = a || ``), fe(e));
              });
            },
          },
          {
            key: `create`,
            value: function (t, n) {
              return new e(t, n);
            },
          },
          {
            key: `data`,
            get: function () {
              return z;
            },
          },
          {
            key: `defaults`,
            get: function () {
              return $;
            },
            set: function (e) {
              $ = O($, j(e));
            },
          },
        ]);
        function e(t, n) {
          (ee(this, e),
            (this.isSplit = !1),
            (this.settings = O($, j(n))),
            (this.elements = de(t)),
            this.split());
        }
        return (
          x(e, [
            {
              key: `split`,
              value: function (e) {
                var n = this;
                (this.revert(),
                  this.elements.forEach(function (e) {
                    F(e, `html`, e.innerHTML);
                  }),
                  (this.lines = []),
                  (this.words = []),
                  (this.chars = []));
                var r = [t.pageXOffset, t.pageYOffset];
                e !== void 0 && (this.settings = O(this.settings, j(e)));
                var i = M(this.settings.types);
                i.none ||
                  (this.elements.forEach(function (e) {
                    F(e, `isRoot`, !0);
                    var t = Ce(e, n.settings),
                      r = t.words,
                      i = t.chars;
                    ((n.words = [].concat(E(n.words), E(r))),
                      (n.chars = [].concat(E(n.chars), E(i))));
                  }),
                  this.elements.forEach(function (e) {
                    if (i.lines || n.settings.absolute) {
                      var t = Ee(e, n.settings, r);
                      n.lines = [].concat(E(n.lines), E(t));
                    }
                  }),
                  (this.isSplit = !0),
                  t.scrollTo(r[0], r[1]),
                  me());
              },
            },
            {
              key: `revert`,
              value: function () {
                ((this.isSplit &&=
                  ((this.lines = null), (this.words = null), (this.chars = null), !1)),
                  e.revert(this.elements));
              },
            },
          ]),
          e
        );
      })()));
  });
function Be(e) {
  let {
      text: i,
      images: a,
      tag: s,
      fontFamily: f,
      fontSize: p,
      lineHeight: m,
      letterSpacing: h,
      color: _,
      align: v,
      gap: ee,
      enableAnimation: b,
      angle: x,
      duration: S,
      delay: C,
    } = e,
    w = u(null),
    T =
      t !== void 0 &&
      (t.location.href.includes(`framer.com`) || t.location.href.includes(`localhost`)),
    E = r(() => i.split(`[]`), [i]),
    te = s,
    ne = r(() => {
      let e = f;
      if (e) {
        if (typeof e == `string`) return e;
        if (typeof e == `object`) return e.family || e.fontFamily;
      }
    }, [f]),
    re = r(() => {
      let e = f;
      if (typeof e == `object` && e.fontWeight) return e.fontWeight;
    }, [f]),
    ie = r(() => E.map(() => Math.random()), [E.length]);
  return (
    o(() => {
      if (!w.current || T) return;
      let e = null,
        n = () => {
          let t = w.current;
          if (!t) return;
          (e?.revert(),
            y.getAll().forEach((e) => {
              e.trigger === t && e.kill();
            }));
          let n = t.querySelector(`h1,h2,h3,h4,h5,h6,p,span`) || t;
          ((t.style.visibility = `hidden`),
            (e = new Re(n, { types: `lines`, lineClass: `gsap-line` })),
            e.lines.forEach((e) => {
              let t = document.createElement(`div`);
              ((t.style.cssText = `overflow:hidden; display:block;`),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e),
                (e.style.display = `block`));
            }),
            g.set(e.lines, { y: `120%` }),
            (t.style.visibility = `visible`),
            y.create({
              trigger: t,
              start: `top 95%`,
              once: !0,
              onEnter: () => {
                g.to(e.lines, {
                  y: `0%`,
                  duration: 0.7,
                  ease: `power3.out`,
                  stagger: 0.06,
                  delay: C || 0,
                });
              },
            }));
        },
        r = g.context(() => {
          document.fonts?.ready ? document.fonts.ready.then(n) : n();
        }, w);
      y.addEventListener(`refreshInit`, n);
      let i,
        a = t.innerWidth,
        o = () => {
          t.innerWidth !== a && ((a = t.innerWidth), clearTimeout(i), (i = setTimeout(n, 200)));
        };
      return (
        t.addEventListener(`resize`, o),
        () => {
          (r.revert(),
            e?.revert(),
            y.removeEventListener(`refreshInit`, n),
            t.removeEventListener(`resize`, o));
        }
      );
    }, [T, C]),
    c(`div`, {
      ref: w,
      style: { width: `100%`, transform: `translateZ(0)` },
      children: c(te, {
        style: {
          fontFamily: ne,
          fontWeight: re,
          fontSize: p,
          lineHeight: m,
          letterSpacing: `${h}em`,
          color: _,
          textAlign: v,
          margin: 0,
          padding: 0,
          display: `block`,
          width: `100%`,
          whiteSpace: `pre-wrap`,
        },
        children: E.map((e, t) => {
          let r = t === E.length - 1 ? null : a?.[t],
            i = ie[t] || 0.5,
            o = i > 0.5 ? [x, -x] : [-x, x],
            s = b
              ? {
                  animate: { rotate: o },
                  transition: {
                    duration: S,
                    repeat: 1 / 0,
                    repeatType: `reverse`,
                    ease: `easeInOut`,
                    delay: S * 0.5 * i,
                  },
                }
              : {};
          return l(
            n,
            {
              children: [
                e,
                r &&
                  c(d.span, {
                    ...s,
                    style: {
                      display: `inline-flex`,
                      alignItems: `center`,
                      height: `1em`,
                      margin: `0 ${ee}em`,
                      verticalAlign: `middle`,
                      transformOrigin: `center`,
                      willChange: `transform`,
                    },
                    children: c(`img`, {
                      src: r,
                      alt: ``,
                      style: {
                        height: `100%`,
                        width: `auto`,
                        display: `block`,
                        objectFit: `contain`,
                      },
                    }),
                  }),
              ],
            },
            t
          );
        }),
      }),
    })
  );
}
var Ve = e(() => {
  (i(),
    s(),
    a(),
    p(),
    f(),
    _(),
    v(),
    ze(),
    g.registerPlugin(y),
    m(Be, {
      text: {
        type: h.String,
        title: `Text`,
        displayTextArea: !0,
        defaultValue: `I design products that feel like they were built for actual humans.`,
      },
      images: { type: h.Array, title: `Images`, control: { type: h.Image } },
      enableAnimation: { type: h.Boolean, title: `Animation`, defaultValue: !0 },
      delay: { type: h.Number, title: `Delay`, defaultValue: 0, min: 0, step: 0.1 },
      angle: {
        type: h.Number,
        title: `Angle`,
        defaultValue: 15,
        hidden: (e) => !e.enableAnimation,
      },
      duration: {
        type: h.Number,
        title: `Duration`,
        defaultValue: 2,
        hidden: (e) => !e.enableAnimation,
      },
      tag: {
        type: h.Enum,
        title: `Tag`,
        options: [`h1`, `h2`, `h3`, `h4`, `h5`, `p`, `span`],
        defaultValue: `h2`,
      },
      fontFamily: { type: h.Font, title: `Font` },
      fontSize: { type: h.Number, title: `Size`, defaultValue: 64 },
      lineHeight: { type: h.Number, title: `Line Height`, defaultValue: 1.1 },
      letterSpacing: { type: h.Number, title: `Letter`, defaultValue: -0.02 },
      align: { type: h.SegmentedEnum, title: `Align`, options: [`left`, `center`, `right`] },
      gap: { type: h.Number, title: `Icon Gap`, defaultValue: 0.15 },
      color: { type: h.Color, title: `Color`, defaultValue: `#000000` },
    }));
});
export { Re as i, Ve as n, ze as r, Be as t };
//# sourceMappingURL=InlineImageText.DkJzNnLR.mjs.map
