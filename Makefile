SHELL := /bin/bash

NVM_DIR ?= $(HOME)/.nvm
NVM := . "$(NVM_DIR)/nvm.sh"

.PHONY: help dev build install clean version fix-watchers

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

version: ## Print build version info (tag, commit, date)
	@$(NVM) && node scripts/generate-version.js

fix-watchers: ## Raise inotify watcher limit (needs sudo, run once)
	@sudo sysctl -w fs.inotify.max_user_watches=524288

install: ## Install dependencies (npm ci)
	@$(NVM) && npm ci

dev: ## Start the local dev server with nvm
	@$(NVM) && \
	REACT_APP_BUILD_TAG=$$(node scripts/generate-version.js --tag) \
	REACT_APP_BUILD_COMMIT=$$(git rev-parse --short HEAD) \
	npm run start

build: ## Production build with the last commit tag embedded
	@$(NVM) && \
	REACT_APP_BUILD_TAG=$$(node scripts/generate-version.js --tag) \
	REACT_APP_BUILD_COMMIT=$$(git rev-parse --short HEAD) \
	npm run build

clean: ## Remove build artifacts
	rm -rf build
