var l = n(811315),
    i = n.n(l),
    r = n(855986),
    a = n(73153),
    s = n(754674);
let u = {};
function d(e) {
    let t = u[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class c extends r.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return u[e]?.draft;
    }
    getInitialDraft(e) {
        return u[e]?.initialDraft;
    }
    getEditSessionId(e) {
        return u[e]?.editSessionId;
    }
    hasChanges(e) {
        let t = u[e];
        return null != t && !i()(t.initialDraft, t.draft);
    }
    isEditing(e) {
        return null != u[e];
    }
    getSaveStatus(e) {
        return u[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return u[e]?.saveErrorMessage;
    }
}
let o = new c(a.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: n, seedWidgets: l = [], editSessionId: i } = e,
            r = { header: n.header, widgets: (0, s.W$)(n.widgets) };
        u[t] = {
            editSessionId: i,
            initialDraft: r,
            draft: l.length > 0 ? { ...r, widgets: (0, s.W$)([...n.widgets, ...l]) } : r,
            saveStatus: "idle",
        };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: n, insertionTarget: l } = e,
            i = d(t);
        if (null == i) return !1;
        i.draft = { ...i.draft, widgets: (0, s.QD)(i.draft.widgets, n, l) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n, targetColumn: l, targetIndex: i } = e,
            r = d(t);
        if (null == r) return !1;
        let a = (0, s.Gm)(r.draft.widgets, n, l, i);
        if (null == a) return !1;
        r.draft = { ...r.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n } = e,
            l = d(t);
        if (null == l) return !1;
        let i = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== n;
        });
        if (i.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, s.W$)(i) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: n, config: l } = e,
            i = d(t);
        if (null == i) return !1;
        let r = i.draft.widgets.map((e) => (e.id === n ? { ...e, config: l } : e));
        i.draft = { ...i.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: n } = e,
            l = d(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: n } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: n } = e,
            l = u[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = n), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: n, errorMessage: l } = e,
            i = u[t];
        if (i?.activeSaveRequestId !== n) return !1;
        (delete i.activeSaveRequestId, (i.saveStatus = "error"), (i.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == u[t]) return !1;
        delete u[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == u[t]) return !1;
        delete u[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == u[t]) return !1;
        delete u[t];
    },
    LOGOUT: function () {
        u = {};
    },
});
n.d(t, {}, { A: o });
