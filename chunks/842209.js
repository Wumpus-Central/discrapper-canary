"use strict";
n.d(t, { D3: () => N, EW: () => m, ZV: () => C, cu: () => S, eW: () => y, j8: () => T, s$: () => A, v7: () => I }),
    n(321073);
var r = n(64700),
    i = n(311907),
    s = n(155718),
    a = n(71393),
    o = n(403362),
    l = n(827785),
    u = n(264322),
    c = n(210978),
    d = n(392054),
    _ = n(168186),
    f = n(240591),
    p = n(46477),
    h = n(73510),
    E = n(652215);
function m(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let r = u.Ay.getUserState(),
        i = u.Ay.getContextState(e),
        s = Object.values(r.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}));
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
    let r = u.Ay.getUserState(),
        i = u.Ay.getContextState(e),
        s = u.Ay.getApplicationState(n),
        a = r.result?.sections?.[n] ?? i.result?.sections?.[n] ?? s.result?.sections?.[n];
    return a?.descriptor;
}
function I(e, t, n) {
    let r = u.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: c.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: r.commands, sections: r.descriptors };
}
function T(e) {
    let t = u.Ay.getUserState(),
        n = u.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function S(e) {
    let { context: t, filters: n, options: s, allowFetch: o } = e,
        c = "channel" === t.type ? t.channel.guild_id : null,
        d = (0, i.bG)([a.A], () => a.A.getGuild(c), [c]),
        { descriptors: _, commands: f, sectionedCommands: p, loading: m } = (0, u.XC)(t, d, n, { ...s, allowFetch: o }),
        [g, A] = r.useState(null),
        I = r.useMemo(() => R(s.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, s.placeholderCount]);
    return r.useMemo(() => {
        let e = {
            loading: m,
            commands: f,
            activeSections: _,
            commandsByActiveSection: p,
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
            let t = p.find((e) => e.section.id === g);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (m) {
            let t = p[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...I] }, ...p.slice(1)];
            else {
                let t = l.gZ[h.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: I }]);
            }
            e.commands = [...f, ...I];
        }
        return e;
    }, [m, f, _, p, g, I]);
}
function y(e, t, n) {
    let { descriptors: r, commands: i, loading: s } = u.Ay.query(e, t, n),
        a = R(s ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: s ? [...i, ...a] : i, sections: s && 0 === r.length ? [l.gZ[h.Ik.BUILT_IN]] : r };
}
function N(e, t) {
    let n = (0, u.A4)(!0, !0),
        i = (0, u.SD)(e, !0, !0);
    return r.useMemo(() => {
        if (null != t)
            for (let e of Object.values(n.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}))) {
                let n = e.commands[t];
                if (null != n) return { command: n, application: e.descriptor.application };
            }
        return { command: void 0, application: void 0 };
    }, [i.result, n.result, t]);
}
let v = [s.kc.CHAT];
function C(e, t, n) {
    var i;
    let s,
        a,
        {
            commands: l,
            application: c,
            sectionDescriptor: d,
            isGuildInstalled: h,
            isUserInstalled: E,
        } = ((i = r.useMemo(() => ({ channel: e, type: "channel" }), [e])),
        (s = (0, u.A4)(!0, !0)),
        (a = (0, u.SD)(i, !0, !0)),
        r.useMemo(() => {
            let e = s.result?.sections?.[t] != null,
                r = a.result?.sections?.[t] != null,
                i = s.result?.sections?.[t] ?? a.result?.sections[t],
                l = Object.values(i?.commands ?? {})
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
                application: i?.descriptor?.application,
                commands: n.map((e) => l[e]).filter(o.Vq),
                sectionDescriptor: i?.descriptor,
                isGuildInstalled: r,
                isUserInstalled: e,
            };
        }, [s?.result, a?.result, t, n])),
        m = (0, f.MW)(e, v);
    return {
        application: c,
        commands: r.useMemo(() => {
            if (null == l) return;
            let t =
                    null != e.guild_id && d?.permissions != null
                        ? p.we(d.permissions, e.guild_id, m.userId, m.roleIds, m.isImpersonating)
                        : null,
                n = null != e.guild_id && d?.permissions != null ? p._W(d.permissions, e, e.guild_id) : null;
            return l.filter(
                (e) =>
                    p.zl(e, m, {
                        applicationAllowedForUser: t,
                        applicationAllowedForChannel: n,
                        isGuildInstalled: h,
                        isUserInstalled: E,
                        commandBotId: d?.botId,
                    }) === p.CA.ALLOWED,
            );
        }, [l, m, d, h, E, e]),
    };
}
let O = { id: "placeholder-section", type: d.Hf.APPLICATION, name: "" };
function R(e, t) {
    let n = [];
    for (let i = 0; i < e; i++) {
        var r;
        n.push(
            ((r = i),
            {
                type: t,
                inputType: d.y$.PLACEHOLDER,
                id: `placeholder-${r}`,
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
