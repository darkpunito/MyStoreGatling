Make sure you have JDK installed on your system and JAVA_HOME variable is added e.g.:

```
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_231
```

Apache Maven needs to be installed and path added to environment variables e.g.:

```
MAVEN_HOME = C:\Program Files\apache-maven-3.6.2
```

To run single simulation use following command:

```
mvn gatling:test -D"gatling.simulationClass"="MyStore.AccessHomePageSimulation"
```

To run whole suite of test simulations run:

```
mvn gatling:test
```
