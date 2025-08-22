// Before
function fetchUsers(options, callback) {
  options = options || {};
  var limit = options.limit || 10;     // BUG: 0 becomes 10
  var activeOnly = options.activeOnly || false; // BUG: false becomes false? ok, but pattern is risky

  var users = [{id:1, name:"Ali"}, {id:2, name:"Sara"}];
  var result = [];
  for (var i = 0; i < users.length; i++) {
    var u = users[i];
    if (activeOnly && !u.active) continue;
    result.push(u);
    if (result.length >= limit) break;
  }

  if (callback) callback(result);
}


// After 
function fetchUsers(
  { limit = 10, activeOnly = false } = {}, // ✅ default params + destructuring
  callback
) {
  const users = [{ id: 1, name: "Ali", active: true }, { id: 2, name: "Sara", active: false }];
  const out = [];

  for (const u of users) {               // ✅ for...of for values
    if (activeOnly && !u.active) continue;
    out.push(u);
    if (out.length >= limit) break;
  }

  callback?.(out);                        // ✅ optional chaining call
}
