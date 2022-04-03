# Flagsmith
Flagsmith lets developers manage software features in order to obtain Staged Feature Rollouts, detect bugs easier and perform A/B Testing. It lets developers test the new features of the software on a small group of users and depolying them later to all of the users. This helps to detect bugs in the software which might not have been detected during the development. Flagsmith also allows A/B testing. By enabling the different sets of features to different sets of users, developers can analys users reactions to different features and thus choose the features that suits best in the final version of the software. 

# Demo
This repo includes a shopping website where some of the Flagsmith features have been presented as a demo. 








# remove below later.
The concept: Students prepare a demonstration involving DevOps technology, to be performed during the lecture. For example, a demo typically involves multiple virtual machines, likely deployed in the cloud. A demonstration is scripted, prepared and lasts 5 minutes.


|                                             | Yes | No | 
|-------------------------------------------- | ----|----|
|timing: The demo lasts between 4:30-5 minutes (hard limit)  | Mandatory | - |
|motivation: The demonstration is clearly motivated (why it matters for Devops?) | Yes | No | 
|narrative: The demo contains a good narrative | Yes | No | 
|difficulty: The demonstration is difficult to do | Yes | No |
|speech: The demo is accompanied by a clearly and structured speech | Yes | no |
|originality: The demonstration is original (there are few demos/tutos on this topic on the Internet)| Yes | No | 
|aesthetics: The demo is visually appealing | Yes | No | 
|easter-egg: The demo contains an [easter egg](https://github.com/OrkoHunter/python-easter-eggs) related to the demo topic| Yes | No |
|repo: There is a good code repo, documented with a README, to run the demo. | Yes | No | 
|take-home: The demo includes a clear and visible take-home message | Yes | No | 


To pass, you must have at least 7 "yes".

tASKS:
- [ ] write the goal of feature flags and why does this matter for programmers. Write what it is.
- [ ] write a good script with plans and steps.



### Steps for the script:
- [ ] What is the problem:
          - When rolling out a feature,  you dont know if there are bugs in the feature, so you want to give access to the feature to a portion of your users (increases the chance to detect bugs without affecting the entire set of users) and also get fast feedback.
          - A/B testing
          - Control the release of the feature in case bugs where detected (who and when)
          - Because new unready features are disabled in the application and they are part of the production code, you can continuesly deliver features at anytime by just enabling the features when they are ready. No need to merge branches and waiting for the users to update.
  
- [ ] Flagsmith:
          - Feature flags are are provided by Flagsmith. Flagsmith can be used in Desktop, Mobile and Web (front and backend), applications, 
          - with Flagsmith you can create feature flags to control which part of the code are executed and which features are visible for a specific set of users.
          - every user has static properties like email-address, city or other properties like weather they have accepted the terms and condtions. These properties are called traits and you can create segments of users by the value of their traits. When you have created your segment of users then you can enable your application features for a specific segment.
          - The part of the code that is considered a feature can be wrapped up in an if-statement with a flag. A flag can be manually created as to give access to a part of the code.

- [ ] Flagsmith Demo:
          - For example, we created a website with some items that have some features. chloe will present it now
          - start by shown the website
          - present dark mode feature: for example we have created a new dark mode feature for the website, but we dont know if it is bugfree or not. we can then enable this feature for some of our users.
          - Create a segment: to this we first quantify our users by creating a segment of users. Here we are creating our segment for the users which their email address end with the flagstang.com domain. 
          - Create flag: Then we create a flag for our feature in Flagsmith.
          - Wrap code with flag:  Then we wrap our feature code in an if statement with our flag. 
          - Enable the feature and show website: Now when we enable of flag for a segment of users, only they will have access to the feature. And we can detect bugs from these users without affecting all of our users.

- [ ] AB testing:
          - Feature flags provide also A/B testing. Sometimes we want to compare two different versions of a features and see how users respond to each of version. This can be done with A/B testing. 
          - For example:
          - On our website, we want to sell an item and we want to see if a banner attracts more users or a popup.
          - We test different versions of our website with different type of banners on 10% of our users. We divided these 10% into 2 halfs, where one half sees the banner and the other half sees the popup. Then we can collect the click rate of each set of users using another tool like Mixpanel. This way we know with version did better and roll out that version to the rest of the users.

          - create feature flag
          - create a user 
          - set the feature flag to below header
          - go to the code
          - change user id to newly created
          - go back to website and reload and click
          - go to mixpanel


## In the script:
benfits of using flagsmith in mobile applications
- Feature Flags really come into their own when managing the features of a mobile application. If you ship a bug in your mobile app, there is a significant time delay in getting a fix onto your user's device:

- You have to wait for App/Play Store approval (although this time period has got much better in recent years)
- Once your new app version is live, you then have to wait for your users to upgrade their application, which could take weeks or even months.

flag examples in mobile applications:
Platform (iOS or Android)
Platform Version (e.g. Android 11, iOS 14)
Your Application Version (this would be the version number you ship your app as - generally the one that shows up in the App/Play Store)


example of a bug on subset of devices:
We've done the hard work and isolated which precise subset of users are affected by this issue. We want the feature to continue to show and work for all our other users (in this case Android users and iOS users on versions older than 5.4.0), but we want to disable it for the affected users.


- [ ] make a good looking website
- [ ] a summary


What we need:
- [ ] 2 users to do AB testing
- [ ] dark mode or design change for a specific segment
- [ ] different color and position change of an elements, like or buy button to see how many people react to it (AB testing)
- [ ] alpha beta users and environment

