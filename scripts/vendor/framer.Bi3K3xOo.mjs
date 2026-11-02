import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as ee,
  v as k,
  w as te,
  x as A,
  y as ne,
  z as j,
} from "./react.BDb-TZZO.mjs";
import {
  A as M,
  B as re,
  C as ie,
  D as N,
  E as P,
  F as ae,
  G as oe,
  H as se,
  I as ce,
  J as le,
  K as ue,
  L as de,
  M as fe,
  N as pe,
  O as me,
  P as he,
  S as ge,
  T as F,
  U as _e,
  V as ve,
  W as ye,
  _ as be,
  a as xe,
  b as I,
  c as Se,
  d as Ce,
  f as we,
  g as Te,
  h as Ee,
  i as De,
  j as Oe,
  k as ke,
  l as Ae,
  m as je,
  n as Me,
  o as Ne,
  p as Pe,
  q as Fe,
  r as Ie,
  s as Le,
  u as Re,
  v as ze,
  w as Be,
  x as Ve,
  y as He,
  z as Ue,
} from "./motion.DUnltMVz.mjs";
function We(e) {
  return typeof e == `function`;
}
function Ge(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function Ke(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !Ke(e);
}
function qe(e) {
  for (let t in e) return !1;
  return !0;
}
function Je(e) {
  return e === void 0;
}
function Ye(e) {
  return e === null;
}
function Xe(e) {
  return e == null;
}
function Ze(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Qe(e) {
  return z(e) && We(e.return);
}
function $e(e) {
  return z(e) && We(e.then);
}
function et(e) {
  return e instanceof Promise;
}
function tt(e) {
  return `url('${nt(e)}')`;
}
function nt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function rt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function it(e, t, n) {
  if (S_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (S_.set(e, t), t))
    .catch((t) => {
      throw (S_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(m_), S_.set(e, r));
}
function at(e, t) {
  h_ && (C_.set(e, t), w_.has(e) && it(e, t, `registered loader ${e}`));
}
function ot() {
  if (!h_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(T_),
      i = r ? e.slice(T_.length) : e;
    if (!i) continue;
    w_.add(i);
    let a = C_.get(i);
    a ? it(i, a, `registered loader ${i}`) : r && it(i, () => import(n), n);
  }
}
function st(e) {
  return typeof e == `object` && !!e && !b(e) && D_ in e;
}
function ct(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function lt(e, t = `default`, n) {
  n && at(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !S_.has(n)) return;
      let e = S_.get(n);
      et(e) ? s(() => e) : (i = ct(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ct(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = T(function (t, r) {
      if (
        (h(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && E_ !== void 0 && E_.add(n), !i)) throw s(e);
      return O(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function ut(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dt(e) {
  return e === null || !(k_ in e) ? !1 : typeof e.equals == `function`;
}
function ft(e, t) {
  return e === t || (e !== e && t !== t);
}
function pt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!ft(e[r], t[r])) return !1;
  return !0;
}
function mt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!bt(e[r], t[r], !0)) return !1;
  return !0;
}
function ht(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!ft(r, t.get(n))) return !1;
  return !0;
}
function gt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!bt(r, t.get(n), !0)) return !1;
  return !0;
}
function _t(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function vt(e, t) {
  let n = O_(e);
  if (n.length !== O_(t).length) return !1;
  for (let r of n)
    if (!ut(t, r) || (!(r === `_owner` && ut(e, `$$typeof`) && e.$$typeof) && !ft(e[r], t[r])))
      return !1;
  return !0;
}
function yt(e, t) {
  let n = O_(e);
  if (n.length !== O_(t).length) return !1;
  for (let r of n)
    if (!ut(t, r) || (!(r === `_owner` && ut(e, `$$typeof`) && e.$$typeof) && !bt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function bt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? mt(e, t) : pt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? gt(e, t) : ht(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return _t(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? dt(e) && dt(t)
        ? e.equals(t)
        : n
          ? yt(e, t)
          : vt(e, t)
      : !1;
}
function xt(e, t, n = !0) {
  try {
    return bt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function St(e) {
  return f.useCallback((t) => e[t], [e]);
}
function Ct({ api: e, children: t }) {
  return O(A_.Provider, { value: e, children: t });
}
function wt() {
  return f.useContext(A_);
}
function Tt({ routes: e, children: t }) {
  let n = St(e),
    r = s(() => ({ getRoute: n }), [n]);
  return O(A_.Provider, { value: r, children: t });
}
function Et() {
  let e = wt(),
    t = S(j_),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return s(() => {
    if (!(!n || !a)) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Dt() {
  let e = Et();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ot(e) {
  let t = Et(),
    n = f.useRef(t);
  xt(n.current, t) || !t || ((n.current = t), e(t));
}
function kt(e) {
  let t = wt();
  if (e) return t.getRoute?.(e);
}
function At(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function jt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Mt(e, t) {
  let n = Et(),
    r = kt(t) ?? n;
  return f.useMemo(() => (r ? At(r, e) : e), [e, r]);
}
function Nt() {
  return Et()?.pathVariables;
}
function B(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function V(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Pt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === K_
  );
}
function Ft(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function It(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Lt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = It(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Rt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function zt(e) {
  return q_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Bt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > W_);
}
function Vt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > U_);
}
function Ht(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Bt(+e);
}
function Ut(e) {
  for (var t = e.length - 1; t >= 0 && !Ht(e[t]); t--);
  return t + 1;
}
function Wt(e) {
  let t = Object.keys(e);
  return ((t.length = Ut(t)), t);
}
function Gt(e) {
  return new Uint8Array(e).toBase64();
}
function Kt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function qt(e) {
  return Buffer.from(e).toString(`base64`);
}
function Jt(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Yt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Xt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Zt(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Qt(e, t, n) {
  return $t(JSON.parse(e), t, n);
}
function $t(e, t, n) {
  let r = Zt(tv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === I_) return r.fromPrimitive(void 0);
    if (e === R_) return r.fromPrimitive(NaN);
    if (e === z_) return r.fromPrimitive(1 / 0);
    if (e === B_) return r.fromPrimitive(-1 / 0);
    if (e === V_) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              if (c[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, c[e], s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Z_(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === H_) {
        let t = c[1];
        if (!Vt(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Bt(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== L_ && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function en(e, t, n) {
  let r = tn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function tn(e, t, n, r) {
  let i = Zt(ev, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return I_;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return R_;
      if (f === 1 / 0) return z_;
      if (f === -1 / 0) return B_;
      if (f === 0 && 1 / f < 0) return V_;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new G_(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new G_(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = nn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new G_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      });
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Lt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Lt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Lt(r)},"${a}"]` : `["RegExp",${Lt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += L_;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + H_ + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += L_));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? nn(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${X_(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Lt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new G_(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new G_(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new G_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(zt(r)), (m += `,${Lt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new G_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(zt(a)),
                (m += `${Lt(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function nn(e) {
  let t = typeof e;
  return t === `string`
    ? Lt(e)
    : e === void 0
      ? I_.toString()
      : e === 0 && 1 / e < 0
        ? V_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function rn(e, t, n = `lazy`) {
  switch ((G.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function an(e) {
  return L(e) && (e === `` || rv.test(e));
}
function on() {
  return { [iv.QueryCache]: new Map(), [iv.CollectionUtilsCache]: new Map() };
}
function sn() {
  if (!h_) return;
  if (av !== void 0) return av;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      av = Qt(e.text) ?? on();
    } catch (e) {
      ((av = on()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      v_(() => {
        (e?.remove(), (e = null));
      }),
      av
    );
  }
}
function cn(e, t) {
  if (
    (console.warn(
      rt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    rn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function ln(e, t) {
  let n = sn();
  return n ? n[e].has(t) : !1;
}
function un(e, t) {
  let n = sn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function dn(e) {
  return e?.id ?? N_;
}
function fn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function pn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (lv.has(n)) return lv.get(n);
    let r = new dv(n, t);
    return (lv.set(n, r), r);
  };
}
function mn({ children: e, collectionUtils: t }) {
  let n = s(() => ({ get: pn(t) }), [t]);
  return O(uv.Provider, { value: n, children: e });
}
function hn() {
  return S(uv);
}
function gn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function _n() {
  return j === void 0 ? void 0 : j;
}
function vn() {
  let e = _n();
  return e ? fv.test(e.platform) : !1;
}
function yn() {
  let e = _n();
  return e
    ? pv.test(e.platform)
      ? !0
      : mv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function bn() {
  return vn() || yn();
}
function xn() {
  let e = _n();
  return e ? hv.test(e.userAgent) : !1;
}
function Sn() {
  let e = _n();
  return e ? gv.test(e.userAgent) && _v.test(e.vendor) && !xn() : !1;
}
function Cn() {
  let e = _n();
  return e ? vv.test(e.userAgent) && yv.test(e.vendor) : !1;
}
function wn() {
  let e = _n();
  return e ? bv.test(e.userAgent) : !1;
}
function Tn() {
  return typeof document == `object`;
}
function En() {
  let e = _n();
  if (!e) return -1;
  let t = xv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Dn() {
  let e = _n();
  return e ? Sv.test(e.userAgent) : !1;
}
function On() {
  return !1;
}
function kn() {
  let e = _n();
  return e && Cv.test(e.userAgent) ? `tablet` : e && wv.test(e.userAgent) ? `phone` : `desktop`;
}
function An() {
  return kn() === `desktop`;
}
function jn(e) {
  return bn() ? e.metaKey : e.ctrlKey;
}
function Mn() {}
async function Nn() {}
function Pn(e) {
  return typeof e == `function` ? e() : e;
}
function Fn(e, t) {
  return Ov[e] > Ov[t];
}
function In() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Ln(e, t) {
  let n = e?.priority,
    r = In();
  return n === `background`
    ? (t?.() ?? gn(1))
    : r?.yield
      ? r.yield(e).catch(Mn)
      : r?.postTask
        ? r.postTask(Mn, e).catch(Mn)
        : t
          ? t()
          : n === `user-blocking`
            ? kv
            : gn(0);
}
function Rn(e, n, r) {
  let i = -1 / 0,
    a,
    o = new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    Tn() && (document.addEventListener(`visibilitychange`, c), t.addEventListener(`pagehide`, s));
  }
  function u(t) {
    return new Promise((r) => {
      (setTimeout(r, Av),
        e(() => {
          Ln(t, n).then(r);
        }));
    });
  }
  function d(e) {
    return Tn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), o.delete(r), t());
            };
          (o.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, t) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (t ?? r === `paint`) ? u(a) : Ln(a, n);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let r = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (i = performance.now()),
          n && e.pendingPaintYieldCount--,
          a === e && e.pendingPaintYieldCount === 0 && (a = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      r.then(
        () => c(!0),
        () => c(!0)
      ),
      r
    );
  }
  function m(e, t) {
    let n = a;
    if (!n) {
      let r = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Tv : Ev),
        s = Tn() && document.hidden ? Dv : o;
      if (r - i < s) return;
      ((n = { pendingPaintYieldCount: 0 }), (a = n));
    }
    let o = e.continueAfter === `paint` && (n.pendingPaintYieldCount > 0 || r?.() !== !1);
    return p(n, e, o);
  }
  function h(e) {
    let { batch: t, batchDuration: r, ...i } = e ?? {};
    return !Tn() && !n ? (t ? void 0 : kv) : t ? m(i, r) : f(i);
  }
  return h;
}
function zn(e, n = !1) {
  let r = ``;
  if (t !== void 0)
    if (n) r = t.location.search;
    else {
      let e = t.history?.state?.queryParamBackAnchorSearch;
      r = e === void 0 ? t.location.search : e === `` ? `` : `?${e}`;
    }
  return r ? Bn(r, e) : e;
}
function Bn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Nv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Vn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Pv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = et(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = et(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = et(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Hn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Un({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Vn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Hn(u.path, t.slug)),
    o && u.path && (u.path = zn(u.path, !0)),
    u
  );
}
async function Wn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Pv)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (L(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Gn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === N_) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Wn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Kn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Gn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Un({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return xt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function qn() {
  return f.useContext(Lv);
}
function Jn() {
  return qn().activeLocale?.code ?? `en-US`;
}
function Yn() {
  let e = hn(),
    { getRoute: t } = wt(),
    { activeLocale: n, locales: r } = qn();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Zn(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Xn(e, t = !0) {
  let n = Yn();
  h(() => {
    if (!(!t || !zv)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Zn(e, t, n = {}) {
  if (!zv || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !st(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Mv({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Qn(n, e, t, r));
    } catch {}
  }
}
async function Qn(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Kn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === N_),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function $n(e, t) {
  return e.replace(Pv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function er() {
  if (Bv) return;
  Bv = !0;
  let e = !1,
    n = () => {
      e = !0;
    };
  (t.addEventListener(`popstate`, n, { once: !0 }),
    queueMicrotask(() => {
      if ((t.removeEventListener(`popstate`, n), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), rn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function tr({ children: e, value: t }) {
  return O(Vv.Provider, { value: t, children: e });
}
function nr() {
  return f.useContext(Vv);
}
function rr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function ir(e) {
  let t = Hv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Uv; ) ((n = e.next(t)), r.push(n.value), (t += Hv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Hv }
  );
}
function ar(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function or(e) {
  let { innerWidth: n, innerHeight: r } = t,
    [i, a] = ar(e.x),
    [o, s] = ar(e.y);
  return { x: a === `px` ? i : (i / 100) * n, y: s === `px` ? o : (o / 100) * r };
}
function sr(e) {
  let [t, n] = ar(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function cr(e) {
  let { x: n, y: r } = or(e);
  return Math.hypot(Math.max(n, t.innerWidth - n), Math.max(r, t.innerHeight - r));
}
function lr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ur(e) {
  return e ? Kv[e] : void 0;
}
function dr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (fr(t)) {
    let { easing: e, duration: n } = ir(
      Oe({ keyframes: [0, 1], ...pr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ur(n?.mask?.type),
    o = lr(n, `start`, e, a),
    s = lr({ ...qv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function fr(e) {
  return e.type === `spring`;
}
function pr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function mr({ exit: e = Yv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Jv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += dr(`exit`, e)),
    (r += dr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function hr() {
  v_(() => {
    He.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Jv);
      e && document.head.removeChild(e);
    });
  });
}
function gr() {
  return !!document.startViewTransition;
}
function _r(e) {
  return new Promise((t) => {
    He.render(() => {
      (performance.mark(`framer-vt-style`), mr(e), t());
    });
  });
}
async function vr(e, t, n) {
  if (!gr()) {
    e();
    return;
  }
  if ((await _r(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Xv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), hr());
      })
      .catch(Xv),
    r
  );
}
function yr() {
  let e = nr(),
    t = A(void 0);
  return (
    h(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = rr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return vr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function br(e, t) {
  v_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function xr(e, t) {
  v_(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Sr(e) {
  v_(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Cr(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await Mv({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function wr(e) {
  let t = A(new Set());
  return (
    Cr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Tr(e) {
  return z(e) && `routeId` in e;
}
function Er(e = t.history.state) {
  return Tr(e) ? e : void 0;
}
function Dr(e) {
  return e?.entryId;
}
function Or(e) {
  $v = e;
}
function kr() {
  return $v;
}
function Ar() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function jr(e, t) {
  return Mr(e, Dr(e) ?? Dr(t));
}
function Mr(e, t = Ar()) {
  return { ...e, entryId: t };
}
function Nr(e, n) {
  (performance.mark(`framer-history-replace`), Or(jr(e, Er())), n && br(n, t.location.href));
  let r =
    !n || n === t.location.href
      ? t.History.prototype.replaceState.bind(t.history)
      : t.history.replaceState.bind(t.history);
  try {
    r($v, ``, n);
  } catch {}
}
function Pr(e) {
  (performance.mark(`framer-history-replace`),
    Or(Mr(e)),
    History.prototype.replaceState.call(t.history, $v, ``, void 0));
}
function Fr(e, n) {
  (performance.mark(`framer-history-push`), Or(Mr(e)), br(n, t.location.href), er());
  try {
    t.history.pushState($v, ``, n);
  } catch {}
}
function Ir({
  disabled: e,
  routeId: n,
  initialPathVariables: i,
  initialLocaleId: a,
  initialContentLocaleId: o,
  initialCanonicalPathVariables: s,
}) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = t.location.hash ? t.location.hash.slice(1) : void 0;
    Nr({
      ...Er(),
      routeId: n,
      hash: r,
      pathVariables: i,
      localeId: a,
      contentLocaleId: o,
      canonicalPathVariables: s,
    });
  }, []);
}
function Lr(e, n, r) {
  let i = yr(),
    a = wr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    c = s ? `manual` : `after-transition`,
    l = A(void 0),
    u = C(() => {
      (l.current?.resolve(), (l.current = void 0));
    }, []),
    d = C(
      async ({ state: e }) => {
        if (!Tr(e)) return;
        let s = a({ popstate: !0 }),
          l = jt();
        (s.promise.finally(l), Dr(kr()) !== (Dr(e) ?? Dr(Er())) && o(), Or(e));
        let {
            routeId: d,
            hash: f,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = L(f) ? f : t.location.hash ? t.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (r(
                d,
                L(m) ? m : void 0,
                _,
                t.location.pathname + t.location.search + t.location.hash,
                z(p) ? p : void 0,
                h,
                g,
                !0,
                s,
                !1
              ),
              !0);
          },
          b = c === `after-transition`;
        (await Promise.resolve(i(n.current, d, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || u();
          }),
          await s.promise,
          b && u(),
          await t.navigation?.transition?.finished.catch(m_),
          Qv(),
          br(t.location.href));
      },
      [n, a, o, u, r, i, c]
    ),
    f = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Tr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                l.current = { resolve: e, reject: t };
              }),
                (l.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  h(
    () => (
      t.addEventListener(`popstate`, d),
      ey && t.navigation.addEventListener(`navigate`, f),
      () => {
        (t.removeEventListener(`popstate`, d),
          ey && t.navigation.removeEventListener(`navigate`, f));
      }
    ),
    [d, f]
  );
}
async function Rr(e, n, r, i) {
  if (!e.path || !n) return !1;
  let a = i + Hn($n(e.path, n), r.slug);
  return (await fetch(a, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((t.location.href = t.location.origin + a), !0)
    : !1;
}
function zr() {
  let e = hn();
  return C((t) => Br({ ...t, collectionUtils: e }), [e]);
}
async function Br({ sitePrefix: e, ...t }) {
  let n = await Un(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!L(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Rr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Vr(e) {
  let n = A(Promise.resolve()),
    r = A(),
    i = C(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, a, o) => {
      if (!ey) {
        o?.();
        return;
      }
      ((n.current = e),
        (r.current = a),
        t.navigation.addEventListener(`navigate`, i),
        o?.(),
        e.finally(() => {
          n.current === e &&
            ((r.current = void 0), t.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Hr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Ur(e) {
  return Hr(e.trim().toLowerCase().replace(ty, `-`));
}
function Wr({ children: e, value: t }) {
  return O(ry.Provider, { value: t, children: e });
}
function Gr() {
  return S(ry);
}
function Kr(e, t) {
  let n = k(() => ({ inputs: t, result: e() }))[0],
    r = A(!0),
    i = A(n),
    a =
      r.current || (t && i.current.inputs && xt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    h(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function qr(e, t) {
  return Kr(() => e, t);
}
function Jr() {
  return t.location.search;
}
function Yr() {
  return ``;
}
function Xr(e) {
  return (
    ay.add(e),
    t.addEventListener(`popstate`, e),
    () => {
      (ay.delete(e), t.removeEventListener(`popstate`, e));
    }
  );
}
function Zr() {
  for (let e of ay) e();
}
function Qr({ children: e, routerRenderKey: n, isNavigationCommitPending: r }) {
  let i = Gr() === `preview`,
    [a, o] = k(``),
    s = A(n);
  iy(() => {
    s.current = n;
  }, [n]);
  let c = l(Xr, Jr, Yr),
    d = ne(c),
    f = n !== ne(n),
    p = i ? a : f ? c : d,
    m = C(
      async (e) => {
        if (i) {
          u(() => {
            o((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let a = r(),
          c = n;
        if ((await Mv({ continueAfter: `paint` }), a || r() || s.current !== c)) return;
        let l = Er();
        if (!l) return;
        let d = new URL(t.location.href),
          f = e(d.searchParams).toString();
        d.search = f;
        let p = l.queryParamBackAnchorSearch,
          m = t.location.search.slice(1),
          h = p === void 0 && f !== m,
          g = p !== void 0 && f === p,
          _ = { ...l, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = d.toString();
        (h || g ? Fr(_, v) : Nr(_, v), Zr());
      },
      [r, i, n]
    ),
    h = Kr(() => ({ urlSearchParams: new URLSearchParams(p), replaceSearchParams: m }), [p, m]);
  return O(oy.Provider, { value: h, children: e });
}
function $r(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ei(e),
    [r, i] = ei(t),
    a = ti(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ei(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ti(e, t) {
  if (e === t || ((e = `/` + ni(e)), (t = `/` + ni(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = ly(e, 1 + s);
    if (n !== ly(t, 1 + s)) break;
    n === cy && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (ly(t, 1 + s) === cy) return dy(t, 1 + s + 1);
      if (s === 0) return dy(t, 1 + s);
    } else r > a && (ly(e, 1 + s) === cy ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || ly(e, s) === cy) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${dy(t, 1 + o)}`;
}
function ni(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = ly(e, o);
    else if (my(a)) break;
    else a = cy;
    if (my(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || ly(t, t.length - 1) !== sy || ly(t, t.length - 2) !== sy) {
            if (t.length > 2) {
              let e = uy(t, py);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = dy(t, 0, e)), (n = t.length - 1 - uy(t, py))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          fy && ((t += t.length > 0 ? `${py}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${py}${dy(e, r + 1, o)}`) : (t = dy(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === sy && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ri(e) {
  if (!e) return ``;
  let n;
  try {
    n = new URL(e);
  } catch {
    return ``;
  }
  return n.pathname === `/` || t.location.origin !== n.origin
    ? ``
    : n.pathname.endsWith(`/`)
      ? n.pathname.slice(0, -1)
      : n.pathname;
}
function ii(e, t) {
  let n = e.replace(Pv, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function ai(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ii(i, r);
  }
  if (e.includes(`:`)) return ii(e, r);
  let i = t.elements?.[e];
  return i ? ii(i, r) : e;
}
function oi(
  e,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m;
  if ((a && e && (m = ai(a, e, s)), u)) return m ?? ``;
  let h = n ?? `/`;
  (r && f && (h = r[f] ?? h), i && (h = h.replace(Pv, (e, t) => String(i[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(Pv, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && n !== void 0 && e?.path !== void 0 && n === e.path && h !== g;
  if (c)
    if (hy.has(h) && t !== void 0) {
      let e = ri(d);
      g = $r(t.location.pathname, e + g);
    } else g = $r(h, g);
  else g = Hn(g, p);
  let y = _ || v;
  return ((l || y) && (g = zn(g, y)), m && (g = `${g}#${m}`), g);
}
function si(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function ci() {
  return `(${si.toString()})("${vy}","${yy}")`;
}
function li(e, t) {
  h(() => {
    let n = e.current;
    if (!n || (n.setAttribute(vy, ``), !n.hasAttribute(yy))) return;
    n.removeAttribute(yy);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function ui() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[gy] = 1), e);
}
function di() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[gy] = 1), e);
}
function fi(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function pi(e) {
  return gy in e && e[gy] === 1;
}
function mi(e) {
  return _y in e.nativeEvent && e.nativeEvent[_y] === 1;
}
function hi(e) {
  let t = A(!1),
    n = A(null),
    r = l(y_, x_, by);
  return (
    h(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = fi(i),
        o = i[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(di()));
        return;
      }
      if (a === `checked`) {
        let e = di();
        ((e[_y] = 1), i.dispatchEvent(e), i.dispatchEvent(di()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(ui());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = ui();
      ((c[_y] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(ui()));
        }));
    }, [r]),
    n
  );
}
function gi() {
  if (!xy) return;
  ((Cy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  xy.forEach((n) => t.addEventListener(n, Sy, e));
}
function _i() {
  return (
    h(() => {
      if (!Cy || !xy) return;
      let e = { capture: !0 },
        t = document.body;
      (xy.forEach((n) => t.removeEventListener(n, Sy, e)),
        (xy = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function vi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function yi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function bi() {
  ((Ty = new wy()), Ty.render.markStart());
}
function xi() {
  (c(() => {
    Ty?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      Ty?.useLayoutEffects.markRouterStart();
    }, []),
    h(() => {
      Ty?.useEffects.markRouterStart();
    }, []));
}
function Si() {
  (c(() => {
    (Ty?.render.markEnd(), Ty?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((Ty?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Ey = !0;
        return;
      }
      He.read(() => {
        (Ty?.browserRendering.requestAnimationFrame.markStart(),
          Ty?.unattributedHydrationOverhead.measure());
      });
    }, []),
    h(() => {
      (Ty?.useEffects.markStart(),
        Ty?.browserRendering.hasStarted ||
          (Ty?.mutationEffects.measure(), Ty?.useEffects.markAreSynchronous()));
    }, []));
}
function Ci() {
  (c(() => {
    Ty?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (Ty?.useLayoutEffects.markEnd(),
        !(Ey || document.visibilityState !== `visible`) &&
          He.read(() => {
            (Ty?.browserRendering.requestAnimationFrame.markEnd(),
              Mv().then(() => {
                Ty?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    h(() => {
      Ty?.useEffects.markEnd();
    }, []));
}
function wi() {
  return (Si(), null);
}
function Ti() {
  return (Ci(), null);
}
function Ei(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : O(e, { ...n });
}
function Di() {
  return Ay;
}
function Oi(e) {
  if (jy?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: ji(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = ji(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    jy = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: jy.pathRoutes,
    paths: jy.paths,
    pathRoutesLocalized: jy.pathRoutesLocalized,
    pathsLocalized: jy.pathsLocalized,
  };
}
function ki(e, t, n = !0, r = Di()) {
  return Ai(e, t, r, n);
}
function Ai(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Oi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Mi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Mi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Mi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Mi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function ji(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Mi(e, t) {
  let n = [],
    r = Ni(t).replace(Pv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Ni(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Pi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Fi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Pi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Ii(e, t) {
  let n = e.toLowerCase(),
    r = Fi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Li(e) {
  if (t === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in t)) return;
  let n = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!n || n.length === 0) return;
  let r = n.find((t) => t.name === e);
  if (r) return { name: r.name, description: r.description };
}
function Ri() {
  let e = Li(`abtests`);
  return new URLSearchParams(e?.description);
}
function zi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Bi(e, t) {
  for (let [n, r] of t) zi(e, n, r);
}
function Vi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Hi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ui(e, n) {
  if (t === void 0) return n;
  let r = n;
  if (n) {
    Hi(e, n);
    let t = e[n]?.abTestingParentId;
    t && (r = t);
  }
  return (Bi(e, Ri()), Vi(e), r);
}
function Wi(e) {
  (h(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Gi(e, ...t) {
  My.has(e) || (My.add(e), console.warn(e, ...t));
}
function Ki(e, t, n) {
  Gi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function qi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Fy in e &&
    e[Fy] instanceof Function &&
    Iy in e &&
    e[Iy] instanceof Function
  );
}
function Ji(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Py(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Yi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Xi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Zi(e) {
  return Math.round(e * 2) / 2;
}
function Qi(e, t) {
  return { x: e, y: t };
}
function $i(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ea(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ta(e) {
  let t = na(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function na(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ra(e, t, n) {
  return (
    (By.rgb_r = e / 255),
    (By.rgb_g = t / 255),
    (By.rgb_b = n / 255),
    By.rgbToHsluv(),
    { h: By.hsluv_h, s: By.hsluv_s, l: By.hsluv_l }
  );
}
function ia(e, t, n, r = 1) {
  return (
    (By.hsluv_h = e),
    (By.hsluv_s = t),
    (By.hsluv_l = n),
    By.hsluvToRgb(),
    { r: By.rgb_r * 255, g: By.rgb_g * 255, b: By.rgb_b * 255, a: r }
  );
}
function aa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function oa(e, t, n) {
  return {
    r: ea(e) ? pa(e, 255) * 255 : 0,
    g: ea(t) ? pa(t, 255) * 255 : 0,
    b: ea(n) ? pa(n, 255) * 255 : 0,
  };
}
function sa(e, t, n, r) {
  let i = [
    ga(Math.round(e).toString(16)),
    ga(Math.round(t).toString(16)),
    ga(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ca(e, t, n) {
  let r,
    i,
    a = pa(e, 255),
    o = pa(t, 255),
    s = pa(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function la(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ua(e, t, n) {
  let r, i, a;
  if (((e = pa(e, 360)), (t = pa(t * 100, 100)), (n = pa(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = la(s, o, e + 1 / 3)), (i = la(s, o, e)), (a = la(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function da(e, t, n) {
  ((e = pa(e, 255)), (t = pa(t, 255)), (n = pa(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function fa(e, t, n) {
  ((e = pa(e, 360) * 6), (t = pa(t * 100, 100)), (n = pa(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function pa(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ma(e) && (e = `100%`);
    let t = ha(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ma(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ha(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ga(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function _a(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Ry[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Vy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Vy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Vy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: ta(r[2] ?? ``), l: ta(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Vy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: ta(r[2] ?? ``),
              l: ta(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Vy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: ta(r[2] ?? ``), v: ta(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Vy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: ta(r[2] ?? ``),
                  v: ta(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Vy.hex8.exec(t))
                ? {
                    r: va(r[1] ?? ``),
                    g: va(r[2] ?? ``),
                    b: va(r[3] ?? ``),
                    a: ya(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Vy.hex6.exec(t))
                  ? {
                      r: va(r[1] ?? ``),
                      g: va(r[2] ?? ``),
                      b: va(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Vy.hex4.exec(t))
                    ? {
                        r: va(`${r[1]}${r[1]}`),
                        g: va(`${r[2]}${r[2]}`),
                        b: va(`${r[3]}${r[3]}`),
                        a: ya(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Vy.hex3.exec(t))
                      ? {
                          r: va(`${r[1]}${r[1]}`),
                          g: va(`${r[2]}${r[2]}`),
                          b: va(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function va(e) {
  return parseInt(e, 16);
}
function ya(e) {
  return va(e) / 255;
}
function ba(e) {
  let t = Hy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function xa(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Sa({ r: e, g: t, b: n, a: r }) {
  return { r: xa(e), g: xa(t), b: xa(n), a: r };
}
function Ca(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function wa({ r: e, g: t, b: n, a: r }) {
  return { r: Ca(e), g: Ca(t), b: Ca(n), a: r };
}
function Ta({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ea(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Da({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ea(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Oa(e) {
  return Ky(Gy(e));
}
function ka(e) {
  return Wy(Uy(e));
}
function Aa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Na({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ja(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Na(e)
              : Pa(e)),
    i
  );
}
function ja(e) {
  let t = _a(e);
  if (t) return t.format === `hsl` ? Pa(t) : t.format === `hsv` ? Ma(t) : Na(t);
}
function Ma(e) {
  let t = fa(e.h, e.s, e.v);
  return { ...ca(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Fa(e.a) };
}
function Na(e) {
  let t = oa(e.r, e.g, e.b);
  return { ...ca(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Fa(e.a) };
}
function Pa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ea(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ea(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = na(e.s)),
    (r = ea(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = na(e.l)),
    (i = ua(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Fa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ia() {
  return G.location.origin === `https://screenshot.framer.invalid`;
}
function La({ children: e }) {
  if (S(ob).top) return O(w, { children: e });
  let t = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = A({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = A(new Set()).current,
    i = A({
      getLayoutId: C(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            B(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = Ra(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: C(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return O(ob.Provider, { value: i, children: e });
}
function Ra(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function za({ enabled: e = !0, ...t }) {
  let n = S(ob),
    r = s(() => ({ ...n, enabled: e }), [e]);
  return O(ob.Provider, { ...t, value: r });
}
function Ba(e) {
  let t = A(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Va(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ha(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return ee(`div`, {
    style: cb,
    children: [
      O(`div`, { className: `text`, style: ub, children: r }),
      i && O(`div`, { className: `text`, style: db, children: i }),
    ],
  });
}
function Ha(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ua() {
  let e = q.current();
  return e === q.canvas || e === q.export;
}
function Wa() {
  let [e] = k(() => Ua());
  return e;
}
function Ga(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ka(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Cb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function qa(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Ja(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < wb) continue;
    let n = qa(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${qa(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ya(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Sb) {
    let n = qa(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Xa(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ya(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ja(n, t, Ka(t.pixelWidth, t.pixelHeight)) };
}
function Za() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: tt(yb.imagePlaceholderSvg),
  };
}
function Qa(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function $a(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function eo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...xb,
    objectPosition: $a(e.positionX, e.positionY),
    objectFit: Qa(e.fit),
  };
}
function to(e) {
  let t = f.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function no({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = yb.useImageSource(e, t, n),
    s = eo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = to(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Xa(e.nodeFixedSize, e, o);
  return O(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function ro({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = yb.useImageElement(e, t, n),
    a = eo(e);
  return (
    f.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    O(`div`, { ref: r, style: { display: `contents`, ...xb } })
  );
}
function io({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = yb.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = eo(t);
      yb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    O(`div`, { ref: r, style: { display: `contents`, ...xb } })
  );
}
function ao({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Zi(e * (t.pixelWidth / 2)),
        s = yb.useImageSource(t, n);
      ((r = {
        ...Tb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: $a(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        q.current() === q.canvas
          ? yb.canRenderOptimizedCanvasImage(yb.useImageSource(t))
            ? O(io, { image: t, ...n })
            : O(ro, { image: t, ...n })
          : O(no, { image: t, avoidAsyncDecoding: q.current() === q.export, ...n });
  let o = a ? Tb : (r ?? { ...Tb, ...Za() });
  return i
    ? O(P.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : O(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function oo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function so(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...xb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), O(P.div, { style: n }))
    : (oo(e, n, !1), O(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function co(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function lo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Db.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Py.get(t, null)), Db.isImageObject(r))) return co(r, e);
}
function uo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function fo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function po(e) {
  return e != null && typeof e != `boolean` && !uo(e);
}
function H(e) {
  return Number.isFinite(e);
}
function mo(e) {
  return (Math.PI / 180) * e;
}
function ho(e) {
  return Je(e) ? !1 : e === 2 || e === 5;
}
function go(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function _o(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return vo(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function vo(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function yo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(_o(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(_o(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function bo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(_o(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(_o(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function xo(e, t, n, r, i) {
  let a = bo(H(e) ? e : Mb, n, r, i),
    o = yo(H(t) ? t : Nb, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function So(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function Co(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function wo(e) {
  return !e._constraints || Co(e) ? !1 : e._constraints.enabled;
}
function To(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function Eo(e) {
  let t = To(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function Do(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!wo(e) || r) return Eo(e);
  let i = Oo(e),
    a = ko(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return jb.toRect(i, o, null, n, null);
}
function Oo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Ab.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: go(c),
      heightType: go(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function ko(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ao() {
  return f.useContext(Pb).parentSize;
}
function jo(e) {
  return typeof e == `object`;
}
function Mo(e) {
  return jo(e) ? e.width : e;
}
function No(e) {
  return jo(e) ? e.height : e;
}
function Po(e, t) {
  return O(Fb, { parentSize: t, children: e });
}
function Fo(e) {
  return Do(e, Ao(), !0);
}
function Io({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Lo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ro(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function zo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Bo(e, t, n = Lb) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Rb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Rb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Rb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Vo() {
  return Ia() ? q.preview : q.current();
}
function Ho(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? X.variable(e) : e === `` ? `""` : e;
}
function Uo(e) {
  return e !== ox && e !== sx;
}
function Wo(e) {
  for (let t in e) if (Uo(t) && e?.[t] === !0) return !0;
  return !1;
}
function Go(e, t, n, r, i) {
  let a = f.useRef(null),
    o = f.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = f.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Wo(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = f.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Wo(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return f.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function Ko(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return qo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Jo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Xo(r);
    default:
      return qo(r);
  }
}
function qo(e) {
  return String(e).length;
}
function Jo(e) {
  let t = 1;
  for (; Yo(t) < e; ) t++;
  return t;
}
function Yo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Xo(e) {
  let t = 0;
  for (let n of hx) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Zo(e, t) {
  return X.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Qo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function $o() {
  return q.current() === q.preview ? kx.value : Ox.value;
}
function es(e) {
  return Hb(e, $o, `framer-lib-combinedCSSRules`);
}
function ts(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function ns(e, t) {
  let n = {};
  return (
    q.current() === q.canvas &&
      ts(n, Ax ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function rs(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function is(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = f.Children.map(t, (e) =>
        f.isValidElement(e) ? f.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function as(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function os(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = S(ob);
  return s(() => {
    if (!u) return e.layoutId;
    let s = t || e.layoutId;
    if (!s && (c || !i || o)) return;
    let d = s || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function ss() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function cs(e) {
  let t = ss();
  h(() => {
    let n = e?.current;
    if (n)
      return (
        Nx?.observeElementWithCallback(e.current, t),
        () => {
          Nx?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ls(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Px)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(us)
    .map(ds);
}
function us(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ds(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(us);
  return t ? ds(t) : e;
}
function fs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = S(jx),
    l = q.current() === q.canvas;
  iy(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && yb.queueMeasureRequest(rs(i), t.current, n(t.current)));
  });
}
function ps(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && yb.queueMeasureRequest(rs(t.id), t, ls(t));
}
function ms(e) {
  e.willChange = `transform`;
  let t = q.current() === q.canvas;
  Lx && t && (e.translateZ = Fx);
}
function hs(e) {
  ((e.willChange = `transform`), gs(e, !0));
}
function gs(e, t) {
  let n = q.current() === q.canvas;
  if (!Lx || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(Ix) || (e.transform = r + Ix) : (e.transform = r.replace(Ix, ``));
}
function _s(e, t, n, r = !0) {
  if (!e) return;
  let i = fb(e.style),
    a = n || i[t],
    o = () => {
      vs(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function vs(e) {
  return L(e) || R(e) || Ye(e);
}
function ys(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function bs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ys(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function xs(e, t) {
  let n = [e, t];
  return Vx.test(e) ? e : bs(1e3, Hx, n, () => Bx.multiplyAlpha(e, t));
}
function Ss(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: xs(e.value, t) }))
  );
}
function Cs(e, t) {
  let n = 0;
  return (
    Ss(e, t).forEach((e) => {
      n ^= zx(e.value) ^ e.position;
    }),
    n
  );
}
function ws(e) {
  return e && Ux.every((t) => t in e);
}
function Ts(e) {
  return e && Wx.every((t) => t in e);
}
function Es({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Yy(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = Py.get(e, null)),
      typeof e == `string` || Yy(e)
        ? (n.background = e)
        : Kx.isLinearGradient(e)
          ? (n.background = Kx.toCSS(e))
          : Jx.isRadialGradient(e)
            ? (n.background = Jx.toCSS(e))
            : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ds(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Os(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ks(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Be(n)
      ? (t.cornerShape = he(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    e._border?.borderWidth || U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    Es(e, t),
    t
  );
}
function As(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof fb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function js(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Xx.has(t)) return `pointer`;
}
function Ms(e) {
  return Ns(e) ? !0 : e.style ? !!Ns(e.style) : !1;
}
function Ns(e) {
  return Zx in e && (e[Zx] === `scroll` || e[Zx] === `auto`);
}
function Ps(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ke(e.minWidth),
    h = ke(e.minHeight),
    g = ke(e.maxWidth),
    _ = ke(e.maxHeight);
  return {
    top: ke(n),
    left: ke(t),
    bottom: ke(r),
    right: ke(i),
    width: ke(a),
    height: ke(o),
    size: ke(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Fs(e) {
  let t = S(jx),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Ps(e),
    s = Fo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: q.current() === q.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !As(e) && !e.__fromCanvasComponent && !Ms(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = ks(e);
  (a === void 0 && !i && (Ds(p) || (c.width = Qx.width), Os(p) || (c.height = Qx.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (wo(o) &&
    s &&
    !Io(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, p, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    Rx.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = Ua();
  return (
    e.positionSticky
      ? (!g || yb.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = yb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Is(e) {
  let t = {};
  for (let n in e)
    (F(n) || mb(n)) && !$x.has(n)
      ? (t[n] = fb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof fb(e)[n] != `boolean` && !e.transition && (t.transition = fb(e)[n]));
  return t;
}
function Ls(e) {
  return `data-framer-name` in e;
}
function Rs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function zs(e) {
  return O(P.div, { layoutId: nS, style: aS, children: e.children });
}
function Bs(e, t) {
  We(e) ? e(t) : Vs(e) && (e.current = t);
}
function Vs(e) {
  return z(e) && `current` in e;
}
function Hs(e) {
  return Vs(e) && e.current !== null;
}
function Us() {
  let e = Ba(() => new Set()),
    t = Ba(() => new Map());
  return Ba(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ws(e) {
  let t = A(null),
    n = Us();
  return Ba(() => (Vs(e) ? n(e) : We(e) ? n(t, e) : n(t)));
}
function Gs(e, t, n) {
  let r = A(),
    i = A();
  (Kr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ks(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new oS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function qs(e, t, n) {
  let r = Ba(() => `${n.rootMargin}`),
    i = S(sS),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Gs(
    e,
    (e) => {
      if (a && e !== null) return Ks(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Js(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  cS(
    e,
    f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Xs(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: lS, rootMargin: s, enabled: i ?? !0 }
  );
}
function Ys(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, G.innerHeight);
}
function Xs({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Ys(t, e) >= r;
}
function Zs() {
  return new Map();
}
function Qs() {
  return Ba(Zs);
}
function $s(e, t = []) {
  let { register: n, deregister: r } = S(mS);
  h(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function ec(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function tc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function nc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function rc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return bS.PushLeft;
    case `left`:
      return bS.PushRight;
    case `bottom`:
      return bS.PushUp;
    case `top`:
      return bS.PushDown;
  }
}
function ic(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return bS.OverlayLeft;
    case `left`:
      return bS.OverlayRight;
    case `bottom`:
      return bS.OverlayUp;
    case `top`:
      return bS.OverlayDown;
  }
}
function ac(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return bS.FlipLeft;
    case `left`:
      return bS.FlipRight;
    case `bottom`:
      return bS.FlipUp;
    case `top`:
      return bS.FlipDown;
  }
}
function oc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return cc(e, t.transition, t.component);
    case `removeOverlay`:
      return lc(e);
    case `add`:
      return uc(e, t.key, t.transition, t.component);
    case `remove`:
      return pc(e);
    case `update`:
      return sc(e, t.key, t.component);
    case `back`:
      return dc(e);
    case `forward`:
      return fc(e);
    default:
      return;
  }
}
function sc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function cc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function lc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function uc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? vc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = gc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = mc(e, t, c),
    p = _c(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function dc(e) {
  let t = { ...e.containers },
    n = pc(e);
  if (n) return ((n.containers = t), n);
}
function fc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = uc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function pc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = hc(e, r, n),
    u = _c(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function mc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function hc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function gc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function _c(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = yc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function vc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function yc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return bc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return bc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return bc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return bc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function bc(e, t, n) {
  let r = {},
    i = {};
  return (
    SS.forEach((e) => {
      ((r[e] = _S[e]), (i[e] = { ...n, from: _S[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${fb(_S)[a]}%` : fb(_S)[a];
        ((fb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function xc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Sc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Cc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : ES;
}
function wc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Tc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Ec(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Dc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Oc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function kc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Ac(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return ES;
}
function jc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Mc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Nc(e) {
  return f.Children.map(e.component, (t) => {
    if (!po(t) || !fo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function Pc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Fc(e, t) {
  let n = ye(),
    r = Ue();
  return O(TS, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Ic(e) {
  return z(e) || We(e);
}
function Lc(e) {
  return !!e && kS in e && e[kS] === !0;
}
function Rc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Ge(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Je(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Ke(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Ke(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && zc(t, e.controls), t);
      }
      case `array`:
        return Ke(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function zc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Je(i) || Lc(r)) continue;
    let a = Rc(r);
    Je(a) || (e[n] = a);
  }
}
function Bc(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Vc(e, t) {
  Ic(e) && zc(Bc(e), t);
}
function Hc(e, t) {
  Object.assign(e, { [AS]: t });
}
function Uc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Vc(e, t), n !== void 0 && Hc(e, n));
}
function Wc(e) {
  return e.propertyControls;
}
function Gc(e) {
  return IS in e;
}
function Kc(e, t) {
  if (!Gc(e)) return;
  let n = Py.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function qc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Jc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Yc(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...qc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Xc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Zc(e, t) {
  (Xc(e, t), Yc(e, t));
}
function Qc(e, t) {
  let n,
    r = (...r) => {
      (G.clearTimeout(n), (n = G.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      G.clearTimeout(n);
    }),
    r
  );
}
function $c(...e) {
  return e.filter(Boolean).join(` `);
}
function el(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = tl(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function tl(e) {
  if (e.startsWith(VS)) return e.substr(HS);
}
function nl(e, t, n) {
  let r = i.map(e, (e) => (b(e) ? o(e, t) : e));
  return n ? r : O(w, { children: r });
}
function rl(e) {
  let t = Ba(() => il(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function il(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = al(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = al(t)));
    },
    r = !1;
  function a(a, s) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (b(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = We(s) ? s(e.props) : s;
          return o(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return O(w, { children: a(e, t) });
  };
  return (
    (s.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function al(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Bs(n, e), Bs(t, e));
  };
}
function ol(e, t, n, r, i, a, o, s) {
  let c = f.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !f.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ul(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = ll([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = ll([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = O(
        WS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = cl(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = O(
          `div`,
          { className: `${GS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    B(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, O(`div`, { className: KS }, `property-overrides-separator`)]
  );
}
function sl(e) {
  return e.split(`-`)[2];
}
function cl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${sl(a)}`);
  }
  return r;
}
function ll(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ul(e, t) {
  for (let n of Object.keys(t)) if (!xt(e[n], t[n], !0)) return !0;
  return !1;
}
function dl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function fl(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(US),
      a = f.useContext(WS)?.variants,
      o = n[eC];
    o && !Tn() && QS.setAll(o, a, t ? n : null, i);
    let s = nC(n);
    return O(e, { ref: r, ...n, ...s });
  });
}
function pl(e) {
  return L(e) || Array.isArray(e);
}
function ml(e) {
  return e in aC;
}
function hl(e, t) {
  let n = Ba(() => ({ values: iC(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of rC) {
          let t = aC[e];
          Je(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function gl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let c = _e(),
    l = Ba(iC),
    d = A(!1),
    f = lC(),
    p = A(null),
    m = C(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? aC : i,
        o = t ? i : aC;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          rC.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? aC[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Te(l[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, c]),
    [g, _] = k(!1),
    v = A(!1),
    y = C(async () => {
      !e || !v.current || (await m(), await f(t ?? 0), y());
    }, [m, f, e, t]),
    b = C(() => {
      v.current || ((v.current = !0), u(() => _(!0)), y());
    }, [y]),
    x = C((e = !0) => {
      (rC.forEach((e) => {
        l[e].stop();
      }),
        rC.forEach((e) => {
          l[e].set(aC[e]);
        }),
        (d.current = !1),
        e && ((v.current = !1), u(() => _(!1))));
    }, []),
    S = e && i,
    w = C(() => {
      document.hidden ? x(!1) : v.current && ((v.current = !1), b());
    }, [b, x]);
  (h(() => {
    if (S)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [S, w]),
    h(() => {
      (S && a) || (S ? b() : x());
    }, [b, x, a, S]),
    h(() => () => x(), [x]));
  let T = A(!1),
    E = C(async () => {
      p.current && (await p.current, !T.current && x());
    }, [x]);
  cS(
    o,
    C(
      (e) => {
        e.isIntersecting ? ((T.current = !0), b()) : ((T.current = !1), E());
      },
      [b, E]
    ),
    { enabled: S && a }
  );
  let D = g || !a;
  return s(() => ({ values: l, style: S && D ? oC : sC }), [S, D]);
}
function _l(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function vl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = f.useRef(null),
    c = _e(),
    l = f.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : _l(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = oe(),
    d = Fe(u, l),
    p = ve(a && s.current === null ? `hidden` : n),
    m = ve(0),
    h = S(sS);
  return (
    Gs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Ks(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            He.update(() => {
              (d.set(l(u.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Ot(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? m : d }, style: o ? { ...oC, visibility: p } : sC }
  );
}
function yl(e) {
  return typeof e == `object` && !!e;
}
function bl(e) {
  if (yl(e)) return e?.transition;
}
function xl(e, t, n, r, i, a) {
  let o = bl(e);
  return Promise.all(
    rC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = yl(e) ? (e?.[s] ?? aC[s]) : aC[s];
          if ((Be(u) && (u = u.get()), !R(u))) return c();
          let d = le.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && G.MotionHandoffAnimation) {
            let e = G.MotionHandoffAnimation(i, s, He);
            e && (f = e);
          }
          a ? l.set(u) : Te(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Sl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = se(),
    g = A({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ba(() => {
      let e = d ?? l;
      if (!z(e)) return { values: iC() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: iC(t) };
    });
  Gs(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = le.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!ml(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, R(t) ? t : aC[e]);
        }
      }
    },
    [f]
  );
  let v = _e();
  Gs(o, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            xl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              xl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    xt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      xl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = c && f;
  return s(() => ({ values: _.values, style: y ? oC : sC }), [y]);
}
function Cl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function wl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Cl(o.current, document.documentElement) - fC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Tl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function El(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Dt();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return M((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Tl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < pC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Dl(e, t, n) {
  let r = wl(e, t),
    i = [...hC],
    a = r[0];
  if (!R(a)) return gC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return gC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Ol(e) {
  return {
    x: e?.x ?? aC.x,
    y: e?.y ?? aC.y,
    scale: e?.scale ?? aC.scale,
    opacity: e?.opacity ?? aC.opacity,
    transformPerspective: e?.transformPerspective ?? aC.transformPerspective,
    rotate: e?.rotate ?? aC.rotate,
    rotateX: e?.rotateX ?? aC.rotateX,
    rotateY: e?.rotateY ?? aC.rotateY,
    skewX: e?.skewX ?? aC.skewX,
    skewY: e?.skewY ?? aC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function kl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return f.useMemo(
    () => ({
      initial: r ?? Ol({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Ol({ opacity: t }),
      exit: i ?? Ol(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Al(e, t) {
  let n = _e(),
    r = kl(e),
    i = e.styleAppearEffectEnabled,
    a = hl(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Dt(),
    l = f.useRef(),
    u = f.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = le.get(t.current);
      l.current = Promise.all(
        rC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? aC[e]);
          let t = o[e] ?? aC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Te(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Js(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    f.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return M((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Dl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = pe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = fb(r)[l];
        d && u(d);
      });
    }, [c, p]),
    El(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ot(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of rC) a.values[e].set(r.initial?.[e] ?? aC[e]);
    }),
    s(() => ({ values: a.values, style: i ? oC : sC }), [i])
  );
}
function jl(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of O_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = be({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), He.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ml(e, t) {
  let n = yC();
  return {
    inputRange: wl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of rC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Nl(e) {
  let t = yC();
  for (let { target: n } of e) for (let e of rC) t[e]?.push(n[e]);
  return t;
}
function Pl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = _e(),
    c = hl(vC(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Dt();
  return (
    r(() => {
      if (!(l || !u))
        return M((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Ml(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of rC)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(pe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Gs(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = Nl(n);
        return M(
          (e, { y: t }) => {
            for (let e of rC)
              (s && e !== `opacity`) ||
                (bC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(pe(t.progress, bC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    jl(c.values, i),
    Ot(() => {
      if (l) return;
      let e = vC(n, s);
      for (let t of rC) c.values[t].set(e?.[t] ?? aC[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? oC : sC }), [t])
  );
}
function Fl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Il(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = tl(n);
    if (r) {
      for (let i of SC)
        if (xC[i]?.has(r)) {
          t[i][r] = fb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = fb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Fl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Fl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Ll(e) {
  return z(e) && TC in e;
}
function Rl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Be(r) || !ml(n) || (R(r.get()) && t[n].push(r));
  }
}
function zl(e) {
  return L(e) || Array.isArray(e);
}
function Bl({ componentIdentifier: e, children: t }) {
  return t(S(DC)[e] ?? {});
}
function Vl() {
  return f.useContext(OC);
}
function Hl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Ul() {
  if (t === void 0 || PC)
    return O(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw IC;
}
function Wl({ children: e }) {
  return S(RC) ? O(w, { children: e }) : O(y, { fallback: LC, children: e });
}
function Gl() {
  return O(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Kl(e, t) {
  if (!h_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  rn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function ql(...e) {
  console.error(...e);
}
function Jl() {
  return q.current() !== q.canvas;
}
function Yl({ getErrorMessage: e, fallback: t, children: n }) {
  return Jl()
    ? O(Xl, { fallback: t, children: O(BC, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Xl({ children: e, fallback: n = zC }) {
  return t === void 0 ? O(y, { fallback: n, children: e }) : O(Wl, { children: e });
}
function Zl() {
  return f.useContext(HC);
}
function Ql() {
  let e = Zl();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function $l({ children: e, scopeId: t, nodeId: n }) {
  let r = Zl(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return O(HC.Provider, { value: i, children: e });
}
function eu(e, t) {
  return `${UC}${e}:${t}`;
}
function tu(e, t) {
  return ru(`component`, e, t);
}
function nu(e, t) {
  return ru(`override`, e, t);
}
function ru(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${eu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function iu(e, t, n, r, i, a) {
  let o = ou(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function au(e, t, n, r) {
  return ou(e, t, n, r);
}
function ou(e, t, n, r) {
  return !!(Je(n) || (n === 1 && r && e === t));
}
function su(e, t, n, r, i, a) {
  let o = Zl();
  if (Je(t) || Je(n)) return O(VC, { children: e });
  let { disableCustomCode: s } = MC();
  return s && r
    ? O(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (iu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = O(Yl, { getErrorMessage: tu.bind(null, t, n), fallback: null, children: e })),
      i && (e = O($l, { scopeId: t, nodeId: n, children: e })),
      e);
}
function cu() {
  if (KC !== void 0 || t === void 0) return;
  let e = G.matchMedia(`(any-hover: hover)`);
  ((KC = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== KC) {
        KC = t;
        for (let e of qC) e();
      }
    }));
}
function lu() {
  return (cu(), uu());
}
function uu() {
  return KC ?? !1;
}
function du(e) {
  return (
    qC.add(e),
    cu(),
    () => {
      qC.delete(e);
    }
  );
}
function fu(e = !1) {
  let [t, n] = k(e);
  return (
    iy(function () {
      function e(e = !0) {
        let t = uu();
        e ? u(() => n(t)) : n(t);
      }
      let t = du(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function pu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function mu(e) {
  return !(!e || e.placement || e.alignment);
}
function hu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function gu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${hu(t)}, -100%`;
    case `right`:
      return `0%, ${hu(t)}`;
    case `bottom`:
      return `${hu(t)}, 0%`;
    case `left`:
      return `-100%, ${hu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function _u(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(ew)) {
      let e = n.getAttribute(ew);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function vu(e) {
  let { registerCursors: t } = S(JC),
    n = Ba(() => e),
    i = te();
  r(() => t(n, i), [t, i]);
}
function yu(e) {
  return !!(e && typeof e == `object` && nw in e);
}
function bu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function xu() {
  return q.current() === q.canvas;
}
function Su(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Cu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function wu(e, t, n, r) {
  if (L(e)) {
    let i = Su(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = ki(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Tu(e) {
  return L(e) && e.startsWith(`data:${lw}`);
}
function Eu(e) {
  if (Tu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(lw.length),
        r = t.searchParams,
        i = r.has(aw) ? r.get(aw) : void 0,
        a,
        o = r.get(ow),
        s = r.get(sw),
        c = r.get(cw);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Du(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Eu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Ou(e) {
  if (!Tu(e)) return e;
  let t = Eu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: ku(i) };
}
function ku(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Au({ children: e }) {
  return O(uw.Provider, { value: void 0, children: e });
}
function ju(e, t, n, r, a, o) {
  let c = S(uw),
    l = Ql(),
    u = s(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    d = wt(),
    f = Et(),
    { locales: p } = qn(),
    m = s(() => {
      let e = yu(r) ? r : Ou(r);
      if (e) return wu(e, d, f, p);
    }, [f, r, d, p]),
    h = !!(!xu() && c?.nodeId && u.nodeId),
    g = C(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), jn(e))) {
            Pu(a.href, ``, `_blank`);
            return;
          }
          m ? a.navigate?.() : Pu(a.href, a.rel, a.target);
        }
      },
      [a, m]
    ),
    _ = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Pu(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : Pu(a.href, a.rel, a.target));
      },
      [a, m]
    );
  Gs(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (i.forEach(e, (e) => {
        Nu(e) &&
          (B(
            Mu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            Mu(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          iw.collectNestedLink(c, u));
      }),
      (b = i.map(e, (e) => {
        if (!Nu(e)) return e;
        let t = Fu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: _,
            onKeyDown: y,
            as: r.as && Fu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return v(t, { ...i, ref: a }, n);
      }))),
    O(uw.Provider, { value: u, children: b })
  );
}
function Mu(e) {
  return !Je(e?.nodeId);
}
function Nu(e) {
  return b(e) && (Fu(e.type) !== e.type || Fu(e.props.as) !== e.props.as);
}
function Pu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Fu(e) {
  return e === `a` ? `span` : ie(e) && ae(e) === `a` ? P.span : e;
}
function Iu(e) {
  e &&
    He.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      He.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(dw, r)),
          i && t.forEach((e) => e.style.setProperty(fw, i)));
      });
    });
}
function Lu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${dw});
    background-color: var(${fw}, highlight);
}`,
  ];
}
function Ru({ triggerId: e, children: t }) {
  return (
    f.useLayoutEffect(() => {
      e && Iu(e);
    }, [e]),
    t
  );
}
function zu(e) {
  return `${e?.x}-${e?.y}`;
}
function Bu(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      V(e);
  }
}
function Vu(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function Hu(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      V(e);
  }
}
function Uu(e, t, n, r) {
  switch (Hu(t, e, r)) {
    case `x`:
      return { placement: Bu(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: Bu(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function Wu(e, t, n, r, i, a, o) {
  let s = J.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = Uu(c, n, i, a),
    f = J.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: Vu(f.x + l, t.width, a.width, o),
      y: Vu(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function Gu(e, t, n) {
  return mw.containsPoint([t, ...n], e) ? t : e;
}
function Ku(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + hw), e.x + e.width - hw),
    constrainY: (t) => Math.min(Math.max(t, e.y + hw), e.y + e.height - hw),
  };
}
function qu({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = J.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - gw), y: t };
      return [n, Gu(l, s, [n, c]), Gu(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + gw), y: t };
      return [n, Gu(s, l, [n, o]), Gu(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - gw) };
      return [n, Gu(s, o, [n, l]), Gu(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + gw) };
      return [n, Gu(o, s, [n, c]), Gu(c, l, [n, o])];
    }
    default:
      V(n);
  }
}
function Ju(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      V(e);
  }
}
function Yu(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = J.merge(r, i),
    c = qu({ x: e, y: t }, n, i, Ku(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: Ju(n, J.delta(r, i)),
  };
}
function Xu(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      V(e);
  }
}
function Zu(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: Xu(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: Xu(t) };
    case `bottom`:
      return { originX: Xu(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: Xu(t) };
    default:
      V(e);
  }
}
function Qu(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t; ) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function $u(e) {
  return (He.read(e, !0), () => ze(e));
}
function ed(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, Yu(t, n, a, r, i)));
  };
}
function td(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function nd(e, t, n, { safeArea: r, onDismiss: i }) {
  let a = Ba(() => new Set()),
    o = f.useContext(_w),
    [s, c] = se();
  return (
    f.useEffect(() => {
      if (s) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), o.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), o.delete(t.current), c());
      }
    }, [s, c, t, o]),
    f.useEffect(() => {
      if (!r) {
        let e = (e) => {
          e.key === `Escape` && i();
        };
        return (G.addEventListener(`keyup`, e), () => G.removeEventListener(`keyup`, e));
      }
      let o;
      function s() {
        if (!(!o || a.size !== 0)) {
          for (let r of document.elementsFromPoint(o.x, o.y))
            if (r === e.current || r === t.current || r === n.current) return;
          i();
        }
      }
      function c(e) {
        ((o = e), He.read(s));
      }
      return (
        G.addEventListener(`mousemove`, c),
        () => {
          (G.removeEventListener(`mousemove`, c), ze(s));
        }
      );
    }, [i, r, e, n, t]),
    a
  );
}
function rd({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => Wu(a, o, e, t, n, r, i);
}
function id(e, t) {
  return Ba(() => {
    let { originX: n, originY: r } = Zu(e, t),
      i = { x: N(n), y: N(r) };
    return [
      i,
      (e) => {
        let n = Zu(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function ad(e, { x: t, y: n }) {
  if (!e || !po(e) || !fo(e) || (!z(e.props.style) && !Je(e.props.style))) return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return f.cloneElement(e, { style: r });
}
function od(e, t) {
  if (t || Je(e)) {
    let e = document.querySelector(`#${yw}`) ?? document.querySelector(`#${vw}`);
    if (e) return e;
  }
  return (L(e) ? document.querySelector(e) : void 0) || document.body;
}
function sd({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: r,
  offsetY: i,
  anchorRef: a,
  className: o,
  children: s,
  portalSelector: c,
  zIndex: l,
  collisionDetection: u = !1,
  collisionDetectionPadding: d,
  onDismiss: p,
  ...m
}) {
  let h = f.useRef(null),
    g = f.useRef(null),
    _ = f.useRef(null),
    [v, y] = id(t, e);
  f.useLayoutEffect(() => {
    if (!Hs(a) || !_.current || !t || !e) return;
    let o = { x: r ?? 0, y: i ?? 0 },
      s,
      c = !1,
      l = !1,
      f,
      p,
      m,
      v,
      b,
      x = 0,
      S = 0,
      C = Qu(a),
      w = C.position,
      T = _.current.getBoundingClientRect(),
      E = rd({
        placement: t,
        alignment: e,
        offset: o,
        collisionDetectionSize: u ? { width: G.innerWidth, height: G.innerHeight } : void 0,
        collisionDetectionPadding: d,
      }),
      D = () => {
        c || (td(h, w, m, x, S), n && b(f, m, p, v), (v = void 0));
      },
      O = () => {
        ((b = ed(g)), v ? D() : td(h, w, m, x, S), (l = !0));
      },
      ee = () => {
        c || y(p);
      },
      k = () => {
        if (!E || c) return;
        (w === `fixed` ? ((x = 0), (S = 0)) : ((x = G.scrollX), (S = G.scrollY)),
          (f = a.current.getBoundingClientRect()));
        let e = E(f, T);
        ((p = e[0]), (m = e[1]));
      };
    if ((k(), ee(), O(), C.scrolls && (s = $u(k)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let te = (e) => {
        ((v = e), l && (He.read(k, !1, !0), He.update(ee, !1, !0), He.render(D, !1, !0)));
      },
      A = a.current;
    return (
      A.addEventListener(`mousemove`, te),
      () => {
        (A.removeEventListener(`mousemove`, te), s?.(), (c = !0));
      }
    );
  }, [n, t, e, r, i, a, u, d, y]);
  let b = nd(a, h, g, { safeArea: n, onDismiss: p }),
    C = S(jx);
  return x.createPortal(
    ee(P.div, {
      ref: h,
      className: o,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: l,
      },
      ...m,
      children: [
        n
          ? O(`div`, { ref: g, style: { position: `absolute` }, "data-safearea": !0 })
          : O(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: p }),
        O(_w.Provider, {
          value: b,
          children: O(Au, {
            children: O(pw, {
              triggerId: a.current?.id ?? void 0,
              children: O(`div`, { ref: _, children: ad(s, v) }),
            }),
          }),
        }),
      ],
    }),
    od(c, C)
  );
}
function cd({ component: e, props: t }) {
  let n = S(US),
    r = v(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return O(JS, { overrides: o, breakpoint: i, children: r });
}
function ld(e) {
  xw = e;
}
function ud() {
  return xw;
}
function dd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : dd(e.parentElement, t)
      : null;
}
function fd({ children: e }) {
  return O(Wl, { children: e });
}
function pd(e) {
  return T(function (t, n) {
    return O(fd, { children: O(e, { ...t, ref: n }) });
  });
}
function md(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return gd(e, t, o, s, a, c, l, i, r);
}
function hd(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Su(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = ki(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function gd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = oi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function _d() {
  let e = S(Cw),
    t = Et()?.pathVariables;
  return e || t;
}
function vd(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Sw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function yd() {
  return !!Li(`ss-only-routes`);
}
function bd(e) {
  if (t === void 0) return;
  let n = t.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  return ((r.hash = ``), r);
}
function xd(e) {
  return Ii(`rewrite`, e)?.description === `external`;
}
function Sd() {
  if (!MC().checkServerSideRouter) return !1;
  if (Dw === void 0) {
    let e = yd();
    ((Ow = !e && Cn() && En() < 16.4), (Dw = e || Ow));
  }
  return Dw;
}
function Cd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: xd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === ud() ? `client` : `server` };
}
async function wd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (Ow &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((Ow = !1), Ii(`ss-only-routes`, t.headers.get(`server-timing`)) || (Dw = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Cd(t, e);
}
function Td(e, t) {
  ww.has(e) && ww.set(e, t);
}
async function Ed(e) {
  await gn(Tw);
  try {
    Td(e, await wd(e));
  } catch {
    ww.delete(e);
  }
}
async function Dd(e) {
  try {
    let t = await wd(e);
    return (Td(e, t), t);
  } catch {
    return (Ed(e), { decision: `server` });
  }
}
function Od(e) {
  if (!Sd()) return;
  let n = bd(e);
  if (!n || n.origin !== t.location.origin) return;
  let r = n.href;
  ww.has(r) || ww.set(r, Dd(r));
}
function kd(e) {
  let t = bd(e);
  if (!t) return;
  let n = ww.get(t.href);
  return n && !et(n) ? n : void 0;
}
async function Ad(e) {
  let t = bd(e);
  if (!t) return;
  let n = ww.get(t.href);
  if (n) return et(n) ? Promise.race([n, gn(Ew).then(() => void 0)]) : n;
}
function jd() {
  let e = j.connection || j.mozConnection || j.webkitConnection || {},
    t = j.deviceMemory && j.deviceMemory > jw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Mw : Nw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: Aw }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Od(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = Iw.get(n);
    if (!a?.size || Fw.has(n)) return;
    (++s, Fw.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), Pw.delete(t));
    for (let e of a) (o.unobserve(e), Pw.delete(e));
    (a.clear(), Iw.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = Pw.get(e);
      if (!n || Fw.has(n.id)) {
        (o.unobserve(e), Pw.delete(e));
        continue;
      }
      let r = n.id,
        a = Iw.get(r),
        l = Iw.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : Iw.set(r, new Set([e])), setTimeout(() => c(n, e), kw));
      } else (a && a.delete(e), l <= 1 && Iw.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!Fw.has(n))
      return (
        Pw.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (Pw.delete(e), o.unobserve(e));
        }
      );
  };
}
function Md(e, t) {
  let n = Su(e),
    r = {
      href: e === `` || Cu(e, n) ? e : `https://${e}`,
      target: Nd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = zn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Nd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Pd(e, t) {
  console.warn(
    rt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Fd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Pd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return et(i) ? i.catch(Pd) : i;
  } catch (e) {
    Pd(e);
  }
}
async function Id(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      B(a, `unresolvedSlug should be defined`);
      let o = Fd(a, r, n),
        s = et(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Ld(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Fd(o, r, n);
      et(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Rd() {
  let e = hn();
  return C((t, n, r, i = []) => Ld(t, n, r, e, i), [e]);
}
function zd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = hn();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = yu(r) ? r : Ou(r);
      if (!yu(c))
        return rn(
          `published_site_click`,
          {
            ...s,
            href: o ? Bd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (et(n) ? await n : n) ?? null;
        }
      }
      return rn(
        `published_site_click`,
        {
          ...s,
          href: o ? Bd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Bd(e) {
  try {
    let t = new URL(e, G.document.baseURI);
    return t.origin === G.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Vd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Hd(e, t, n) {
  return async (r) => {
    let i = jn(r),
      a = dd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Mv({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Ud(e, t, n) {
  return async (r) => {
    let i = await Wd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    Gd(t ?? e, r, i.redirectUrl);
  };
}
async function Wd(e) {
  return !e || !Sd()
    ? { decision: `client` }
    : kd(e) || (Od(e), (await Ad(e)) ?? { decision: `server` });
}
async function Gd(e, n, r) {
  (await Mv({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    n?.(),
    t.location.assign(Kd(e, r)));
}
function Kd(e, n) {
  if (!n) return e;
  try {
    let r = new URL(e, t.location.href),
      i = new URL(n);
    return (r.hash && !i.hash && (i.hash = r.hash), i.href);
  } catch {
    return n;
  }
}
function qd(e) {
  let n = ri(e);
  if (n && t.location.pathname === n) {
    let e = new URL(t.location.href);
    return ((e.pathname = `${n}/`), e.href);
  }
  return t.location.href;
}
function Jd(e, n, r) {
  if (n || t === void 0) return;
  let i = qd(r),
    a;
  try {
    a = new URL(e, i);
  } catch {
    return;
  }
  let o = new URL(i);
  if (a.origin === o.origin && !(a.pathname === o.pathname && a.search === o.search)) return a.href;
}
function Yd(e, t, n, r, i, a, o, s) {
  if (!n) return Md(e, r);
  let c = hd(t, e, s, o);
  if (!c) return Md(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Md(e, r);
  let m = oi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !g_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Nd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = Jd(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = Ud(m, _, (e) =>
      Vd(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: Hd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && vd(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function Xd(e, t, n) {
  let r = Zd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (We(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (We(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Zd(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !qe(n),
    i = t && !qe(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Qd(e, t, n) {
  if (!(t && yn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: $d } : { ...i, onTap: r }) : e;
}
function $d(e) {
  let t = dd(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function ef(e, t, n, r, i, a) {
  let o = yu(e) ? e : Ou(e);
  if (!yu(o)) return L(e) ? Md(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (et(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return oi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function tf() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l; ) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function nf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, tf(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: zw, difficulty: Bw, tokenLength: Vw, maxTime: Hw }));
  });
}
function rf(e) {
  let t = new Set();
  for (let n of e.elements)
    !af(n) || n.disabled || !n.name || n.name.startsWith(Uw) || t.add(n.name);
  return Array.from(t);
}
function af(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function of(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function sf(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function cf() {
  let e = f.useContext(nT),
    t = f.useMemo(
      () =>
        Gw.map((e) => ({
          inputRef: f.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: f.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${Uw}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: f.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [qw.name]: e.originalName,
                [qw.value]: o,
                [qw.setAttribute]: e.methodsUsed.setAttribute,
                [qw.valueProperty]: e.methodsUsed.valueProperty,
                [qw.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [qw.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [qw.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${Uw}_${Jw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${Uw}_${Jw.fieldCount}`, r.toString()),
          n.append(`${Uw}_${Jw.fieldFilledCount}`, i.toString()),
          n.append(`${Uw}_${Jw.hpVersion}`, Ww),
          n.append(`${Uw}_${Jw.siteId}`, e || ``),
          n.append(`${Uw}_${Jw.timeToSubmissionSinceModuleLoad}`, Yw()));
      },
      [t, e]
    ),
  };
}
function lf({ states: e }) {
  return O(w, { children: e.map((e) => O(Xw, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function uf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          df(e, t, n);
        })
      : df(e.pageviewEventData.current, t, n));
}
function df(e, t, n) {
  return rn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function ff({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? tT : eT;
    case `incomplete`:
      return e === `error` ? tT : $w;
    case `submit`:
      return Zw;
    case `success`:
      return Qw;
    case `error`:
      return tT;
    default:
      V(t);
  }
}
function pf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function mf(e) {
  e.preventDefault();
}
function hf(e, t) {
  let n = Cu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function gf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (gf(t)) return !0;
  return !1;
}
async function _f(e, t, n, r) {
  let i = await nf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": of(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw vf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function vf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    z(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function yf({ EditorBar: e, fast: t = !1 }) {
  let n = S(nT),
    r = l(y_, t ? oT : sT, x_),
    i = MC(),
    a = s(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : O(aT, { children: O(y, { children: O(e, { framerSiteId: n, features: a }) }) });
}
function bf({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = A(),
    i = A(),
    a = A(t),
    o = A(null);
  ((a.current = t),
    h(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = k(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Sf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Sf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && xf(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return O(cT.Provider, { value: s, children: n });
}
async function xf(e, t) {
  if (!an(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    rn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Sf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? $n(r.path, n) : r.path) : ``;
}
function Cf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function wf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((lT = e.timeZone), (uT = e.locale));
}
function Tf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Fr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Er()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Ef(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Er();
  Fr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Df(e, t, n, r) {
  let i = Er();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Fr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      oi(t, n)
    ));
}
function Of() {
  return En() >= 17 ? mT : pT;
}
function kf(e = Ff) {
  let n = (e) => {
    e.persisted && Rf();
  };
  Cn() && (t.addEventListener(`pageshow`, n), (fT = Date.now() - Of()));
  let r = Af(),
    i = If(e);
  return function () {
    (t.removeEventListener(`pageshow`, n), r(), i());
  };
}
function Af() {
  let e = t.history.scrollRestoration;
  return (
    (t.history.scrollRestoration = `manual`),
    function () {
      t.history.scrollRestoration = e;
    }
  );
}
function jf(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Mf() {
  return { x: t.scrollX, y: t.scrollY };
}
function Nf() {
  let e = Er();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (jf(t)) return t;
}
function Pf(e) {
  let t = Er();
  t && (Nr({ ...t, scrollPosition: e }), Cn() && (fT = Date.now()));
}
function Ff(e, t = !1) {
  let n = Nf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Cn() && !t) {
      let e = Of();
      if (Date.now() - fT < e) return;
    }
    Pf(e);
  }
}
function If(e) {
  let n = () => {
      e(Mf());
    },
    r = () => {
      e(Mf(), !0);
    },
    i = () => {
      document.visibilityState === `hidden` && r();
    };
  (document.addEventListener(`visibilitychange`, i), t.addEventListener(`pagehide`, r));
  let a = () => {
    (document.removeEventListener(`visibilitychange`, i), t.removeEventListener(`pagehide`, r));
  };
  if (!(`onscrollend` in t)) {
    let e = Lf(n);
    return function () {
      (a(), e());
    };
  }
  return (
    t.addEventListener(`scrollend`, n),
    function () {
      (a(), t.removeEventListener(`scrollend`, n));
    }
  );
}
function Lf(e) {
  let n, r;
  function i() {
    (clearTimeout(n), (n = void 0), (r = void 0));
  }
  let a = () => {
      let t = r;
      (i(), !(t === void 0 || Dr(Er()) !== t) && e());
    },
    o = () => {
      let e = Dr(Er());
      if (e === void 0) {
        i();
        return;
      }
      (clearTimeout(n), (r = e));
      let o = Cn() ? Of() : 100;
      n = t.setTimeout(a, o);
    };
  return (
    t.addEventListener(`scroll`, o),
    function () {
      (t.removeEventListener(`scroll`, o), i());
    }
  );
}
function Rf() {
  let e = Nf();
  return e ? (t.scrollTo(e.x, e.y), !0) : !1;
}
function zf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Bf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (zf(n, t), !0);
}
function Vf(e, n, r) {
  r !== `preserve-scroll-position` &&
    He.render(
      () => {
        (r === `restore-scroll-position` && Rf()) || Bf(e, n) || t.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Hf(e, n) {
  He.read(() => {
    t.scrollY !== 0 ||
      t.scrollX !== 0 ||
      He.render(
        () => {
          Rf() || Bf(e, n);
        },
        !1,
        !0
      );
  });
}
function Uf(e) {
  let t = MC().scrollRestoration,
    n = A(void 0),
    i = A(!1),
    a = !!(t && !e),
    o = C(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || Ff(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => n.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), Vf(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    r(() => {
      if (a) return kf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Wf({ currentRouteId: e, remountKey: n, scrollRestoration: i }) {
  let { commitNavigationScroll: a, usesCustomScrollRestoration: o } = i;
  return (
    r(() => {
      a(e, n);
    }),
    h(() => {
      o && Hf(t.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Gf() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function Kf({ children: e, loadSnippetsModule: t }) {
  return O(TT.Provider, { value: t, children: e });
}
function qf() {
  return f.useContext(TT);
}
function Jf(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Yf(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Xf(a.createContextualFragment(e), r, i));
}
async function Xf(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Zf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Xf(r, e, null)));
  }
}
function Zf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Qf(r, t, n);
}
function Qf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function $f(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = xT), (n = ST));
      break;
    case `bodyEnd`:
      ((t = CT), (n = wT));
      break;
    case `headStart`:
      ((t = _T), (n = vT));
      break;
    case `headEnd`:
      ((t = yT), (n = bT));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function ep(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Jf(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function tp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = $f(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = ep(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((np(t, o), s)) {
      await Yf(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Jf(e.id),
      u = `${c}
${e.code}
${l}`,
      d = ip(e.id, n, r, i);
    d ? await Yf(u, d, `afterend`) : await Yf(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function np(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (rp(n) && n.remove(), (n = e));
  }
}
function rp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function ip(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = ep(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function ap() {
  let e = qf();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(hT)?.dataset[gT] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await tp(t, n, r);
      }
    },
    [e]
  );
}
function op(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function sp({
  siteCanonicalURL: e,
  activeLocale: n,
  contentLocale: r,
  currentRoute: i,
  currentRouteId: a,
  currentPathVariables: o,
  locales: s,
  collectionUtils: c,
}) {
  if (!e || !n || !r || !i) return;
  let l,
    u = [],
    d = s.find((e) => e.id === N_),
    { path: f } = await Un({
      currentLocale: n,
      nextLocale: r,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = op(f, e));
  let p;
  for (let t of s) {
    if (i.includedLocales && !i.includedLocales.includes(t.id)) continue;
    let { path: r, isMissingInLocale: s } = await Un({
      currentLocale: n,
      nextLocale: t,
      defaultLocale: d,
      route: i,
      routeId: a,
      pathVariables: o,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!r || s) continue;
    let l = op(r, e);
    (u.push({ href: l, hrefLang: t.code }), t.id === N_ && (p = l));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (xr(l, t.location.href), Sr(u));
    }
  );
}
function cp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = hn(),
    l = ap();
  h(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Kl(e);
        }),
        d)
      : ((e.id === t.id
          ? Nn()
          : Un({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === N_),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await sp({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Kl(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function lp(e) {
  if (!e) return m_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function up(e) {
  let n = Vr(e),
    r = A(void 0),
    i = C(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, a, o, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = jt(l);
        if ((a.promise.finally(u), o === void 0)) return (e(l), a.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(m_);
        if ((n(f, c, o), e(l), await a.promise, l?.aborted)) return;
        let p = t.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Qv();
      },
      [i, n]
    ),
    cancelPendingNavigation: i,
  };
}
function dp({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: o,
  notFoundPage: c,
  collectionUtils: l,
  routes: d,
  initialLocaleId: f,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: g = M_,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (xi(),
    Ir({
      disabled: n,
      routeId: o,
      initialPathVariables: i,
      initialLocaleId: f,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: _,
    }));
  let w = yr(),
    [T, E] = Gf(),
    D = wr(`framer-route-change`),
    k = s(() => (!MC().synchronousNavigationOnDesktop || !An() ? u : (e) => e()), []),
    te = A(!0),
    ne = A(),
    j = A(0),
    M = A(o),
    re = A(i),
    ie = A(),
    N = A(f),
    P = Uf(n),
    { isNavigationCommitPending: ae, usesCustomScrollRestoration: oe } = P,
    { startNavigation: se, cancelPendingNavigation: ce } = up(oe),
    le = hn(),
    ue = P.scheduleScroll,
    de = N.current,
    fe = M.current,
    pe = re.current,
    me = d[fe],
    he = me?.path;
  if (!me) throw Error(`Router cannot find route for ${fe}`);
  let ge = s(() => g.find(({ id: e }) => e === N_), [g]),
    F = s(() => g.find(({ id: e }) => (de ? e === de : e === N_)) ?? null, [de, g]),
    {
      contentLocale: _e,
      currentCanonicalPathVariables: ve,
      pageExistsInCurrentLocale: ye,
      setRouteContentState: be,
    } = pp({
      activeLocale: F,
      currentRoute: me,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: m,
      locales: g,
      routes: d,
    }),
    xe = F?.textDirection ?? `ltr`,
    I = S ? xe : `ltr`;
  r(() => {
    S && document.documentElement.setAttribute(`dir`, xe);
  }, [xe, S]);
  let Se = zr(),
    Ce = s(
      () => ({
        activeLocale: F,
        contentLocale: _e,
        locales: g,
        setLocale: async (e) => {
          let t = ++j.current,
            r = D({ localized: !0 });
          if ((await Mv({ priority: `user-blocking`, continueAfter: `paint` }), t !== j.current)) {
            r.ignore?.();
            return;
          }
          let i;
          L(e) ? (i = e) : z(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = M.current,
            s = d[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = ri(x);
          try {
            let e = await Se({
              currentLocale: F,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: ge,
              pathVariables: re.current,
              preserveQueryParams: v,
              sitePrefix: c,
            });
            if (!e || t !== j.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Kn({
                activeLocale: a,
                defaultLocale: ge,
                collectionUtilsCache: le,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== j.current) {
              r.ignore?.();
              return;
            }
            ((te.current = !1),
              (N.current = a.id),
              (ne.current = i),
              (re.current = e.pathVariables),
              be(l, u));
            let d = s.path && e.pathVariables ? $n(s.path, e.pathVariables) : s.path;
            (ue({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              se(
                () => {
                  w(o, o, () => k(E));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Tf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [F, ge, _e, n, E, g, v, be, d, ue, se, w, D, k, Se, le, x]
    ),
    we = C(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        te.current = !1;
        let f = M.current,
          p = d[e],
          m = At(p, n),
          h = p?.path && i ? $n(p.path, i) : p?.path;
        if (
          ((M.current = e),
          (N.current = t),
          (re.current = i),
          (ie.current = void 0),
          be(a, o),
          (ne.current = r),
          ue({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? oe
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (ce(), k(E));
          return;
        }
        se(
          (t) => {
            w(f, e, () => k(E), t);
          },
          c,
          u,
          !0
        );
      },
      [E, be, d, oe, ue, se, w, k, ce]
    );
  (Lr(P, M, we),
    h(() => {
      if (n) return;
      let e = () => {
        let e = Er(),
          n = t.location.hash === `` ? void 0 : t.location.hash.slice(1);
        (e && At(d[e.routeId], e.hash) === n) ||
          Pr({
            ...(e ||
              (kr() ?? { routeId: M.current, pathVariables: re.current, localeId: N.current })),
            hash: n,
            scrollPosition: void 0,
          });
      };
      return (t.addEventListener(`hashchange`, e), () => t.removeEventListener(`hashchange`, e));
    }, [n, d]));
  let Te = C(
      async (e, t, r, i, a) => {
        let o = d[e],
          s = st(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = lp(a);
        if (
          (Mv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await Mv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Pv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = At(o, t),
          p = re.current,
          m = N.current;
        if (
          ie.current === void 0 &&
          Cf({ routeId: M.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ae();
          if (a) {
            let t = o?.path && r ? $n(o.path, r) : o?.path;
            ue({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ce();
          (l.ignore?.(), !a && oe && Vf(f, i, `scroll-to-hash-or-top`));
          let s = d[e];
          (!n &&
            s &&
            Df(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              u
            ),
            !a && !oe && Vf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = d[M.current],
          _ =
            ri(x) +
            oi(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        ie.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await Kn({
          activeLocale: F,
          defaultLocale: ge,
          collectionUtilsCache: le,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ie.current === y &&
          we(
            e,
            m,
            t,
            _,
            r,
            b,
            S,
            !1,
            l,
            i,
            n
              ? void 0
              : () => {
                  (u(),
                    Ef(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [ce, d, g, we, n, v, x, D, oe, ae, ue, le, ge, F]
    ),
    Ee = St(d),
    De = ne.current,
    Oe = dT(me, fe, De, pe, F, p),
    ke = te.current;
  cp({
    activeLocale: F,
    contentLocale: _e,
    currentPathVariables: pe,
    currentRoute: me,
    currentRouteId: fe,
    isInitialNavigation: ke,
    locales: g,
    siteCanonicalURL: x,
  });
  let Ae = s(
      () => ({
        navigate: Te,
        getRoute: Ee,
        currentRouteId: fe,
        currentPathVariables: pe,
        currentCanonicalPathVariables: ve,
        routes: d,
        collectionUtils: l,
        preserveQueryParams: v,
        pageviewEventData: Oe,
        siteCanonicalURL: x,
        isInitialNavigation: ke,
      }),
      [Te, Ee, fe, pe, ve, d, l, v, x, Oe, ke]
    ),
    je = he && pe ? $n(he, pe) : he,
    Me = `${de}${je}`,
    Ne = Ba(() => ({ ...e, display: `contents` }));
  return O(Ct, {
    api: Ae,
    children: O(Lv.Provider, {
      value: Ce,
      children: O(Rv.Provider, {
        value: I,
        children: O(QC, {
          children: O(Qr, {
            routerRenderKey: T,
            isNavigationCommitPending: P.isNavigationCommitPending,
            children: ee(bf, {
              currentRoutePath: je,
              routerAPI: Ae,
              children: [
                b && O(yf, { EditorBar: b, fast: !0 }),
                O(FC, {
                  children: ee(Wl, {
                    children: [
                      O(Dy.Start, {}),
                      O(Wf, { currentRouteId: fe, remountKey: Me, scrollRestoration: P }),
                      O(ky, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: O(fp, {
                          LayoutTemplate: y,
                          webPageId: me?.abTestingVariantId ?? fe,
                          style: e,
                          children: (t) =>
                            O(a, { children: ye ? Ei(me.page, t ? Ne : e) : c && Ei(c, e) }, Me),
                        }),
                      }),
                      b && O(yf, { EditorBar: b }),
                      O(_i, {}),
                      O(Dy.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function fp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? O(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function pp({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = A(n),
    c = A(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = s(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && hy.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = C((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function mp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function hp(e) {
  return typeof e == `object` && !!e;
}
function gp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!hp(r)) return;
    r = r[e];
  }
  return r;
}
function _p(e) {
  return `${e.credentials}:${e.url}`;
}
function vp(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function yp(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Ge(t);
    case `number`:
      return R(t) || vp(t);
    case `link`:
    case `image`:
      return L(t) && Cu(t, !1);
    default:
      return !1;
  }
}
function bp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = gp(e.data, t.resultKeyPath);
  if (Je(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!yp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function xp(e, t) {
  if (q.current() === q.canvas) return !1;
  let n = Math.max(t * 1e3, DT);
  return Date.now() >= e + n;
}
function Sp({ client: e, children: t }) {
  return O(NT.Provider, { value: e, children: t });
}
function Cp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: p = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  return (
    f.useEffect(() => {
      n || rb.start();
    }, []),
    n
      ? O(Wr, {
          value: r ?? `preview`,
          children: O(De, {
            reducedMotion: m ? `always` : p ? `user` : `never`,
            skipAnimations: m,
            children: O(mn, {
              collectionUtils: l,
              children: O(Sp, {
                client: u,
                children: O(MT, {
                  children: O(nT.Provider, {
                    value: a,
                    children: O(Kf, {
                      loadSnippetsModule: T,
                      children: O(dp, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: E,
                        initialContentLocaleIdOverride: D,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: _,
                        defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : O(h ? BS : f.Fragment, {
          children: O(Tt, {
            routes: c,
            children: O(DS, { children: f.isValidElement(t) ? t : f.createElement(t, { key: i }) }),
          }),
        })
  );
}
function wp(e, t) {
  let n = wt(),
    { activeLocale: r } = qn(),
    i = Rd();
  return Kr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || yu(e)
            ? ef(e, n, void 0, void 0, r, o)
            : ef(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Tp(e) {
  return {
    trace(...t) {
      return yb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return yb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return yb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return yb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return yb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return yb.getLogger(e) !== void 0;
    },
  };
}
function Ep() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Dp() {
  return FT.priority;
}
function Op(e) {
  let t = FT;
  return (
    (FT = e),
    {
      [Ep()]() {
        FT = t;
      },
    }
  );
}
function kp(e = FT.priority, t = FT.canYield) {
  if (!(!t || e === void 0)) return Mv({ batch: !0, priority: Pn(e) });
}
function Ap(e) {
  var t = [];
  try {
    je(t, Op({ priority: FT.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ce(t, n, r);
  }
}
async function jp(e, t, n = FT.priority, r = FT.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (je(o, Op(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ce(o, s, c);
    }
  }
  for (; !a.done; ) {
    var l = [];
    try {
      let t = await a.value,
        o = kp(n, r);
      (o && (await o), je(l, Op(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ce(l, u, d);
    }
  }
  return a.value;
}
function Mp(e, t = FT.priority, n = FT.canYield) {
  var r = [];
  try {
    je(r, Op({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : jp(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ce(r, i, a);
  }
}
function* Np(e, t = FT.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (Qe(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            jp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Pp(e, t = FT.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = kp(t);
    r && (yield r);
    let o = e[a];
    if (Qe(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            jp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Fp(e) {
  return Rp(e) || Vp(e);
}
function Ip(e) {
  return Ke(e) && e.every(z);
}
function Lp(e) {
  return z(e) && We(e.read) && We(e.preload);
}
function Rp(e) {
  return Ip(e) || Lp(e);
}
function zp(e) {
  return z(e) && z(e.schema);
}
function Bp(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function Vp(e) {
  return zp(e) || Bp(e);
}
function Hp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = _m(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Up(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => IT.cast(e, t.definition)) };
  }
  return null;
}
function Wp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Gp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Kp(e) {
  return Gp(e)?.value ?? !1;
}
function qp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Jp(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Yp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Xp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return Ze(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Zp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Qp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function $p(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function em(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function tm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function nm(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function rm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function im(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function am(e) {
  return im(e)?.value ?? null;
}
function om(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = _m(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function sm(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = IT.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function cm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function lm(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function um(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function dm(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function fm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function pm(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function mm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function hm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function gm(e) {
  return hm(e)?.value ?? null;
}
function _m(e, t, n) {
  if (Ye(e) || Ye(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), Hp(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), Wp(e, t));
    case `color`:
      return (B(e.type === t.type), qp(e, t));
    case `date`:
      return (B(e.type === t.type), Yp(e, t));
    case `enum`:
      return (B(e.type === t.type), Zp(e, t));
    case `file`:
      return (B(e.type === t.type), $p(e, t));
    case `link`:
      return (B(e.type === t.type), tm(e, t));
    case `number`:
      return (B(e.type === t.type), rm(e, t));
    case `object`:
      return (B(e.type === t.type), om(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), cm(e, t));
    case `richtext`:
      return (B(e.type === t.type), um(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), fm(e, t));
    case `string`:
      return (B(e.type === t.type), mm(e, t, n));
    default:
      V(e);
  }
}
async function vm(e, t) {
  return Lp(e) ? (await e.preload(t), e.read(t)) : e;
}
function ym(e) {
  return e.includes(VT);
}
function bm(e) {
  if (!Vp(e) || !e.id) return;
  let t = zT.get(e.id);
  if (!t) return (zT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function xm(e) {
  let t = bm(e);
  if (t) return t;
  let n = BT.get(e);
  if (n) return n;
  let r = `${VT}${Math.random().toString(16).slice(2)}`;
  return (BT.set(e, r), r);
}
function Sm(e, t) {
  if (Rp(e)) {
    let n = xm(e) + (t?.id ?? N_),
      r = HT.get(n);
    if (r) return r;
    let i = new RT(e, t);
    return (HT.set(n, i), i);
  }
  if (zp(e)) return e;
  if (Bp(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function Cm(e) {
  return e;
}
function wm(e) {
  return We(e.getHash);
}
function W(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (z(r) && wm(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Cm(`${n})`);
}
function Tm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Em(e) {
  if (e !== void 0) return Pn(e);
}
function Dm(e, t) {
  return { collectionId: xm(e), pointer: t };
}
function Om(e) {
  return z(e) && L(e.collectionId);
}
function km(e, t) {
  return { collectionId: xm(e), pointer: t };
}
function Am(e) {
  return z(e) && L(e.collectionId);
}
function jm(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && Fp(e.data)) {
        let r = Sm(e.data, t),
          i = xm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Ke(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Mm(e) {
  return e;
}
function Nm(e) {
  return e;
}
function Pm(e) {
  return e;
}
function Fm() {
  return 25;
}
function Im() {
  return 12500;
}
function Lm(e) {
  return Array(e).fill({ type: `All` });
}
function Rm(e) {
  return e;
}
function zm(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new YE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Bm(e) {
  let t = new Set();
  if (!e) return t;
  zm(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (zm(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Vm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Vm(n, t);
      return;
    case `object`:
      for (let n in e.value) Vm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Hm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Um(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Wm(e) {
  return `${e.functionName}(${e.arguments.map((e) => Ym(e)).join(`, `)})`;
}
function Gm(e) {
  let t = `CASE`;
  e.value && (t += ` ${Ym(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Ym(n.when)} THEN ${Ym(n.then)}`;
  return (e.else && (t += ` ELSE ${Ym(e.else)}`), (t += ` END`), t);
}
function Km(e) {
  let t = Ym(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function qm(e) {
  let t = Ym(e.left),
    n = Ym(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Jm(e) {
  return `CAST(${Ym(e.value)} as ${e.dataType})`;
}
function Ym(e) {
  switch (e.type) {
    case `Identifier`:
      return Hm(e);
    case `LiteralValue`:
      return Um(e);
    case `FunctionCall`:
      return Wm(e);
    case `Case`:
      return Gm(e);
    case `UnaryOperation`:
      return Km(e);
    case `BinaryOperation`:
      return qm(e);
    case `TypeCast`:
      return Jm(e);
    case `Select`:
      return `${eh(e)}`;
    default:
      V(e);
  }
}
function Xm(e) {
  return zp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Zm(e) {
  let t = `${Qm(e.left)} LEFT JOIN ${Qm(e.right)}`;
  return (e.constraint && (t += ` ON ${Ym(e.constraint)}`), t);
}
function Qm(e) {
  switch (e.type) {
    case `Collection`:
      return Xm(e);
    case `LeftJoin`:
      return Zm(e);
    default:
      V(e);
  }
}
function $m(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function eh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Ym(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Qm(e.from)}`),
    e.where && (t += ` WHERE ${Ym(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Ym(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Ym(e.limit)}`),
    e.offset && (t += ` OFFSET ${Ym(e.offset)}`),
    $m(t)
  );
}
function th(e) {
  return z(e) && e.type === `Collection`;
}
function nh(e, t) {
  return th(t) && Fp(t.data) ? xm(t.data) : t;
}
function rh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, nh) + n;
}
function ih(e) {
  let { activeLocale: t } = qn();
  return fD.get(e, t).use();
}
function ah(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Je(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function oh(e) {
  let t = A(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    qr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function sh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function ch() {
  return new Set();
}
function lh(e) {
  let t = Ba(ch),
    n = Ba(ch);
  return (
    $s(() => () => sh(n, t)),
    h(() => () => sh(n, t), []),
    h(() => {
      sh(n, t);
    }, [e]),
    A({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function uh(e, t, n) {
  return f.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function dh(e) {
  for (let [t, n] of Object.entries(e)) if (G.matchMedia(n).matches) return t;
}
function fh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && G.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function ph(e, t, n = !0) {
  let r = S(wS),
    i = Wa(),
    a = Ia(),
    o = Tn() && (!i || a),
    s = A(o ? (dh(t) ?? e) : e),
    c = A(n && r ? e : s.current),
    l = ss(),
    d = re(),
    f = C(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              u(() => {
                l();
              }));
          };
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, i]
    );
  return (
    iy(() => {
      if (i) {
        if (a) {
          f(dh(t) ?? e);
          return;
        }
        f(e);
      }
    }, [e, a, i, t, f]),
    iy(() => {
      !n || r !== !0 || f(s.current);
    }, []),
    h(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = G.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (mh(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => hh(e, t));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function mh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function hh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function gh(e) {
  setTimeout(e, 1);
}
function _h(e) {
  let t = new Set(),
    n = fh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (vh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (__ ? G.requestIdleCallback : gh)(() => {
    document.querySelector(pD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (vh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    yh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function vh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function yh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function bh(e, t) {
  e !== !1 &&
    He.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function xh({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = f.useState(!1),
    i = f.useCallback(
      async (t) => {
        (await Mv({ priority: `user-blocking`, continueAfter: `paint` }), u(() => r(t)), bh(e, t));
      },
      [e]
    );
  return (
    f.useEffect(
      () => () => {
        Mv({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          bh(e, !1);
        });
      },
      [e]
    ),
    f.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (G.addEventListener(`keydown`, e), () => G.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function Sh(e) {
  return z(e) && mD in e && e.page !== void 0;
}
function Ch(e, t) {
  return `${e}-${t}`;
}
function wh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Th(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Eh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Dh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Oh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function kh() {
  let e = A(),
    t = A(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    h(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Ah() {
  let e = A(),
    t = A(!1),
    n = A(),
    r = S(sS);
  return (
    h(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Ks(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function jh(e) {
  let t = kh(),
    n = Ah();
  return C(
    (r, i = !1) => {
      if (g_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Mh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (_D = () => {
        (e(), (t = void 0));
      }));
  });
}
function Nh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (gD = Mh()));
}
function Ph() {
  (performance.mark(`click-received-listener`), (gD = void 0), _D?.(), (_D = void 0));
}
function Fh(e = !1) {
  h(() => {
    e &&
      (document.addEventListener(`pointerup`, Nh, !0),
      document.__proto__.addEventListener.call(document, `click`, Ph, !0));
  }, [e]);
}
function Ih({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let l = ss(),
    d = xu(),
    f = Ba(() => new Set(i));
  Fh(MC().yieldOnTap);
  let p = jh(c),
    m = A({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Oh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Oh(e, a, f),
        s = Eh(i?.[o], t, n, !1, r);
      return [o, s ? Ch(o, s) : void 0];
    }, []),
    g = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = MC().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          gD &&
          (performance.mark(`wait-for-tap-start`),
          await gD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Mv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        if (d || g || f || _) {
          u(l);
          return;
        }
        p(() => u(l), i);
      },
      [h, l, p]
    ),
    _ = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && MC().disableHoverOnMobile && !lu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    v = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === hD ? wh(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = C(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => u(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    ee = uh(m.current.baseVariant, m.current.gestureVariant, a);
  return s(() => {
    let e = [];
    b !== S && e.push(b);
    let t = w?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? Ch(b, `loading`) : x;
    r && e.push(r);
    let i = w?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: Th(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: ee,
        gestureHandlers: a,
        classNames: $c(Dh(b, o), Eh(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, O, ee, v, S, w, _, y, o]);
}
function Lh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Jl()) return r(e);
  let a = Rh(e, r),
    o = !1;
  function s(r, s) {
    let c = Zl(),
      { disableCustomCode: l } = MC();
    if (l) return O(e, { ...r, ref: s });
    if (au(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? O(ny.Provider, {
            value: n,
            children: O(Yl, {
              getErrorMessage: nu.bind(null, t, n),
              fallback: O(e, { ...r, ref: s }),
              children: O(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (ql(a.error), ql(nu(t, n)), Kl(a.error), !0)), O(e, { ...r, ref: s }));
    if (a.status === `success`)
      return O(ny.Provider, { value: n, children: O(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return f.forwardRef(s);
}
function Rh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function zh(e, t, n) {
  let r = [],
    i = wl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!R(e)) return bD;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return R(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : bD;
}
function Bh(e, t, n, r = wD) {
  let [i, a] = f.useState(e),
    [o, s] = f.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      f.useCallback(
        (e) => {
          mi(e) ||
            (t && a(r(e)),
            n &&
              f.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Vh(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Hh() {
  return O(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: O(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Uh(e, n) {
  h(() => {
    function r(t) {
      t.key === `Escape` && e && (t.preventDefault(), t.stopPropagation(), n());
    }
    return (t.addEventListener(`keyup`, r), () => t.removeEventListener(`keyup`, r));
  }, [e, n]);
}
function Wh(e, n, r, i) {
  let a = t.innerHeight - i,
    o = Math.min(t.innerWidth - r, n),
    s = a / e;
  return Math.min(o, s);
}
function Gh(e, { width: n, height: r }) {
  if (!e.src || !e.srcSet) return;
  let i = new t.Image();
  return (
    (i.src = e.src),
    (i.srcset = e.srcSet),
    (i.sizes = e.sizes || ``),
    (i.width = n),
    (i.height = r),
    i.decode()
  );
}
function Kh() {
  return document.getElementById(yw) ?? document.getElementById(vw) ?? document.body;
}
function qh(e, t) {
  return R(e) ? e : (t ?? 0);
}
function Jh(e) {
  return qh(e?.paddingTop, e?.padding) + qh(e?.paddingBottom, e?.padding);
}
function Yh(e) {
  return qh(e?.paddingLeft, e?.padding) + qh(e?.paddingRight, e?.padding);
}
function Xh(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Yh(e)}px)`,
      srcSet: Xa(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Zh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in FD)) continue;
    let n = FD[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function Qh(e) {
  let t = le.get(e.current);
  if (!t) return !1;
  if (Zh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Zh(e.latestValues)) return !0;
  return !1;
}
function $h(e) {
  return T(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, o) {
    let c = S(xe),
      l = S(vD),
      d = !!l,
      f = A(null),
      p = o ?? f,
      g = A(),
      _ = s(() => Xh(t, i.background), [t, i.background]),
      [v, y] = k(!1),
      [b, x] = k(),
      T = C(() => {
        if (t) {
          if (v) {
            u(() => {
              y(!0);
            });
            return;
          }
          He.read(() => {
            if (!p.current) return;
            let e = getComputedStyle(p.current),
              n =
                p.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(p.current, `::after`)
                  : void 0,
              r = p.current.offsetWidth ?? 1,
              i = p.current.offsetHeight ?? 1,
              a = Qh(p) || d ? { duration: 0 } : t.transition;
            u(() => {
              (x({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                y(!0),
                l?.stop());
            });
          });
        }
      }, [t, v, p, l?.stop, d]),
      E = b?.aspectRatio ?? 1,
      D = oh(() => {
        if (!t || !_?.src) return;
        let e = g.current?.[_.src];
        if (e) return e;
        let n = Wh(E, t.maxWidth, Yh(t), Jh(t)),
          r = Gh(_, { width: n, height: n * E });
        return ((g.current = { [_.src]: r }), r);
      }),
      ne = C(
        async (e) => {
          (r?.(e), !(v || !t || !_) && (await D(), T()));
        },
        [r, T, v, _, t, D]
      ),
      j = C((e) => {
        (e?.stopPropagation(),
          u(() => {
            y(!1);
          }));
      }, []);
    (Uh(v, j),
      h(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            D();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = p.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, D),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, D));
          }
        );
      }, [D, p, t]));
    let M = te(),
      re = b?.transition ?? i.transition ?? c.transition,
      ie = b?.borderRadius,
      N = b?.imageRendering,
      ae = b?.filter,
      oe = b?.borderTop,
      se = b?.borderRight,
      ce = b?.borderBottom,
      le = b?.borderLeft,
      ue = b?.borderStyle,
      de = b?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      pe = fe
        ? {
            "--border-top-width": oe,
            "--border-right-width": se,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      me = { [ew]: i.id },
      he = qh(t?.paddingTop, t?.padding),
      ge = qh(t?.paddingBottom, t?.padding),
      F = qh(t?.paddingLeft, t?.padding),
      _e = qh(t?.paddingRight, t?.padding),
      ve = b?.borderRadius ? { ...i.style, borderRadius: b.borderRadius } : i.style,
      ye = v ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      be = d && v ? void 0 : (i.layoutId ?? (t ? M : void 0));
    return ee(w, {
      children: [
        O(e, {
          ...i,
          style: ve,
          onClick: ne,
          layoutId: be,
          ref: p,
          layoutDependency: ye,
          transition: re,
        }),
        O(Me, {
          onExitComplete: () => {
            u(() => {
              (x(void 0), l?.start());
            });
          },
          children:
            v &&
            t &&
            _ &&
            O(
              a,
              {
                children: m(
                  ee(w, {
                    children: [
                      O(P.div, {
                        ...me,
                        className: n,
                        onClick: j,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: re,
                        initial: ID,
                        animate: LD,
                        exit: ID,
                      }),
                      O(P.div, {
                        ...me,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${_e}px ${ge}px ${F}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: O(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: E,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: O(P.div, {
                            layoutId: be,
                            transition: re,
                            onClick: T,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: E,
                              borderRadius: ie,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: N,
                              filter: ae,
                              ...pe,
                            },
                            children: O(ao, { image: _, alt: _.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Kh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function eg(e, t) {
  return BD && !t
    ? Document.parseHTMLUnsafe(e)
    : ((zD ??= new DOMParser()), zD.parseFromString(e, t ?? `text/html`));
}
function tg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function ng(e, t, n, r) {
  return e.replace(VD, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Eu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Sh(f) || !Sh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = At(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Ou(u);
    if (!_ || L(_)) return e;
    vd(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Sw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = $r(m, v)), i + o + `"${tg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function rg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function ig(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function ag(e, t, n) {
  let r = A([]);
  rg(r.current, e) ||
    ((r.current = e),
    yb.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || q.current() !== q.canvas || (e > 0 && ps(n.current));
    }));
}
function og() {
  return { current: null };
}
async function sg(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function cg(e) {
  return e in GD;
}
function lg(e, t) {
  let n = {};
  for (let r in e) {
    if (!cg(r)) continue;
    let i = e[r],
      a = GD[r];
    Je(i) || Je(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function ug(e, t = `character`, n, r, i) {
  if (r) {
    let t = og();
    return (n.add(t), O(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r;
        return ee(
          a,
          {
            children: [
              O(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(KD)?.map((e, t) => {
                  let r = og();
                  return (n.add(r), O(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = og();
        return (
          n.add(s),
          ee(
            a,
            { children: [O(`span`, { ref: s, style: i, children: e }), o ? null : ` `] },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function dg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function fg(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function pg(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : fg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : fg(n.effect),
              };
      }
    default:
      V(i);
  }
}
function mg(e, t, n) {
  let r = Ba(() => new Set()),
    i = Ua(),
    a = n || !i,
    o = _e(),
    c = A({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  h(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            gg(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              s
            ),
            () => s.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? I(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? I(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? dg(e) : void 0;
  return s(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          s = pg(a, n || hg(e, t, i), c.current.effect, o);
        return {
          text: (e) => ug(e, p, r, o, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = og();
            return (r.add(t), { ref: t, style: { ...e, ...s } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            gg(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function hg(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function gg(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = lg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await _g(n, u);
      if (
        e === null ||
        (Te(e, l, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Te(e, n, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await sg(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (He.read(() => {
          ((e = vg(n)),
            e.length !== 0 &&
              He.update(() => {
                let t = e.map((e, t) =>
                  Te(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Te(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function _g(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await sg(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function vg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function yg(e) {
  let t = {};
  for (let n in e) (F(n) || mb(n)) && (t[n] = e[n]);
  return t;
}
function bg(e) {
  return e.type === a;
}
function xg(e) {
  return e.type === `br`;
}
function Sg(e, t, n, r, a = {}, s, c = bg(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  Je(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!b(e) || !xg(e)) && (u = !1), b(e))) return Sg(e, t, n, r, a, s, c + 1);
    let i = Je(n) ? e : n;
    return L(i) && s ? s.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (L(e.type) || ie(e.type)) {
    let n = ae(e.type) || e.type,
      o = d || n,
      p = L(o) ? t?.[o] : void 0;
    ((f.className = $c(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = Cg(l, a);
      f.id = e;
      let t = $c(`framer-text`, h),
        n = O(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: r }), (l = [n]));
    }
    o === `ol` &&
      (f.style = { ...f.style, [mx]: Tg(f.start ?? 1, i.count(f.children), f.style?.[px] ?? ``) });
  }
  return o(e, f, ...l);
}
function Cg(e, t) {
  let n = Ur(e.map(wg).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function wg(e) {
  return L(e) || R(e)
    ? e.toString()
    : b(e)
      ? wg(e.props.children)
      : Array.isArray(e)
        ? e.map(wg).join(``)
        : ``;
}
function Tg(e, t, n) {
  return Ko(Number(e) || 1, t, n);
}
function Eg(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Qi(n.x, n.y),
    i = Ob(Qi(0.5, 0.5), r),
    a = J.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Qi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Qi.isEqual(e, s) && !Qi.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Ob.intersection(i, Ob(s, c)),
    f = Ob.intersection(i, Ob(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), Ob(d, f));
}
function Dg(e, t) {
  let n = Eg(e.angle),
    r = Ss(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Ob.pointAtPercentDistance(n, i),
    s = Ob.pointAtPercentDistance(n, a),
    c = ge([i, a], [0, 1]);
  return {
    id: `id${t}g${Kx.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Bx.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Og(e, t) {
  return {
    id: `id${t}g${Jx.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ss(e).map((t) => ({
      color: t.value,
      alpha: Bx.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function kg(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function Ag(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function jg(e) {
  return kg(e) ? Ag(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Mg(e) {
  return kg(e) ? Ag(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Ng(e, t, n, r) {
  if (((e = Py.get(e, `#09F`)), !Db.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * jg(e.positionX) + f),
        (d = (t.height - l) * Mg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Mg(e.positionY)))
        : ((n = g), (u = (1 - g) * jg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Pg(e) {
  return e.startsWith(`data:${eO}`);
}
function Fg(e, t) {
  if (/^\w+:/u.test(e) && !Pg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = q.current() === q.export;
  return yb.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Ig(e) {
  try {
    let t = eg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Lg(e, t) {
  zg(e, Rg(t));
}
function Rg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function zg(e, t) {
  (Bg(e, t),
    Array.from(e.children).forEach((e) => {
      zg(e, t);
    }));
}
function Bg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Vg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (sO[t[2]] || 1));
}
function Hg(e) {
  let t = Vg(e.getAttribute(`width`)),
    n = Vg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Ug(e) {
  return e.indexOf(`image`) >= 0;
}
function Wg(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Gg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Kg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? G,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = oO.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && wo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function qg(e) {
  return e > fO ? `lazy` : void 0;
}
function Jg(e, t, n) {
  let r = Zg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Yg(e) {
  return e ? (e.fonts ?? Di()) : Di();
}
function Xg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Zg(e);
}
function Zg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Qg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map($g) })
      : t.fonts.push($g(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Qg(e) {
  return mO in e;
}
function $g(e) {
  let t = e_(e) || t_(e) ? e : n_(e);
  return t_(t) ? t : r_(t);
}
function e_(e) {
  return `source` in e;
}
function t_(e) {
  return `cssFamilyName` in e;
}
function n_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function r_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${pO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function i_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function a_(e, t) {
  let n = Mv({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function o_(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Mv({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function s_(e) {
  return e.loader;
}
function c_(e, t, n) {
  let r = s_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  G,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  K,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  q,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  J,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Y,
  Qb,
  $b,
  ex,
  tx,
  X,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  Z,
  XT,
  ZT,
  QT,
  $T,
  eE,
  Q,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  $,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO = e(() => {
    (d(),
      Ve(),
      p(),
      g(),
      E(),
      (l_ = we({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (u_ = we({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (d_ = we({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = u_();
        },
      })),
      (f_ = we({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = d_(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (p_ = we({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, n) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function r(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function i(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function a(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function o(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function s(t, n) {
              function r() {
                var e = i;
                o(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), o(t));
            }
            function c(e, n, r) {
              ((n ||= {}),
                (r ||= t),
                (this.family = e),
                (this.style = n.style || `normal`),
                (this.weight = n.weight || `normal`),
                (this.stretch = n.stretch || `normal`),
                (this.context = r));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(t.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        t.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, n) {
              var o = this,
                c = e || `BESbswy`,
                u = 0,
                d = n || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, n) {
                if (m(o.context) && !p(o.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : o.context.document.fonts
                              .load(h(o, `"` + o.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(o));
                  }, n);
                } else
                  r(function () {
                    function r() {
                      var n;
                      ((n = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((n = v != y && v != b && y != b) ||
                          (l === null &&
                            ((n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              t.navigator.userAgent
                            )),
                            (l =
                              !!n &&
                              (536 > parseInt(n[1], 10) ||
                                (parseInt(n[1], 10) === 536 && 11 >= parseInt(n[2], 10))))),
                          (n =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (n = !n)),
                        n &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(o)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          n(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = o.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          r()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new i(c),
                      g = new i(c),
                      _ = new i(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      a(m, h(o, `sans-serif`)),
                      a(g, h(o, `serif`)),
                      a(_, h(o, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      o.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), r());
                      }),
                      a(m, h(o, `"` + o.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), r());
                      }),
                      a(g, h(o, `"` + o.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), r());
                      }),
                      a(_, h(o, `"` + o.family + `",monospace`)));
                  });
              });
            }),
              typeof n == `object`
                ? (n.exports = c)
                : ((t.FontFaceObserver = c),
                  (t.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (m_ = () => {}),
      (h_ = t !== void 0),
      (g_ =
        h_ &&
        (j.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(j.userAgent))),
      (__ = h_ && typeof t.requestIdleCallback == `function`),
      (v_ = __ ? t.requestIdleCallback : setTimeout),
      (y_ = () => m_),
      (b_ = () => !0),
      (x_ = () => !1),
      (S_ = new Map()),
      (C_ = new Map()),
      (w_ = new Set()),
      (T_ = `:`),
      (E_ = h_ ? void 0 : new Set()),
      (D_ = `preload`),
      (O_ = Object.keys),
      (k_ = `equals`),
      (A_ = f.createContext({})),
      (j_ = f.createContext({})),
      (M_ = []),
      (N_ = `default`),
      (P_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (F_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && at(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = P_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === P_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === P_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== P_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && E_ !== void 0 && E_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = P_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = P_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && S_.has(this.cacheHash) ? S_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!et(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === P_.Fulfilled) return this.value;
          throw this.promiseState === P_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (I_ = -1),
      (L_ = -2),
      (R_ = -3),
      (z_ = -4),
      (B_ = -5),
      (V_ = -6),
      (H_ = -7),
      (U_ = 2 ** 32 - 1),
      (W_ = U_ - 1),
      (G_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (K_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (q_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (J_ = typeof Uint8Array.fromBase64 == `function`),
      (Y_ = typeof process == `object` && process.versions?.node !== void 0),
      (X_ = J_ ? Gt : Y_ ? qt : Yt),
      (Z_ = J_ ? Kt : Y_ ? Jt : Xt),
      (Q_ = Object.freeze({ kind: `not-plain` })),
      ($_ = Object.freeze({ kind: `symbol-keys` })),
      (ev = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Ft(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => ({
          buffer: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength,
          length: e.length,
          bufferByteLength: e.buffer.byteLength,
        }),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Wt(e),
        shapeOf: (e) =>
          Pt(e)
            ? Rt(e).length > 0
              ? $_
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Q_,
        get: (e, t) => e[t],
      })),
      (tv = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[W_] = void 0), delete t[W_], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (G = h_
        ? t
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (nv = 2),
      (rv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (iv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (ov = class {
        payload = on();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return en(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (sv = h_ ? void 0 : new ov()),
      (cv = iv.CollectionUtilsCache),
      (lv = new WeakMap()),
      (uv = _(void 0)),
      (dv = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new F_(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(rt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = dn(n),
            i = fn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (sv !== void 0) {
              if (et(e)) return e.then((e) => (sv.set(cv, i, e), e));
              sv.set(cv, i, e);
            }
            return e;
          }
          if (ln(cv, i)) {
            let e = un(cv, i);
            return (this.cacheMap.set(i, new F_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = et(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(rt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (sv !== void 0 && sv.set(cv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new F_(async () => {
            try {
              let e = et(s) ? await s : s;
              return (sv !== void 0 && sv.set(cv, i, e), e);
            } catch (e) {
              console.error(rt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (fv = /Mac/u),
      (pv = /iPhone|iPod|iPad/iu),
      (mv = /MacIntel/iu),
      (hv = /Edg\//u),
      (gv = /Chrome/u),
      (_v = /Google Inc/u),
      (vv = /Safari/u),
      (yv = /Apple Computer/u),
      (bv = /Firefox\/\d+\.\d+$/u),
      (xv = /Version\/([\d.]+)/u),
      (Sv = /FramerX/u),
      (Cv = /tablet|iPad|Nexus 9/iu),
      (wv = /mobi/iu),
      (Tv = 1e3 / 60),
      (Ev = 1e3 / 25),
      (Dv = 500),
      (Ov = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (kv = Promise.resolve()),
      (Av = 100),
      (jv = (e) => {
        He.read(e, !1, !0);
      }),
      (Mv = Rn(jv)),
      (Nv = `framer_variant`),
      (Pv = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Fv = async () => {}),
      (Iv = { contentLocale: null, activeLocale: null, locales: [], setLocale: Fv }),
      (Lv = (() => {
        let e = f.createContext(Iv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Rv = (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (zv = !g_),
      (Bv = !1),
      (Vv = f.createContext({ global: void 0, routes: {} })),
      (Hv = 10),
      (Uv = 1e4),
      (Wv = (e) => `--view-transition-${e}`),
      (Gv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Wv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Wv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Wv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Kv = {
        circle: {
          makeKeyframe: (e, t) => `${Wv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Wv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${cr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Wv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Gv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${sr(e.x)} ${sr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ar(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Wv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Wv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Wv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Wv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Wv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Wv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (qv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Jv = `view-transition-styles`),
      (Yv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Xv = () => {}),
      (Qv = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Zv ||
            ((Zv = document.createElement(`div`)),
            Zv.setAttribute(`aria-live`, `assertive`),
            Zv.setAttribute(`aria-atomic`, `true`),
            (Zv.style.position = `absolute`),
            (Zv.style.transform = `scale(0)`),
            document.body.append(Zv)),
            setTimeout(() => {
              Zv.textContent = e;
            }, 60));
        }
      }),
      (ey =
        h_ &&
        typeof t.navigation?.back == `function` &&
        !(() => {
          if (j === void 0) return !1;
          let e = j.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Cn()),
      (ty = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (ny = f.createContext(null)),
      (ry = (() => {
        let e = _(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (iy = typeof document < `u` ? r : h),
      (ay = new Set()),
      (oy = (() => {
        let e = _({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (sy = 46),
      (cy = 47),
      (ly = (e, t) => e.charCodeAt(t)),
      (uy = (e, t) => e.lastIndexOf(t)),
      (dy = (e, t, n) => e.slice(t, n)),
      (fy = !1),
      (py = `/`),
      (my = (e) => e === cy),
      (hy = new Set([`/404.html`, `/404`, `/404/`])),
      (gy = `__f_replay`),
      (_y = `__f_replay_ignore`),
      (vy = `data-framer-form-hydrated`),
      (yy = `data-framer-form-pending-submit`),
      (by = () => h_),
      (xy =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Sy = (e) => {
        e.target?.closest?.(`#main`) &&
          (pi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Cy = !1),
      (wy = class {
        markRenderStart = vi(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = vi(() => {
          (performance.mark(`framer-hydration-render-end`),
            yi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = vi(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = vi(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = vi(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            yi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = vi(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = vi(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = vi(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            yi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = vi(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = vi(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = vi(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = vi(() => {
          (performance.mark(`framer-hydration-effects-end`),
            yi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = vi(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = vi(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            yi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = vi(() => {
          (performance.mark(`framer-hydration-first-paint`),
            yi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            yi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = vi(() => {
          yi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = vi(() => {
          yi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (Ey = !1),
      (Dy = { Start: wi, End: Ti }),
      (Oy = class extends Error {}),
      (ky = class extends D {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Oy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ei(e, t);
        }
      }),
      (Ay = Object.freeze([])),
      (My = new Set()),
      (Ny = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Py = (() => {
        function e(e) {
          return (
            Ki(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            qi(e) ? e : new Ly(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : qi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              qi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Fy = `onUpdate`),
      (Iy = `finishTransaction`),
      (Ly = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Ny();
        static interpolationFor(e, t) {
          if (qi(e)) return Ji(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (qi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Xi(e.x, t.x), y: Xi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Qi ||= {})),
      (Ry = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (zy = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (zy.hexChars = `0123456789abcdef`),
      (zy.refY = 1),
      (zy.refU = 0.19783000664283),
      (zy.refV = 0.46831999493879),
      (zy.kappa = 903.2962962),
      (zy.epsilon = 0.0088564516),
      (zy.m_r0 = 3.240969941904521),
      (zy.m_r1 = -1.537383177570093),
      (zy.m_r2 = -0.498610760293),
      (zy.m_g0 = -0.96924363628087),
      (zy.m_g1 = 1.87596750150772),
      (zy.m_g2 = 0.041555057407175),
      (zy.m_b0 = 0.055630079696993),
      (zy.m_b1 = -0.20397695888897),
      (zy.m_b2 = 1.056971514242878),
      (By = new zy()),
      (Vy = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Hy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Uy = (e) => {
        let { r: t, g: n, b: r, a: i } = Sa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Wy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        wa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Gy = (e) => {
        let { r: t, g: n, b: r, a: i } = Sa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Ky = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        wa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (qy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ta(this);
        }
        rgb() {
          return ka(this);
        }
        hsl() {
          return ca(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Da(t));
            case `srgb`:
              return new e(Oa(Da(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Oa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = K(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ba(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !K.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Jy = new Map()),
      (K = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Jy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Jy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Aa(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && _a(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => sa(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && qy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ra(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = da(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = da(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = sa(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Ry)) if (Ry[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: $i(i, [0, 1], [t.r, r.r], a),
                g: $i(i, [0, 1], [t.g, r.g], a),
                b: $i(i, [0, 1], [t.b, r.b], a),
                a: $i(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: $i(i, [0, 1], [u, u + f], a),
                s: $i(i, [0, 1], [c.s, l.s], a),
                l: $i(i, [0, 1], [c.l, l.l], a),
                a: $i(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ia(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ca(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Yy = (e) => e instanceof Le),
      (Xy = l_().EventEmitter),
      (Zy = class {
        _emitter = new Xy();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Qy = (e) => {
        setTimeout(e, 1 / 60);
      }),
      ($y = G.requestAnimationFrame || Qy),
      (eb = (e) => $y(e)),
      (tb = 1 / 60),
      (nb = class extends Zy {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          tb = e;
        }
        static get TimeStep() {
          return tb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), eb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * tb;
        }
        tick = () => {
          this._started &&
            (eb(this.tick),
            this.emit(`update`, this._frame, tb),
            this.emit(`render`, this._frame, tb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (rb = new nb()),
      (ib = { target: Ia() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => ib.target,
        hasRestrictions: () => {
          let e = ib.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (ab = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ee({
        borderTopWidth: ab(`y`),
        borderLeftWidth: ab(`x`),
        borderRightWidth: ab(`x`),
        borderBottomWidth: ab(`y`),
      }),
      (ob = f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (sb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (cb = {
        ...sb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (lb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (ub = { ...lb, fontWeight: 500 }),
      (db = {
        ...lb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (fb = (e) => e),
      (pb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (mb = Ga(
        (e) =>
          pb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (hb = (e) => () => {
        Gi(e);
      }),
      (gb = () => () => {}),
      (_b = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = yb.useImageSource(e, t, n);
          return s(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (vb = !1),
      (yb = new Proxy(_b, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? gb()
              : hb(
                  vb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (bb = {
        isSelectorLoaded(e) {
          return yb.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return yb.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return yb.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return yb.fontStore.loadMissingFonts(e, t);
        },
      }),
      (xb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Sb = [1, 2, 2.2]),
      (Cb = [512, 1024, 2048, 4096]),
      (wb = 512),
      (Tb = { position: `absolute`, ...xb, top: 0, right: 0, bottom: 0, left: 0 }),
      (Eb = `src`),
      (Db = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Eb in e;
        },
      }),
      (Ob = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = mo(Qi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Qi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Qi.distance(e.a, e.b)),
          e
        );
      })()),
      (J = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => J.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Yi(e.x, t),
          y: Yi(e.y, t),
          width: Yi(e.width, t),
          height: Yi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: J.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: J.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Qi.distance(t, n), height: Qi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(J.minX)), y: Math.min(...e.map(J.minY)) },
            n = { x: Math.max(...e.map(J.maxX)), y: Math.max(...e.map(J.maxY)) };
          return J.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: J.minX(e), y: J.minY(e) },
          { x: J.minX(e), y: J.maxY(e) },
          { x: J.maxX(e), y: J.minY(e) },
          { x: J.maxX(e), y: J.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < J.minX(e) ||
            t.x > J.maxX(e) ||
            t.y < J.minY(e) ||
            t.y > J.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of J.points(t)) if (!J.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= J.maxX(e) || J.maxX(t) <= e.x || t.y >= J.maxY(e) || J.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = J.maxX(e),
            r = J.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = J.maxY(e),
            r = J.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => J.intersects(t, e)),
        isEqual: (e, t) => J.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > J.maxX(e) && (n = t.x - J.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > J.maxY(e) && (r = t.y - J.maxY(e)),
            Qi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: J.minX(e), y: J.minY(e) },
            r = { x: J.minX(t), y: J.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = J.minX(e),
            r = J.minY(e),
            i = J.maxX(e),
            a = J.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = J.cornerPoints(e);
          return [Ob(t, n), Ob(n, r), Ob(r, i), Ob(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Ob(t, J.center(e)),
            r = J.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Ob.intersection(n, t, !0)) {
              let n = kb[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(kb)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = J.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = J.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (kb = [`top`, `right`, `bottom`, `left`]),
      (Ab = {
        quickfix: (e) => (
          (ho(e.widthType) || ho(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ho(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ho(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (jb = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Ab.quickfix({
              left: H(t) || qi(t),
              right: H(n) || qi(n),
              top: H(r) || qi(r),
              bottom: H(i) || qi(i),
              widthType: go(a),
              heightType: go(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Py.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Py.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Py.getNumber(t) : null,
              right: d.right ? Py.getNumber(n) : null,
              top: d.top ? Py.getNumber(r) : null,
              bottom: d.bottom ? Py.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Py.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Py.getNumber(t?.sizing.height) : null,
            c = So(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && ho(e.widthType)) i = n.width;
          else if (H(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.widthType);
            }
          let l = So(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && ho(e.heightType)) a = n.height;
          else if (H(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.heightType);
            }
          return xo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = jb.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Py.getNumber(l.width) : null,
            d = l ? Py.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? J.pixelAligned(f) : f;
        },
      }),
      (Mb = 200),
      (Nb = 200),
      (Pb = f.createContext({ parentSize: 0 })),
      (Fb = (e) => {
        let t = Ao(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [Mo(n), No(n)]);
        return t === 1
          ? r
            ? O(w, { children: r })
            : null
          : O(Pb.Provider, { value: i, children: r });
      }),
      (Ib = f.createContext(void 0)),
      (Lb = new Set()),
      (zb = `style[data-framer-css-ssr-minified]`),
      (Bb = (() => {
        if (!Tn()) return new Set();
        let e = document.querySelector(zb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Vb = `data-framer-css-ssr`),
      (Hb = (e, t, n) =>
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(Ib) ?? {},
            s = n;
          if (!Tn()) {
            We(t) && (t = t(Vo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Wb.add(e, s);
          }
          return (
            c(() => {
              (s && Bb.has(s)) ||
                (We(t)
                  ? t(Vo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Bo(e, a, o));
            }, []),
            O(e, { ...r, ref: i })
          );
        })),
      (Ub = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Wb = new Ub()),
      (Gb = `--framer-will-change-override`),
      (Kb = `--framer-will-change-effect-override`),
      (qb = `--framer-will-change-filter-override`),
      (Jb = `--overflow-clip-fallback`),
      (Yb = `--one-if-corner-shape-supported`),
      (Xb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Zb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Zb || {})),
      (Y = Zb),
      (Qb = `framer-form-input`),
      ($b = `framer-form-input-wrapper`),
      (ex = `framer-form-input-empty`),
      (tx = `framer-form-input-forced-focus`),
      (X = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Ho(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (nx = [
        X(`.${Qb}`, {
          padding: X.variable(Y.Padding),
          background: `transparent`,
          fontFamily: X.variable(Y.FontFamily),
          fontWeight: X.variable(Y.FontWeight),
          fontSize: X.variable(Y.FontSize),
          fontStyle: X.variable(Y.FontStyle),
          color: X.variable(Y.FontColor),
          fontFeatureSettings: X.variable(Y.FontOpenType),
          fontVariationSettings: X.variable(Y.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: X.variable(Y.WrapperHeight, `100%`),
          letterSpacing: X.variable(Y.FontLetterSpacing),
          textAlign: X.variable(Y.FontTextAlignment),
          lineHeight: X.variable(Y.FontLineHeight),
        }),
        X(`.${Qb}:focus-visible`, { outline: `none` }),
      ]),
      (rx = [X(`.${$b}`, { overflow: `hidden` })]),
      (ix = `var(${Y.BorderTopWidth}) var(${Y.BorderRightWidth}) var(${Y.BorderBottomWidth}) var(${Y.BorderLeftWidth})`),
      (ax = [
        `.${$b}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Y.BorderRadiusTopLeft});
        border-top-right-radius: var(${Y.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Y.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Y.BorderRadiusBottomLeft});
        corner-shape: var(${Y.CornerShape});
        border-color: var(${Y.BorderColor});
        border-top-width: var(${Y.BorderTopWidth});
        border-right-width: var(${Y.BorderRightWidth});
        border-bottom-width: var(${Y.BorderBottomWidth});
        border-left-width: var(${Y.BorderLeftWidth});
        border-style: var(${Y.BorderStyle});
        transition: var(${Y.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (ox = `customError`),
      (sx = `valid`),
      (cx = 10),
      (lx = 8),
      (ux = 16),
      (dx = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${ux}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${ux}px`,
        backgroundColor: X.variable(Y.IconColor),
      }),
      (fx = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${ux}px`,
        boxSizing: `content-box`,
        padding: X.variable(Y.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...dx,
      }),
      (px = `--list-style-type`),
      (mx = `--max-list-digits`),
      (hx = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (gx = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (_x = { display: `inline-block` }),
      (vx = { display: `block` }),
      (yx = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${gx.display};
            flex-direction: ${gx.flexDirection};
            justify-content: ${gx.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Zo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Zo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Zo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${_x.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Zo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Zo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Zo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Zo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Zo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Zo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Zo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Zo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Zo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Zo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Zo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Zo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Zo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Zo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Zo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Zo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Zo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Zo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Zo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${vx.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${mx}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Qo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (bx = `--text-truncation-display-inline-for-safari-16`),
      (xx = `--text-truncation-display-none-for-safari-16`),
      (Sx = `--text-truncation-line-break-for-safari-16`),
      (Cx = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (wx = `(background: -webkit-named-image(i))`),
      (Tx = `(contain-intrinsic-size: inherit)`),
      (Ex = [
        `@supports ${wx} and (not ${Tx}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Cx.join(`, `)} { display: var(${bx}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Cx.map((e) => `${e}::after`).join(`, `)} { content: var(${Sx}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${xx}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${bx}, ${_x.display}) }
    }`,
      ]),
      (Dx = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Gb}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Gb}: transform; } }`,
                ]
              : [`body { ${Gb}: none; ${Kb}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${qb}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${qb}: filter; } }`,
                ]
              : [`body { ${qb}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Jb}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Yb}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...yx,
          ...Xb,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...Ex,
          f,
        ];
      }),
      (Ox = zo(() => Dx(!1))),
      (kx = zo(() => Dx(!0))),
      (Ax = Sn()),
      (jx = f.createContext(!1)),
      (Mx = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Nx = Tn() ? new Mx() : void 0),
      (Px = `data-framer-size-compatibility-wrapper`),
      (Fx = `0.000001px`),
      (Ix = ` translateZ(${Fx})`),
      (Lx = Dn() || Cn() || On()),
      (Rx = (() => {
        class e extends D {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ms(t) : hs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !xt(this.props, e);
          }
          componentDidUpdate(e) {
            fb(this.props).clip &&
              fb(this.props).radius === 0 &&
              fb(e).radius !== 0 &&
              _s(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (zx = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Bx = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: (e) => {
          let t = _a(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
        toHexValue: (e) => K.toHex(K(e)).toUpperCase(),
        toHex: (e) => K.toHexString(K(e)).toUpperCase(),
        toRgb: (e) => K.toRgb(K(e)),
        toRgbString: (e) => K.toRgbString(K(e)),
        toHSV: (e) => K.toHsv(K(e)),
        toHSL: (e) => K.toHsl(K(e)),
        toHslString: (e) => K.toHslString(K(e)),
        toHsvString: (e) => K.toHsvString(K(e)),
        hsvToHSLString: (e) => K.toHslString(K(aa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => K.toHex(K(aa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => K.toHexString(K(aa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => K.toRgbString(K(aa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => aa(e.h, e.s, e.v),
        rgbaToString: (e) => K.toRgbString(K(e)),
        rgbToHexValue: (e) => K.toHex(K(e)),
        rgbToHexString: (e) => K.toHexString(K(e)),
        hslToString: (e) => K.toHslString(K(e)),
        hslToRgbString: (e) => K.toRgbString(K(e)),
        toColorPickerSquare: (e) => K.toRgbString(K({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => K(e).isValid !== !1,
        equals: (e, t) =>
          K.isP3String(e) || K.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = K(e)),
              typeof t == `string` && (t = K(t)),
              K.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = K(e);
          return t.a === 1 ? K.toHexString(t) : K.toRgbString(t);
        },
        toFormatString: (e) => (K.isP3String(e) ? e : K.toRgbString(K(e))),
      }),
      (Vx = /var\(.+\)/u),
      (Hx = new Map()),
      (Ux = [`stops`]),
      (Wx = [`start`, `end`]),
      (Gx = [`angle`, `alpha`]),
      (Kx = {
        isLinearGradient: (e) => z(e) && Gx.every((t) => t in e) && (Ts(e) || ws(e)),
        hash: (e) => e.angle ^ Cs(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ss(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (qx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Jx = {
        isRadialGradient: (e) => z(e) && qx.every((t) => t in e) && (Ts(e) || ws(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Cs(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ss(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Yx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Xx = new Set([...Yx, ...Yx.map((e) => `${e}Capture`)])),
      (Zx = `overflow`),
      (Qx = { x: 0, y: 0, width: 200, height: 200 }),
      ($x = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (eS = T(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = is(e),
          l = Is(s),
          u = os(e),
          d = js(e),
          f = A(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": fb(e)[`data-framer-offset-parent-id`],
          };
        !Ls(e) && n && (fb(m)[`data-framer-name`] = n);
        let [h, g] = Fs(s),
          _ = Ps(s),
          v = Io(_),
          y = r && !(g && !v && wo(_)) ? r : void 0;
        (y ? (l.transformTemplate ||= as(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, ns(y, s.style)),
          fs(e, p));
        let b = lo(e),
          x = Rs(s, _, g, S(jx)),
          C = Po(
            ee(w, {
              children: [
                b
                  ? O(ao, {
                      alt: e.alt ?? ``,
                      image: b,
                      containerSize: g ?? void 0,
                      nodeId: e.id && rs(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                O(so, { ...a, border: i, layoutId: u }),
              ],
            }),
            x
          ),
          T = Ro(e.as),
          E = Lo(b);
        return (
          e.fitImageDimension &&
            E &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = E.width / E.height)),
          ee(T, { ...m, ...l, layoutId: u, style: h, ref: p, children: [C, o] })
        );
      })),
      (tS = es(
        T(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? O(eS, { ...e, ref: t }) : null;
        })
      )),
      (nS = `__LAYOUT_TREE_ROOT`),
      (rS = f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (iS = class extends D {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === nS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return O(rS.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (aS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (oS = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (sS = _(new Map())),
      (cS = typeof IntersectionObserver > `u` ? m_ : qs),
      (lS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (uS = f.createContext(null)),
      (dS = class extends D {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === nS && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return O(Ae.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (fS = (e) => {
        let t = f.useContext(rS);
        return O(dS, { ...e, sharedLayoutContext: t });
      }),
      (pS = f.createContext(!0)),
      (mS = _({ register: () => {}, deregister: () => {} })),
      (hS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Qs(),
          i = A({
            register: C(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: C(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          h(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, We(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          O(mS.Provider, { value: i, children: n })
        );
      }),
      (gS = f.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: x,
        isInitial: C,
      }) {
        let w = ce(),
          T = S(Se),
          { persistLayoutIdCache: E } = S(ob),
          D = A({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: tc({}, m, a),
          }),
          k = A(null),
          te = T !== null && !T.isPresent;
        (t && D.current.wasCurrent === void 0 && E(),
          h(() => {
            if (e || !w) return;
            if (te) {
              D.current = { ...D.current, wasBeingRemoved: te };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = D.current,
              o = (t && !i) || (!te && D.current.wasBeingRemoved && t),
              s = n && !r,
              c = tc(D.current.origins, m, a),
              l = D.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: y, ..._S, opacity: 0 }), (l = !0)),
              (D.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, te]));
        let ne = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          j = p ? { type: !1 } : f || d,
          M = { ..._ };
        ((M.left === void 0 || M.right === void 0) && (M.width = `auto`),
          (M.top === void 0 || M.bottom === void 0) && (M.height = `auto`));
        let re = (nc(a) || nc(m)) && (e || t || n) ? 1200 : void 0,
          ie = { ..._S, ...D.current.origins },
          N = e
            ? {
                initial: { ...ie, ...m },
                animate: { ...ie, ...a, transition: ne },
                exit: { ...ie, ...g, transition: d },
              }
            : { animate: w, exit: { ...ie, ...g, transition: j } },
          P = !(te || b === !1),
          ae = !!t && P,
          oe = t && C;
        return ee(tS, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || te || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: re,
          },
          children: [
            e &&
              O(tS, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: te ? void 0 : c,
              }),
            O(tS, {
              ...M,
              ...N,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: te ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: oe || e || (t && v) ? 1 : 0 },
              "data-is-present": P ? void 0 : !1,
              ref: k,
              children: O(uS.Provider, {
                value: k,
                children: O(pS.Provider, {
                  value: ae,
                  children: O(hS, {
                    isCurrent: ae,
                    isOverlayed: r,
                    children: O(fS, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: ne,
                      isExiting: !P,
                      isOverlayed: r,
                      id: x,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, ec)),
      (_S = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (vS = class {
        warning = () => {
          Gi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (yS = _(new vS())),
      (bS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (xS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (SS = O_(_S)),
      (CS = f.createContext(void 0)),
      (wS = f.createContext(void 0)),
      (TS = (() => {
        class e extends D {
          #e = null;
          state = xS();
          static defaultProps = { enabled: !0 };
          static contextType = CS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !po(t) || !fo(t)) return;
            let n = { ...bS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = oc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!po(t) || !fo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, bS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = oc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !po(e) || !fo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, bS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, bS.Fade, t);
          }
          push(e, t) {
            this.#i(e, rc(t), t);
          }
          modal(e, t) {
            this.#i(e, bS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, ic(t), t);
          }
          flip(e, t) {
            this.#i(e, ac(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, bS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = xc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                O(
                  gS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: jc(o, e),
                    transitionProps: u,
                    animation: Ac(o, e),
                    backfaceVisible: Oc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: O(zs, { children: Nc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              O(
                gS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Dc(n, t),
                  transitionProps: kc(n, t),
                  instant: jc(n, t, !0),
                  animation: Ac(n, t),
                  exitProps: e.transition.enter,
                  visible: Mc(n, t),
                  backdropColor: Tc(e.transition),
                  backfaceVisible: Ec(n, t),
                  onTapBackdrop: Pc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Nc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return O(tS, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: O(yS.Provider, {
                value: this,
                children: ee(wS.Provider, {
                  value: i,
                  children: [
                    O(gS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Sc(n),
                      animation: Cc(n),
                      backfaceVisible: wc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: O(La, {
                        children: O(iS, {
                          children: O(Me, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    O(Me, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (ES = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (DS = es(f.forwardRef(Fc))),
      Pe(f_(), 1),
      (OS = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(OS || {})),
      (kS = `optional`),
      (AS = `outputControls`),
      Pe(f_(), 1),
      Pe(f_(), 1),
      (jS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (MS = Symbol(`private`)),
      (NS = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [MS]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Ny(),
                reset() {
                  for (let t in i)
                    if (jS(i, t)) {
                      let n = jS(e, t) ? fb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, FS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[MS].reset()),
          (e.addObserver = (e, t) => e[MS].observers.add(t)),
          e
        );
      })()),
      (PS = class {
        set = (e, t, n, r) => {
          if (t === MS) return !1;
          let i = e[MS],
            a,
            o;
          if (
            (qi(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Py(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = fb(e)[t];
          if (l !== void 0) {
            qi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (fb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === MS) return fb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[MS].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(MS);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== MS) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (FS = new PS()),
      (IS = `opacity`),
      (LS = (() => {
        function e(t = {}) {
          let n = NS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => NS.resetObject(e));
          }),
          (e.addObserver = (e, t) => NS.addObserver(e, t)),
          e
        );
      })()),
      (RS = { update: 0 }),
      (zS = f.createContext({ update: NaN })),
      (BS = class extends D {
        observers = [];
        state = RS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), rb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), LS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            LS._stores.forEach((e) => {
              let t = LS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            O(zS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Pe(f_(), 1),
      (VS = `__framer__`),
      (HS = VS.length),
      (US = f.createContext(void 0)),
      (WS = f.createContext(void 0)),
      (GS = `ssr-variant`),
      (KS = `ssr-variant-group-separator`),
      (qS = f.forwardRef(function (e, t) {
        let n = rl(t),
          r = f.useContext(WS),
          i = f.useSyncExternalStore(y_, x_, b_),
          a = Ba(() => (i ? (Tn() ? 1 : 2) : 0)),
          o = f.useContext(US);
        return Kr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, dl(t, c, i));
            case 1:
              return ol(i, s, c, u, l, d, n, t);
            case 2:
              return ol(i, s, c, u, l, d, nl, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (JS = Hb(qS, `.${GS} { display: contents }`, `PropertyOverrides`)),
      (YS = `default`),
      (XS = new Set([YS])),
      (ZS = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = YS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return YS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = sl(r)) : YS;
        }
        setAll(e, t = XS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = We(n.transformTemplate) ? n.transformTemplate?.({}, $S) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (QS = new ZS()),
      ($S = `__Appear_Animation_Transform__`),
      (eC = `data-framer-appear-id`),
      (tC = `data-framer-appear-animation`),
      (nC = (e) => {
        if (Ua())
          return {
            animate: pl(e.animate) ? e.animate : void 0,
            initial: pl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (rC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (iC = (e) => ({
        x: N(e?.x ?? 0),
        y: N(e?.y ?? 0),
        opacity: N(e?.opacity ?? 1),
        scale: N(e?.scale ?? 1),
        rotate: N(e?.rotate ?? 0),
        rotateX: N(e?.rotateX ?? 0),
        rotateY: N(e?.rotateY ?? 0),
        skewX: N(e?.skewX ?? 0),
        skewY: N(e?.skewY ?? 0),
        transformPerspective: N(e?.transformPerspective ?? 0),
      })),
      (aC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (oC = { willChange: `transform` }),
      Object.freeze(oC),
      (sC = {}),
      Object.freeze(sC),
      (cC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (lC = () => {
        let e = A();
        return (
          h(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (uC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (dC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (fC = 1),
      (pC = 4),
      (mC = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (hC = [`animate`, `animate`]),
      (gC = { inputRange: [], outputRange: [] }),
      (_C = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (vC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (yC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (bC = [0, 1]),
      (xC = { parallax: uC, styleAppear: mC, styleTransform: _C, loop: cC, presence: dC }),
      (SC = O_(xC)),
      (CC = (e) => e.reduce((e, t) => (e += t), 0)),
      (wC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (TC = `current`),
      (EC = (e) =>
        f.forwardRef((t, n) => {
          if (t.__withFX)
            return O(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = nC(t);
          if (r) return O(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: p = !1,
            } = Il(t),
            m = Ws(n),
            { values: h, style: g } = Sl(s, m, p, t.style, t[me]),
            { values: _, style: v } = vl(i, m, t.style?.visibility),
            { values: y, style: b } = Pl(o, m),
            { values: x, style: S } = Al(a, m),
            { values: C, style: w } = gl(c, m),
            T = f.useMemo(() => {
              let e = new Le(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, _, x, C, h]);
          Rl(t.style, T);
          let E = Fe(T.scale, wC),
            D = Fe(T.opacity, wC),
            ee = Fe(T.x, CC),
            k = Fe(T.y, CC),
            te = Fe(T.rotate, CC),
            A = Fe(T.rotateX, CC),
            ne = Fe(T.rotateY, CC),
            j = Fe(T.skewX, CC),
            M = Fe(T.skewY, CC),
            re = Fe(T.transformPerspective, CC),
            { drag: ie, dragConstraints: N } = l;
          cs(ie && Ll(N) ? N : void 0);
          let P = {
            opacity: D,
            scale: E,
            x: ee,
            y: k,
            rotate: te,
            rotateX: A,
            rotateY: ne,
            skewX: j,
            skewY: M,
          };
          Je(d) && (P.transformPerspective = re);
          let ae = zl(t.animate) ? t.animate : void 0,
            oe = zl(t.initial) ? t.initial : void 0,
            se = zl(t.exit) ? t.exit : void 0,
            ce = p && !s.presenceInitial ? { initial: oe, animate: ae, exit: se } : {};
          return O(e, {
            ...l,
            ...ce,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...P, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (DC = _({})),
      (OC = f.createContext({})),
      (kC = f.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = rl(a);
        return O(OC.Provider, { value: o, children: s(r, i) });
      })),
      (AC = (e) =>
        f.forwardRef((t, n) =>
          O(e, { layoutId: os(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (jC = {}),
      (MC = () => jC),
      (NC = (e) => {
        jC = e;
      }),
      (PC = !1),
      (FC = class extends D {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Hl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              rt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          rn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Hl(e)) throw e;
          return ((PC = !0), this.props.children);
        }
      }),
      (IC = t === void 0 ? null : new Promise(() => {})),
      (LC = O(Ul, {})),
      (RC = _(!1)),
      (RC.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (zC = O(Gl, {})),
      (BC = class extends D {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (ql(this.props.getErrorMessage(), t?.componentStack), Kl(e, t));
        }
        render() {
          let { children: e, fallback: t = zC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (VC = class extends D {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Kl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (HC = f.createContext(void 0)),
      (UC = `code-crash:`),
      (WC = AC(
        f.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Ba(() => (t ? `${t}-container` : void 0)),
            d = Ro(n),
            p = su(
              f.Children.map(e, (e) =>
                f.isValidElement(e) ? f.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return O(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: O(jx.Provider, {
              value: !0,
              children: O(ny.Provider, {
                value: i ?? null,
                children: O(za, {
                  enabled: !1,
                  children: O(Ie, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (GC = f.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = su(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ro(f);
          return O(ny.Provider, {
            value: a ?? null,
            children: O(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return O(ny.Provider, {
            value: a ?? null,
            children: O(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (qC = new Set()),
      (JC = _({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (YC = `framer-cursor-none`),
      (XC = `framer-pointer-events-none`),
      (ZC = n(function ({ children: e }) {
        let t = Ba(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = pu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = _e();
        return ee(JC.Provider, { value: t, children: [e, !n && O(tw, {})] });
      })),
      (QC = Hb(
        ZC,
        [
          `.${YC}, .${YC} * { cursor: none !important; }`,
          `.${XC}, .${XC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      ($C = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (ew = `data-framer-portal-id`),
      (tw = n(function () {
        let { onRegisterCursors: e } = S(JC),
          t = fu(!1),
          n = ve(0),
          i = ve(0),
          a = ve(0),
          o = A(null),
          s = A({ cursors: {}, cursorHash: void 0 }),
          c = ss();
        (h(() => {
          if (!t) return;
          let e = 0,
            r = 0;
          function l() {
            (n.set(e), i.set(r), Te(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (qe(s.current.cursors)) return;
            let t = _u(e, r);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), He.update(() => c()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              ze(u);
              return;
            }
            (He.read(u, !0), (e = t.clientX), (r = t.clientY), He.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            He.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            G.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            He.read(u, !0),
            () => {
              (G.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ze(u));
            }
          );
        }, [a, n, i, c, t]),
          h(() => {
            if (!t) return;
            function e() {
              Te(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              G.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), G.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          r(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = qe(e) ? null : _u(n.get(), i.get())),
                c());
            }
            let r = e(t);
            return () => {
              (r(), document.body.classList.toggle(YC, !1));
            };
          }, [n, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = mu(d);
        r(() => {
          t && document.body.classList.toggle(YC, f);
        }, [f, t]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          g = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = ue(n, g),
          v = ue(i, g),
          b = Fe(() => _.get() + (d?.offset?.x ?? 0)),
          x = Fe(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          T = d?.placement,
          E = C((e, t) => `translate(${gu(T, w)}) ${t}`, [w, T]);
        return !t || !d || !p
          ? null
          : O(y, {
              children: O(p, {
                transformTemplate: E,
                style: { ...$C, x: b, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: XC,
              }),
            });
      })),
      (nw = `webPageId`),
      (rw = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((h_ && !On()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(bu(e), e), this.collectedLinks.set(bu(t), t));
          let n = this.nestingInfo.get(bu(e)) ?? new Set();
          (n.add(bu(t)), this.nestingInfo.set(bu(e), n));
        }
      }),
      (iw = new rw()),
      (aw = `element`),
      (ow = `collection`),
      (sw = `collectionItemId`),
      (cw = `pathVariables`),
      (lw = `framer/page-link,`),
      (uw = _(void 0)),
      (dw = `--text-selection-color`),
      (fw = `--text-selection-background-color`),
      (pw = Hb(Ru, (e, t) => Lu(t?.triggerId), `InjectSelectionStyle`)),
      (mw = {
        isClockwise: (e) => mw.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            !i || !a || (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (Qi.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (Qi.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = J.boundingRectFromPoints(e),
            r = J.boundingRectFromPoints(t);
          if (!J.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(Ob(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(Ob(e, r));
          });
          for (let e of i) for (let t of o) if (Ob.intersection(e, t, !0)) return !0;
          return !!(mw.containsPoint(t, e[0]) || mw.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!mw.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = J.edges(t),
            r = new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (J.containsPoint(t, c)) {
              let e = zu(c);
              if ((r.add(e), o.push(c), J.containsPoint(t, l))) continue;
            }
            let u = Ob(c, l);
            n.forEach((e) => {
              let t = Ob.intersection(u, e, !0);
              if (!t) return;
              let n = zu(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (J.points(t).forEach((t) => {
                mw.containsPoint(e, t) && (r.add(zu(t)), a.push(t));
              }),
              Qi.sortClockwise([...o, ...a]));
        },
      }),
      (hw = 5),
      (gw = 4),
      (_w = (() => {
        let e = f.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (vw = `overlay`),
      (yw = `template-overlay`),
      (bw = class extends D {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((t.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(rt(g_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          rn(`published_site_load_error`, { message: String(e), stack: n });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (g_ && document.getElementById(`main`)?.innerHTML) || ``;
          return O(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${rt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Sw = /:([a-z]\w*)/gi),
      (Cw = _(void 0)),
      (ww = new Map()),
      (Tw = 500),
      (Ew = 500),
      (Ow = !1),
      (kw = 500),
      (Aw = 0.9),
      (jw = 1.7),
      (Mw = 4),
      (Nw = 1 / 0),
      (Pw = new WeakMap()),
      (Fw = new Set()),
      (Iw = new Map()),
      (Lw = !zv || typeof IntersectionObserver > `u` ? null : jd()),
      (Rw = pd(
        T(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = wt(),
            m = Et(),
            h = _d(),
            { activeLocale: g, locales: _ } = qn(),
            v = Rd(),
            y = Yn(),
            x = xu(),
            S = zd({ nodeId: c, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = s(() => {
              if (!t) return {};
              let e = yu(t) ? t : Ou(t);
              if (!e) return {};
              if (L(e))
                return Yd(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (et(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = md(p, m, e, g, c, h),
                x = Nd(n, !0),
                C = x === `_blank`,
                w = Jd(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = Ud(u, w, (e) =>
                  Vd(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: x,
                onClick: Hd(u, S, E),
                "data-framer-page-link-current": (m && vd(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, y]),
            w = Ws(b(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: ee,
              _navigationUrl: k,
              ...te
            } = C;
          Gs(
            w,
            (e) => {
              if (!(e === null || !D || !E || !k || x))
                return Lw?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`, k);
            },
            [E, D, O, ee, k, x]
          );
          let A = !!T;
          return ju(
            rl(f).cloneAsArray(e, (e) => Xd(e, { ...d, ...Qd(te, u, A) }, w)),
            l,
            c,
            t,
            C,
            w
          );
        })
      )),
      (zw = `framer`),
      (Bw = 3),
      (Vw = 30),
      (Hw = 1e4),
      (Uw = `__framer`),
      (Ww = `3`),
      (Gw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (Kw = Date.now()),
      (qw = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (Jw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (Yw = () => ((Date.now() - Kw) / 1e3).toFixed(2)),
      (Xw = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          f.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          f.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = Yw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = Yw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = Yw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          O(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (Zw = { state: `pending` }),
      (Qw = { state: `success` }),
      ($w = { state: `incomplete` }),
      (eT = { state: `complete` }),
      (tT = { state: `error` }),
      (nT = f.createContext(void 0)),
      (rT = f.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        l
      ) {
        let d = f.useRef(null),
          p = de(l, d),
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = cf(),
          _ = wt(),
          v = Et(),
          y = _d(),
          b = hn(),
          [x, C] = f.useReducer(ff, $w),
          { activeLocale: w, locales: T } = qn(),
          E = S(nT),
          D = f.useRef({ onSuccess: r, onError: i, onLoading: a });
        D.current = { onSuccess: r, onError: i, onLoading: a };
        let k = f.useRef(!1);
        async function te(e) {
          if (L(e)) {
            let t = hd(_, e, y, T);
            if (!t) {
              hf(e, d);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          B(
            yu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Id(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, b),
            { routeId: n, elementId: r, pathVariables: i } = md(_, v, e, w, t, y);
          _.navigate?.(n, r, i);
        }
        let A = (e) => {
          (e.preventDefault(), ne(e.currentTarget));
        };
        async function ne(t) {
          if (!e || !E || k.current) return;
          ((k.current = !0), h());
          let r = new FormData(t),
            i = rf(t);
          (await Mv({ priority: `user-visible`, continueAfter: `paint` }),
            g(r),
            u(() => C({ type: `submit` })),
            sf(r, G.document));
          for (let [e, t] of r) t instanceof File && r.delete(e);
          try {
            (D.current.onLoading?.(),
              uf({ router: _, nodeId: s, submitTrackingId: o, activeLocale: w }),
              await _f(e, r, i, E),
              u(() => C({ type: `success` })),
              D.current.onSuccess?.(),
              n && (await te(n)));
          } catch (e) {
            (u(() => C({ type: `error` })), D.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let j = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), A(e)));
          },
          M = async (e) => {
            let t = e.currentTarget;
            (await Mv({ priority: `background`, continueAfter: `paint` }),
              u(() => C({ type: gf(t) ? `incomplete` : `complete` })));
          };
        li(d, (e) => void ne(e));
        let re = f.useMemo(() => t(x), [t, x]);
        return ee(P.form, {
          ...c,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: pf(x) ? A : mf,
          onKeyDown: j,
          onChange: M,
          ref: p,
          children: [
            re,
            O(lf, { states: m }),
            O(`script`, { dangerouslySetInnerHTML: { __html: ci() } }),
            ee(`noscript`, {
              children: [
                O(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                O(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                O(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (iT = `__framer_force_showing_editorbar_since`),
      (aT = class extends D {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (oT = () => {
        try {
          return !!localStorage[iT];
        } catch {
          return !1;
        }
      }),
      (sT = () => !oT()),
      (cT = (() => {
        let e = _(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (lT = null),
      (uT = null),
      v_(wf),
      (dT = (e, n, r, i, a, o) => {
        let s = S(nT),
          c = A(),
          l = hn(),
          u = A(!0);
        return (
          h(() => {
            function d() {
              (!lT || !uT) && wf();
              let t = r ? new URL(r, G.location.href) : G.location,
                c = {
                  version: nv,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: lT,
                  locale: uT,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && L(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (et(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = d()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                u.current ? (u.current = !1) : rn(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), rn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              t.addEventListener(`pageshow`, f),
              () => {
                t.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (fT = 0),
      (pT = 500),
      (mT = 200),
      (hT = `main`),
      (gT = `framerGeneratedPage`),
      (_T = `<!-- Start of headStart -->`),
      (vT = `<!-- End of headStart -->`),
      (yT = `<!-- Start of headEnd -->`),
      (bT = `<!-- End of headEnd -->`),
      (xT = `<!-- Start of bodyStart -->`),
      (ST = `<!-- End of bodyStart -->`),
      (CT = `<!-- Start of bodyEnd -->`),
      (wT = `<!-- End of bodyEnd -->`),
      (TT = f.createContext(void 0)),
      (ET = { status: `loading`, data: void 0 }),
      (DT = 5e3),
      (OT = () => {}),
      (kT = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = _p(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = _p(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = G.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              xp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Qc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && xp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Tn() || !Cu(e.url, !1)) return;
          let t = _p(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = bp(n, e);
          return (e.resultOutputType === `image` && L(i) && (await mp(i).catch(OT)), i);
        }
        async fetchWithCache(e) {
          if (!Tn()) return;
          let t = _p(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && xp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, ET);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Cu(r, !1)) return OT;
          let a = _p(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (AT = _(void 0)),
      (jT = _(!0)),
      (MT = ({ children: e, client: t }) => {
        let [n] = k(() => t ?? new kT()),
          [r, i] = k(!0);
        return (
          h(
            () => (
              n.hydrateCache(),
              u(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          O(jT.Provider, { value: r, children: O(AT.Provider, { value: n, children: e }) })
        );
      }),
      (NT = (() => {
        let e = _(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Ne.WillChange = Re),
      (PT = pd(
        T(function ({ links: e, children: t, ...n }, r) {
          return rl(r)(t(wp((t) => e.map(t), [e])), n);
        })
      )),
      (FT = { priority: void 0, canYield: !0 }),
      (IT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Up(e, t);
            case `boolean`:
              return Gp(e);
            case `color`:
              return Jp(e);
            case `date`:
              return Xp(e);
            case `enum`:
              return Qp(e);
            case `file`:
              return em(e);
            case `link`:
              return nm(e);
            case `number`:
              return im(e);
            case `object`:
              return sm(e, t);
            case `responsiveimage`:
              return lm(e);
            case `richtext`:
              return dm(e);
            case `string`:
              return hm(e);
            case `vectorsetitem`:
              return pm(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ge(e)
            ? { type: `boolean`, value: e }
            : Ze(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : Ke(e)
                    ? { type: `array`, value: e.map(IT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && _m(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && _m(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && _m(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && _m(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && _m(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => IT.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => IT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = gm(e),
            i = gm(t);
          return Ye(r) || Ye(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = gm(e),
            i = gm(t);
          return Ye(r) || Ye(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = gm(e),
            i = gm(t);
          return Ye(r) || Ye(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(IT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (LT = { type: `unknown`, isNullable: !0 }),
      (RT = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Wc(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (Xe(i)) continue;
            let a = this.schema[t];
            if (!Je(a)) {
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await vm(this.collection, this.locale))[t]?.[n];
          return F_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await vm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = kp(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await vm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = kp(t);
            e && (await e);
            let a = n[Number(i)];
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (zT = new Map()),
      (BT = new WeakMap()),
      (VT = `$r_`),
      (HT = new Map()),
      (UT = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = jm(e, t)), (this.priority = Tm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Pp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Np(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          B(Om(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return $e(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(Am(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return $e(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (WT = `index`),
      (GT = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), W(this.name, ...e));
        }
      }),
      (KT = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new JT();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (qT = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
      }),
      (JT = class extends GT {
        name = `Indexes`;
      }),
      (YT = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Dm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: km(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends GT {
        name = `Fields`;
      }),
      (XT = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return W(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (ZT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return W(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== WT) return !1;
          return !0;
        }
      }),
      (QT = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return W(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      ($T = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new ZT();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new QT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (eE = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Fm(),
            i = Im(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (tE = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (nE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (rE = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (iE = class extends rE {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Ap(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return jp(this.evaluate(void 0), void 0, e);
        }
      }),
      (aE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return W(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (oE = class e extends iE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new QT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new aE(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Pp(
              n.tuples.map((t) =>
                Pp(
                  this.projections.map((n) => Np({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new tE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (sE = { type: 0 }),
      (cE = class extends rE {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Ap(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return jp(this.evaluate(void 0, void 0));
        }
      }),
      (lE = { type: 0 }),
      (uE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return W(`CaseCondition`, this.when, this.then);
        }
      }),
      (dE = class e extends cE {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new uE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Np({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Pp(
              this.conditions.map((n) =>
                Np({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (IT.equal(n, e, lE)) return t;
          } else for (let { when: e, then: t } of r) if (Kp(e)) return t;
          return i;
        }
      }),
      (fE = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new $T();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new ZT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Je(t)) continue;
                a.add(t.field);
                let r = new XT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new YT(Pm(this.fieldId++), void 0, t.definition, void 0),
                  a = new aE(t, r);
                i.push(a);
                let s = new XT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Je(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = Pm(this.fieldId++),
                a = n.alias,
                s = new YT(r, a, t.definition, void 0),
                c = new aE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Sm(t.data, this.locale),
            i = t.alias,
            a = new KT(Mm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new YT(Pm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new YT(Pm(this.fieldId++), WT, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: WT, collectionName: i });
            let t = new ZT(),
              r = new XT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new ZT(),
              o = new qT(Nm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new ZT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              V(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              V(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(LT, null);
        }
        buildLiteralValue(e) {
          let t = IT.parse(e.value);
          return this.normalizer.newScalarConstant(LT, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new pE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new pE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new uE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              V(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              V(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (pE = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (mE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return W(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new QT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Pp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Kp(n[t] ?? null));
        }
      }),
      (hE = class e extends iE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return W(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * eE : 50 * eE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Dp()),
            i = Dp(),
            a = [];
          for (let n of r) {
            let r = kp(i);
            r && (yield r);
            let o = new tE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new nE(n, a);
        }
      }),
      (gE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new QT(new ZT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (_E = class e extends iE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return W(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * eE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Dp()),
            r = Dp(),
            i = [];
          for (let a of n) {
            let n = kp(r);
            n && (yield n);
            let o = new tE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new nE(t, i);
        }
      }),
      (vE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new QT(new ZT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (yE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Kp(n) && Kp(r) };
        }
      }),
      (bE = class extends cE {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return W(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (xE = { type: 0 }),
      (SE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.contains(n, r, xE) };
        }
      }),
      (CE = { type: 0 }),
      (wE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.endsWith(n, r, CE) };
        }
      }),
      (TE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.equal(n, r, sE) };
        }
      }),
      (EE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.greaterThan(n, r, sE) };
        }
      }),
      (DE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.greaterThanOrEqual(n, r, sE) };
        }
      }),
      (OE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.lessThan(n, r, sE) };
        }
      }),
      (kE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.lessThanOrEqual(n, r, sE) };
        }
      }),
      (AE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !IT.equal(n, r, sE) };
        }
      }),
      (jE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Kp(n) || Kp(r) };
        }
      }),
      (ME = { type: 0 }),
      (NE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.startsWith(n, r, ME) };
        }
      }),
      (PE = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof mE) {
            if (e.predicate instanceof yE) {
              let n = new gE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof jE) {
              let n = new vE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof _E)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new hE(n, Lm(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof mE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof _E)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof TE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof AE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof OE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof kE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof EE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof DE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof bE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof SE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof bE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof bE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof wE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof bE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Lm(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new hE(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (FE = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new IE();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (IE = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (LE = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (RE = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new FE(Rm(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new LE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (zE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new QT(new ZT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new nE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new tE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof TE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new nE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new tE();
              (n.merge(i),
                n.merge(a),
                Kp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (BE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new QT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Np({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = am(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (VE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new QT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Np({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = am(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (HE = class e extends cE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return W(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) Je(n.collection) || e.add(n);
          return new QT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new tE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (UE = class e extends cE {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return W(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return IT.cast(n, this.definition);
        }
      }),
      (WE = class e extends cE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return W(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (Je(this.field.collection) || e.add(this.field), new QT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new tE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (GE = { type: 0 }),
      (KE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: IT.in(n, r, GE) };
        }
      }),
      (qE = { type: 1 }),
      (JE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: IT.indexOf(n, r, qE) };
        }
      }),
      (YE = class extends Error {}),
      (XE = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return W(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Bm(n),
            a = Bm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (ZE = class e extends cE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: IT.length(n) };
        }
      }),
      (QE = class e extends cE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Kp(yield* this.input.evaluate(e, t)) };
        }
      }),
      ($E = { type: 0 }),
      (eD = class e extends cE {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !IT.in(n, r, $E) };
        }
      }),
      (tD = class extends cE {
        constructor(e, t) {
          B(e.name !== WT, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return W(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (nD = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new _E(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new hE(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new zE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof bE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof zE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new mE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new oE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof oE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new BE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new VE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof bE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new tD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new bE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof QE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof TE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof AE) return this.newScalarEquals(e.left, e.right);
          if (e instanceof OE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof kE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof EE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof DE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof yE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof jE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new QE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof bE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof bE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof bE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof bE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new yE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof bE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof bE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof bE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof bE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new jE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new TE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new AE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new OE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new kE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new EE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof tD;
          if (t instanceof tD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new DE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new KE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new eD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new uE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new dE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new SE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new NE(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new wE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new ZE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new JE(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new HE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new WE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new XE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new UE(e, t);
          return this.finishScalar(n);
        }
      }),
      (rD = class extends iE {}),
      (iD = class e extends rD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return W(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new QT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * eE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Vm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new tE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (aD = { type: 0 }),
      (oD = class e extends rD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== WT && (Je(e.collection) || t.add(e));
          return new QT(new ZT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === WT) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!IT.equal(a, o, aD)) {
                if (Ye(a) || IT.lessThan(a, o, aD)) return i ? -1 : 1;
                if (Ye(o) || IT.greaterThan(a, o, aD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (sD = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new RE();
        normalizer = new nD(this.memo);
        explorer = new PE(this.normalizer);
        optimize(e) {
          let t = new fE(this.normalizer, this.query, this.locale).build(),
            n = kp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new iD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new oD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (cD = Tp(`query-engine`)),
      (lD = class {
        async evalQuery(e, t, n, r) {
          cD.enabled &&
            cD.debug(`Query:
${eh(e)}`);
          let i = new UT(e, t, r),
            a = new sD(e, t, i),
            o = kp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = et(s) ? await s : s,
            u = kp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = kp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Np(a, r)));
          }
          let h = Mp(Pp(m, r), r);
          return n ? [et(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new UT(t, n, r);
          return Mp(
            Pp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Np(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (uD = iv.QueryCache),
      (dD = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = sv === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = rh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Em(n) ?? `user-visible`,
              o = Em(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Fn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              sv !== void 0 &&
                this.serializedCache !== void 0 &&
                !ym(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && sv.set(uD, r, e);
            }
            return i.value;
          }
          let a = new F_(() => {
            let i = ym(r),
              a = i ? void 0 : un(uD, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                cn(e, r);
              }
            return sv !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), sv.set(uD, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (fD = new dD(new lD())),
      (pD = `style[data-framer-breakpoint-css]`),
      (mD = `page`),
      (hD = Symbol(`cycle`)),
      (vD = (() => {
        let e = _(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (yD = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (bD = { inputRange: [], outputRange: [] }),
      (xD = (e) =>
        f.forwardRef((t, n) => {
          if (q.current() === q.canvas) return O(e, { ...t, ref: n });
          let [r, i] = el(t, yD),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: p,
            } = r,
            [m, h] = f.useState(o),
            g = f.useRef(!1),
            _ = Ws(n);
          Js(
            _,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  f.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = Dt(),
            y = f.useRef(v);
          return (
            f.useEffect(() => {
              if (p || !u) return;
              y.current !== v && ((y.current = v), f.startTransition(() => h(o)));
              let e = {},
                t;
              return M((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = zh(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(pe(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  f.startTransition(() => {
                    h(l);
                  }));
              });
            }, [v, s, c, u, t.variant, p, d]),
            El(p, (e) => f.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Ot(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              f.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? O(e, { ...i, variant: m ?? t.variant, ref: _ })
              : O(e, { ...i })
          );
        })),
      (SD = f.createContext(void 0)),
      (CD = () => f.useContext(SD)),
      Pe(p_(), 1),
      (wD = (e) => e.target.value),
      (TD = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (ED = T(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: l,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: S,
            onFocus: w,
            onValid: T,
            onClear: E,
            ...D
          } = e,
          k = Vh(_ ?? v, h),
          [te, A, ne] = Bh(k ?? ``, !0, b),
          j = hi(k),
          M = C(() => {
            (A(``), E && u(() => E()));
          }, [E, A]),
          re = Go(T, S, ne, x, w),
          ie = C(
            (e) => {
              e.target === e.currentTarget && j.current?.focus();
            },
            [j]
          );
        if (h === `hidden`) return O(P.input, { type: `hidden`, name: s, defaultValue: v });
        let N = y === !1 ? TD : void 0,
          ae = !!te,
          oe = !!E && ae,
          se = $c($, $b, o, h === `text` && DD, h === `textarea` && OD);
        return ee(P.div, {
          ref: t,
          onClick: ie,
          style: m,
          className: se,
          ...D,
          children: [
            h === `textarea`
              ? O(P.textarea, {
                  ref: j,
                  ...N,
                  ...re,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Qb,
                  value: te,
                  maxLength: g,
                })
              : O(P.input, {
                  ref: j,
                  ...N,
                  ...re,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: $c(Qb, !ae && ex),
                  value: te,
                  min: l,
                  max: c,
                  step: p,
                  maxLength: g,
                }),
            oe &&
              O(`button`, {
                type: `button`,
                className: kD,
                onClick: M,
                "aria-label": `Clear`,
                children: O(Hh, {}),
              }),
          ],
        });
      })),
      ($ = `framer-form-text-input`),
      (DD = `framer-form-text-input-type`),
      (OD = `framer-form-textarea-input-type`),
      (kD = `framer-form-text-input-clear`),
      (AD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (jD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (MD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (ND = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (PD = Hb(
        ED,
        [
          ...nx,
          ...ax,
          ...rx,
          X(`.${$b}`, {
            boxShadow: X.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: X.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: X.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: X.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: X.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: X.variable(`--framer-input-corner-shape`),
            background: X.variable(`--framer-input-background`),
            transition: X.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          X(`.${$} .${Qb}::placeholder`, { color: X.variable(`--framer-input-placeholder-color`) }),
          X(`.${$}`, {
            display: `flex`,
            alignItems: `center`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${Qb}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          X(`.${$}.${OD}`, { padding: 0 }),
          X(`.${$}.${OD} textarea.${Qb}`, {
            width: `100%`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${Qb}[type="date"], .${$} .${Qb}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          X(`.${$} .${Qb}::-webkit-date-and-time-value`, { textAlign: `start` }),
          X(`.${$} textarea`, {
            display: `flex`,
            resize: X.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          X(`.${$} textarea::-webkit-resizer`, { background: `no-repeat ${tt(AD)}` }),
          X(`.${$}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${tt(jD)}` }),
          X(`.${$} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          X(`.${$} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          X(`.${$} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          X(`.${$} .${Qb}::-webkit-datetime-edit`, {
            height: X.variable(`--framer-input-font-line-height`),
          }),
          X(`.${$} .${Qb}.${ex}::-webkit-datetime-edit`, {
            color: X.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": X.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          X(`.${$}.${DD}::before`, {
            content: X.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${ux}px`,
            height: `${ux}px`,
            marginRight: `${lx}px`,
            ...dx,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: X.variable(`--framer-input-icon-mask-image`),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${Qb}[type="date"]::before, .${$} .${Qb}[type="time"]::before`, {
            ...fx,
            paddingLeft: `${cx}px`,
            maskPosition: `${cx}px center`,
            backgroundPosition: `${cx}px center`,
          }),
          X(`.${$} .${Qb}[type="date"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, tt(MD)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${Qb}[type="time"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, tt(ND)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${Qb}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: X.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${ux}px`,
            height: `100%`,
          }),
          X(`.${$}:focus-within, .${$}.${tx}`, {
            boxShadow: X.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: X.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          X(`.${$}:focus-within::after, .${$}.${tx}::after`, {
            borderColor: X.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: X.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: X.variable(`--framer-input-focused-border-width`, ix),
          }),
          X(`.${kD}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${ux}px`,
            height: `${ux}px`,
            marginLeft: `${lx}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: X.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          X(`.${kD}:hover, .${kD}:focus-visible`, {
            color: X.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (FD = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (ID = { opacity: 0 }),
      (LD = { opacity: 1 }),
      (RD = $h(
        f.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...l
            } = e,
            d = { ...c },
            p = s(() => Lo(n), [n]),
            [m, h] = k();
          f.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                u(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            ee(Ro(e.as), {
              ...l,
              style: d,
              ref: t,
              draggable: a,
              children: [n && O(ao, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (BD = !wn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (VD =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (HD = `{{ text-placeholder }}`),
      (UD = `rich-text-wrapper`),
      (WD = es(
        T(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: g,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: E = q.current,
              withExternalLayout: D = !1,
              positionSticky: ee,
              positionStickyTop: k,
              positionStickyRight: te,
              positionStickyBottom: ne,
              positionStickyLeft: j,
              __htmlStructure: M,
              __fromCanvasComponent: re = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: N,
              _usesDOMRect: ae,
              children: oe,
              ...se
            } = e,
            ce = Ao(),
            le = os(e),
            ue = A(null),
            de = t ?? ue,
            { navigate: fe, getRoute: pe } = wt(),
            me = Et();
          (Xn(e.preload ?? []), fs(e, de));
          let he = S(jx),
            ge = xu(),
            F = o,
            _e = ie ?? n;
          if (_e && N) {
            let e = N[_e];
            typeof e == `string` && (F = e);
          }
          let ve = ``;
          if (F) {
            let e = tg(F);
            ve = M ? M.replace(HD, e) : `<p>${e}</p>`;
          } else if (i) ve = i;
          else if (c) {
            let e = tg(c);
            ve = M ? M.replace(HD, e) : `<p>${e}</p>`;
          } else a && (ve = a);
          let ye = _d(),
            be = s(() => (ge || !pe || !me ? ve : ng(ve, pe, me, ye)), [ve, pe, me, ye]);
          if (
            (h(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = dd(e.target, de.current);
                jn(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Du(fe, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ye]),
            ag(l, re, de),
            !b)
          )
            return null;
          let xe = T && E() === q.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: ig(w),
              opacity: xe ? 0 : x,
              flexShrink: 0,
            },
            Se = q.hasRestrictions(),
            Ce = Do(e, ce || 0, !1),
            we = ae && (u === `auto` || d === `auto`),
            Te = !!e.transformTemplate || !Ce || !Se || re || we,
            Ee = Te ? (e.transformTemplate ?? as(_)) : void 0;
          if (!D) {
            if (Ce && Se && !we) {
              let e = Py.getNumber(C).toFixed(4);
              ((I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`),
                (I.width = Ce.width),
                (I.minWidth = Ce.width),
                (I.height = Ce.height));
            } else
              ((I.left = f),
                (I.right = p),
                (I.top = m),
                (I.bottom = g),
                (I.width = u),
                (I.height = d),
                (I.rotate = C));
            ee
              ? (!ge || he) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = k),
                (I.right = te),
                (I.bottom = ne),
                (I.left = j))
              : ge && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            Zc(e, I),
            Jc(e, I),
            Object.assign(I, e.style),
            O(P.div, {
              id: n,
              ref: de,
              ...se,
              ...ns(Te ? _ : void 0, e.style),
              style: I,
              layoutId: le,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: $c(v, y, UD),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: be },
            })
          );
        })
      )),
      (GD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (KD = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (qD = T(function (e, t) {
        return O(`svg`, { ...e, ref: t, children: e.children });
      })),
      (JD = P.create(qD)),
      (YD = T(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return O(JD, {
          ...r,
          ref: i,
          viewBox: t,
          children: O(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (XD = []),
      (ZD = `RichTextContainer`),
      (QD = T(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = q.current,
            fonts: p = XD,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: x,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: E = 0,
            style: D,
            _initialStyle: ee,
            stylesPresetsClassNames: k,
            text: te,
            top: ne,
            verticalAlignment: j = `top`,
            visible: M = !0,
            width: re,
            withExternalLayout: ie = !1,
            viewBox: N,
            viewBoxScale: P = 1,
            effect: ae,
            ...oe
          } = e,
          se = Ao(),
          ce = f(),
          le = ce === q.canvas,
          ue = le || ce === q.export,
          de = S(jx),
          fe = os(e),
          pe = A(null),
          me = t ?? pe;
        (fs(e, me), ag(p, n, me));
        let he = mg(ae, me),
          ge = s(() => {
            if (d) return Sg(d, k, te, o, void 0, he.getTokenizer());
          }, [d, k, te, o, he]);
        if (!M) return null;
        let F = { opacity: h && le ? 0 : v },
          _e = ig(j);
        _e !== gx.justifyContent && (F.justifyContent = _e);
        let ve = {},
          ye = q.hasRestrictions(),
          be = Do(e, se || 0, !1),
          xe = a && (re === `auto` || m === `auto`),
          I = !!e.transformTemplate || !be || !ye || n || xe,
          Se = I ? (e.transformTemplate ?? as(u)) : void 0;
        (ie ||
          (be && ye && !xe
            ? ((ve.x = be.x + (R(D?.x) ? D.x : 0)),
              (ve.y = be.y + (R(D?.y) ? D.y : 0)),
              (ve.left = 0),
              (ve.top = 0),
              (F.rotate = Py.getNumber(E)),
              (F.width = be.width),
              (F.minWidth = be.width),
              (F.height = be.height))
            : ((F.left = g),
              (F.right = T),
              (F.top = ne),
              (F.bottom = l),
              (F.width = re),
              (F.height = m),
              (F.rotate = E)),
          y
            ? (!ue || de) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = w),
              (F.right = C),
              (F.bottom = b),
              (F.left = x))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Zc(e, F),
          Jc(e, F),
          Object.assign(F, ee, D, ve),
          fe && (oe.layout = `preserve-aspect`));
        let Ce = Ro(e.as),
          we = oe[`data-framer-name`] ?? _,
          Te = le ? yg(fb(oe)) : oe,
          Ee = ns(I ? u : void 0, D);
        return L(e.viewBox)
          ? e.as === void 0
            ? O(YD, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                viewBox: N,
                viewBoxScale: P,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": ZD,
                children: ge,
              })
            : O(Ce, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": ZD,
                children: O(YD, {
                  viewBox: N,
                  viewBoxScale: P,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : O(Ce, {
              ...Te,
              ...Ee,
              ref: me,
              style: F,
              layoutId: fe,
              transformTemplate: Se,
              "data-framer-name": we,
              "data-framer-component-type": ZD,
              children: ge,
            });
      })),
      ($D = es(
        T(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return O(WD, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return O(QD, { ...r, ref: i, children: b(a) ? a : void 0 });
        })
      )),
      (eO = `framer/asset-reference,`),
      (tO = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Fg(t);
        return O(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: O(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (nO = Tn()),
      (rO = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (iO = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (aO = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(zx(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Ig(e);
            (s &&
              (t && Lg(s, n),
              (s.id = n),
              (o = Hg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          nO && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = iO),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          nO && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new rO(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !nO) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        nO && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${iO}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (oO = new aO()),
      (sO = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (cO = T(function (e, t) {
        let n = Ao(),
          r = os(e),
          i = f.useRef(null),
          a = t ?? i,
          o = CD();
        return (
          fs(e, i),
          O(uO, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (lO = 5e4),
      (uO = class e extends Rx {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...Rx.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Do(e, e.parentSize || 0);
        }
        container = f.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Do(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (oO.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Kg(this.container, this.props);
        }
        componentWillUnmount() {
          (oO.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Db.isImageObject(t) &&
            Db.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            _s(this.svgElement, `fill`, null, !1),
            Kg(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = Py.getNumber(r);
          if (
            ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1), q.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              wo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = ib;
            if (l === q.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: _,
            requiresOverflowVisible: v,
            ...y
          } = this.props;
          if (!f && (!t || !e)) return null;
          let b = e ?? l ?? `svg`,
            x = this.frame,
            S = x || { width: o || 100, height: a || 100 },
            C = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            T = {};
          (this.collectLayout(C, T),
            Kc(this.props, C),
            Zc(this.props, C),
            Rx.applyWillChange(this.props, C, !1));
          let E = null;
          if (typeof r == `string` || K.isColorObject(r)) {
            let e = K.isColorObject(r) ? r.initialValue || K.toRgbString(r) : r;
            ((C.fill = e), (C.color = e));
          } else if (Kx.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Kx.hash(t)}`;
            C.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = Dg(t, b);
            E = O(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: O(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  O(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Jx.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Jx.hash(t)}`;
            C.fill = `url(#${n})`;
            let i = Og(t, b);
            E = O(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: O(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  O(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Db.isImageObject(r)) {
            let e = Ng(r, S, b);
            e &&
              ((C.fill = `url(#${e.id})`),
              (E = O(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: O(`defs`, { children: O(tO, { ...e }) }),
              })));
          }
          let D = { "data-framer-component-type": `SVG` },
            k = !x;
          Object.assign(D, ns(k ? this.props.center : void 0, this.props.style));
          let te =
              !v &&
              !E &&
              !C.fill &&
              !C.background &&
              !C.backgroundImage &&
              i.length < lO &&
              !Ug(i) &&
              !Wg(i),
            A = null;
          if (te)
            ((C.backgroundSize = `100% 100%`),
              (C.backgroundImage = tt(i)),
              oO.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = oO.subscribe(i, !m, e, v);
            (oO.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              Gg(C) && (C.overflow = `hidden`),
              (A = ee(w, {
                children: [
                  E,
                  O(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: T,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Db.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ne = Ro(this.props.as),
            { href: j, target: M, rel: re, onClick: ie, onTap: N } = this.props,
            P = s || c;
          return O(ne, {
            ...D,
            ...y,
            layoutId: l,
            transformTemplate: k ? as(this.props.center) : void 0,
            id: e,
            ref: p,
            style: C,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: P ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": P ? void 0 : `true`,
            onTap: N,
            onClick: ie,
            href: j,
            target: M,
            rel: re,
            children: A,
          });
        }
      }),
      (dO = es(cO)),
      (fO = 1e3),
      (pO = `Variable`),
      (mO = `explicitInter`),
      (Le.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = N(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Ui as $,
  kx as A,
  Mv as At,
  Yg as B,
  q as C,
  Ih as Ct,
  GC as D,
  fl as Dt,
  dO as E,
  EC as Et,
  tC as F,
  sv as G,
  qg as H,
  QS as I,
  hO as J,
  ki as K,
  eC as L,
  $c as M,
  bb as N,
  Jg as O,
  i_ as Ot,
  c_ as P,
  iw as Q,
  $S as R,
  lD as S,
  wt as St,
  $D as T,
  Lh as Tt,
  Wc as U,
  Xg as V,
  ah as W,
  E_ as X,
  lt as Y,
  bi as Z,
  Oy as _,
  qn as _t,
  WC as a,
  NC as at,
  Cw as b,
  ih as bt,
  Va as c,
  lh as ct,
  PD as d,
  Et as dt,
  fD as et,
  US as f,
  vu as ft,
  Rw as g,
  Jn as gt,
  F_ as h,
  Wa as ht,
  kC as i,
  ld as it,
  Wb as j,
  Uc as k,
  xD as kt,
  sd as l,
  Vl as lt,
  RD as m,
  xu as mt,
  fd as n,
  o_ as nt,
  OS as o,
  oO as ot,
  bw as p,
  ph as pt,
  ot as q,
  Bl as r,
  a_ as rt,
  zS as s,
  gi as st,
  cd as t,
  _h as tt,
  rT as u,
  Nt as ut,
  tr as v,
  Wi as vt,
  PT as w,
  Hb as wt,
  JS as x,
  Mt as xt,
  Cp as y,
  xh as yt,
  Vb as z,
};
//# sourceMappingURL=framer.Bi3K3xOo.mjs.map
