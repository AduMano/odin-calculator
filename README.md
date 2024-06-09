# BASIC STANDARD CALCULATOR - THE PROJECT ODIN

> [!NOTE]
> ### GOALS:
> - Make a Calculator that can handle 4 operations (+ > - * /)
> - Can Clear current session
> - Display result
> - Don't use Eval(), 
> - The calculator should not evaluate more than a single pair of numbers at a time
> - Allow Floating Point numbers
> - Allow Back Spacing
> - Add Keyboard support

### IDEA:
I have already visualized my layout, hoping I can attain it.

```
=========================
		            20 +
		            400
=========================
|     C     |  <  |  +  |
|  7  |  8  |  9  |  -  |
|  4  |  5  |  6  |  x  |
|  1  |  2  |  3  |  =  |
|  0  |  .  |  /  |  =  |

4 x 5 Grid
first element = takes 2 space Horizontally
last elements = takes 2 space Vertically
```

### LOGS:

> [!NOTE] 
> #### ENTRY #1 [JUNE 10, 2024 : 01:19 AM]
> Added a html structure. will be working on CSS for now

> [!NOTE]
> #### ENTRY #2 [JUNE 10, 2024 : 02:10 AM]
> Added CSS on my HTML Structure. Will be working on JS for now

> [!NOTE]
> #### ENTRY #3 [JUNE 10, 2024 : 04:01 AM]
> Done adding all features.

> [!NOTE]
> #### ENTRY #4 [JUNE 10, 2024 : 06:03 AM]
> - Removed all unused variables and operations and commented syntax
> - Fixed where you can still enter decimal point and operators when got Infinity
> - When backspacing the result "Infinity", it should clear it instead
> - dividing 0. to itself results to NaN, Ill return 0 instead (Since division by 0 is Infinity, but ill return it to 0)