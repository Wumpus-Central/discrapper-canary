_.d(e, { i: () => o });
var a = _(573736),
    r = _(886115);
function n(t) {
    return {
        ...t,
        path: "path" in t && Array.isArray(t.path) ? t.path.join(".") : void 0,
        keys: "keys" in t ? JSON.stringify(t.keys) : void 0,
        unionErrors: "unionErrors" in t ? JSON.stringify(t.unionErrors) : void 0,
    };
}
let o = (0, _(151122)._I)((t = {}) => {
    let e = t.limit || 10;
    return {
        name: "ZodErrors",
        processEvent(t, _) {
            var o;
            return t.exception &&
                t.exception.values &&
                _ &&
                _.originalException &&
                ((o = _.originalException), (0, a.VZ)(o) && "ZodError" === o.name && Array.isArray(o.errors)) &&
                0 !== _.originalException.issues.length
                ? {
                      ...t,
                      exception: {
                          ...t.exception,
                          values: [
                              {
                                  ...t.exception.values[0],
                                  value: (function (t) {
                                      let e = new Set();
                                      for (let _ of t.issues) _.path && _.path[0] && e.add(_.path[0]);
                                      let _ = Array.from(e);
                                      return `Failed to validate keys: ${(0, r.$G)(_.join(", "), 100)}`;
                                  })(_.originalException),
                              },
                              ...t.exception.values.slice(1),
                          ],
                      },
                      extra: {
                          ...t.extra,
                          "zoderror.issues": _.originalException.errors.slice(0, e).map(n),
                      },
                  }
                : t;
        },
    };
});
