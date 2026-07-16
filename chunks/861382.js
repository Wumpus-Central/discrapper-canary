"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    a = n(761640),
    s = n(309010),
    l = n(168186);
let o = {};
function d() {
    return (o = {}), !0;
}
function c(e) {
    return (
        e in o ||
            (o[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null,
            }),
        o[e]
    );
}
function u(e) {
    let {
            channelId: t,
            command: n,
            section: i,
            initialValues: r,
            location: a,
            triggerSection: s,
            queryLength: o,
            sectionName: d,
            query: u,
            searchResultsPosition: _,
            source: E,
            commandOrigin: A,
        } = e,
        h = c(t);
    if (n?.id === h.activeCommand?.id) return !1;
    (h.activeCommand = n),
        (h.activeCommandSection = i),
        (h.activeOptionName = null),
        (h.preferredCommandId = null),
        (h.initialValues = r ?? {}),
        (h.commandOrigin = A ?? null),
        (h.source = E);
    let I = {};
    return (
        n?.options != null &&
            n.options.forEach((e) => {
                I[e.name] = { isActive: !1, hasValue: !1, lastValidationResult: null, optionValue: null };
            }),
        (h.optionStates = I),
        null != n &&
            (0, l.my)({
                command: n,
                location: a,
                triggerSection: s,
                queryLength: o,
                sectionName: d,
                query: u,
                searchResultsPosition: _,
                source: E,
            }),
        !0
    );
}
function _(e) {
    let { channelId: t, commandId: n } = e,
        i = c(t);
    return (
        n !== i.preferredCommandId &&
        (null !== i.preferredCommandId || n !== (i.activeCommand?.id ?? null)) &&
        ((i.activeCommand = null), (i.activeOptionName = null), (i.preferredCommandId = n), (i.optionStates = {}), !0)
    );
}
function E(e) {
    let { channelId: t, changedOptionStates: n } = e,
        i = c(t),
        r = { ...i.optionStates };
    for (let [e, t] of Object.entries(n)) {
        if (!(e in i.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
            (r[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0,
            }),
                i.activeOptionName === e && (i.activeOptionName = null);
            continue;
        }
        let n = r[e];
        (r[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: t.optionValue ?? n.optionValue,
            location: t.location ?? n.location,
            length: t.length ?? n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != i.activeOptionName &&
                          i.activeOptionName !== e &&
                          ((r[i.activeOptionName] = { ...r[i.activeOptionName] }),
                          (r[i.activeOptionName].isActive = !1)),
                      (i.activeOptionName = e))
                    : e === i.activeOptionName && (i.activeOptionName = null));
    }
    return (i.optionStates = r), !0;
}
class A extends i.Ay.Store {
    static displayName = "ApplicationCommandStore";
    initialize() {
        this.waitFor(a.Ay, s.Ay),
            a.Ay.addChangeListener(() => {
                let e = s.Ay.getChannelId();
                if (null == e) return (o = {}), !0;
                let t = a.Ay.getCurrentSidebarChannelId(e);
                if (null != t && t in o) return !1;
                o = e in o ? { [e]: o[e] } : {};
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
let h = new A(r.h, {
    CONNECTION_OPEN: d,
    CHANNEL_SELECT: d,
    LOGOUT: d,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: u,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
    APPLICATION_COMMAND_UPDATE_OPTIONS: E,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, preferredCommandId: n, command: i, section: r, location: a, changedOptionStates: s } = e,
            l = u({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: r,
                location: a,
            }),
            o = _({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: t, commandId: n }),
            d = E({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: t, changedOptionStates: s });
        return l || o || d;
    },
});
