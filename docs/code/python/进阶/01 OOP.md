# Python面向对象

# 大纲

1. **基础概念**

- 理解类与对象的概念
- 掌握 `__init__` 构造方法
- 学会使用实例属性和实例方法
- 理解 `self` 的作用

1. **特性与方法**

- 类变量与类方法
- 静态方法的使用
- 属性方法 (@property)
- 访问控制（公有、私有、受保护）

1. **面向对象特性**

- 继承的概念与实现
- 方法重写与super()的使用
- 多重继承与MRO
- 多态的理解与应用
- 抽象基类的设计

1. **高级特性**

- 魔法方法的深入应用
- 反射机制与动态编程
- 元类与动态类创建
- 上下文管理器
- 装饰器与OOP的结合

1. **设计与模式**

- 设计模式（单例、工厂、观察者等）
- SOLID原则的理解与应用
- 代码重构与优化
- 项目架构设计

## 1. 初识面向对象编程

### 1.1 的类与对象

面向对象编程(OOP)的核心理念是将现实世界的实体抽象为程序中的类和对象。

**核心概念定义：**

- **类(Class)**: 用来描述具有相同属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。类是创建对象的模板或蓝图。
- **对象(Object)**: 通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。每个对象都有独特的身份、状态和行为。
- **实例化**: 创建一个类的实例（对象）的过程。当我们根据类创建一个具体对象时，就称为实例化。

```python
# 类的定义示例
class Car:
    # 类的属性和方法定义
    pass

# 对象的创建
my_tesla = Car()  # 创建Car类的一个实例
```

### 1.2 Python 中的类与对象

Python作为面向对象语言，提供了简洁而强大的类和对象实现机制。

**定义类的基本语法：**

```python
class Car:
    # 类变量
    wheels = 4
    
    # 初始化方法
    def __init__(self, make, model, year, color):
        # 实例变量
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.odometer = 0
    
    # 实例方法
    def drive(self, distance):
        self.odometer += distance
        print(f"行驶了{distance}公里，总里程: {self.odometer}公里")
    
    def get_description(self):
        return f"{self.year} {self.make} {self.model}, {self.color}色"
```

**创建和使用对象：**

```python
# 创建对象
my_car = Car("特斯拉", "Model 3", 2022, "红")

# 访问对象的属性
print(my_car.make)  # 输出: 特斯拉
print(my_car.model)  # 输出: Model 3

# 调用对象的方法
print(my_car.get_description())  # 输出: 2022 特斯拉 Model 3, 红色
my_car.drive(100)  # 输出: 行驶了100公里，总里程: 100公里
```

### 1.3 类与实例的关系

类定义了对象的蓝图或模板，描述了对象所具有的：

1. **数据成员**: 类变量或者实例变量用于处理类及其实例对象的相关数据

- **类变量**: 在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用，所有实例都共享同一个类变量
- **实例变量**: 在类的声明中，属性是用变量来表示的，这种变量就称为实例变量。实例变量就是一个用 self 修饰的变量，每个实例都有自己的实例变量副本
- **局部变量**: 定义在方法中的变量，只作用于当前方法的执行过程中

1. **方法(Methods)**: 类中定义的函数，用于描述对象的行为

- **实例方法**: 操作实例数据的方法，第一个参数必须是 self
- **类方法**: 操作类数据的方法，使用 @classmethod 装饰器
- **静态方法**: 与类相关但不操作类或实例数据的方法，使用 @staticmethod 装饰器

```python
class Student:
    # 类变量
    school = "Python编程学院"
    
    def __init__(self, name, age):
        # 实例变量
        self.name = name
        self.age = age
        self.grades = []
    
    # 实例方法
    def add_grade(self, grade):
        self.grades.append(grade)
    
    # 类方法
    @classmethod
    def change_school(cls, new_school):
        cls.school = new_school
    
    # 静态方法
    @staticmethod
    def is_adult(age):
        return age >= 18
```

### 1.4 构造方法 **init**

`__init__`是特殊的构造方法，用于初始化新创建的实例对象。

**构造方法的特点：**

- 当创建类的实例时自动调用
- 用于设置对象的初始状态
- 可以接受参数来初始化实例属性

```python
class Book:
    def __init__(self, title, author, pages):
        # 初始化实例属性
        self.title = title
        self.author = author
        self.pages = pages
        self.current_page = 0
    
    def read(self, pages_to_read):
        self.current_page += pages_to_read
        if self.current_page > self.pages:
            self.current_page = self.pages
        print(f"当前阅读到第{self.current_page}页，共{self.pages}页")

# 使用构造方法创建对象
python_book = Book("Python编程", "张三", 500)
print(f"书名: {python_book.title}")
print(f"作者: {python_book.author}")
python_book.read(50)  # 阅读50页
```

### 1.5 self 的作用

`self`是实例方法的第一个参数，表示调用该方法的实例对象。

**self的作用：**

- 表示调用该方法的实例对象
- 用于访问实例的属性和其他方法
- 在方法内部区分实例变量和局部变量

```python
class Robot:
    def __init__(self, name):
        self.name = name
    
    def say_hello(self):
        # 使用self访问实例属性
        print(f"你好，我是{self.name}")
    
    def introduce(self):
        # 使用self调用其他实例方法
        self.say_hello()
        print("我是一个机器人助手")

# 创建机器人并调用方法
robot = Robot("小助手")
robot.introduce()
```

## 2. 类的核心特性

[实例方法，类方法，静态方法,属性方法](https://www.yuque.com/wds2dxh/gt6gw7/df76bqmx9rp7g8f4)

## 3. 面向对象三大特性

### 3.1 继承 (Inheritance)

**继承概念详解：**

**继承**: 即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。例如，有这样一个设计：一个Dog类型的对象派生自Animal类，这是模拟"是一个（is-a）"关系（例：Dog是一个Animal）。

继承的主要作用：

- 代码复用：子类可以直接使用父类的属性和方法
- 扩展功能：子类可以添加新的属性和方法
- 方法重写：子类可以重新定义父类的方法以满足特殊需求

**基础继承：**

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        return f"{self.name} makes a sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")  # 调用父类构造方法
        self.breed = breed
    
    def speak(self):  # 方法重写（override）
        """
        方法重写：如果从父类继承的方法不能满足子类的需求，
        可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写
        """
        return f"{self.name} barks: Woof!"
    
    def fetch(self):  # 子类特有的方法
        return f"{self.name} fetches the ball"

# 使用继承
dog = Dog("Buddy", "Golden Retriever")
print(dog.speak())  # 输出: Buddy barks: Woof!
print(dog.info())   # 调用父类方法: Buddy is a Dog
print(dog.fetch())  # 调用子类方法: Buddy fetches the ball
```

**多重继承：**

```python
class Mammal:
    def breathe(self):
        return "Breathing with lungs"

class Carnivore:
    def diet(self):
        return "Eats meat"

class Wolf(Mammal, Carnivore):
    def __init__(self, name):
        self.name = name
    
    def hunt(self):
        return f"{self.name} is hunting"

# 使用多重继承
wolf = Wolf("Alpha")
print(wolf.breathe())  # 从Mammal继承
print(wolf.diet())     # 从Carnivore继承
print(wolf.hunt())     # Wolf类自己的方法

# 查看方法解析顺序(MRO)
print(Wolf.__mro__)
```

### 3.2 多态 (Polymorphism)（传递不同的对象，基于反射也可实现）

多态允许不同的对象对同一消息做出不同的响应。

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

# 多态的使用
def print_shape_info(shape: Shape):
    print(f"Area: {shape.area():.2f}")
    print(f"Perimeter: {shape.perimeter():.2f}")

# 不同的对象，相同的接口
shapes = [
    Rectangle(5, 3),
    Circle(4)
]

for shape in shapes:
    print_shape_info(shape)  # 多态：同一方法，不同实现
    print()
```

### 3.3 封装 (Encapsulation)

封装是将数据和操作数据的方法绑定在一起，并对外隐藏实现细节。

```python
class BankAccount:
    def __init__(self, account_number, initial_balance=0):
        self._account_number = account_number  # 受保护属性
        self.__balance = initial_balance       # 私有属性
        self.__transactions = []               # 私有属性
    
    @property
    def balance(self):
        """只读属性"""
        return self.__balance
    
    @property
    def account_number(self):
        return self._account_number
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__transactions.append(f"Deposit: +{amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self.__transactions.append(f"Withdrawal: -{amount}")
            return True
        return False
    
    def get_transaction_history(self):
        return self.__transactions.copy()  # 返回副本，保护内部数据
    
    def __str__(self):
        return f"Account {self._account_number}: Balance ${self.__balance}"

# 使用封装
account = BankAccount("12345", 1000)
print(account.balance)  # 可以读取
# account.balance = 500  # 错误！不能直接修改

account.deposit(200)
account.withdraw(150)
print(account)
print(account.get_transaction_history())
```

## 4. Python 特殊机制与高级特性

### 4.1 魔法方法详解

Python中的魔法方法（以双下划线开头和结尾）可以让我们自定义类的行为。

**对象的字符串表示：**

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """对象的字符串表示，用于print()"""
        return f"《{self.title}》 by {self.author}"
    
    def __repr__(self):
        """对象的官方表示，用于调试"""
        return f"Book(title='{self.title}', author='{self.author}', pages={self.pages})"

book = Book("Python编程", "张三", 500)
print(book)       # 调用__str__方法
print(repr(book)) # 调用__repr__方法
```

**运算符重载：(数组手搓transfer可以参考这个方式实现矩阵乘法）**

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        """实现向量加法: +"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """实现向量减法: -"""
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """实现向量与标量乘法: *"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __eq__(self, other):
        """实现向量比较: =="""
        return self.x == other.x and self.y == other.y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# 使用运算符重载
v1 = Vector(2, 3)
v2 = Vector(3, 4)

v3 = v1 + v2
print(v3)  # 输出: Vector(5, 7)

v4 = v1 - v2
print(v4)  # 输出: Vector(-1, -1)

v5 = v1 * 2
print(v5)  # 输出: Vector(4, 6)
```

### 3.2 反射机制 (getattr, setattr, ...)

反射是指程序在运行时能够获取、检测和修改自身状态或行为的一种能力。

**基本反射函数：**

- `getattr(object, name[, default])`: 获取对象的属性或方法
- `setattr(object, name, value)`: 设置对象的属性或方法
- `hasattr(object, name)`: 检查对象是否有特定的属性或方法
- `delattr(object, name)`: 删除对象的属性或方法

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"你好，我是{self.name}"


# 创建实例
person = Person("张三", 25)

# 使用反射获取属性
name = getattr(person, "name")
print(name)  # 输出: 张三

# 检查属性是否存在
has_address = hasattr(person, "address")
print(has_address)  # 输出: False

# 动态设置属性，也可以动态设置方法
setattr(person, "address", "北京市")
print(person.address)  # 输出: 北京市

# 动态获取并调用方法
if hasattr(person, "greet"):
    method = getattr(person, "greet")
    print(method())  # 输出: 你好，我是张三
```

**反射的高级应用 - 插件系统：**（agent开发中，使用动态导入模块和类的方式，动态加载多种llm、mcp工具实现！）

```python
class PluginManager:
    def __init__(self):
        self.plugins = {}
    
    def register_plugin(self, name, plugin):
        self.plugins[name] = plugin
    
    def execute_plugin(self, name, *args, **kwargs):
        if name in self.plugins:
            plugin = self.plugins[name]
            if hasattr(plugin, "execute"):
                method = getattr(plugin, "execute")
                return method(*args, **kwargs)
            else:
                raise AttributeError(f"插件 {name} 没有execute方法")
        else:
            raise KeyError(f"未找到插件 {name}")

# 定义插件
class TextPlugin:
    def execute(self, text):
        return text.upper()

class NumberPlugin:
    def execute(self, number):
        return number * 2

# 使用插件管理器
manager = PluginManager()
manager.register_plugin("text", TextPlugin())
manager.register_plugin("number", NumberPlugin())

print(manager.execute_plugin("text", "hello"))  # 输出: HELLO
print(manager.execute_plugin("number", 10))     # 输出: 20
```

### 3.3 元类与动态类创建

**使用type动态创建类：**

```python
# 定义类的方法
def say_hello(self):
    return f"你好，我是{self.name}"


def __init__(self, name):
    self.name = name


# 动态创建类: type(类名, 父类元组, 属性字典)，注意父类元组必须是元组并且逗号要保留
DynamicPerson = type('DynamicPerson', (object,), {
    '__init__': __init__,
    'name': '默认名字',
    'say_hello': say_hello
})

# 使用动态创建的类
person = DynamicPerson("张三")
print(person.say_hello())  # 输出: 你好，我是张三
```

**自定义元类：（继承是控制类行为，元类是决定类的创建过程）**

```python
class LoggingMeta(type):
    def __new__(mcs, name, bases, attrs):
        """创建类时调用"""
        print(f"创建类: {name}")
        # 为所有方法添加日志
        for attr_name, attr_value in attrs.items():
            if callable(attr_value) and not attr_name.startswith('__'):
                attrs[attr_name] = LoggingMeta.log_method(attr_value)
        return super().__new__(mcs, name, bases, attrs)
    
    @staticmethod
    def log_method(method):
        """为方法添加日志装饰器"""
        def wrapper(*args, **kwargs):
            print(f"调用方法: {method.__name__}")
            return method(*args, **kwargs)
        return wrapper

# 使用自定义元类创建类
class MyClass(metaclass=LoggingMeta):
    def method1(self):
        return "方法1的结果"
    
    def method2(self, x):
        return f"方法2的结果: {x}"

# 使用带有日志功能的类
obj = MyClass()
print(obj.method1())  # 输出日志和结果
print(obj.method2(42))  # 输出日志和结果
```

### 3.4 异常处理与自定义异常

**基本异常处理：**

```python
try:
    # 可能引发异常的代码
    x = 10 / 0
except ZeroDivisionError as e:
    # 处理特定类型的异常
    print(f"发生除零错误: {e}")
except (TypeError, ValueError) as e:
    # 处理多种类型的异常
    print(f"发生类型或值错误: {e}")
except Exception as e:
    # 处理所有其他异常
    print(f"发生其他错误: {e}")
else:
    # 如果没有异常发生则执行
    print("没有异常发生")
finally:
    # 无论是否有异常都会执行
    print("清理工作")
```

**自定义异常：**

```python
class ValidateError(Exception):
    """验证错误的基类"""
    pass

class AgeError(ValidateError):
    """年龄验证错误"""
    def __init__(self, age, message="年龄必须在0到150之间"):
        self.age = age
        self.message = message
        super().__init__(self.message)
    
    def __str__(self):
        return f"{self.message}, 收到的值: {self.age}"

class Person:
    def __init__(self, name, age):
        self.name = name
        self.set_age(age)
    
    def set_age(self, age):
        if not isinstance(age, int):
            raise TypeError("年龄必须是整数")
        if age < 0 or age > 150:
            raise AgeError(age)
        self.age = age

# 使用自定义异常
try:
    person = Person("张三", 200)
except TypeError as e:
    print(f"类型错误: {e}")
except AgeError as e:
    print(f"年龄错误: {e}")
```

### 3.5 描述符协议

描述符协议 = 实现以下方法的任意组合：

```python
class DescriptorProtocol:  
    def __get__(self, obj, objtype=None):  # 可选
        pass
    def __set__(self, obj, value):         # 可选
        pass
    def __delete__(self, obj):             # 可选
        pass
```

描述符是Python中一个强大的特性，允许你自定义属性访问行为，如下数据验证：（在这里主要是通过**拦截赋值行为**实现!）

```python
class Validator:
    def __init__(self, min_value=None, max_value=None):
        self.min_value = min_value
        self.max_value = max_value
    
    def __set_name__(self, owner, name):
        self.name = name
        self.private_name = '_' + name
    
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.private_name)
    
    def __set__(self, obj, value):	# 拦截赋值行为
        if not isinstance(value, (int, float)):
            raise TypeError(f"{self.name} 必须是数字")
        
        if self.min_value is not None and value < self.min_value:
            raise ValueError(f"{self.name} 必须 >= {self.min_value}")
        
        if self.max_value is not None and value > self.max_value:
            raise ValueError(f"{self.name} 必须 <= {self.max_value}")
        
        setattr(obj, self.private_name, value)

class Student:
    age = Validator(min_value=0, max_value=150)
    score = Validator(min_value=0, max_value=100)
    
    def __init__(self, name, age, score):
        self.name = name
        self.age = age
        self.score = score

# 使用描述符
student = Student("张三", 20, 85)
print(f"学生: {student.name}, 年龄: {student.age}, 分数: {student.score}")
```

## 5. 高级面向对象设计

### 5.1 设计模式

**单例模式：(自定义创建的行为实现）**

```python
class DatabaseConnection:
    _instance = None
    _initialized = False
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not self._initialized:
            self.connection = "Connected to database"
            self._initialized = True
    
    def query(self, sql):
        return f"Executing: {sql}"

# 测试单例
db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1 is db2)  # True
```

**工厂模式：（基于类实现，也可以基于反射实现）**

它的核心思想是：把“对象的创建过程”封装起来，让使用者不需要关心“怎么创建”，只需要“要什么”。

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    @staticmethod
    def create_animal(animal_type):
        animals = {
            'dog': Dog,
            'cat': Cat
        }
        
        if animal_type.lower() in animals:
            return animals[animal_type.lower()]()
        else:
            raise ValueError(f"Unknown animal type: {animal_type}")

# 使用工厂模式
dog = AnimalFactory.create_animal('dog')
cat = AnimalFactory.create_animal('cat')
print(dog.speak())  # Woof!
print(cat.speak())  # Meow!
```

**观察者模式（通过实例属性存储其他对象的引用,然后统一执行某一个方法然后遍历已经绑定了的对象）**

```python
class Subject:
    def __init__(self):
        self._observers = []
        self._state = None
    
    def attach(self, observer):
        self._observers.append(observer)
    
    def detach(self, observer):
        self._observers.remove(observer)
    
    def notify(self):
        for observer in self._observers:
            observer.update(self._state)
    
    def set_state(self, state):
        self._state = state
        self.notify()

class Observer:
    def __init__(self, name):
        self.name = name
    
    def update(self, state):
        print(f"{self.name} received update: {state}")

# 使用观察者模式
subject = Subject()
observer1 = Observer("Observer1")
observer2 = Observer("Observer2")

subject.attach(observer1)
subject.attach(observer2)

subject.set_state("New State")  # 通知所有观察者
```

### 5.2 **__init__和__new__**

**__init__和__new__区别(后者是创建的时候执行，前者是初始化的时候执行）**

- 实例是通过new返回，init没有返回值，只是做初始化
- **创建对象（分配内存）和 初始化对象（设置值）是两个不同的阶段。**
- **有些场景（如单例、不可变对象、对象池）需要在“创建阶段”就干预。**
- `**__new__**` **是底层构造机制，**`**__init__**` **是高层初始化接口。**

```python
class A:
    def __init__(self):
        print("我是 A 的初始化")

    def output(self):
        print("我是 A 的 output")


class B:
    def __new__(cls):
        print("B 的 __new__ 返回了 A 的实例！")
        return A()  # ← 返回的是 A 的实例！

    def __init__(self):
        print("我是 B 的初始化（不会被调用！）")


obj = B()
obj.output()  # 我是 A 的 output
print(type(obj))  # <class '__main__.A'>
```



### 5.3 上下文管理器 (**enter**, **exit**)

上下文管理器允许我们使用with语句进行资源管理，确保资源在使用后被正确清理。

- __enter__进入上下文时调用
- __exit__退出上下文时调用

```python
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        """进入上下文时调用"""
        print(f"打开文件: {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """退出上下文时调用"""
        if self.file:
            print(f"关闭文件: {self.filename}")
            self.file.close()
        # 返回True表示异常已处理，False表示异常需要继续传播
        return False

# 使用上下文管理器
with FileManager('example.txt', 'w') as file:
    file.write('Hello, world!')
# 文件在这里会自动关闭

# 更高级的上下文管理器示例
class DatabaseConnection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.connection = None
    
    def __enter__(self):
        print(f"连接到数据库 {self.host}:{self.port}")
        # 模拟数据库连接
        self.connection = f"connection_to_{self.host}_{self.port}"
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f"发生错误: {exc_val}")
            print("回滚事务")
        else:
            print("提交事务")
        print("关闭数据库连接")
        return False

# 使用数据库连接管理器
with DatabaseConnection("localhost", 5432) as conn:
    print(f"使用连接: {conn}")
    # 模拟数据库操作
```

### 5.4 容器行为 (**len**, **getitem**, ...)

当我们希望自己的类表现得像列表、字典等容器类型时，可以实现相应的魔法方法。

```python
class CustomList:
    def __init__(self, items):
        self.items = list(items)
    
    def __len__(self):
        """实现len()函数"""
        return len(self.items)
    
    def __getitem__(self, index):
        """实现索引访问: obj[index]"""
        return self.items[index]
    
    def __setitem__(self, index, value):
        """实现索引赋值: obj[index] = value"""
        self.items[index] = value
    
    def __delitem__(self, index):
        """实现删除索引: del obj[index]"""
        del self.items[index]
    
    def __contains__(self, item):
        """实现成员判断: item in obj"""
        return item in self.items
    
    def __iter__(self):
        """实现迭代: for item in obj"""
        return iter(self.items)
    
    def __reversed__(self):
        """实现reversed()函数"""
        return reversed(self.items)
    
    def __str__(self):
        return str(self.items)
    
    def append(self, item):
        """添加新的方法"""
        self.items.append(item)

# 使用容器方法
c_list = CustomList([1, 2, 3, 4, 5])
print(len(c_list))          # 输出: 5
print(c_list[2])            # 输出: 3
c_list[2] = 10
print(c_list[2])            # 输出: 10
print(3 in c_list)          # 输出: False
print(10 in c_list)         # 输出: True
print([x for x in c_list])  # 输出: [1, 2, 10, 4, 5]

c_list.append(6)
print(c_list)               # 输出: [1, 2, 10, 4, 5, 6]
```

### 5.5 可调用对象 (**call**)

`__call__`方法使得类的实例可以像函数一样被调用。

```python
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        """使实例可调用"""
        return x * self.factor

# 创建一个乘法器
double = Multiplier(2)
triple = Multiplier(3)

# 像函数一样调用对象
print(double(10))  # 输出: 20
print(triple(10))  # 输出: 30

# 更复杂的可调用对象示例
class Counter:
    def __init__(self):
        self.count = 0
    
    def __call__(self):
        self.count += 1
        return self.count
    
    def reset(self):
        self.count = 0

# 使用计数器
counter = Counter()
print(counter())  # 输出: 1
print(counter())  # 输出: 2
print(counter())  # 输出: 3
counter.reset()
print(counter())  # 输出: 1
```

## 6. 总结与展望

### 6.1 知识体系回顾

1. **基础概念**: 类、对象、实例化过程
2. **核心特性**: 封装、继承、多态三大特性
3. **方法类型**: 实例方法、类方法、静态方法、属性方法
4. **特殊机制**: 魔法方法、反射、元类、上下文管理器
5. **设计模式**: 单例、工厂、观察者等经典模式
6. **实践应用**: 完整项目开发与代码优化

### 6.2 核心设计原则

**SOLID原则**:

- 单一职责原则 (Single Responsibility)
- 开闭原则 (Open/Closed)
- 里氏替换原则 (Liskov Substitution)
- 接口隔离原则 (Interface Segregation)
- 依赖倒置原则 (Dependency Inversion)
