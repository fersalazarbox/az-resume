# az-resume
Resume static website, ACG project.

# Firsts steps:
* "index.html" was modified with my info.
* "main.js" file was created containing the visitors counter code.
* After any change we had to upload the branch from Git so we run these commands:
```git
git add -A
git commit -c "Updated"
git push
```

Conventional Commits extension was added.

Azure extension should be installed
This should be added in case not included (https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions#windows) with core tools(https://github.com/Azure/azure-functions-core-tools#installing)
A new function v4 is created, .NET 6 core is needed https://dotnet.microsoft.com/en-us/download/dotnet/6.0
Only with these youll be able to execute func command
To connect with COsmos use: https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-csharp#install-extension
AzureResumeConnectionString

Host CORS added in json.
in main.js the func api was populated to connect FE y BE

Deployed into a new function APP, Appconneftion added
Connect mainjs with new function API URL
enable CORS in Az

deploy static website in Blob storage

add url in CORS

Custom domain from Namecheap, link with blob
CDN for enabling https NOT

azure CLI installed

az login
az account show
NOT
az ad sp create-for-rbac --name "myML" --role contributor \
                            --scopes /subscriptions/<subscription-id>/resourceGroups/<group-name> \
                            --sdk-auth
az ad sp create-for-rbac --name "AzureResumeACG" --role contributor --scopes /subscriptions/00856252-080f-4328-9d88-43f52922d12e/resourceGroups/rg-portfolio-prod-eastus-001
az ad sp create-for-rbac --name "AzureResumeACG" --role contributor --scopes /subscriptions/00856252-080f-4328-9d88-43f52922d12e/resourceGroups/rg-portfolio-prod-eastus-001 --sdk-auth

NOT working for Student subs