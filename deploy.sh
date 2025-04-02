#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting deployment process...${NC}"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${BLUE}Initializing git repository...${NC}"
    git init
fi

# Add all files
echo -e "${BLUE}Adding files to git...${NC}"
git add .

# Commit changes
echo -e "${BLUE}Committing changes...${NC}"
git commit -m "Deploy to GitHub Pages"

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo -e "${BLUE}Please enter your GitHub repository URL:${NC}"
    read repo_url
    git remote add origin $repo_url
fi

# Push to main branch
echo -e "${BLUE}Pushing to main branch...${NC}"
git branch -M main
git push -u origin main

echo -e "${GREEN}Deployment completed!${NC}"
echo -e "${BLUE}Please go to your repository's Settings > Pages to enable GitHub Pages.${NC}" 