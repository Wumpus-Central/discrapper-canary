"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153),
    a = n(761640),
    s = n(309010),
    o = n(168186);
let l = {};
function u() {
    return (l = {}), !0;
}
function c(e) {
    return (
        e in l ||
            (l[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null,
            }),
        l[e]
    );
}
function d(e) {
    let {
            channelId: t,
            command: n,
            section: r,
            initialValues: i,
            location: a,
            triggerSection: s,
            queryLength: l,
            sectionName: u,
            query: d,
            searchResultsPosition: _,
            source: f,
            commandOrigin: p,
        } = e,
        h = c(t);
    if (n?.id === h.activeCommand?.id) return !1;
    (h.activeCommand = n),
        (h.activeCommandSection = r),
        (h.activeOptionName = null),
        (h.preferredCommandId = null),
        (h.initialValues = i ?? {}),
        (h.commandOrigin = p ?? null),
        (h.source = f);
    let m = {};
    return (
        n?.options != null &&
            n.options.forEach((e) => {
                m[e.name] = { isActive: !1, hasValue: !1, lastValidationResult: null, optionValue: null };
            }),
        (h.optionStates = m),
        null != n &&
            (0, o.my)({
                command: n,
                location: a,
                triggerSection: s,
                queryLength: l,
                sectionName: u,
                query: d,
                searchResultsPosition: _,
                source: f,
            }),
        !0
    );
}
function _(e) {
    let { channelId: t, commandId: n } = e,
        r = c(t);
    return (
        n !== r.preferredCommandId &&
        (null !== r.preferredCommandId || n !== (r.activeCommand?.id ?? null)) &&
        ((r.activeCommand = null), (r.activeOptionName = null), (r.preferredCommandId = n), (r.optionStates = {}), !0)
    );
}
function f(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = c(t),
        i = { ...r.optionStates };
    for (let [e, t] of Object.entries(n)) {
        if (!(e in r.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : i[e].hasValue)) {
            (i[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0,
            }),
                r.activeOptionName === e && (r.activeOptionName = null);
            continue;
        }
        let n = i[e];
        (i[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: t.optionValue ?? n.optionValue,
            location: t.location ?? n.location,
            length: t.length ?? n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != r.activeOptionName &&
                          r.activeOptionName !== e &&
                          ((i[r.activeOptionName] = { ...i[r.activeOptionName] }),
                          (i[r.activeOptionName].isActive = !1)),
                      (r.activeOptionName = e))
                    : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}
function p(e) {
    let { channelId: t, preferredCommandId: n, command: r, section: i, location: a, changedOptionStates: s } = e,
        o = d({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId: t, command: r, section: i, location: a }),
        l = _({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: t, commandId: n }),
        u = f({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: t, changedOptionStates: s });
    return o || l || u;
}
class h extends r.Ay.Store {
    static displayName = "ApplicationCommandStore";
    initialize() {
        this.waitFor(a.Ay, s.A),
            a.Ay.addChangeListener(() => {
                let e = s.A.getChannelId();
                if (null == e) return (l = {}), !0;
                let t = a.Ay.getCurrentSidebarChannelId(e);
                if (null != t && t in l) return !1;
                l = e in l ? { [e]: l[e] } : {};
            });
    }
    getActiveCommand(e) {
        return c(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return c(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return c(e).activeOptionName;
    }
    getActiveOption(e) {
        let t = c(e);
        return t.activeCommand?.options?.find((e) => e.name === t.activeOptionName) ?? null;
    }
    getPreferredCommandId(e) {
        return c(e).preferredCommandId;
    }
    getOptionStates(e) {
        return c(e).optionStates;
    }
    getOptionState(e, t) {
        return c(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return c(e).commandOrigin;
    }
    getSource(e) {
        return c(e).source;
    }
    getOption(e, t) {
        let n = c(e);
        return n.activeCommand?.options?.find((e) => e.name === t);
    }
    getState(e) {
        return { ...c(e) };
    }
}
let m = new h(i.h, {
    CONNECTION_OPEN: u,
    CHANNEL_SELECT: u,
    LOGOUT: u,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
    APPLICATION_COMMAND_UPDATE_OPTIONS: f,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: p,
});
