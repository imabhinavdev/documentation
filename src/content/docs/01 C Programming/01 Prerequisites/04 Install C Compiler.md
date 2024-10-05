---
title: How to install C Compiler?
description: Learn how to install a C compiler on your computer to start writing and running C programs.
---
If you’re looking to start programming in C or C++, you’ll need a good compiler and a code editor. In this guide, we’ll walk you through the process of installing the MinGW compiler from the SourceForge website and setting up Visual Studio Code (VS Code) as your code editor. Let's get started!

## What You Will Need

- A Windows computer
- Internet connection

## Step 1: Download MinGW Compiler

### 1.1 Go to the SourceForge Website

1. Open your web browser.
2. Go to the [MinGW SourceForge page](https://sourceforge.net/projects/mingw/).

### 1.2 Download the Installer

1. On the MinGW page, click on the **Download** button. This will download a file named `mingw-get-setup.exe` to your computer.

### 1.3 Run the Installer

1. Locate the downloaded `mingw-get-setup.exe` file and double-click on it to run the installer.
2. Click **Install** to start the installation process.
3. Follow the on-screen instructions. Make sure to install it in a directory without spaces in the path (e.g., `C:\MinGW`).

### 1.4 Select Components

1. After installation, a window called **MinGW Installation Manager** will open.
2. Select the following packages:
   - `mingw32-base`
   - `mingw32-gcc-g++`
   - `mingw32-msys-base`
3. To select them, right-click on each package and choose **Mark for Installation**.

### 1.5 Apply Changes

1. After selecting the packages, click on **Installation** in the menu bar.
2. Select **Apply Changes**. This will download and install the selected packages.

### 1.6 Set Environment Variables

1. Right-click on **This PC** or **My Computer** on your desktop or in File Explorer, and select **Properties**.
2. Click on **Advanced system settings** on the left side.
3. In the System Properties window, click the **Environment Variables** button.
4. Under the **System variables** section, find the `Path` variable and select it, then click on **Edit**.
5. Click on **New** and add the path to the MinGW `bin` directory, usually `C:\MinGW\bin`.
6. Click **OK** to close all dialog boxes.

### 1.7 Verify the Installation

1. Open the Command Prompt by typing `cmd` in the Windows search bar and pressing **Enter**.
2. Type `gcc --version` and press **Enter**.
3. You should see the version of the GCC compiler installed, confirming that MinGW is correctly installed.

## Step 2: Install Visual Studio Code (VS Code)

### 2.1 Download Visual Studio Code

1. Open your web browser.
2. Go to the [Visual Studio Code website](https://code.visualstudio.com/).
3. Click on the **Download for Windows** button.

### 2.2 Run the Installer

1. Once the download is complete, locate the `VSCodeSetup.exe` file and double-click on it.
2. Click **Next** to start the installation process.
3. Accept the agreement and click **Next**.

### 2.3 Select Installation Location

1. Choose the destination folder where you want to install VS Code or leave it as default and click **Next**.

### 2.4 Select Additional Tasks

1. In this step, you can choose additional tasks like creating a desktop icon or adding to PATH. Select the options you want and click **Next**.

### 2.5 Install VS Code

1. Click **Install** to begin the installation.
2. Once the installation is complete, you can check the box to launch VS Code and click **Finish**.

## Step 3: Set Up C/C++ Extension in VS Code

### 3.1 Open Visual Studio Code

1. Launch Visual Studio Code.

### 3.2 Install the C/C++ Extension

1. Click on the **Extensions** icon in the left sidebar (it looks like four squares).
2. In the search bar, type `C/C++` and find the extension provided by Microsoft.
3. Click **Install** to add the C/C++ extension to VS Code.
4. Search for the **Code Runner** extension and install it as well.
5. Close the Extensions tab.
6. Click on the **Explorer** icon in the left sidebar to open the file explorer.
7. Click on the **New File** icon to create a new file and save it with a `.c` extension (e.g., `hello.c`).
8. Write a simple C program in the file, such as:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### 3.3 Build and Run the Program
1. Click on the **Run/Play** icon in the top right corner of the editor.
2. Click on **Run Code** to compile and run the program.
3. You should see the output `Hello, World!` in the terminal at the bottom of the VS Code window. Now you can build and run your program directly from VS Code!

## Conclusion

Congratulations! You have successfully installed the MinGW compiler from SourceForge and set up Visual Studio Code for C/C++ programming. You’re now ready to start coding and creating your own programs. Happy coding!
