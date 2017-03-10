# gitlab-switch-app

NOTE: **This does not save money, as we found out, since Digital Ocean charges the same for powered-off instances.**

Based on Heroku node boilerplate, so may have some cruft in the public folder.

## Env Vars

1. `DO_GITLAB_DROPLET_ID`
2. `DO_BASEURL = https://api.digitalocean.com/v2`
3. `DO_TOKEN`

## Routes

The only currently supported droplet name is `fathm-gitlab`.

1. `/up/{dropletName}`
2. `/down/{dropletName}`
