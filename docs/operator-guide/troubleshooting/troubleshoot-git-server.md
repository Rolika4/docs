# Codebase Creation Issue

This troubleshooting page covers issues related to codebases.

## Problem

Application can't be added in the KubeRocketCI portal because of insufficient rights:

  ![Insufficient permissions error](../../assets/operator-guide/insufficient_permissions.png "Insufficient permissions error")

## Cause

It is likely that the token that is created and used for Git Server integration lacks specific rights.

## Solution

To fix the problem, try the following method:

1. Adjust token rights or create a new token with the required set of permissions. Please refer to the [Manage Git Providers](../../user-guide/add-git-server.md) for details.

2. Ensure to set correct Git Server properties. The process of adding a Git Server is described in the [Manage Git Servers](../../user-guide/add-git-server.md) page.

3. Retry to create application.

  ![Codebase created](../../assets/operator-guide/codebase_synced.png "Codebase created")

## Related Articles

* [Manage GitServer](../../user-guide/add-git-server.md)
