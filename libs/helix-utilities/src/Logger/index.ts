export type logLevel = 'critical' | 'error' | 'warn' | 'success' | 'info' | 'debug' | 'trace'

export interface LoggerOptions {
  level?: logLevel
  name?: string
}

export enum loggerColors {
  critical = '\u001b[31m',
  warn = '\u001b[33m',
  success = '\u001b[32m',
  info = '\u001b[34m',
  debug = '\u001b[36m',
  trace = '\u001b[35m',
  message = '\u001b[37m',
}

export class HelixLogger {
  private level: logLevel | undefined
  private readonly name: string | undefined
  constructor(options: LoggerOptions) {
    this.name = options.name
    this.level = options.level
  }

  logToConsole(level: logLevel, message: string) {
    if (!this.level) {
      this.level = 'info'
    }

    switch (level) {
      case 'critical':
        console.log(
          `${loggerColors.critical}[${this.name?.toUpperCase()}] | [CRITICAL] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'error':
        console.log(
          `${loggerColors.critical}[${this.name?.toUpperCase()}] | [ERROR] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'warn':
        console.log(
          `${loggerColors.warn}[${this.name?.toUpperCase()}] | [WARNING] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'success':
        console.log(
          `${loggerColors.success}[${this.name?.toUpperCase()}] | [SUCCESS] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'info':
        console.log(
          `${loggerColors.info}[${this.name?.toUpperCase()}] | [INFO] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'debug':
        console.log(
          `${loggerColors.debug}[${this.name?.toUpperCase()}] | [DEBUG] | ${
            loggerColors.message
          }${message}`
        )
        break
      case 'trace':
        console.log(
          `${loggerColors.trace}[${this.name?.toUpperCase()}] | [TRACE] | ${
            loggerColors.message
          }${message}`
        )
        break
    }
  }

  // logToFile(level: logLevel, message: string) {}

  // logToElastic(level: logLevel, message: string) {}

  private log(level: logLevel, message: string) {
    if (!this.level) {
      this.level = 'info'
    }

    switch (level) {
      case 'critical':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
      case 'error':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
      case 'warn':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
      case 'success':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
      case 'info':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
      case 'debug':
        this.logToConsole(level, message)
        // this.logToFile(level, message)
        // this.logToElastic(level, message)
        break
    }
  }

  public critical(message: string) {
    this.log('critical', message)
  }

  public error(message: string) {
    this.log('error', message)
  }

  public warn(message: string) {
    this.log('warn', message)
  }

  public success(message: string) {
    this.log('success', message)
  }

  public info(message: string) {
    this.log('info', message)
  }

  public debug(message: string) {
    this.log('debug', message)
  }
}
