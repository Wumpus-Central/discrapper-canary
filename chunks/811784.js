n(321073);
var i,
    r = n(896170),
    a = n(160517),
    s = n(877624),
    l = n(856793),
    o = n(792673),
    d = n(47807),
    c = n(822571),
    u = n(92551),
    _ = n(365977),
    E = n(474090),
    A = n(767589),
    f = n(682901),
    h = n(792996),
    I = (((i = I || {}).DRAFT = "Draft"), (i.UPCOMING = "Upcoming"), (i.ACTIVE = "Active"), (i.ENDED = "Ended"), i);
let p = { Draft: "start_date", Upcoming: "start_date", Active: "end_date", Ended: "end_date" };
function m(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function T(e, t) {
    let n = m(e.start_date),
        i = m(e.end_date);
    return null != i && t > i
        ? "Ended"
        : 2 !== e.lifecycle_state
          ? "Draft"
          : null == n || null == i || t < n
            ? "Upcoming"
            : "Active";
}
function g(e) {
    return (0, A.ii)(d.m, e.properties);
}
function S(e) {
    return g(e).isDefaultBase;
}
function N(e, t, n) {
    let i = (0, _.v)((0, A.ii)(d.m, e.properties), t),
        r = m(n);
    return new c.A({
        id: e.id,
        componentType: e.component_type,
        properties: i,
        promotionId: e.promotion_id,
        startDate: null,
        endDate: null,
        effectiveStartDate: null,
        effectiveEndDate: null,
        promotionEndDate: null == r ? null : new Date(r),
        promotionPriority: 0,
    });
}
function C(e) {
    if (null === e) return "Not set";
    let t = m(e);
    return null == t
        ? "Unavailable"
        : new Date(t).toLocaleString(h.intl.currentLocale, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
          });
}
function O(e) {
    return {
        start: void 0 === e.surface_start_date ? e.start_date : e.surface_start_date,
        end: void 0 === e.surface_end_date ? e.end_date : e.surface_end_date,
    };
}
function R(e) {
    let { start: t, end: n } = O(e);
    return null != t || null != n;
}
function L(e, t) {
    let n = ("number" == typeof e ? s.C[e] : e) ?? t?.properties.oneofKind;
    if (null != n) {
        let e;
        return (
            (e = n
                .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                .replaceAll("_", " ")
                .toLowerCase())
                .charAt(0)
                .toUpperCase() + e.slice(1).replace(/\bnitro\b/g, "Nitro")
        );
    }
    return null != e ? `Surface type ${e}` : "Unknown surface";
}
n.d(
    t,
    {},
    {
        ET: function (e, t, n) {
            let i = new Map(t.map((e) => [e.id, e])),
                r = new Set();
            return e.flatMap((e) => {
                if (e.componentType !== s.C.ANNOUNCEMENT_MODAL && e.componentType !== s.C.MOBILE_BOTTOM_SHEET)
                    return [];
                let t = i.get(e.id);
                if (null != t && S(t)) return [];
                let a = `${e.componentType}:${e.id}`;
                return r.has(a)
                    ? []
                    : (r.add(a),
                      [
                          {
                              component: e,
                              ...(function (e, t, n) {
                                  var i;
                                  let r =
                                          null == (i = t)
                                              ? "Unknown"
                                              : null == i.premium_type
                                                ? "Everyone"
                                                : 0 === i.premium_type
                                                  ? "Non-Nitro"
                                                  : i.premium_type === f.PremiumTypes.TIER_0
                                                    ? "Nitro Basic"
                                                    : i.premium_type === f.PremiumTypes.TIER_1
                                                      ? "Nitro Classic"
                                                      : i.premium_type === f.PremiumTypes.TIER_2
                                                        ? "Nitro"
                                                        : `Premium tier ${i.premium_type}`,
                                      a = "Unavailable";
                                  if (null != t && ((a = "Untimed"), R(t))) {
                                      let { start: e, end: i } = O(t);
                                      a = `${C(e ?? n?.start_date)} to ${C(i ?? n?.end_date)}`;
                                  }
                                  let s = null;
                                  if (t?.experiment_id != null && null != t.experiment_variation_id) {
                                      let e = t.experiment_variation_id;
                                      s = 0 === e ? "Control" : `Treatment ${e}`;
                                  }
                                  return {
                                      title: (function (e) {
                                          let t = e.properties.properties,
                                              n = "";
                                          ("announcementModalVariant1" === t.oneofKind &&
                                              (n = t.announcementModalVariant1.header),
                                              "mobileBottomSheet" === t.oneofKind && (n = t.mobileBottomSheet.header));
                                          let i = L(e.componentType, e.properties);
                                          if ("" === n.trim()) return i;
                                          let r = (0, u.n)(n, e.getFormatVariableValues(h.intl.currentLocale));
                                          return r.ok ? r.content : i;
                                      })(e),
                                      target: r,
                                      timing: a,
                                      variant: s,
                                  };
                              })(e, i.get(e.id), n),
                          },
                      ]);
            });
        },
        FJ: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.j.DESKTOP;
            return e.filter((e) => e.platform === i && !S(e)).map((e) => N(e, t, n));
        },
        ax: function (e, t, n) {
            return (0, r.Ht)(e, t, { keys: [n, "id"], sorter: (e) => e.sort((e, t) => e.index - t.index) });
        },
        jJ: function (e) {
            let t = new Map();
            for (let n of e) {
                let e = t.get(n.title) ?? [];
                (e.push(n), t.set(n.title, e));
            }
            return Array.from(t, (e) => {
                let [t, n] = e;
                return { title: t, variants: n };
            });
        },
        r0: function (e, t) {
            let n = Date.now(),
                i = new Map(),
                r = t.filter((e) => !S(e)),
                a = r.every((e) => null != e.surface_id);
            for (let e of r) i.set(e.surface_id ?? e.id, e);
            let s = new Map(),
                l = 0;
            for (let e of i.values()) {
                let t = L(e.component_type, g(e));
                (s.set(t, (s.get(t) ?? 0) + 1), R(e) && l++);
            }
            let o = [
                { label: "Starts", value: C(e.start_date) },
                { label: "Ends", value: C(e.end_date) },
                {
                    label: "State",
                    value: (function (e, t) {
                        if (null == e.lifecycle_state) return "Unavailable";
                        let n = T(e, t),
                            i = { 0: "Draft", 2: "Published" }[e.lifecycle_state];
                        return null == i || i === n ? n : `${i} (${n})`;
                    })(e, n),
                },
            ];
            return (
                null != e.localization_status &&
                    o.push({
                        label: "Localization",
                        value:
                            { 0: "Draft", 1: "Out for localization", 2: "Localized" }[e.localization_status] ??
                            "Unknown",
                    }),
                o.push(
                    { label: "Surfaces", value: a ? String(i.size) : "Unavailable" },
                    ...Array.from(s)
                        .sort((e, t) => {
                            let [n] = e,
                                [i] = t;
                            return n.localeCompare(i);
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return { label: a ? t : `${t} variants`, value: String(n) };
                        }),
                    { label: a ? "Timed surfaces" : "Timed variants", value: String(l) },
                ),
                o
            );
        },
        resolveCampaignComponents: function (e, t, n, i, r) {
            let s = a.j.DESKTOP,
                d = e.filter((e) => e.platform === s && !S(e)),
                c = new Map();
            for (let e of d) {
                let t = e.component_type,
                    n = c.get(t) ?? [];
                (n.push(e), c.set(t, n));
            }
            return Array.from(c.values()).flatMap((e) => {
                let a = e.filter((e) =>
                    (function (e, t, n) {
                        if (null == e.premium_type) return !1;
                        let i = 0 === e.premium_type ? !(0, E.ki)(t) : (0, E.YE)(t, e.premium_type),
                            r = void 0 === n ? i : e.premium_type === (n ?? 0),
                            a = (function (e, t) {
                                if (void 0 === t) return e.premiumState;
                                if (null === t) return { premiumSource: l.f.NONE, premiumSubscriptionType: o.j.NONE };
                                let n = {
                                    [f.PremiumTypes.TIER_0]: o.j.TIER_0,
                                    [f.PremiumTypes.TIER_1]: o.j.TIER_1,
                                    [f.PremiumTypes.TIER_2]: o.j.TIER_2,
                                };
                                return { premiumSource: l.f.SUBSCRIPTION, premiumSubscriptionType: n[t] };
                            })(t, n);
                        return (
                            r &&
                            (a?.premiumSource == null || e.premium_source === a.premiumSource) &&
                            (a?.premiumSubscriptionType == null ||
                                e.premium_subscription_type === a.premiumSubscriptionType)
                        );
                    })(e, t, r),
                );
                return (
                    a.length > 0
                        ? a
                        : e.filter(
                              (e) =>
                                  null == e.premium_type &&
                                  null == e.premium_source &&
                                  null == e.premium_subscription_type,
                          )
                ).map((e) => N(e, n, i));
            });
        },
        xD: function (e) {
            let t = Date.now();
            return Object.values(I)
                .map((n) => ({
                    label: n,
                    campaigns: e
                        .filter((e) => T(e, t) === n)
                        .sort((e, t) => {
                            let i = p[n],
                                r = "Ended" === n ? -1 / 0 : 1 / 0;
                            return (m(t[i]) ?? r) - (m(e[i]) ?? r);
                        }),
                }))
                .filter((e) => e.campaigns.length > 0);
        },
    },
);
