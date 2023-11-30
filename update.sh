echo "Updating from Git..."
git pull origin main

read -p "Enter commit message: " commit_message

echo "Committing changes..."
git add .
git commit -m "$commit_message"

echo "Pushing changes to Git..."
git push -u origin main

echo "Update complete!"