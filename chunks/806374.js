"use strict";
n.d(t, { A: () => i });
var r = n(315069);
class i extends r.A {
    id;
    type;
    name;
    revoked;
    integrations;
    visibility;
    friendSync;
    verified;
    showActivity;
    twoWayLink;
    accessToken;
    metadata;
    metadataVisibility;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.name = e.name),
            (this.revoked = e.revoked || !1),
            (this.integrations = e.integrations || []),
            (this.visibility = e.visibility || 0),
            (this.friendSync = e.friend_sync || !1),
            (this.showActivity = e.show_activity || !1),
            (this.verified = e.verified || !1),
            (this.accessToken = e.access_token || null),
            (this.twoWayLink = e.two_way_link || !1),
            (this.metadata = e.metadata || null),
            (this.metadataVisibility = e.metadata_visibility || 0);
    }
    toString() {
        return this.name;
    }
}
