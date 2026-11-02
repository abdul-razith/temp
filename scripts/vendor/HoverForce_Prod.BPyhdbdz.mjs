import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  R as n,
  T as r,
  b as i,
  c as a,
  k as o,
  s,
  v as c,
  x as l,
} from "./react.BDb-TZZO.mjs";
import { V as u, g as d, q as f, t as p } from "./motion.DUnltMVz.mjs";
import { C as m, J as h, k as g, o as _ } from "./framer.Bi3K3xOo.mjs";
function v(e) {
  let n = m.hasRestrictions(),
    r = l(b()),
    a = l(null),
    p = l(null),
    h = l(null),
    g = l(null),
    _ = y() === `mobile`,
    v = S(e.smoothness),
    C = { type: `spring`, stiffness: 1e3, damping: 100, mass: 1 },
    w = u(e.threshold),
    T = u(1),
    E = u(1),
    D = e.mode === `attract` ? 1 : -1,
    O = f([w, T], ([n, r]) => {
      if (e.direction === `horizontal`) return 0;
      if (e.direction === `both`) {
        if (!g.current) return 0;
        let r = t.mouseY || 0,
          i = Math.max(0, 1 - n / e.threshold);
        return (r - g.current.y) * i * D;
      }
      return Math.max(0, 1 - n / e.threshold) * e.animationDistance * r * D;
    }),
    k = f([w, E], ([n, r]) => {
      if (e.direction === `vertical`) return 0;
      if (e.direction === `both`) {
        if (!g.current) return 0;
        let r = t.mouseX || 0,
          i = Math.max(0, 1 - n / e.threshold);
        return (r - g.current.x) * i * D;
      }
      return Math.max(0, 1 - n / e.threshold) * e.animationDistance * r * D;
    }),
    [A, j] = c({ x: 0, y: 0 }),
    M = o(() => {
      if (!a.current || !e.enabled || _) return;
      let t = a.current.parentElement;
      if (!t) return;
      h.current = t;
      let n = t.parentElement;
      if (!n) return;
      ((p.current = n), n.setAttribute(`data-hover-force`, r.current));
      let i = n.getBoundingClientRect();
      ((g.current = { x: i.left + i.width / 2, y: i.top + i.height / 2 }),
        (n.style.willChange = `transform`),
        (n.style.transform = `none`));
    }, []),
    N = o(
      (n) => {
        if (!g.current || !e.enabled || _ || !t) return;
        ((t.mouseX = n.clientX), (t.mouseY = n.clientY));
        let r = { x: n.clientX, y: n.clientY },
          i = x(r, g.current);
        if (e.direction === `both`) d(w, Math.min(i, e.threshold), C);
        else {
          let t = n.clientY > g.current.y ? 1 : -1,
            r = n.clientX > g.current.x ? 1 : -1;
          (d(T, t, C), d(E, r, C), d(w, Math.min(i, e.threshold), C));
        }
      },
      [e.threshold, e.direction]
    ),
    P = o(() => {
      let e = null;
      return (t) => {
        e ||= setTimeout(() => {
          (N(t), (e = null));
        }, 16);
      };
    }, [N]);
  return (
    i(() => {
      M();
    }, [M]),
    i(() => {
      if (n || !g.current || !e.enabled || _) return;
      let r = P();
      t.addEventListener(`mousemove`, r);
      let i = (() => {
        let e = O.on(`change`, (e) => {
            let t = k.get();
            p.current && d(p.current, { x: t, y: e }, { ...v, immediate: !0 });
          }),
          t = k.on(`change`, (e) => {
            let t = O.get();
            p.current && d(p.current, { x: e, y: t }, { ...v, immediate: !0 });
          });
        return () => {
          (e(), t());
        };
      })();
      return () => {
        (t.removeEventListener(`mousemove`, r), i && i());
      };
    }, [e.threshold, e.animationDistance, e.mode, e.direction, n, P, O, k]),
    s(`div`, { ref: a, style: { width: `0px`, height: `0px` } })
  );
}
function y() {
  let [e, n] = c(null);
  return (
    i(() => {
      let e = () => {
        t.innerWidth <= 809 ? n(`mobile`) : t.innerWidth <= 1199 ? n(`tablet`) : n(`desktop`);
      };
      return (e(), t.addEventListener(`resize`, e), () => t.removeEventListener(`resize`, e));
    }, []),
    e
  );
}
var b,
  x,
  S,
  C = e(() => {
    (n(),
      a(),
      h(),
      r(),
      p(),
      g(v, {
        threshold: {
          type: _.Number,
          defaultValue: 200,
          min: 0,
          max: 800,
          title: `Area`,
          unit: `px`,
          hidden: (e) => !e.enabled,
        },
        animationDistance: {
          type: _.Number,
          defaultValue: 200,
          min: 0,
          max: 800,
          title: `Movement`,
          unit: `px`,
          hidden: (e) => !e.enabled,
        },
        mode: {
          type: _.Enum,
          defaultValue: `repel`,
          options: [`attract`, `repel`],
          optionTitles: [`Attract`, `Repel`],
          title: `Mode`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          hidden: (e) => !e.enabled,
        },
        direction: {
          type: _.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          displaySegmentedControl: !0,
          hidden: (e) => !e.enabled,
        },
        smoothness: {
          type: _.Number,
          defaultValue: 10,
          min: 0,
          max: 20,
          step: 1,
          title: `Smoothing`,
          hidden: (e) => !e.enabled,
        },
        enabled: {
          type: _.Boolean,
          defaultValue: !0,
          title: `Enabled`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (v.defaultProps = {
        enabled: !0,
        threshold: 200,
        animationDistance: 200,
        mode: `repel`,
        direction: `vertical`,
        smoothness: 10,
      }),
      (b = () => Math.random().toString(36).substring(2, 15)),
      (x = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2)),
      (S = (e) => ({ type: `spring`, stiffness: 800 + e * 20, damping: 50 + e * 10, mass: 1 })),
      (v.displayName = `Hover Force`));
  });
export { C as n, v as t };
//# sourceMappingURL=HoverForce_Prod.BPyhdbdz.mjs.map
