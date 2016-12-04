import threading
import time
from flask import Flask, jsonify
import os
import serial
import glob
app = Flask(__name__)
# device="/dev/tty.usbmodem1411"
# ser = serial.Serial(device, 9600, timeout=5)
class Threading(object):
    """ Threading example class
    The run() method will be started and it will run in the background
    until the application exits.
    """
    d = {"s1": 0, "s2": 0, "s3": 0}
    # current_slide = 1
    # url = ''

    def __init__(self, interval=1):
        """ Constructor
        :type interval: int
        :param interval: Check interval, in seconds
        """
        self.interval = interval
        thread = threading.Thread(target=self.run, args=())
        thread.daemon = True                            # Daemonize thread
        thread.start()                                  # Start the execution

    def run(self):
        """ Method that runs forever """
        x = 0
        while True:
            x +=1
            if x == 15:
                self.d["s1"], self.d["s2"], self.d["s3"] = 1, 1, 1
            time.sleep(self.interval)

            # Do something


data = Threading()

@app.route('/')
def display():
    return jsonify(data.d)

@app.route('/viewer/')
def viewer():
    return None

time.sleep(3)
print('Checkpoint')
time.sleep(2)
print('Bye')


if __name__ == '__main__':
  app.run()