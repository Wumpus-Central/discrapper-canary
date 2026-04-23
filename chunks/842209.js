"use strict";
n.d(t, { D3: () => C, EW: () => g, ZV: () => O, cu: () => S, eW: () => N, j8: () => T, s$: () => A, v7: () => I }),
    n(321073);
var i = n(64700),
    r = n(17928),
    s = n(155718),
    a = n(71393),
    o = n(403362),
    l = n(827785),
    d = n(264322),
    _ = n(210978),
    u = n(392054),
    c = n(168186),
    E = n(240591),
    h = n(46477),
    m = n(73510),
    f = n(652215);
function g(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let i = d.Ay.getUserState(),
        r = d.Ay.getContextState(e),
        s = Object.values(i.result?.sections ?? {}).concat(Object.values(r.result?.sections ?? {}));
    if (null != n) {
        let e = s.find((e) => e.descriptor.application?.id === n);
        if (null != e) {
            let n = p(e, t);
            return { application: e.descriptor.application, command: n };
        }
    } else
        for (let e of s) {
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
        ? (0, c.Oe)({ rootCommand: n, command: n, applicationId: e.descriptor.application?.id ?? "" })
        : void 0;
}
function A(e, t, n) {
    let i = d.Ay.getUserState(),
        r = d.Ay.getContextState(e),
        s = d.Ay.getApplicationState(n),
        a = i.result?.sections?.[n] ?? r.result?.sections?.[n] ?? s.result?.sections?.[n];
    return a?.descriptor;
}
function I(e, t, n) {
    let i = d.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: _.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: i.commands, sections: i.descriptors };
}
function T(e) {
    let t = d.Ay.getUserState(),
        n = d.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function S(e) {
    let { context: t, filters: n, options: s, allowFetch: o } = e,
        _ = "channel" === t.type ? t.channel.guild_id : null,
        u = (0, r.bG)([a.A], () => a.A.getGuild(_), [_]),
        { descriptors: c, commands: E, sectionedCommands: h, loading: g } = (0, d.XC)(t, u, n, { ...s, allowFetch: o }),
        [p, A] = i.useState(null),
        I = i.useMemo(() => v(s.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, s.placeholderCount]);
    return i.useMemo(() => {
        let e = {
            loading: g,
            commands: E,
            activeSections: c,
            commandsByActiveSection: h,
            filteredSectionId: p,
            hasMoreAfter: !1,
            placeholders: g ? I : [],
            sectionDescriptors: c,
            filterSection: (e) => {
                A(e);
            },
            scrollDown: f.tEg,
        };
        if (null != p) {
            let t = h.find((e) => e.section.id === p);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (g) {
            let t = h[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...I] }, ...h.slice(1)];
            else {
                let t = l.gZ[m.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: I }]);
            }
            e.commands = [...E, ...I];
        }
        return e;
    }, [g, E, c, h, p, I]);
}
function N(e, t, n) {
    let { descriptors: i, commands: r, loading: s } = d.Ay.query(e, t, n),
        a = v(s ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: s ? [...r, ...a] : r, sections: s && 0 === i.length ? [l.gZ[m.Ik.BUILT_IN]] : i };
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
let R = [s.kc.CHAT];
function O(e, t, n) {
    var r;
    let s,
        a,
        {
            commands: l,
            application: _,
            sectionDescriptor: u,
            isGuildInstalled: m,
            isUserInstalled: f,
        } = ((r = i.useMemo(() => ({ channel: e, type: "channel" }), [e])),
        (s = (0, d.A4)(!0, !0)),
        (a = (0, d.SD)(r, !0, !0)),
        i.useMemo(() => {
            let e = s.result?.sections?.[t] != null,
                i = a.result?.sections?.[t] != null,
                r = s.result?.sections?.[t] ?? a.result?.sections[t],
                l = Object.values(r?.commands ?? {})
                    .map((e) =>
                        null == e.rootCommand
                            ? e
                            : (0, c.Oe)({
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
        g = (0, E.MW)(e, R);
    return {
        application: _,
        commands: i.useMemo(() => {
            if (null == l) return;
            let t =
                    null != e.guild_id && u?.permissions != null
                        ? h.we(u.permissions, e.guild_id, g.userId, g.roleIds, g.isImpersonating)
                        : null,
                n = null != e.guild_id && u?.permissions != null ? h._W(u.permissions, e, e.guild_id) : null;
            return l.filter(
                (e) =>
                    h.zl(e, g, {
                        applicationAllowedForUser: t,
                        applicationAllowedForChannel: n,
                        isGuildInstalled: m,
                        isUserInstalled: f,
                        commandBotId: u?.botId,
                    }) === h.CA.ALLOWED,
            );
        }, [l, g, u, m, f, e]),
    };
}
let y = { id: "placeholder-section", type: u.Hf.APPLICATION, name: "" };
function v(e, t) {
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
                section: y,
            }),
        );
    }
    return n;
}
