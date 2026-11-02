import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, S as n, W as r } from "./framer.Bi3K3xOo.mjs";
import { n as i, t as a } from "./shared-lib.DAxb9xg1.mjs";
import { i as o, t as s } from "./D8jD2HbSE.6clEZOmB.mjs";
function c(e, t) {
  let n = e?.uvjjJEyhK,
    r = e?.MLT9u6sr_;
  return {
    breakpoints: [
      { hash: `1rck71r`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1aokn1r`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1g20t1i`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-HkegY`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{uvjjJEyhK}}` : d(n)} - Nudge - Premium Portfolio Template`,
    viewport: `width=device-width`,
  };
}
async function l(e, t) {
  let i = new n(),
    a = {
      from: { alias: `Y9ThhD4vW`, data: s, type: `Collection` },
      select: [
        { collection: `Y9ThhD4vW`, name: `uvjjJEyhK`, type: `Identifier` },
        { collection: `Y9ThhD4vW`, name: `MLT9u6sr_`, type: `Identifier` },
      ],
      where: r(e, `Y9ThhD4vW`),
    },
    o = await i.query(a, t);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, t);
}
async function u(e, t) {
  let r = new n(),
    i = {
      from: { alias: `Y9ThhD4vW`, data: s, type: `Collection` },
      select: [
        { collection: `Y9ThhD4vW`, name: `uvjjJEyhK`, type: `Identifier` },
        { collection: `Y9ThhD4vW`, name: `MLT9u6sr_`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `Y9ThhD4vW`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (t(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
h();
export {
  m as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  p as metadataVersion,
  h as t,
};
//# sourceMappingURL=EaZePowdqSWtwSr4w5Z1GzDkCW7tPUmNBA1phdxDXww.DkwVYT99.mjs.map
