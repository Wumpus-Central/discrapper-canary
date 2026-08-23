"use strict";
n.d(t, { D3: () => C, EW: () => f, ZV: () => O, cu: () => S, eW: () => N, j8: () => g, s$: () => T, v7: () => m }),
    n(321073);
var i = n(582128),
    r = n(17928),
    a = n(155718),
    s = n(71393),
    l = n(403362),
    o = n(917012),
    d = n(264322),
    c = n(210978),
    u = n(392054),
    _ = n(168186),
    E = n(240591),
    A = n(46477),
    h = n(73510),
    I = n(652215);
function f(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let i = d.Ay.getUserState(),
        r = d.Ay.getContextState(e),
        a = Object.values(i.result?.sections ?? {}).concat(Object.values(r.result?.sections ?? {}));
    if (null != n) {
        let e = a.find((e) => e.descriptor.application?.id === n);
        if (null != e) {
            let n = p(e, t);
            return { application: e.descriptor.application, command: n };
        }
    } else
        for (let e of a) {
            let n = p(e, t);
            if (null != n) return { application: e.descriptor.application, command: n };
        }
    return { application: void 0, command: void 0 };
}
function p(e, t) {
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let n = Object.values(e.commands).find((e) => e.rootCommand?.id === t)?.rootCommand;
    return null != n
        ? (0, _.Oe)({ rootCommand: n, command: n, applicationId: e.descriptor.application?.id ?? "" })
        : void 0;
}
function T(e, t, n) {
    let i = d.Ay.getUserState(),
        r = d.Ay.getContextState(e),
        a = d.Ay.getApplicationState(n),
        s = i.result?.sections?.[n] ?? r.result?.sections?.[n] ?? a.result?.sections?.[n];
    return s?.descriptor;
}
function m(e, t, n) {
    let i = d.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: c.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: i.commands, sections: i.descriptors };
}
function g(e) {
    let t = d.Ay.getUserState(),
        n = d.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function S(e) {
    let { context: t, filters: n, options: a, allowFetch: l } = e,
        c = "channel" === t.type ? t.channel.guild_id : null,
        u = (0, r.bG)([s.A], () => s.A.getGuild(c), [c]),
        { descriptors: _, commands: E, sectionedCommands: A, loading: f } = (0, d.XC)(t, u, n, { ...a, allowFetch: l }),
        [p, T] = i.useState(null),
        m = i.useMemo(() => y(a.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, a.placeholderCount]);
    return i.useMemo(() => {
        let e = {
            loading: f,
            commands: E,
            activeSections: _,
            commandsByActiveSection: A,
            filteredSectionId: p,
            hasMoreAfter: !1,
            placeholders: f ? m : [],
            sectionDescriptors: _,
            filterSection: (e) => {
                T(e);
            },
            scrollDown: I.tEg,
        };
        if (null != p) {
            let t = A.find((e) => e.section.id === p);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (f) {
            let t = A[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...m] }, ...A.slice(1)];
            else {
                let t = o.gZ[h.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: m }]);
            }
            e.commands = [...E, ...m];
        }
        return e;
    }, [f, E, _, A, p, m]);
}
function N(e, t, n) {
    let { descriptors: i, commands: r, loading: a } = d.Ay.query(e, t, n),
        s = y(a ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: a ? [...r, ...s] : r, sections: a && 0 === i.length ? [o.gZ[h.Ik.BUILT_IN]] : i };
}
function C(e, t) {
    let n = (0, d.A4)(!0, !0),
        r = (0, d.SD)(e, !0, !0);
    return i.useMemo(() => {
        if (null != t)
            for (let e of Object.values(n.result?.sections ?? {}).concat(Object.values(r.result?.sections ?? {}))) {
                let n = e.commands[t];
                if (null != n) return { command: n, application: e.descriptor.application };
            }
        return { command: void 0, application: void 0 };
    }, [r.result, n.result, t]);
}
let R = [a.kc.CHAT];
function O(e, t, n) {
    var r;
    let a,
        s,
        {
            commands: o,
            application: c,
            sectionDescriptor: u,
            isGuildInstalled: h,
            isUserInstalled: I,
        } = ((r = i.useMemo(() => ({ channel: e, type: "channel" }), [e])),
        (a = (0, d.A4)(!0, !0)),
        (s = (0, d.SD)(r, !0, !0)),
        i.useMemo(() => {
            let e = a.result?.sections?.[t] != null,
                i = s.result?.sections?.[t] != null,
                r = a.result?.sections?.[t] ?? s.result?.sections[t],
                o = Object.values(r?.commands ?? {})
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
                commands: n.map((e) => o[e]).filter(l.Vq),
                sectionDescriptor: r?.descriptor,
                isGuildInstalled: i,
                isUserInstalled: e,
            };
        }, [a?.result, s?.result, t, n])),
        f = (0, E.MW)(e, R);
    return {
        application: c,
        commands: i.useMemo(() => {
            if (null == o) return;
            let t =
                    null != e.guild_id && u?.permissions != null
                        ? A.we(u.permissions, e.guild_id, f.userId, f.roleIds, f.isImpersonating)
                        : null,
                n = null != e.guild_id && u?.permissions != null ? A._W(u.permissions, e, e.guild_id) : null;
            return o.filter(
                (e) =>
                    A.zl(e, f, {
                        applicationAllowedForUser: t,
                        applicationAllowedForChannel: n,
                        isGuildInstalled: h,
                        isUserInstalled: I,
                        commandBotId: u?.botId,
                    }) === A.CA.ALLOWED,
            );
        }, [o, f, u, h, I, e]),
    };
}
let L = { id: "placeholder-section", type: u.Hf.APPLICATION, name: "" };
function y(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) {
        var i;
        n.push(
            ((i = r),
            {
                type: t,
                inputType: u.y$.PLACEHOLDER,
                id: `placeholder-${i}`,
                untranslatedName: "",
                displayName: "",
                untranslatedDescription: "",
                displayDescription: "",
                applicationId: "",
                section: L,
            }),
        );
    }
    return n;
}
