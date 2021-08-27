
## How to develop

Develop:

```
$ npm install
$ export MY_NOTES_CLIENT_ID=<CLIENT_ID>    # needed when developing Google Drive Sync
$ npm run develop-watch                    # see "out" folder
```

`MY_NOTES_CLIENT_ID` can be created at [<ins>Google Cloud</ins>](https://console.cloud.google.com) / APIs & Services / Credentials / OAuth 2.0 Client IDs.

Code check:

```
$ npm run lint
```

Tests:

```
$ npm test
```

Build:

```
$ npm run build   # see "out" folder
```

<br><br>

## Folder structure

```
env/              # Helpers for environment variables

out/              # Bundled My Notes (excluded from Git)

src/
  background/
    google-drive/   # Everything related to Google Drive Sync
                      # - File operations (List, Create, Get, Update, Delete)
                      # - Synchronization (to Google Drive, from Google Drive)
                      # - Queries (find My Notes folder, list files in My Notes folder)
                      # - Multipart bodies (create My Notes folder, create file, update file)
                      # - Tests

    init/           # Run when My Notes is installed/updated
                      # - Sets a Unique ID for My Notes installation (used by Context menu), if not already set
                      # - Migrates notes and options
                      # - Creates Context menu and attaches the events
                      # - Creates a Notification when My Notes is installed/updated
                      # - Registers the ways to open My Notes (icon click, keyboard shortcut)
                      # - Registers events to trigger Google Drive Sync from My Notes

  dom/              # Helpers to get DOM elements

  integration/      # Integration tests for Google Drive Sync

  messages/         # Communication between My Notes and background script

  notes/            # Everything related to Notes
                      # - Create/Rename/Delete notes; Note editing, Note saving
                      # - Toolbar
                      # - Every UI init and update when data changes
                      # - Registers commands (Toggle Focus mode - can be enabled in Options)

  options/          # Everything related to Options
                      # - Font type, Font size, Theme, etc.
                      # - Every UI init and update when data changes

  shared/           # Everything common (used at more places)
                      # - Date formatting (Last sync)
                      # - Managing the permissions (Requesting, Removing, Checking)
                      # - Helpers for Chrome Storage
                      # - Default values (Notes, Options)

  themes/           # Light, Dark, Custom

  background.ts     # Main script for background page
  notes.ts          # Main script for notes
  options.ts        # Main script for options

static/           # All static files (images, icons, HTML, CSS) copied to out/


.editorconfig     # To enforce same editor configuration
.eslintrc         # To enforce code quality and same coding style with ESLint
.eslintignore     # Files excluded from ESLint checking
.gitignore        # Files excluded from Git

jest.config.js    # Jest configuration
tsconfig.json     # Typescript configuration

package-lock.json
package.json

LICENSE           # MIT
manifest.json     # Main extension file

README.md
```

<br><br>

## Browser support

My Notes has full support in Google Chrome only. Although it may be possible to install it in other browsers, the support is not complete.

Support for other Chromium-based browsers will be added if possible.

<br><br>

## Security and Privacy

My Notes doesn't collect any personal information or data.
All your notes are stored locally in your browser.
If you use Google Drive Sync, My Notes can backup the notes to your personal Google Drive.

To provide Google Drive functionality, My Notes has an application in Google Cloud.
The sole purpose of this application is to authenticate you securely towards Google Drive and to allow the synchronization of notes.

<br><br>

## Permissions

My Notes has the permissions listed in `manifest.json`.

**Required:**

- `"storage"` — used to save your notes and options to Chrome Storage (locally in your Chrome)
- `"unlimitedStorage"` — used to increase the default storage limit (which is 5MB)
- `"contextMenus"` — used to create My Notes Context menu

Required permissions are shown to the user before installing the extension, and are needed at all times to provide the basic functionality.

**Optional:**

- `"identity"` — needed for "Enable Google Drive Sync" (see Options)

Optional permissions are needed only to provide additional functionality that can be enabled via a checkbox in Options.

User has the choice to either approve or deny the permissions.

<br><br>


