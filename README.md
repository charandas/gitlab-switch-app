# gitlab-switch-app

## Env Vars

1. `DO_GITLAB_DROPLET_ID`
2. `DO_BASEURL = https://api.digitalocean.com/v2`
3. `DO_TOKEN`

## Routes

The only currently supported droplet name is `fathm-gitlab`.

1. `/up/{dropletName}`
2. `/down/{dropletName}`
