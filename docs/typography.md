# Typography
These functions can be used to create custom typography classes based on Office UI Fabric instead of using the default provided classes. These classes also provide `em` based font sizes and not fixed pixel based.

## uiFontSize(fontSizeParam)
Possible font size values that can be passed to this SASS `@mixin` are:

| fontSizeParam | Output font size | UI Fabric | UI Fabric size |
| ------------- | -----:| ------------- | ----:|
| **su**      | 3em | .ms-fontSize-su  | 42px |
| **xxl**     | 2em | .ms-fontSize-xxl | 28px |
| **xl**      | 1.5em | .ms-fontSize-xl  | 21px |
| **l**       | 1.21429em | .ms-fontSize-l | 17px |
| **m-plus**  | 1.07143em | .ms-fontSize-mPlus | 15px |
| **m**       | 1em | .ms-fontSize-m | 14px |
| **s-plus**  | 0.92857em | .ms-fontSize-sPlus | 13px |
| **s**       | 0.85714em | .ms-fontSize-s | 12px |
| **xs**      | 0.78571em | .ms-fontSize-xs | 11px |
| **mi**      | 0.71429em | .ms-fontSize-mi | 10px |

To use this mixin simply includes this style with and the parameter.

```sass
.mySuperLargeClass{
    @include uiFontSize(su); // Will return font-size 3em = 42px;
}
```

**Result in CSS**

```sass
.mySuperLargeClass{
    font-size: 3em // 3em at a base font size of 14px = 42px
}
```

**Result in SPFx Projects**

```sass
.mySuperLargeClass_714f5755{
    font-size: 3em // 3em at a base font size of 14px = 42px
}
```

## uiFontWidth(fontWeightParam)
This function will return you one of the following four defined font weights.

| fontWeightParam | Name | CSS value | Office UI Fabric Definition |
| ------------- | ----- |:-------------:| ---- |
| **light**      | Thin / Hairline | 100  | .ms-fontWeight-light |
| **semilight**  | Light           | 300  | .ms-fontWeight-semilight |
| **regular**    | Normal | 400  | .ms-fontWeight-regular  |
| **semibold**   | Bold   | 700  | .ms-fontWeight-semibold |

To use this mixin use the following syntax in your classes:

```sass

.myBoldText{
    @include(semibold); // will return the numeric value 700 / bold
}

.myCustomTextStyle{
		@include(light)
}

```

**Result in CSS**

```sass

.myBoldText{
    font-weight: 700;
}

.myCustomTextStyle{
    font-weight: 100;
}

```

**Result in SPFx Projects**

```sass

.myBoldText_714f5755{
    font-weight: 700;
}

.myCustomTextStyle_714f5755{
    font-weight: 100;
}

```

# uiFont($fontPara)
This `@mixin` will return a combination font weight and font size defined by Office UI Fabric.

| fontSizeParam | Font size | Font weight | UI Fabric | UI Fabric size |
| ------------- | -----:| ---- | ------------- | ----:|
| **su**      | 3em | 100 | .ms-font-su  | 42px |
| **xxl**     | 2em | 100 | .ms-font-xxl | 28px |
| **xl**      | 1.5em | 100 | .ms-font-xl  | 21px |
| **l**       | 1.21429em | 300 | .ms-font-l | 17px |
| **m-plus**  | 1.07143em | 400 |.ms-font-mPlus | 15px |
| **m**       | 1em | 400 |.ms-font-m | 14px |
| **s-plus**  | 0.92857em | 400 | .ms-font-sPlus | 13px |
| **s**       | 0.85714em | 400 | .ms-font-s | 12px |
| **xs**      | 0.78571em | 400 | .ms-font-xs | 11px |
| **mi**      | 0.71429em | 700 | .ms-font-mi | 10px |






