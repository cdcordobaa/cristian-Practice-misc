def longestZigZag(root, i):

    def dfs(root, i):
        if i > len(root) - 1 or root[i] == None:
            print(None, i)
            return [-1, -1, -1]
        print(root[i], i)
        left, right = dfs(root, i * 2), dfs(root, i * 2 + 1)
        return [left[1] + 1, right[0] + 1, max(left[1] + 1, right[0] + 1, left[2], right[2])]
    return dfs(root, i)[-1]


d = [None,
     1,
     1, 1,
     None, 1, None, None,
     None, None,  1, 1, None, None, None, None,
     None, None, None, None, None, 1]


f = [None,
     1,
     None, 1,
     None, None,  1, 1,
     None, None, None, None, None, None, 1, 1,
     None, None, None, None, None, None, None, None, None, None, None, None, None, 1, None, None,
     None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, 1
     ]

l = [None,
     1,
     1, 1,
     1, 1,  1, 1,
     1, 1, 1, None, 1, None, 1, 1,
     1, 1, 1, 1, None, 1, None, None, 1, 1, None, None, None, 1, 1, 1,
     1, 1, None, 1, 1, 1, 1, None, None, None, 1, None, 1, 1, None, 1, None, None, None, None, None, None, None, None, None, None, None, 1, 1, None, 1
     ]


r = longestZigZag(l, 1)

print(r)
print(len(l))
