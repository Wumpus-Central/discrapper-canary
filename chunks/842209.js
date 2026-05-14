"use strict";
n.d(t, { D3: () => y, EW: () => m, ZV: () => v, cu: () => S, eW: () => N, j8: () => T, s$: () => A, v7: () => I }),
    n(321073);
var i = n(64700),
    r = n(17928),
    s = n(155718),
    a = n(71393),
    o = n(403362),
    l = n(827785),
    u = n(264322),
    c = n(210978),
    d = n(392054),
    _ = n(168186),
    f = n(240591),
    h = n(727331),
    p = n(73510),
    E = n(652215);
function m(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let i = u.Ay.getUserState(),
        r = u.Ay.getContextState(e),
        s = Object.values(i.result?.sections ?? {}).concat(Object.values(r.result?.sections ?? {}));
    if (null != n) {
        let e = s.find((e) => e.descriptor.application?.id === n);
        if (null != e) {
            let n = g(e, t);
            return { application: e.descriptor.application, command: n };
        }
    } else
        for (let e of s) {
            let n = g(e, t);
            if (null != n) return { application: e.descriptor.application, command: n };
        }
    return { application: void 0, command: void 0 };
}
function g(e, t) {
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let n = Object.values(e.commands).find((e) => e.rootCommand?.id === t)?.rootCommand;
    return null != n
        ? (0, _.Oe)({ rootCommand: n, command: n, applicationId: e.descriptor.application?.id ?? "" })
        : void 0;
}
function A(e, t, n) {
    let i = u.Ay.getUserState(),
        r = u.Ay.getContextState(e),
        s = u.Ay.getApplicationState(n),
        a = i.result?.sections?.[n] ?? r.result?.sections?.[n] ?? s.result?.sections?.[n];
    return a?.descriptor;
}
function I(e, t, n) {
    let i = u.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: c.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: i.commands, sections: i.descriptors };
}
function T(e) {
    let t = u.Ay.getUserState(),
        n = u.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function S(e) {
    let { context: t, filters: n, options: s, allowFetch: o } = e,
        c = "channel" === t.type ? t.channel.guild_id : null,
        d = (0, r.bG)([a.A], () => a.A.getGuild(c), [c]),
        { descriptors: _, commands: f, sectionedCommands: h, loading: m } = (0, u.XC)(t, d, n, { ...s, allowFetch: o }),
        [g, A] = i.useState(null),
        I = i.useMemo(() => R(s.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, s.placeholderCount]);
    return i.useMemo(() => {
        let e = {
            loading: m,
            commands: f,
            activeSections: _,
            commandsByActiveSection: h,
            filteredSectionId: g,
            hasMoreAfter: !1,
            placeholders: m ? I : [],
            sectionDescriptors: _,
            filterSection: (e) => {
                A(e);
            },
            scrollDown: E.tEg,
        };
        if (null != g) {
            let t = h.find((e) => e.section.id === g);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (m) {
            let t = h[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...I] }, ...h.slice(1)];
            else {
                let t = l.gZ[p.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: I }]);
            }
            e.commands = [...f, ...I];
        }
        return e;
    }, [m, f, _, h, g, I]);
}
function N(e, t, n) {
    let { descriptors: i, commands: r, loading: s } = u.Ay.query(e, t, n),
        a = R(s ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: s ? [...r, ...a] : r, sections: s && 0 === i.length ? [l.gZ[p.Ik.BUILT_IN]] : i };
}
function y(e, t) {
    let n = (0, u.A4)(!0, !0),
        r = (0, u.SD)(e, !0, !0);
    return i.useMemo(() => {
        if (null != t)
            for (let e of Object.values(n.result?.sections ?? {}).concat(Object.values(r.result?.sections ?? {}))) {
                let n = e.commands[t];
                if (null != n) return { command: n, application: e.descriptor.application };
            }
        return { command: void 0, application: void 0 };
    }, [r.result, n.result, t]);
}
let C = [s.kc.CHAT];
function v(e, t, n) {
    var r;
    let s,
        a,
        {
            commands: l,
            application: c,
            sectionDescriptor: d,
            isGuildInstalled: p,
            isUserInstalled: E,
        } = ((r = i.useMemo(() => ({ channel: e, type: "channel" }), [e])),
        (s = (0, u.A4)(!0, !0)),
        (a = (0, u.SD)(r, !0, !0)),
        i.useMemo(() => {
            let e = s.result?.sections?.[t] != null,
                i = a.result?.sections?.[t] != null,
                r = s.result?.sections?.[t] ?? a.result?.sections[t],
                l = Object.values(r?.commands ?? {})
                    .map((e) =>
                        null == e.rootCommand
                            ? e
                            : (0, _.Oe)({
                                  rootCommand: e.rootCommand,
                                  command: e.rootCommand,
                                  applicationId: e.applicationId,
                              }),
                    )
                    .reduce((e, t) => ((e[t.id] = t), e), {});
            return {
                application: r?.descriptor?.application,
                commands: n.map((e) => l[e]).filter(o.Vq),
                sectionDescriptor: r?.descriptor,
                isGuildInstalled: i,
                isUserInstalled: e,
            };
        }, [s?.result, a?.result, t, n])),
        m = (0, f.MW)(e, C);
    return {
        application: c,
        commands: i.useMemo(() => {
            if (null == l) return;
            let t =
                    null != e.guild_id && d?.permissions != null
                        ? h.we(d.permissions, e.guild_id, m.userId, m.roleIds, m.isImpersonating)
                        : null,
                n = null != e.guild_id && d?.permissions != null ? h._W(d.permissions, e, e.guild_id) : null;
            return l.filter(
                (e) =>
                    h.zl(e, m, {
                        applicationAllowedForUser: t,
                        applicationAllowedForChannel: n,
                        isGuildInstalled: p,
                        isUserInstalled: E,
                        commandBotId: d?.botId,
                    }) === h.CA.ALLOWED,
            );
        }, [l, m, d, p, E, e]),
    };
}
let O = { id: "placeholder-section", type: d.Hf.APPLICATION, name: "" };
function R(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) {
        var i;
        n.push(
            ((i = r),
            {
                type: t,
                inputType: d.y$.PLACEHOLDER,
                id: `placeholder-${i}`,
                untranslatedName: "",
                displayName: "",
                untranslatedDescription: "",
                displayDescription: "",
                applicationId: "",
                section: O,
            }),
        );
    }
    return n;
}
