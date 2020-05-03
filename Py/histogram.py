def largestRectangleArea(heights):
    """
    :type heights: List[int]
    :rtype: int
    """
    # for every bar, calc the area which uses this bar as the lowest bar
    # therefore we need to find the first lower bar towards the left and the
    # first lower bar towards the right
    # hence, we need a stack to keep stacking the higher bars
    # when a lower bar appears, thats the first lower bar towards the right
    # and the first lower bar towards the left will be the next bar in the stack
    stack = []
    max_area = 0
    for i in range(len(heights)):
        if not stack:
            stack.append(i)
        else:
            # if height not decreasing, just stack
            if heights[i] >= heights[stack[-1]]:
                stack.append(i)
                continue
            while stack and heights[i] < heights[stack[-1]]:
                # for the bar on top of the stack
                # we found the first lower bar towards the right
                this_bar = stack.pop()
                right_index = i
                # no lower towards the left, so make it left of the leftmost, which makes it -1
                left_index = stack[-1] if stack else -1
                area = heights[this_bar] * (right_index - left_index - 1)
                max_area = max(area, max_area)
            stack.append(i)
    while stack:
        this_bar = stack.pop()
        # no lower towards the right, so make it right of the rightmost, which makes it len(heights)
        right_index = len(heights)
        left_index = stack[-1] if stack else -1
        area = heights[this_bar] * (right_index - left_index - 1)
        max_area = max(area, max_area)
    return max_area


arr = [2561, 2093, 430, 64, 162, 745, 2741, 1131, 1462,
       3304, 1177, 1383, 2016, 2777, 2909, 621, 1457, 485]

a = largestRectangleArea(arr)

print(len(arr))
print(arr)
print(a)
