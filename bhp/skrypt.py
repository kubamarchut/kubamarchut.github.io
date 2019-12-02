from os import listdir

import json
from os.path import isfile, join
onlyfiles = [f for f in listdir('C:/Users/Kuba/Desktop/bhp/pytania') if isfile(join('C:/Users/Kuba/Desktop/bhp/pytania', f))]

jfile = []

for file in onlyfiles:
    questions = []

    with open('C:/Users/Kuba/Desktop/bhp/pytania/' + file, 'r', encoding='utf-8') as fp:
        line = 1
        cnt = 1
        while line:
            line = fp.readline().rstrip('\n')
            line2 = fp.readline().rstrip('\n')
            if not line: break
            questions.append({'p' : line, 'o' : line2})
            cnt += 1


    jfile.append({'n' : file[:-4],'p': questions})


with open('pytania.json', 'w', encoding='utf-8') as f:
    json.dump(jfile, f, ensure_ascii=False, indent=2)
