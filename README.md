# Feature flags
When rolling out a new feature in the software, the developers don't know if there exist bugs in the features. In the case where there are bugs, it is often time-consuming to create and provide a patch as an update for the affected users. Even if developers manage to provide an update, users have to update the application (in the case of mobile applications) to be able to access it normally again. A solution to this problem is feature flags. With feature flags, developers wrap the code of their newly created feature in an if-statement with a flag. These flags can be enabled/disabled remotely, and only when they are enabled, the users get access to the feature. This way, if there are bugs in the feature, the developers can disable the flags remotely which disables the buggy feature, and the users can use the rest of the application normally without having to update.

Feature flags let developers do Staged Feature Rollouts where new features are enabled for a portion of the users, and if there are no issues with the features for these users, the features are rolled out for the rest of the users. It is also possible to do A/B testing using feature flags, where two versions of the same feature (with a slight difference) are rolled out for two groups of users, and their response is analyzed. Then the version with the better user response is rolled out to the rest of the users to increase revenue and users satisfaction.  

# Flagsmith
Flagsmith lets developers manage software features in order to obtain Staged Feature Rollouts, detect bugs easier and perform A/B Testing. It lets developers test the new features of the software on a small group of users and deploy them later to all of the users. This helps to detect bugs in the software which might not have been detected during the development. Flagsmith also allows A/B testing. By enabling the different sets of features to different sets of users, developers can analyze users' reactions to different features and choose the features that suit them best for the final version of the software. Flagsmith is available for desktop, mobile, and web applications.

# Demo
This repo includes a shopping website where features flags have been presented as a demo. The new feature of the website, "the dark mode", is enabled for a portion of users using feature flags (in Flagsmith) to detect bugs in the feature. In the live demo, the process of creating a segment (group) of users, traits (filter properties of users), and flags have been presented. In the second part of the presentation, a short demo of A/B testing has also been presented where two groups of users see different types of shopping banners (a normal banner and a popup banner) on the website, and their click rate is collected for analyzing.


# Requirements
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
 