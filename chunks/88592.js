n.d(t, { A: () => o });
var l = n(811315),
    r = n.n(l),
    i = n(17928),
    a = n(228366),
    u = n(754674);
let s = {};
function c(e) {
    let t = s[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class d extends i.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return s[e]?.draft;
    }
    hasChanges(e) {
        let t = s[e];
        return null != t && !r()(t.initialDraft, t.draft);
    }
    isEditing(e) {
        return null != s[e];
    }
    getSaveStatus(e) {
        return s[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return s[e]?.saveErrorMessage;
    }
}
let o = new d(a.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: n } = e,
            l = { header: n.header, widgets: (0, u.W$)(n.widgets) };
        s[t] = { initialDraft: l, draft: l, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: n, insertionTarget: l } = e,
            r = c(t);
        if (null == r) return !1;
        r.draft = { ...r.draft, widgets: (0, u.QD)(r.draft.widgets, n, l) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n, targetColumn: l, targetIndex: r } = e,
            i = c(t);
        if (null == i) return !1;
        let a = (0, u.Gm)(i.draft.widgets, n, l, r);
        if (null == a) return !1;
        i.draft = { ...i.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n } = e,
            l = c(t);
        if (null == l) return !1;
        let r = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== n;
        });
        if (r.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, u.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: n, config: l } = e,
            r = c(t);
        if (null == r) return !1;
        let i = r.draft.widgets.map((e) => (e.id === n ? { ...e, config: l } : e));
        r.draft = { ...r.draft, widgets: i };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: n } = e,
            l = c(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: n } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: n } = e,
            l = s[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = n), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: n, errorMessage: l } = e,
            r = s[t];
        if (r?.activeSaveRequestId !== n) return !1;
        (delete r.activeSaveRequestId, (r.saveStatus = "error"), (r.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == s[t]) return !1;
        delete s[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == s[t]) return !1;
        delete s[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == s[t]) return !1;
        delete s[t];
    },
    LOGOUT: function () {
        s = {};
    },
});
